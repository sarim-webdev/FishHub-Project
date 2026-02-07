import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
    const { cart, removeFromCart, increase, decrease, total, clearCart } = useCart();

    return (
        <div className="cart-container">
            <h1>Carts 🛒</h1>

            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.Image} alt={item.name} />

                            <div className="info">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>

                                <div className="qty">
                                    <button onClick={() => decrease(item.name)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => increase(item.name)}>+</button>
                                </div>
                            </div>

                            <h4>
                                ${Number(item.price.replace("$", "")) * item.qty}
                            </h4>

                            <button
                                className="remove"
                                onClick={() => removeFromCart(item.name)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="cart-footer">
                        <h2>Total Price: ${total}</h2>
                        <button
                            className="checkout"
                            onClick={() => (navigate("/checkout"))}
                        >
                            Checkout
                        </button>
                        <button
                            className="remove-all"
                            onClick={clearCart}
                        >
                            Remove All Items
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
