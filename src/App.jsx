import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import "./App.css"

import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import HowItWorks from './Pages/HowItWorks'
import Cart from './Pages/Cart'

import { CartProvider } from './Context/CartContext'   

const App = () => {
  return (
    <CartProvider>   
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/howitworks' element={<HowItWorks/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  )
}

export default App
