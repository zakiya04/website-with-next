import React from "react";
import Image from "next/image";
import { useCart } from "@/components/cartt/CartContext";

function ProductInfo({ product }) {
  const addTocart = useCart();

  return (
    <div className="min-w-full m-4 rounded-lg px-4 text-white flex ">
      <div className="inline-block">
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={600}
          priority
          sizes="(min-width: 1024px) 75vw, (min-width: 768px) 33vw, 50vw"
          className="rounded-lg "
        />
      </div>
      <div className="mt-6 text-white p-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-300 mt-4">{product.description}</p>
        <div className="text-2xl font-semibold my-4">${product.price}</div>
        <hr className="border-gray-700" />
        <button className="mt-6 mx-4 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition-colors">
          Buy Now
        </button>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition-colors" onClick={()=>{addTocart(product)}}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
