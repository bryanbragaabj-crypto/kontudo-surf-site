import { useEffect, useMemo, useState } from "react";
import { buscarTodosProdutos } from "../../services/produtos";
import "./SearchBar.css";

const CATALOGO_URL =
  "https://importadorakontudosurf.pedidook.com.br/";

function normalizarTexto(texto = "") {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function formatarPreco(valor) {
  const preco = Number(valor);

  if (!Number.isFinite(preco) || preco <= 0) {
    return "Preço sob consulta";
  }

  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function SearchBar() {
  const [busca, setBusca] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    let componenteAtivo = true;

    async function carregarProdutos() {
      try {
        setCarregando(true);
        setErro("");

        const produtosRecebidos = await buscarTodosProdutos();

        if (componenteAtivo) {
          setProdutos(produtosRecebidos);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);

        if (componenteAtivo) {
          setErro("Não foi possível carregar os produtos.");
        }
      } finally {
        if (componenteAtivo) {
          setCarregando(false);
        }
      }
    }

    carregarProdutos();

    return () => {
      componenteAtivo = false;
    };
  }, []);

  const resultados = useMemo(() => {
    const termo = normalizarTexto(busca);

    if (termo.length < 2) {
      return [];
    }

    return produtos
      .filter((produto) => {
        const campos = [
          produto.nome,
          produto.codigo,
          produto.referencia,
          produto["referência"],
          produto.categoria,
          produto.marca,
          produto.observacao,
          produto["observação"],
        ];

        return campos.some((campo) =>
          normalizarTexto(campo).includes(termo)
        );
      })
      .slice(0, 50);
  }, [busca, produtos]);

  function abrirCatalogo() {
    window.open(
      CATALOGO_URL,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const mostrarResultados = busca.trim().length >= 2;

  return (
    <section className="search-section">
      <div className="search-title">
        <h2>Encontre produtos para sua loja</h2>

        <p>
          Pesquise por nome, código, referência ou categoria
        </p>
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
            aria-hidden="true"
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
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Digite o nome, código ou referência..."
            aria-label="Pesquisar produtos"
          />

          {busca && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setBusca("")}
              aria-label="Limpar pesquisa"
            >
              ×
            </button>
          )}
        </div>

        {mostrarResultados && (
          <div className="search-results">
            <div className="search-results-header">
              <span>Resultados da pesquisa</span>

              {!carregando && !erro && (
                <small>
                  {resultados.length} produto
                  {resultados.length !== 1 ? "s" : ""}
                </small>
              )}
            </div>

            {carregando && (
              <div className="search-loading">
                <span className="search-spinner"></span>
                <p>Carregando produtos...</p>
              </div>
            )}

            {!carregando && erro && (
              <p className="search-message search-error">
                {erro}
              </p>
            )}

            {!carregando &&
              !erro &&
              resultados.map((produto) => (
                <button
                  type="button"
                  key={produto.id || produto.codigo}
                  className="search-product"
                  onClick={abrirCatalogo}
                >
                  <div className="search-product-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 7l8-4 8 4-8 4-8-4zM4 7v10l8 4 8-4V7M12 11v10"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="search-product-info">
                    <strong>{produto.nome}</strong>

                    <div className="search-product-meta">
                      <span>
                        Cód. {produto.codigo || "Não informado"}
                      </span>

                      {produto.categoria && (
                        <span>{produto.categoria}</span>
                      )}

                      {produto.referencia && (
                        <span>Ref. {produto.referencia}</span>
                      )}
                    </div>

                    <div className="search-product-bottom">
                      <span className="search-product-price">
                        {formatarPreco(produto.venda)}
                      </span>

                      <span className="search-product-action">
                        Ver no catálogo
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </button>
              ))}

            {!carregando &&
              !erro &&
              resultados.length === 0 && (
                <div className="search-empty">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M21 21l-5.2-5.2m2.2-5.3a7 7 0 11-14 0 7 7 0 0114 0z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <strong>Nenhum produto encontrado</strong>

                  <p>
                    Tente pesquisar usando outro nome, código ou
                    referência.
                  </p>
                </div>
              )}
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchBar;
