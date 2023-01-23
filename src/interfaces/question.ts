export interface Question {
  id: number;
  question: string;
  image?: string;
  answers?: string[];
  correct?: number;
}
