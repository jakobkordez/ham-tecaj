import Header from "@/components/header";
import Quiz from "@/components/quiz";
import Head from "next/head";

export default function Vaja() {
  return (
    <>
      <Head>
        <title>Radioamaterski Tečaj</title>
        <meta name="description" content="Radioamaterski tečaj" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />

        <div className="container">
          <section className="section">
            <Quiz />
          </section>
        </div>
      </main>
    </>
  );
}
