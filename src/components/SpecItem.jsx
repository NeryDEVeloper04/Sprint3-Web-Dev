import { useEntrarNaTela } from "../hooks/useEntrarNaTela";

function SpecItem({ spec }) {
  const [ref, visivel] = useEntrarNaTela();

  return (
    <div ref={ref} className={`spec-item ${visivel ? "anim-visivel" : "anim-oculto"}`}>
      <span className="spec-value">{spec.value}</span>
      <span className="spec-label">{spec.label}</span>
    </div>
  );
}

export default SpecItem;
