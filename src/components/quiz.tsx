import { Question } from "@/interfaces/question";
import { getCategories, getQuestions } from "@/util/question-util";
import { useEffect } from "react";
import { create } from "zustand";
import styles from "@/styles/Quiz.module.scss";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Category } from "@/interfaces/category";

const qPerPage = 5;

interface QuizStore {
  categories: Category[];
  selectedCategory: string;

  questions: Question[];
  answers: number[][];
  displayed: number;
  loadMore: () => void;
}

const useStore = create<QuizStore>((set) => ({
  categories: [],
  selectedCategory: "all",

  questions: [],
  answers: [],
  displayed: 0,
  loadMore: () => set((state) => ({ displayed: state.displayed + qPerPage })),
}));

async function load(selectedCategory: string) {
  const categories = await getCategories();
  let questions = await getQuestions();
  if (selectedCategory !== "all") {
    const catId = parseInt(selectedCategory);
    const cat = categories.find((cat) => cat.id == catId);
    if (!cat) return;

    questions = questions.filter((question) =>
      cat.questions.some((qp) => qp[0] <= question.id && question.id <= qp[1])
    );
  }
  // Shuffle
  questions = questions.sort(() => Math.random() - 0.5);

  useStore.setState({
    categories,
    questions,
    answers: Array(questions.length).fill([]),
    displayed: qPerPage,
  });
}

export default function Quiz() {
  const [
    categories,
    selectedCategory,
    questions,
    answers,
    displayed,
    loadMore,
  ] = useStore((state) => [
    state.categories,
    state.selectedCategory,
    state.questions,
    state.answers,
    state.displayed,
    state.loadMore,
  ]);

  useEffect(() => {
    if (questions.length === 0) {
      load(selectedCategory);
    }
  }, []);

  return (
    <>
      <div className="field has-addons mb-5">
        <div className="control is-expanded">
          <div className="select is-fullwidth">
            <select
              name="category"
              value={selectedCategory}
              onChange={(e) =>
                useStore.setState({ selectedCategory: e.target.value })
              }
            >
              <option value="all">Vse kategorije</option>
              {categories.map((category, i) => (
                <option key={i} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="control">
          <button
            className="button is-primary"
            onClick={() => load(selectedCategory)}
          >
            Naloži
          </button>
        </div>
      </div>

      <div>
        {questions.slice(0, displayed).map((question, qi) => (
          <div key={qi} className="box">
            <p>{question.id}</p>

            <div className="title is-4">
              <h3>{question.question}</h3>
            </div>

            {question.image && (
              <figure className="image">
                <img
                  className={styles.quiz_image}
                  src={`quiz/${question.image}`}
                  alt={question.image}
                />
              </figure>
            )}

            {question.answers && question.correct != undefined && (
              <div className="buttons mt-5">
                {question.answers?.map((answer, i) => (
                  <Answer
                    key={i}
                    i={i}
                    answer={answer}
                    revealed={answers[qi].includes(i)}
                    isCorrect={question.correct === i}
                    isDone={answers[qi].includes(question.correct!)}
                    onClick={() => {
                      if (answers[qi].includes(i)) return;

                      const answersNew = Array.from(answers);
                      answersNew[qi] = Array.from(answers[qi]);
                      answersNew[qi].push(i);
                      useStore.setState({ answers: answersNew });
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="buttons mt-5 is-justify-content-end">
        <button className="button is-primary is-rounded" onClick={loadMore}>
          Naloži več
        </button>
        <button className="button is-primary is-rounded" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
          <span className="ml-2">Na vrh</span>
        </button>
      </div>
    </>
  );
}

interface AnswerProps {
  answer: string;
  i: number;
  revealed: boolean;
  isCorrect: boolean;
  isDone: boolean;
  onClick: () => void;
}

function Answer({
  answer,
  i,
  revealed,
  isCorrect,
  isDone,
  onClick,
}: AnswerProps) {
  return (
    <button
      key={i}
      className={`button is-fullwidth ${styles.quiz_answer} ${
        revealed
          ? isCorrect
            ? "is-success is-light is-static"
            : "is-danger is-light is-static"
          : isDone && "is-static"
      }`}
      onClick={onClick}
    >
      {String.fromCharCode(65 + i)}. {answer}
    </button>
  );
}

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
