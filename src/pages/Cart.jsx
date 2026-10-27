import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cartItems = [], updateQuantity, removeFromCart }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="empty-cart">
        <div className="empty-cart-icon">🛒</div>
        <h1>Your Cart is Empty</h1>
        <p>You haven't added any plumbing products yet.</p>
        <Link to="/products" className="shop-button">
          Shop Products
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price} × {item.quantity}</p>
            </div>

            <div className="cart-actions">
              <button onClick={() => updateQuantity(item.id, -1)}>
                −
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => updateQuantity(item.id, 1)}>
                +
              </button>

              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h2>Total: ₹{total}</h2>
        <Link to="/contact" className="shop-button">
          Continue to Contact
        </Link>
      </div>
    </section>
  );
}

export default Cart;