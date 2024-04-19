import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/categories" element={<Categories />}></Route>
    <Route path="/product/:id" element={<Product />}></Route>
    <Route path="/checkout" element={<Checkout></Checkout>} />
  </Routes>
)

export default Rotas
