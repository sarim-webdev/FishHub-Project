import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, total, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    payment: "COD",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address || cart.length === 0) {
      alert("Please fill all fields and add items to cart");
      return;
    }

    alert("Order placed successfully ✅");
    clearCart();
  };

  return (
    <div className="checkout-container">
      <h1>Checkout 🧾</h1>

      <div className="checkout-grid">
        <div className="checkout-form">
          <h2>Customer Details</h2>

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            onChange={handleChange}
          />

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
          />

          <h3>Payment Method</h3>

          <div className="payment">
            <label>
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={form.payment === "COD"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="Online"
                onChange={handleChange}
              />
              Online Payment
            </label>
          </div>

          <button className="place-order" onClick={placeOrder}>
            Place Order
          </button>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.map((item, i) => (
            <div key={i} className="summary-item">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>
                $
                {Number(item.price.replace("$", "")) * item.qty}
              </span>
            </div>
          ))}

          <h3>Total Price: ${total}</h3>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
