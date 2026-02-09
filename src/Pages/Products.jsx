import React from "react";
import ProtectedCard from "../Data/ProtectedCard";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = (item) => {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    addToCart(item);
  };

  return (
    <div>
      <h1 className="products-title">Our Products</h1>

      <div className="cards-container">
        {ProtectedCard.map((item, index) => (
          <div className="cards" key={index}>
            <img src={item.Image} alt={item.name} />
            <p>{item.paragraph}</p>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>

            <button onClick={() => handleAdd(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
