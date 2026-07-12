import { useEffect, useMemo, useState } from "react";
import { buscarTodosProdutos } from "../../services/produtos";
import "./SearchBar.css";

const CATALOGO_URL =
  "https://importadorakontudosurf.pedidook.com.br";

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

function limparNomeCategoria(categoria = "") {
  return String(categoria)
    .replace(/^[A-Z0-9]+\s*-\s*/i, "")
    .trim();
}

function ProductIcon({ categoria = "", nome = "" }) {
  const texto = normalizarTexto(`${categoria} ${nome}`);

  let tipo = "roupa";

  if (
    texto.includes("calca") ||
    texto.includes("bermuda") ||
    texto.includes("short")
  ) {
    tipo = "calca";
  } else if (texto.includes("pijama")) {
    tipo = "pijama";
  } else if (
    texto.includes("jaqueta") ||
    texto.includes("casaco")
  ) {
    tipo = "jaqueta";
  } else if (texto.includes("blazer")) {
    tipo = "blazer";
  } else if (texto.includes("colete")) {
    tipo = "colete";
  } else if (texto.includes("conjunto")) {
    tipo = "conjunto";
  } else if (
    texto.includes("camisa") ||
    texto.includes("blusa") ||
    texto.includes("sueter") ||
    texto.includes("tricot")
  ) {
    tipo = "camisa";
  }

  if (tipo === "calca") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 3h8l1 7-2 11h-4l-1-9-1 9H5L7 10l1-7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M8 7h8M10 3v4M14 3v4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (tipo === "pijama") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 4 5 6 3 10l3 2 1-2v5h10v-5l1 2 3-2-2-4-3-2c-.8 1.2-2.2 2-4 2s-3.2-.8-4-2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M8 15 7 21h4l1-4 1 4h4l-1-6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (tipo === "jaqueta") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 4 5 6 3 11l3 2 1-2v10h10V11l1 2 3-2-2-5-3-2-4 3-4-3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M12 7v14M9 10h6M9 15h6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (tipo === "blazer") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 4 5 6 3 11l3 2 1-2v10h10V11l1 2 3-2-2-5-3-2-4 3-4-3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="m9 7 3 5 3-5M12 12v9M9 15h1M14 15h1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (tipo === "colete") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 4 5 7v14h14V7l-3-3-4 3-4-3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M12 7v14M8 10h2M14 10h2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (tipo === "conjunto") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 4 4 6 2.5 10l3 2L7 10v6h6v-6l1.5 2 3-2L16 6l-3-2c-.7 1.1-1.7 1.7-3 1.7S7.7 5.1 7 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M15 14h5l1 7h-3l-.5-4-.5 4h-3l1-7Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 4 5 6 2.5 10l3 2L7 10v10h10V10l1.5 2 3-2L19 6l-3-2c-.8 1.2-2.2 2-4 2s-3.2-.8-4-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CategoryIcon({ categoria }) {
  return (
    <div className="search-category-icon">
      <ProductIcon categoria={categoria} nome={categoria} />
    </div>
  );
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

        const produtosRecebidos =
          await buscarTodosProdutos();

        if (componenteAtivo) {
          setProdutos(produtosRecebidos);
        }
      } catch (error) {
        console.error(
          "Erro ao carregar produtos:",
          error
        );

        if (componenteAtivo) {
          setErro(
            "Não foi possível carregar os produtos."
          );
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

  const categoriasEncontradas = useMemo(() => {
    const termo = normalizarTexto(busca);

    if (termo.length < 2) {
      return [];
    }

    const categoriasMap = new Map();

    produtos.forEach((produto) => {
      if (!produto.categoria) {
        return;
      }

      const categoriaOriginal =
        produto.categoria.trim();

      const categoriaLimpa =
        limparNomeCategoria(categoriaOriginal);

      const nomeProduto =
        normalizarTexto(produto.nome);

      const categoriaNormalizada =
        normalizarTexto(
          `${categoriaOriginal} ${categoriaLimpa}`
        );

      const encontrouCategoria =
        categoriaNormalizada.includes(termo);

      const encontrouProduto =
        nomeProduto.includes(termo);

      if (
        encontrouCategoria ||
        encontrouProduto
      ) {
        if (!categoriasMap.has(categoriaOriginal)) {
          categoriasMap.set(categoriaOriginal, {
            original: categoriaOriginal,
            nome: categoriaLimpa,
            quantidade: 1,
          });
        } else {
          const categoriaAtual =
            categoriasMap.get(categoriaOriginal);

          categoriaAtual.quantidade += 1;
        }
      }
    });

    return Array.from(categoriasMap.values())
      .sort(
        (categoriaA, categoriaB) =>
          categoriaB.quantidade -
          categoriaA.quantidade
      )
      .slice(0, 5);
  }, [busca, produtos]);

  function abrirProduto(produto) {
    if (!produto?.id) {
      window.open(
        `${CATALOGO_URL}/`,
        "_blank",
        "noopener,noreferrer"
      );

      return;
    }

    const url =
      `${CATALOGO_URL}/produto/${produto.id}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function selecionarCategoria(categoria) {
    setBusca(categoria.nome);
  }

  const mostrarResultados =
    busca.trim().length >= 2;

  return (
    <section className="search-section">
      <div className="search-title">
        <h2>
          Encontre produtos para sua loja
        </h2>

        <p>
          Pesquise por nome, código, referência ou
          categoria
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
            onChange={(event) =>
              setBusca(event.target.value)
            }
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
              categoriasEncontradas.length > 0 && (
                <div className="search-category-section">
                  <div className="search-section-label">
                    <span>Categorias encontradas</span>

                    <small>
                      {categoriasEncontradas.length}
                    </small>
                  </div>

                  <div className="search-category-list">
                    {categoriasEncontradas.map(
                      (categoria) => (
                        <button
                          type="button"
                          className="search-category-card"
                          key={categoria.original}
                          onClick={() =>
                            selecionarCategoria(
                              categoria
                            )
                          }
                        >
                          <CategoryIcon
                            categoria={
                              categoria.original
                            }
                          />

                          <div className="search-category-info">
                            <strong>
                              {categoria.nome}
                            </strong>

                            <span>
                              {categoria.quantidade} produto
                              {categoria.quantidade !== 1
                                ? "s"
                                : ""}
                            </span>
                          </div>

                          <span className="search-category-arrow">
                            →
                          </span>
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

            {!carregando && !erro && (
              <div className="search-products-section">
                <div className="search-section-label">
                  <span>Produtos relevantes</span>

                  <small>
                    {resultados.length} produto
                    {resultados.length !== 1 ? "s" : ""}
                  </small>
                </div>

                {resultados.length > 0 ? (
                  resultados.map((produto) => (
                    <button
                      type="button"
                      key={
                        produto.id ||
                        produto.codigo
                      }
                      className="search-product"
                      onClick={() =>
                        abrirProduto(produto)
                      }
                    >
                      <div className="search-product-icon">
                        <ProductIcon
                          categoria={
                            produto.categoria
                          }
                          nome={produto.nome}
                        />
                      </div>

                      <div className="search-product-info">
                        <strong>
                          {produto.nome}
                        </strong>

                        <div className="search-product-meta">
                          <span>
                            Cód.{" "}
                            {produto.codigo ||
                              "Não informado"}
                          </span>

                          {produto.categoria && (
                            <span>
                              {produto.categoria}
                            </span>
                          )}

                          {produto.referencia && (
                            <span>
                              Ref.{" "}
                              {produto.referencia}
                            </span>
                          )}
                        </div>

                        <div className="search-product-bottom">
                          <span className="search-product-price">
                            {formatarPreco(
                              produto.venda
                            )}
                          </span>

                          <span className="search-product-action">
                            Ver produto

                            <span aria-hidden="true">
                              →
                            </span>
                          </span>
                        </div>
                      </div>
                    </button>
                  ))
                ) : (
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

                    <strong>
                      Nenhum produto encontrado
                    </strong>

                    <p>
                      Tente pesquisar usando outro
                      nome, código ou referência.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchBar;
