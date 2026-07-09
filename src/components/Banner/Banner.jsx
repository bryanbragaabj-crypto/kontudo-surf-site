import "./Banner.css";

function Banner() {
  return (
    <section id="inicio" className="banner">
      <img src="/banner.jpg" alt="Banner Kontudo Surf" className="banner-img" />

      <a
        href="https://importadorakontudosurf.pedidook.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="banner-button"
      >
        VER PRODUTOS
      </a>

      <div className="banner-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Banner;
