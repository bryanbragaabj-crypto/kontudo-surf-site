import "./Benefits.css";

const benefits = [
  {
    icon: "handshake",
    title: "Importadora de Confiança",
    text: "Parcerias sólidas para impulsionar o crescimento da sua loja.",
  },
  {
    icon: "diamond",
    title: "Qualidade Garantida",
    text: "Produtos selecionados para oferecer mais segurança em cada compra.",
  },
  {
    icon: "shirt",
    title: "Moda para Toda a Família",
    text: "Masculino, feminino e infantil em um só lugar.",
  },
  {
    icon: "cart",
    title: "Peça Online",
    text: "Receba os produtos diretamente na sua loja.",
  },
];

function Icon({ type }) {
  const icons = {
    handshake: (
      <path d="M7 12l3 3 7-7M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    diamond: (
      <path d="M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M9 3l3 18 3-18" />
    ),
    shirt: (
      <path d="M8 4l4 2 4-2 4 3-2 4-2-1v10H8V10l-2 1-2-4 4-3z" />
    ),
    cart: (
      <path d="M3 4h2l2 12h10l3-8H7M9 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
    ),
  };

  return (
    <svg
      className="benefit-svg"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type]}
    </svg>
  );
}

function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <h2>Por que escolher a Kontudo Surf?</h2>
        <p>Mais do que uma importadora, uma parceira para o crescimento da sua loja.</p>
      </div>

      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">
              <Icon type={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
