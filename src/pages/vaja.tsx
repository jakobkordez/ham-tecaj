import Header from "@/components/header";
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
            <h1 className="title">TODO</h1>
          </section>
        </div>
      </main>
    </>
  );
}
