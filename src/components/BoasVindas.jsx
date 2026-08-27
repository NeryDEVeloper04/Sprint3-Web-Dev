import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function BoasVindas() {
  const [nomeSalvo, setNomeSalvo] = useLocalStorage("lensflow_visitante", null);
  const [aberto, setAberto] = useState(nomeSalvo === null);
  const [campoNome, setCampoNome] = useState("");

  function handleConfirmar() {
    const nomeVal = campoNome.trim();
    if (nomeVal === "") return;
    setNomeSalvo(nomeVal);
    setAberto(false);
  }

  if (!aberto) return null;

  return (
    <div className="boas-vindas-overlay">
      <div className="boas-vindas-modal">
        <h3>Bem-vindo à LensFlow!</h3>
        <p>Qual é o seu nome?</p>
        <input
          type="text"
          autoFocus
          value={campoNome}
          onChange={(e) => setCampoNome(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleConfirmar()}
          placeholder="Seu nome"
        />
        <div className="boas-vindas-acoes">
          <button className="btn-ghost" onClick={() => setAberto(false)}>
            Agora não
          </button>
          <button className="btn-primary" onClick={handleConfirmar}>
            Explorar os modos
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoasVindas;
