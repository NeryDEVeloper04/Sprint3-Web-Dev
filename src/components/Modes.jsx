import ModeRow from "./ModeRow";

function Modes({ modos }) {
  return (
    <section id="modos">
      <div className="section-tag">✦ Sistema de Câmera</div>
      <h2 className="section-title">
        Seis modos.
        <br />
        Uma câmera.
      </h2>
      <p className="section-sub">
        Cada modo foi projetado para uma situação real. A IA detecta o
        contexto e ajusta tudo automaticamente.
      </p>

      <div className="modes-grid">
        {modos.map((modo, index) => (
          <ModeRow key={modo.id} modo={modo} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Modes;
