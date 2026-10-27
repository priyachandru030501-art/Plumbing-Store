
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <section className="cart-banner">
        <p>YOUR SHOPPING BAG</p>
        <h1>Shopping Cart</h1>
        <p>Review your selected plumbing supplies.</p>
      </section>

      <section className="cart-content">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <h2>Your Cart Is Empty</h2>
            <p>You haven't added any plumbing products yet.</p>
            <Link to="/products" className="cart-primary-button">
              Browse Products →
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items-section">
              <div className="cart-items-heading">
                <h2>Your Items</h2>
                <span>{cart.reduce((sum, item) => sum + item.quantity, 0)} items</span>
              </div>

              {cart.map((item) => (
                <article className="cart-product" key={item.id}>
                  <div className="cart-product-icon">{item.icon}</div>

                  <div className="cart-product-details">
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <strong>₹{item.price}</strong>

                    <div className="cart-quantity">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-product-end">
                    <strong>₹{item.price * item.quantity}</strong>
                    <button
                      className="cart-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}

              <Link to="/products" className="cart-continue-link">
                ← Continue Shopping
              </Link>
            </div>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="cart-summary-row">
                <span>Delivery</span>
                <span>Calculated separately</span>
              </div>

              <div className="cart-summary-total">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              <p className="cart-summary-note">
                Delivery charges, if applicable, are extra.
              </p>

              <button
                className="cart-checkout"
                onClick={() =>
                  navigate("/contact", {
                    state: { enquiry: `Order enquiry for ₹${total}` },
                  })
                }
              >
                Enquire About Order →
              </button>

              <p className="cart-secure-note">
                🔒 Contact the shop to confirm your order.
              </p>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cart;
