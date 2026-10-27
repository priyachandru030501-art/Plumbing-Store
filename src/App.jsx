import { useState } from "react";
import { Link, NavLink, BrowserRouter } from "react-router-dom";
import "./App.css";

function Website() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">
      {/* NAVBAR */}
      <header className="navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">🔧</span>
          PIPE<span className="brand-blue">PRO</span>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <Link
            to="/cart"
            className="navbar-cart"
            onClick={closeMenu}
          >
            🛒 Cart <span>0</span>
          </Link>
        </nav>
      </header>

      {/* EMPTY CONTENT AREA */}
      <main className="page-content"></main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-about">
            <Link to="/" className="brand footer-brand">
              🔧 PIPE<span className="brand-blue">PRO</span>
            </Link>

            <p>
              Quality plumbing supplies, reliable products, and
              helpful service for every home and project.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h3>Categories</h3>
            <Link to="/products">Pipes</Link>
            <Link to="/products">Fittings</Link>
            <Link to="/products">Plumbing Tools</Link>
            <Link to="/products">Bathroom Supplies</Link>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>📍 Your shop address</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ hello@pipepro.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} PIPEPRO. All rights reserved.
          </p>
          <Link to="/products">Shop Now →</Link>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Website />
    </BrowserRouter>
  );
}

export default App;