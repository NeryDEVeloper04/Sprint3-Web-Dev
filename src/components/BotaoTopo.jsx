import { useEffect, useState } from "react";

function BotaoTopo() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    function aoRolar() {
      setVisivel(window.scrollY > 300);
    }
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <button
      id="btn-topo"
      className={visivel ? "visivel" : ""}
      aria-label="Voltar ao topo da página"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑ Topo
    </button>
  );
}

export default BotaoTopo;
