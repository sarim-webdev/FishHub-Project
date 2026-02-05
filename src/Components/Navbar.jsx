import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const loginBtnHandler = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  const signupBtnHandler = () => {
    navigate("/signup");
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>FishHub</h2>
      </div>
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/dashboard" onClick={closeMenu}>Dashboard</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/howitworks" onClick={closeMenu}>How It Works</Link></li>
        <li><Link to="/reviews" onClick={closeMenu}>Reviews</Link></li>
        <li><Link to="/cart" onClick={closeMenu}>Cart</Link></li>
        <li><Link to="/checkout" onClick={closeMenu}>Checkout</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
      <div className="nav-actions">
        <button className="login-btn" onClick={loginBtnHandler}>
          Login
        </button>

        <button className="signup-btn" onClick={signupBtnHandler}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
