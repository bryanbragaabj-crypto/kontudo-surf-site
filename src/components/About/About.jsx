import "./About.css";

function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <span>Sobre Nós</span>

          <h2>Uma importadora focada em qualidade e confiança</h2>

          <p>
            A Importadora Kontudo Surf trabalha com um mix selecionado de produtos
            para lojistas que buscam variedade, organização e segurança na hora de comprar.
          </p>

          <p>
            Nosso compromisso é oferecer uma experiência prática, com atendimento
            próximo, produtos bem selecionados e uma parceria construída para
            fortalecer o seu negócio.
          </p>

          <a href="/sobre-nos" className="about-button">
            Conheça melhor
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
