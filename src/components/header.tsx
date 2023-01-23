import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const currPath = useRouter().pathname;

  return (
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
              <h6 className="subtitle">&ldquo;Radioklub&rdquo; Vegova</h6>
            </div>
            <div className="column is-2 has-text-right">
              <a href="https://github.com/jakobkordez/ham-tecaj">
                <FontAwesomeIcon className="image is-32x32" icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed">
          <div className="container">
            <ul>
              <li className={`${currPath == "/" ? "is-active" : ""}`}>
                <Link href="/">Domov</Link>
              </li>
              <li className={`${currPath == "/present" ? "is-active" : ""}`}>
                <Link href="/present">Predstavitev</Link>
              </li>
              <li className={`${currPath == "/vaja" ? "is-active" : ""}`}>
                <Link href="/vaja">Vaja</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}
