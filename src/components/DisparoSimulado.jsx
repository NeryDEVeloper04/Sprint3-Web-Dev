import { useLocalStorage } from "../hooks/useLocalStorage";
import modes from "../data/modes";


function gerarDisparo() {
  const modo = modes[Math.floor(Math.random() * modes.length)];
  const iso = Math.round(100 + Math.random() * 3100); // 100–3200
  const abertura = (1.4 + Math.random() * 2.6).toFixed(1); // f/1.4–f/4.0
  const velocidadeObturador = Math.round(30 + Math.random() * 970); // representa 1/30 a 1/1000
  const nitidez = Math.round(70 + Math.random() * 30); // 70–100%

  return {
    id: Date.now(),
    modo: modo.name,
    iso,
    abertura,
    velocidadeObturador,
    nitidez,
    timestamp: new Date().toLocaleTimeString("pt-BR"),
  };
}

function DisparoSimulado() {
  const [totalDisparos, setTotalDisparos] = useLocalStorage("lensflow_total_disparos", 0);
  const [historico, setHistorico] = useLocalStorage("lensflow_historico_disparos", []);

  function disparar() {
    const disparo = gerarDisparo();
    setTotalDisparos((atual) => atual + 1);
    setHistorico((atual) => [disparo, ...atual].slice(0, 5)); 
  }

  function limparHistorico() {
    setTotalDisparos(0);
    setHistorico([]);
  }

  return (
    <section className="disparo-section" id="disparo">
      <div className="section-tag">✦ Experimente</div>
      <h2 className="section-title">Simule um disparo</h2>
      <p className="section-sub">
        Cada clique sorteia um modo e calcula ISO, abertura e nitidez —
        como a IA da LensFlow faria na hora da captura. O total fica salvo
        no seu navegador.
      </p>

      <div className="disparo-painel">
        <div className="disparo-contador">
          <span className="spec-value">{totalDisparos}</span>
          <span className="spec-label">fotos simuladas</span>
        </div>

        <div className="disparo-acoes">
          <button className="btn-primary" onClick={disparar}>
            📸 Disparar
          </button>
          <button className="btn-ghost" onClick={limparHistorico} disabled={totalDisparos === 0}>
            Limpar histórico
          </button>
        </div>

        {historico.length > 0 && (
          <ul className="disparo-historico">
            {historico.map((d) => (
              <li key={d.id}>
                <strong>{d.modo}</strong> — ISO {d.iso} · f/{d.abertura} · 1/
                {d.velocidadeObturador}s · nitidez {d.nitidez}%
                <span className="disparo-hora"> ({d.timestamp})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default DisparoSimulado;
