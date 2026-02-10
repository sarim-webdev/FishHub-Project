import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const loginHandler = () => {

    if (!email || !password) {
      setError("Please fill all fields")
      return
    }

    /* =========================
       GET ALL USERS
    ========================= */

    const users = JSON.parse(localStorage.getItem("users")) || []

    if (users.length === 0) {
      setError("No account found. Please Signup first")
      return
    }

    /* =========================
       FIND MATCH USER
    ========================= */

    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    )

    if (!matchedUser) {
      setError("Invalid Email or Password")
      return
    }

    /* =========================
       LOGIN SUCCESS
    ========================= */

    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser))

    alert("Login Successfully...")

    navigate("/products")
  }

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h1>Login</h1>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginHandler}>Login</button>

        <p style={{ fontSize: "1.1rem" }}>
          Don't have an account? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
