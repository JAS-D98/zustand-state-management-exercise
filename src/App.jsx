import React from 'react'
import ProductList from './components/ProductList'
import PRODUCTS from './products/products.js'
import Cart from './components/Cart.jsx'
export default function App() {
  return (
    <div>
      App
      <ProductList products={PRODUCTS}/>
      <Cart/>
    </div>
  )
}
