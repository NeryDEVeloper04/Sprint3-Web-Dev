function scrollParaSecao(e, seletor) {
  if (seletor === "#") return;
  e.preventDefault();
  const alvo = document.querySelector(seletor);
  if (alvo) alvo.scrollIntoView({ behavior: "smooth" });
}

function Header() {
  return (
    <nav>
      <a href="#" className="nav-logo" onClick={(e) => scrollParaSecao(e, "#")}>
        LensFlow<span>.</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#camera" onClick={(e) => scrollParaSecao(e, "#camera")}>
            Câmera
          </a>
        </li>
        <li>
          <a href="#modos" onClick={(e) => scrollParaSecao(e, "#modos")}>
            Modos
          </a>
        </li>
        <li>
          <a href="#specs" onClick={(e) => scrollParaSecao(e, "#specs")}>
            Especificações
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
