import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/logo.png" alt="Kontudo Surf" className="footer-logo" />

          <p>
            Importadora de moda masculina, feminina e infantil, conectando lojistas
            a produtos selecionados com qualidade, variedade e confiança.
          </p>
        </div>

        <div className="footer-column">
          <h3>Links Rápidos</h3>
          <a href="/">Início</a>
          <a href="https://importadorakontudosurf.pedidook.com.br/" target="_blank" rel="noopener noreferrer">Produtos</a>
          <a href="/#categorias">Categorias</a>
          <a href="/sobre-nos">Sobre Nós</a>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
        </div>

        <div className="footer-column">
          <h3>Contato</h3>
          <p>WhatsApp: (48) 99977-1177</p>
          <p>Atendimento exclusivo para lojistas</p>

          <a
            className="footer-whatsapp"
            href="https://api.whatsapp.com/send/?phone=5548999771177&text=Ol%C3%A1%2C+tudo+bem%3F%3F++Vim+atrav%C3%A9s+do+site+Kontudo+Surf.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Importadora Kontudo Surf. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
