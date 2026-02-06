import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./App.css"
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App