import { useState } from "react";
import InternalBanner from "../components/InternalBanner/InternalBanner";
import "./SobreNos.css";

const conteudos = {
  sobre: {
    icon: "M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1M12 12a4 4 0 100-8 4 4 0 000 8z",
    titulo: "Sobre Nós",
    texto: [
      "A Importadora Kontudo Surf trabalha para conectar lojistas a produtos selecionados, com variedade, organização e confiança.",
      "Nosso foco é oferecer uma experiência prática, com atendimento próximo e uma operação pensada para facilitar o dia a dia de quem compra para revender.",
      "Mais do que uma importadora, buscamos ser uma parceira para o crescimento da sua loja.",
    ],
  },
  funcionamento: {
    icon: "M3 3h2l2 12h10l3-8H6M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z",
    titulo: "Como Funciona",
    texto: [
      "O lojista acessa o catálogo, escolhe os produtos desejados e realiza o pedido de forma simples.",
      "Após o pedido, nossa equipe acompanha o atendimento e auxilia no que for necessário.",
      "O objetivo é tornar o processo de compra mais prático, seguro e eficiente.",
    ],
  },
  missao: {
    icon: "M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10 5 5 0 000 10zm0-4a1 1 0 100-2 1 1 0 000 2z",
    titulo: "Missão",
    texto: [
      "Oferecer produtos de qualidade, variedade e praticidade para lojistas.",
      "Nosso compromisso é facilitar o abastecimento das lojas com atendimento próximo, confiança e organização.",
    ],
  },
  visao: {
    icon: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z",
    titulo: "Visão",
    texto: [
      "Ser reconhecida como uma importadora de confiança para lojistas que buscam moda, variedade e boas oportunidades.",
      "Queremos crescer junto com nossos parceiros, mantendo qualidade, compromisso e atendimento profissional.",
    ],
  },
  valores: {
    icon: "M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M9 3l3 18 3-18",
    titulo: "Valores",
    texto: [
      "Confiança, transparência, qualidade, respeito e compromisso.",
      "Valorizamos relações comerciais sólidas e uma experiência positiva para cada cliente.",
    ],
  },
};

function MenuIcon({ path }) {
  return (
    <svg className="sobre-menu-icon" viewBox="0 0 24 24" fill="none">
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SobreNos() {
  const [ativo, setAtivo] = useState("sobre");
  const conteudo = conteudos[ativo];

  return (
    <>
      <InternalBanner />

      <section className="sobre-page-content">
        <div className="sobre-menu">
          {Object.entries(conteudos).map(([key, item]) => (
            <button
              key={key}
              className={ativo === key ? "active" : ""}
              onClick={() => setAtivo(key)}
            >
              <MenuIcon path={item.icon} />
              {item.titulo}
            </button>
          ))}
        </div>

        <div className="sobre-text-box">
          <h1>{conteudo.titulo}</h1>

          {conteudo.texto.map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}

          <a href="/" className="sobre-voltar">Voltar</a>
        </div>
      </section>
    </>
  );
}

export default SobreNos;
