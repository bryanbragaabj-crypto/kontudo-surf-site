import { useState } from "react";
import categories from "../../data/categories";
import "./SearchBar.css";

function SearchBar() {
  const [busca, setBusca] = useState("");

  const resultados = categories.filter((categoria) =>
    categoria.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const abrirCategoria = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="search-section">
      <div className="search-title">
        <h2>Encontre produtos para sua loja</h2>
        <p>Pesquise por nome, referência ou categoria</p>
      </div>

      <div className="search-area">
        <div className="search-box">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.2-5.2m2.2-5.3a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Ex.: Calças, Blusas, Jaqueta..."
          />
        </div>

        {busca && (
          <div className="search-results">
            {resultados.length > 0 ? (
              resultados.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => abrirCategoria(categoria.link)}
                >
                  <img src={categoria.imagem} alt={categoria.nome} />
                  <span>{categoria.nome}</span>
                </button>
              ))
            ) : (
              <p>Nenhuma categoria encontrada.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchBar;
