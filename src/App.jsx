import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./App.css"
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import { CartProvider } from './Context/CartContext'   
import Checkout from './Pages/Checkout'
import FAQS from './Pages/FAQS'
import Reviews from './Pages/Reviews'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <CartProvider>   
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/fqas' element={<FAQS/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/reviews' element={<Reviews/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
