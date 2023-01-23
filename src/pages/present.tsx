import Header from "@/components/header";
import Head from "next/head";

export default function Present() {
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
            <iframe className="presentation" src="/reveal/index.html" />
          </section>
        </div>
      </main>
    </>
  );
}