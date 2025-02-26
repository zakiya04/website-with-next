"use client"
import React, { useState ,useEffect} from 'react';
import API from './mainapi';
import Image from 'next/image';

function ProductInfo({params}) {
  const [product,setProduct] = useState({})

  useEffect(()=>{
    async function getProduct(){
      const products = await API();
      let currentProduct = products.find(item => item.id == params);
      setProduct(currentProduct)
    }
    getProduct()
  },[])
  return (
    <div className='min-w-full m-4 rounded-lg px-4 text-white'>
      <div>
        <Image src={product.image}/>
      </div>
      <div>
         <h1>{product.title}</h1>
         <p>{product.description}</p>
         <div>{product.price}</div>
         <hr/>
         <button>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductInfo
