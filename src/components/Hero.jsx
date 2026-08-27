import { useEffect, useState } from "react";
import ImagemComPlaceholder from "./ImagemComPlaceholder";


function Hero({ modos }) {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisivel(false);
      setTimeout(() => {
        setIndiceAtual((atual) => (atual + 1) % modos.length);
        setVisivel(true);
      }, 400);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [modos.length]);

  const slideAtual = modos[indiceAtual];

  return (
    <section className="hero" id="camera">
      <div className="hero-tag">LensFlow — Câmera Adaptativa para a Rotina dos Jovens</div>
      <h1>
        A câmera que <em>pensa</em>
        <br />
        por você
      </h1>
      <p>
        Inteligência artificial integrada em cada modo. Captura o momento certo
        antes mesmo de você apertar o botão.
      </p>
      <div className="hero-actions">
        <a
          href="#modos"
          className="btn-ghost"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#modos")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Ver modos da câmera
        </a>
      </div>

      <div className="phone-hero">
        <div className="phone-frame">
          <div className="phone-notch"></div>
          <div className="phone-btn-right"></div>
          <div className="phone-btn-left-1"></div>
          <div className="phone-btn-left-2"></div>
          <ImagemComPlaceholder
            src={`/img/${slideAtual.image}`}
            alt={`Tela do modo ${slideAtual.name} da câmera LensFlow`}
            className="phone-screen"
            style={{ opacity: visivel ? 1 : 0 }}
            placeholderLabel={`img/${slideAtual.image}`}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
