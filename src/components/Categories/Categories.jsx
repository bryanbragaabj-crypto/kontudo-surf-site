import categories from "../../data/categories";
import "./Categories.css";

function CategoryRow({ items }) {
  const scrollRow = (direction) => {
    const row = document.querySelector(`.row-${items[0].id}`);

    if (row) {
      row.scrollBy({
        left: direction === "right" ? 280 : -280,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="category-slider">
      <button className="category-arrow left" onClick={() => scrollRow("left")}>
        ‹
      </button>

      <div className={`category-track row-${items[0].id}`}>
        {items.map((categoria) => (
          <a href={categoria.link} className="category-card" key={categoria.id}>
            <div className="category-image-box">
              <img src={categoria.imagem} alt={categoria.nome} />
            </div>
            <h3>{categoria.nome}</h3>
          </a>
        ))}
      </div>

      <button className="category-arrow right" onClick={() => scrollRow("right")}>
        ›
      </button>
    </div>
  );
}

function Categories() {
  const linha1 = categories.slice(0, 5);
  const linha2 = categories.slice(5, 10);

  return (
    <section id="categorias" className="categories-section">
      <h2 className="categories-title">
        <span></span>
        Categorias
        <span></span>
      </h2>

      <CategoryRow items={linha1} />
      <CategoryRow items={linha2} />
    </section>
  );
}

export default Categories;
