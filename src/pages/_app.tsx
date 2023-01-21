import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "reveal.js/dist/reveal.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
