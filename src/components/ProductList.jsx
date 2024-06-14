import React from 'react'
import { useCartStore } from '../store/cart-store'

function ProductList({products}) {
    const addToCart=useCartStore((state)=>state.addToCart)
  return (
    <div>
        {products?.map((product, i)=>(
            <div key={i}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        ))}
    </div>
  )
}

export default ProductList