import Presentation from "@/components/presentation";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";

export default function Present() {
  return (
    <>
      <Head>
        <title>Radioamaterski Tečaj</title>
        <meta name="description" content="Radioamaterski tečaj" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-2">
                  <Image
                    src="images/RKV_logo.svg"
                    alt="RKV Logo"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="column is-8">
                  <h1 className="title is-size-2">Radioamaterski Tečaj</h1>
                  <h6 className="subtitle">Radioklub Vegova</h6>
                </div>
                <div className="column is-2 has-text-right">
                  <a href="https://github.com/jakobkordez/ham-tecaj">
                    <FontAwesomeIcon
                      className="image is-32x32"
                      icon={faGithub}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="section">
            <div className="image has-background-dark is-16by9">
              <Presentation />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
