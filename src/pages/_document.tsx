import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sl">
      <Head>
        <link rel="icon" href="/RKV_logo_32x32.png" sizes="32x32" />
      </Head>
      <body>
        <Main />
        <footer className="has-background-light p-2 has-text-centered">
          <p>Jakob Kordež, S52KJ</p>
        </footer>

        <NextScript />
      </body>
    </Html>
  );
}
