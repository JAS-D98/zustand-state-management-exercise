import React from 'react'
import { useCartStore } from '../store/cart-store'

export default function Cart() {
    const {cart, clearCart}=useCartStore((state)=>({
        cart: state.cart,
        clearCart:state.clearCart,
    }))
  return (
    <div>
        <h1>Cart</h1>
        {cart.map((cart, i)=>(
        <div key={i}>
            <h2>{cart.name}</h2>
            <p>{cart.description}</p>
        </div> 
            ))
        }
         <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}
