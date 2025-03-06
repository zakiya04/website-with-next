'use client';
import { useState, useEffect , useContext, createContext} from "react";

const CartContext = createContext();

 export function HandleCart() {
  const [cart,setCart] = useState([]);
  
  useEffect(()=>{
    const storedCart = JSON.parse(localStorage.getItem('cart'))|| [];
    setCart(storedCart);
  },[])
  
  const addTocart = (product) =>{
    const updatedCart = [...cart,{...product, quantity: 1} ];
    setCart(updatedCart);
    localStorage.setItem('cart',JSON.stringify(updatedCart));
  }
  const removeFromcart = (product) => {
    const updatedCart = cart.filter (item => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem('cart',JSON.stringify(updatedCart))
  }

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addTocart, 
        removeFromcart, 
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  const context = useContext(CartContext);
  return context
}