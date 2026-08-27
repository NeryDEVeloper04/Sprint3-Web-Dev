// Dados dos 6 modos de câmera — centralizados aqui para alimentar o
// componente <Modes> via .map(), em vez de repetir 6 blocos de JSX.
const modes = [
  {
    id: "auto",
    number: "01",
    name: "Automático",
    badge: "✦ Auto",
    image: "auto.png",
    description:
      "A IA analisa a cena em tempo real e aplica as configurações ideais. Detecta paisagens, rostos e iluminação e notifica quando muda de modo.",
    chips: ["Detecção de cena", "Ajuste automático", "HDR inteligente"],
  },
  {
    id: "estudo",
    number: "02",
    name: "Estudo",
    badge: "📄 Estudo",
    image: "estudo.png",
    description:
      "Digitaliza documentos, livros e quadros com nitidez máxima. Inicia sessões de estudo com uma captura e organiza automaticamente seus materiais.",
    chips: ["Scanner de documentos", "Sessão de estudo", "Correção de perspectiva"],
  },
  {
    id: "pet",
    number: "03",
    name: "Pet",
    badge: "🐾 Pet",
    image: "pet.png",
    description:
      "Emite som e luz para chamar a atenção do seu animal e dispara automaticamente no melhor momento. Foco contínuo que acompanha cada movimento.",
    chips: ["Disparo automático", "Foco contínuo", "Estímulo sonoro"],
  },
  {
    id: "retrato",
    number: "04",
    name: "Retrato",
    badge: "👤 Retrato",
    image: "retrato.png",
    description:
      "Desfoque de fundo com processamento neural. Separa o sujeito do fundo com precisão cirúrgica, criando fotos com profundidade de câmera profissional.",
    chips: ["Bokeh neural", "Detecção de rosto", "Iluminação de estúdio"],
  },
  {
    id: "paisagem",
    number: "05",
    name: "Paisagem",
    badge: "🏔 Paisagem",
    image: "paisagem.png",
    description:
      "Saturação e nitidez otimizadas para capturar a amplitude do horizonte. Cores vibrantes e detalhes preservados do primeiro plano ao infinito.",
    chips: ["Cores vibrantes", "Foco ao infinito", "Wide ultra nativo"],
  },
  {
    id: "manual",
    number: "06",
    name: "Manual",
    badge: "⊞ Manual",
    image: "manual.png",
    description:
      "Controle total sobre ISO, exposição, balanço de branco, saturação, contraste e nitidez. Para fotógrafos que sabem exatamente o que querem.",
    chips: ["ISO 100–3200", "Exposição ±2", "Balanço de branco"],
  },
];

export default modes;
