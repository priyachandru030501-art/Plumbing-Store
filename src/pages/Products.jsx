
import { useState } from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "PVC Water Pipe",
    category: "Pipes",
    price: 250,
    image: "https://m.media-amazon.com/images/I/21WDMR+-gLL._AC_UF1000,1000_QL80_.jpg",
    description: "Durable pipe for water supply.",
  },
  {
    id: 2,
    name: "Brass Water Tap",
    category: "Fittings",
    price: 450,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnaJb-TU4FOgk-nqYbNH6o5ehs_cfHjthnkZR1ihTSIQ&s=10",
    description: "Quality tap for everyday use.",
  },
  {
    id: 3,
    name: "Pipe Connector",
    category: "Fittings",
    price: 80,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOa6nwJejhJVxgXsox82a50wrrIIHbw15ARaaRtMmJA&s=10",
    description: "Reliable connector for pipe joints.",
  },
  {
    id: 4,
    name: "Pipe Wrench",
    category: "Tools",
    price: 550,
    image: "https://m.media-amazon.com/images/I/61SPhuBUjzL._AC_UF1000,1000_QL80_.jpg",
    description: "A handy tool for plumbing repairs.",
  },
  {
    id: 5,
    name: "Shower Head",
    category: "Bathroom",
    price: 650,
    image: "https://www.aquieen.com/cdn/shop/files/OHS-7692-IMG1.jpg?v=1749840987",
    description: "Modern shower head for bathrooms.",
  },
  {
    id: 6,
    name: "PVC Pipe Cutter",
    category: "Tools",
    price: 350,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEpIdU03uHXXGyGbPVASTbyEimq8n_20a4TlNJgWeSpKG4gzmI4LeOvIl&s=10",
    description: "Easy and accurate pipe cutting tool.",
  },
  {
    id: 7,
    name: "Water Tank Valve",
    category: "Fittings",
    price: 180,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JvJ8c_JSgie-N_Bk-HRjjYLGXlw5T7a5YqJ5y91dM5-86LY0ZpeDDjJ5&s=10",
    description: "Reliable valve for water tanks.",
  },
  {
    id: 8,
    name: "Bathroom Faucet",
    category: "Bathroom",
    price: 850,
    image: "https://m.media-amazon.com/images/I/61KXwtbpnIL._AC_UF1000,1000_QL80_.jpg",
    description: "Stylish faucet with a modern finish.",
  },
];

function Products({ addToCart }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Pipes",
    "Fittings",
    "Tools",
    "Bathroom",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="products-page">
      <section className="products-banner">
        <p>PIPEPRO COLLECTION</p>
        <h1>Our Plumbing Products</h1>
        <p>Find the right supplies for your next project.</p>
      </section>

      <section className="products-content">
        <div className="products-toolbar">
          <div className="products-categories">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "product-filter active"
                    : "product-filter"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <p className="products-count">
          Showing {filteredProducts.length} products
        </p>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <article className="products-card" key={product.id}>
              <div className="products-card-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />

                <span className="products-tag">
                  {product.category}
                </span>
              </div>

              <div className="products-card-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <div className="products-card-bottom">
                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>

                  <button onClick={() => addToCart(product)}>
                    + Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="products-empty">
            No products found. Try another search.
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;
