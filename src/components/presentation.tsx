import { useEffect } from "react";

export default function Presentation() {
  //   let deck = new Reveal({
  //     plugins: [Markdown],
  //   });
  //   deck.initialize(
  //     {
  //         embedded: true,

  //     }
  //   );
  //   let r = Reveal;
  useEffect(() => {
    if (typeof window !== "undefined") {
      let Reveal = require("reveal.js").default;
      let Markdown = require("reveal.js/plugin/markdown/markdown");

      //   Reveal.initialize({
      //     embedded: true,
      //     // plugins: [Markdown],
      //   });

      let deck = new Reveal({
        //   plugins: [Markdown],
      });
      deck.initialize({
        embedded: true,
      });
    }
  }, []);

  return (
    <div>
      <div className="reveal">
        <div className="slides">
          <section>
            <h1>Radioamaterski tečaj</h1>
            <h3>Radioklub Vegova</h3>
          </section>
        </div>
      </div>
    </div>
  );
}
