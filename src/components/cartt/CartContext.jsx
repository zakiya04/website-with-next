'use client';
import { useState, useEffect , useContext, createContext} from "react";

const cartContext = createContext();

function HandleCart() {
  const [cart,setCart] = useState([]);
  
  useEffect(()=>{
    const storedCart = JSON.parse(localStorage.getItem('cart'))|| [];
    setCart(storedCart);
  },[])
  
  const addTocart = (product) =>{
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart',JSON.stringify(updatedCart));
  }
  const removeFromcart = (product) => {
    const updatedCart = cart.filter (item => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem('cart',JSON.stringify(updatedCart))
  }

  return {cart, addTocart, removeFromcart}
}

export default HandleCart
