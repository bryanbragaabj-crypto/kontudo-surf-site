import "./Header.css";

function Icon({ type }) {
  const icons = {
    home: "M3 10.5L12 3l9 7.5V21h-6v-6H9v6H3V10.5z",
    produtos: "M4 7l8-4 8 4-8 4-8-4z M4 7v10l8 4 8-4V7 M12 11v10",
    categorias: "M4 4h7v7H4V4z M13 4h7v7h-7V4z M4 13h7v7H4v-7z M13 13h7v7h-7v-7z",
    sobre: "M12 12a4 4 0 100-8 4 4 0 000 8z M4 21a8 8 0 0116 0",
  };

  return (
    <svg className="mobile-nav-icon" viewBox="0 0 24 24" fill="none">
      <path
        d={icons[type]}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="/">
            <img src="/logo.png" alt="Importadora Kontudo Surf" className="header-logo" />
          </a>

          <nav className="header-menu">
            <a href="/">Início</a>
            <a href="https://importadorakontudosurf.pedidook.com.br/" target="_blank" rel="noopener noreferrer">Produtos</a>
            <a href="/#categorias">Categorias</a>
            <a href="/sobre-nos">Sobre Nós</a>
            <a href="https://api.whatsapp.com/send/?phone=5548999771177&text=Ol%C3%A1%2C+tudo+bem%3F%3F++Vim+atrav%C3%A9s+do+site+Kontudo+Surf.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">Contato</a>
          </nav>
        </div>
      </header>

      <nav className="mobile-bottom-nav">
        <a href="/">
          <Icon type="home" />
          <span>Início</span>
        </a>

        <a href="https://importadorakontudosurf.pedidook.com.br/" target="_blank" rel="noopener noreferrer">
          <Icon type="produtos" />
          <span>Produtos</span>
        </a>

        <a href="/#categorias">
          <Icon type="categorias" />
          <span>Categorias</span>
        </a>

        <a href="/sobre-nos">
          <Icon type="sobre" />
          <span>Sobre</span>
        </a>
      </nav>
    </>
  );
}

export default Header;
