import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  /* =====================
     CHECK LOGIN STATE
  ===================== */
  const checkLogin = () => {
    const logged = localStorage.getItem("loggedInUser");
    setUser(logged ? JSON.parse(logged) : null);
  };

  useEffect(() => {
    checkLogin();

    // ⭐ listen for localStorage change (login/logout instantly update)
    window.addEventListener("storage", checkLogin);

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  /* =====================
     LOGOUT
  ===================== */
  const logoutHandler = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null); // instant update
    navigate("/products");
  };

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

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/faqs" onClick={closeMenu}>FAQS</Link></li>
        <li><Link to="/cart" onClick={closeMenu}>Cart</Link></li>
        <li><Link to="/checkout" onClick={closeMenu}>Checkout</Link></li>
        <li><Link to="/reviews" onClick={closeMenu}>Reviews</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      {/* ================= ACTION BUTTONS ================= */}
      <div className="nav-actions">
        {user ? (
          <button className="logout-btn" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <>
            <button className="login-btn" onClick={loginBtnHandler}>
              Login
            </button>
            <button className="signup-btn" onClick={signupBtnHandler}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
