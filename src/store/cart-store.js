import { create } from 'zustand'


export const useCartStore=create((set)=>(
    {
        cart:[],
        addToCart:(product)=>set((state)=>({cart:[...state.cart, product]})),
        clearCart:()=>set({cart:[]}),
    }
))