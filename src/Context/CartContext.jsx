import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("fishhub-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("fishhub-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find(item => item.name === product.name);

    if (exist) {
      setCart(cart.map(item =>
        item.name === product.name
          ? { ...item, qty: item.qty + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (name) => {
    setCart(cart.filter(item => item.name !== name));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increase = (name) => {
    setCart(cart.map(item =>
      item.name === name ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decrease = (name) => {
    setCart(cart.map(item =>
      item.name === name && item.qty > 1
        ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  const total = cart.reduce(
    (acc, item) => acc + Number(item.price.replace("$", "")) * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, increase, decrease, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
