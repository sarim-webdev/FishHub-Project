import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">FishHub</h2>
          <p>
            Fresh seafood delivered to your doorstep.  
            Premium quality, hygienic packaging and fast delivery.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📞 +92 317 0508010</p>
          <p>📧 muhammadsarim1861@gmail.com</p>
          <p>📍 Karachi, Pakistan</p>
          <div className="socials">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} FishHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
