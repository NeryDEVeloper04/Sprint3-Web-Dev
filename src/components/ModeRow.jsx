import ImagemComPlaceholder from "./ImagemComPlaceholder";
import { useEntrarNaTela } from "../hooks/useEntrarNaTela";

function ModeRow({ modo, index }) {
  const linhaInvertida = index % 2 === 1;
  const [ref, visivel] = useEntrarNaTela();

  return (
    <div
      ref={ref}
      className={`mode-row${linhaInvertida ? " reverse" : ""} ${
        visivel ? "anim-visivel" : "anim-oculto"
      }`}
    >
      <div className="mode-phone">
        <div className="mode-phone-frame">
          <ImagemComPlaceholder
            src={`/img/${modo.image}`}
            alt={`Modo ${modo.name}`}
            placeholderLabel={`img/${modo.image}`}
          />
        </div>
        <div className={`mode-badge badge--${modo.id}`}>{modo.badge}</div>
      </div>
      <div className="mode-info">
        <p className="mode-number">{modo.number} — Modo</p>
        <h3 className={`mode-name name--${modo.id}`}>{modo.name}</h3>
        <p className="mode-desc">{modo.description}</p>
        <div className="mode-chips">
          {modo.chips.map((chip) => (
            <span className="chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModeRow;
