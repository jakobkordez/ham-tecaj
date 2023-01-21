import Head from "next/head";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Header from "@/components/header";

export default function Home() {
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
            <Button
              href="http://tecaj.jkob.cc"
              className="is-fullwidth is-primary mb-2"
              text="Povezava do prosojnic"
            />
            <Button
              href="https://github.com/jakobkordez/ham-tecaj/releases/latest"
              className="is-fullwidth is-light"
              text="Prenos prosojnic"
              icon={faFilePdf}
            />
          </section>

          <section className="section">
            <h2 className="title">Koristne povezave</h2>
            <div className="flex-wrap">
              <Button
                href="https://s5-vaja.jkob.cc"
                className="is-primary"
                text="Sistem za vaje"
              />
              <Button
                href="http://www.homemade.net/ra/prirocnik_novi.pdf"
                className="button is-light"
                text="Priročnik za radioamaterje"
                icon={faFilePdf}
              />
              <Button
                href="http://www.hamradio.si/images/dokumenti/publikacije/etika_junij%202021.pdf"
                className="button is-light"
                text="Etika in operaterski postopki"
                icon={faFilePdf}
              />
              <Button
                href="https://www.akos-rs.si/registri/seznam-registrov/radioamaterji"
                className="button is-light"
                text="Seznam zasedenih klicnih znakov"
              />
              <Button
                href="https://zrs.si/files/kriteriji.pdf"
                className="button is-light"
                text="Kriteriji za izpit"
                icon={faFilePdf}
              />
            </div>
          </section>

          <section className="section">
            <h2 className="title">Kazalo poglavij</h2>
            <div className="columns is-multiline">
              <Card
                title="1. Radioamaterji in radijske komunikacije"
                image="https://assets.rbl.ms/25589120/origin.jpg"
                href="https://jakobkordez.github.io/ham-tecaj#1-radioamaterji-in-radijske-komunikacije"
              >
                <ul>
                  <li>Zgodovina, razvoj in pomen radioamaterstva</li>
                  <li>Mednarodna radioamaterska organizacija - IARU</li>
                  <li>Zveza radioamaterjev Slovenije - ZRS</li>
                </ul>
              </Card>

              <Card
                title="2. Radijske komunikacije"
                image="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/05/19083942/itu-logo-social-sharing.jpg"
                href="https://jakobkordez.github.io/ham-tecaj#2-radijske-komunikacije"
              >
                <ul>
                  <li>Osnovni pojmi o radijskih komunikacijah</li>
                  <li>Radioamaterska razdelitev sveta</li>
                  <li>Mednarodna razdelitev radijskih frekvenc</li>
                </ul>
              </Card>

              <Card
                title="3. Predpisi za amaterske radijske komunikacije"
                image="reveal/images/cept.jpg"
                href="https://jakobkordez.github.io/ham-tecaj#3-predpisi-za-amaterske-radijske-komunikacije"
              >
                <ul>
                  <li>Mednarodni predpisi</li>
                  <li>Slovenski predpisi</li>
                  <li>CEPT licenca</li>
                  <li>Priporočili CEPT T/R 61-01 in T/R 61-02</li>
                </ul>
              </Card>

              <Card
                title="4. Pravila in praksa v amaterskih radijskih komunikacijah"
                image="reveal/images/logs.jpg"
                href="https://jakobkordez.github.io/ham-tecaj#4-pravila-in-praksa-v-amaterskih-radijskih-komunikacijah"
              >
                <ul>
                  <li>Vspostavljanje amaterskih radijskih zvez</li>
                  <li>Amaterske zveze v telegrafiji in telefoniji</li>
                  <li>Amaterske digitalne komunikacije</li>
                  <li>Dnevnik dela radijske postaje</li>
                  <li>QSL kartica</li>
                  <li>&hellip;</li>
                </ul>
              </Card>

              <Card
                title="5. Elektrotehnika"
                image="reveal/images/web_19.jpg"
                href="https://jakobkordez.github.io/ham-tecaj#5-elektrotehnika"
              >
                <ul>
                  <li>Električni tok, napetost in upornost</li>
                  <li>Ohmov zakon in moč</li>
                  <li>Tuljave in kondenzatorji</li>
                  <li>Filtri</li>
                  <li>Polprevodniki</li>
                  <li>Elektronske cevi</li>
                  <li>Mikrofoni in zvočnik</li>
                  <li>Ojačevalniki</li>
                  <li>Napajalniki</li>
                </ul>
              </Card>

              <Card
                title="6. Radiotehnika"
                image="https://jkantennas.com/images/img_2136%20(2).jpg?crc=6337344"
                href="https://jakobkordez.github.io/ham-tecaj#6-radiotehnika"
              >
                <ul>
                  <li>Radijski valovi in prenos</li>
                  <li>Radijski oddajniki</li>
                  <li>Radijski sprejemniki</li>
                  <li>Valovanje</li>
                  <li>Razširjanje radijskih valov</li>
                  <li>Antene</li>
                  <li>Napajanje anten</li>
                  <li>Motnje</li>
                  <li>Meritve in merilni inštrumenti</li>
                  <li>Nevarnosti pri delu z električnim tokom</li>
                </ul>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

interface ButtonProps {
  href: string;
  icon?: IconProp;
  text: string;
  className: string;
}

interface CardProps {
  title: string;
  href: string;
  image: string;
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <a href={props.href} className={props.className + " button is-medium"}>
      {props.icon && (
        <span className="icon">
          <FontAwesomeIcon icon={props.icon} />
        </span>
      )}
      <span>{props.text}</span>
    </a>
  );
}

function Card(props: CardProps) {
  return (
    <div className="column is-half-tablet is-one-third-desktop">
      <div className="card">
        <div className="card-image">
          <figure className="image is-2by1">
            <img src={props.image} alt={props.title} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-size-4">{props.title}</p>
          <div className="content">{props.children}</div>
        </div>
        <footer className="card-footer has-background-light">
          <a href={props.href} className="card-footer-item button is-light">
            Na poglavje
          </a>
        </footer>
      </div>
    </div>
  );
}
