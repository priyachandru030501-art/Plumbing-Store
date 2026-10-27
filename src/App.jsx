import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import "./App.css";

function Website() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("pipepro-cart")) || [];
    } catch {
      return [];
    }
  });

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      const updated = existing
        ? current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...current, { ...product, quantity: 1 }];

      localStorage.setItem("pipepro-cart", JSON.stringify(updated));
      return updated;
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((current) => {
      const updated = current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0);

      localStorage.setItem("pipepro-cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromCart = (id) => {
    setCart((current) => {
      const updated = current.filter((item) => item.id !== id);
      localStorage.setItem("pipepro-cart", JSON.stringify(updated));
      return updated;
    });
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
            🛒 Cart <span>{cartCount}</span>
          </Link>
        </nav>
      </header>

      {/* PAGES */}
      <main className="page-content">
        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} />}
          />

          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />

          {/* Any unknown URL opens Home */}
          <Route path="*" element={<Home addToCart={addToCart} />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-about">
            <Link
              to="/"
              className="brand footer-brand"
              onClick={closeMenu}
            >
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