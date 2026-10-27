
import { Link } from "react-router-dom";
import "./Home.css";

const products = [
  { id: 1, name: "PVC Water Pipe", category: "Pipes", price: 250, icon: "🔵", description: "Durable pipe for water supply." },
  { id: 2, name: "Brass Water Tap", category: "Fittings", price: 450, icon: "🚰", description: "Quality tap for everyday use." },
  { id: 3, name: "Pipe Connector", category: "Fittings", price: 80, icon: "🔩", description: "Reliable connector for pipe joints." },
  { id: 4, name: "Pipe Wrench", category: "Tools", price: 550, icon: "🔧", description: "A handy tool for plumbing repairs." },
];

function Home({ addToCart }) {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-label">WELCOME TO PIPEPRO</p>
          <h1>Quality Plumbing Supplies for <span>Every Home.</span></h1>
          <p>
            Discover quality pipes, fittings, plumbing tools, and
            bathroom essentials at affordable prices.
          </p>
          <Link to="/products" className="home-button">Shop Products →</Link>
        </div>

        <div className="home-hero-art">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-QNWFmnByVAK6PC779P_ZgYK_d_ZvCSD3dI-j4nEHw&s=10" alt="Plumbing Supplies" />
          <div className="home-floating-card">Quality Products, Trusted Service</div>
        </div>
      </section>

      <section className="home-benefits">
        <div><span>🚚</span><h3>Fast Delivery</h3><p>Convenient delivery options</p></div>
        <div><span>⭐</span><h3>Quality Supplies</h3><p>Products for everyday needs</p></div>
        <div><span>💰</span><h3>Fair Prices</h3><p>Value for your money</p></div>
      </section>

      <section className="home-featured">
        <div className="home-section-heading">
          <p className="home-label">OUR COLLECTION</p>
          <h2>Popular Products</h2>
          <p>Plumbing essentials for your next project.</p>
        </div>

        <div className="home-product-grid">
          {products.map((product) => (
            <article className="home-product-card" key={product.id}>
              <div className="home-product-art">{product.icon}</div>
              <div className="home-product-info">
                <small>{product.category}</small>
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => addToCart(product)}>+ Add to Cart</button>
              </div>
            </article>
          ))}
        </div>

        <div className="home-view-all">
          <Link to="/products" className="home-button">View All Products →</Link>
        </div>
      </section>

      <section className="home-cta">
        <div>
          <p className="home-label">PIPEPRO PLUMBING SUPPLIES</p>
          <h2>Everything You Need for Your Plumbing Projects</h2>
        </div>
        <Link to="/products" className="home-button home-button-light">Explore Products</Link>
      </section>
    </main>
  );
}

export default Home;
