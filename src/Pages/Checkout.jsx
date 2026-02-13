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
    onlineMethod: "",
    accountNumber: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address || cart.length === 0) {
      alert("Please fill all fields and add items to cart");
      return;
    }

    if (form.payment === "Online" && !form.onlineMethod) {
      alert("Please select online payment method");
      return;
    }

    if (
      form.payment === "Online" &&
      (form.onlineMethod === "JazzCash" ||
        form.onlineMethod === "Easypaisa") &&
      !form.accountNumber
    ) {
      alert("Please enter account number");
      return;
    }

    if (
      form.payment === "Online" &&
      form.onlineMethod === "Card" &&
      (!form.cardNumber || !form.cardExpiry || !form.cardCVV)
    ) {
      alert("Please fill card details");
      return;
    }

    alert("Order placed successfully");
    clearCart();
  };

  return (
    <div className="checkout-container">
      <h1>Checkout 🧾</h1>

      <div className="checkout-grid">
        <div className="checkout-form">
          <h2>Customer Details</h2>

          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <textarea name="address" placeholder="Delivery Address" onChange={handleChange} />
          <input name="city" placeholder="City" onChange={handleChange} />

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
                checked={form.payment === "Online"}
                onChange={handleChange}
              />
              Online Payment
            </label>
          </div>

          {/* ================= ONLINE OPTIONS ================= */}

          {form.payment === "Online" && (
            <>
              <h4>Select Online Method</h4>

              <select
                name="onlineMethod"
                value={form.onlineMethod}
                onChange={handleChange}
              >
                <option value="">Select Method</option>
                <option value="JazzCash">JazzCash</option>
                <option value="Easypaisa">Easypaisa</option>
                <option value="Card">Credit / Debit Card</option>
              </select>

              {/* JazzCash / Easypaisa */}
              {(form.onlineMethod === "JazzCash" ||
                form.onlineMethod === "Easypaisa") && (
                <input
                  name="accountNumber"
                  placeholder="Enter Account Number"
                  onChange={handleChange}
                />
              )}

              {/* Card Fields */}
              {form.onlineMethod === "Card" && (
                <>
                  <input
                    name="cardNumber"
                    placeholder="Card Number"
                    onChange={handleChange}
                  />
                  <input
                    name="cardExpiry"
                    placeholder="Expiry (MM/YY)"
                    onChange={handleChange}
                  />
                  <input
                    name="cardCVV"
                    placeholder="CVV"
                    onChange={handleChange}
                  />
                </>
              )}
            </>
          )}

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
