import React from "react";
import ProtectedCard from "../Data/ProtectedCard";
import { useCart } from "../Context/CartContext";

const Products = () => {
  const { addToCart } = useCart();

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

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
