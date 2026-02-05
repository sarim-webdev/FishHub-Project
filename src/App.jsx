import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./App.css"
import Home from './Pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App