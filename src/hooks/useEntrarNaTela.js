import { useEffect, useRef, useState } from "react";

// Substitui o IntersectionObserver que, no protótipo em JS puro,
// era aplicado manualmente a cada .mode-row / .spec-item.
// Aqui cada componente que quiser animação de entrada usa este hook
// e recebe uma ref para colocar no elemento.
export function useEntrarNaTela(threshold = 0.15) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.unobserve(elemento); // anima só uma vez
        }
      },
      { threshold }
    );

    observer.observe(elemento);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visivel];
}
