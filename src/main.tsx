import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import MenuPage from './pages/menu/MenuPage'
import CartPage from './pages/cart/CartPage'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MenuPage/>} />
      <Route path='/cart' element={<CartPage/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
