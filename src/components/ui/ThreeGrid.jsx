"use client"
import React, { useEffect, useState } from "react";
import API from "../product/mainapi";
import Image from "next/image";
import { useRouter } from "next/navigation";


function ThreeGrid() {

  const [products,setProducts] = useState([])
  const router = useRouter();
  
  useEffect(()=>{
    async function fetchData(){
      const data = await API();
      setProducts(data.slice(3, 6))
    }
    fetchData()
  },[])
  return (
    <div className="grid grid-cols-3 gap-6 relative p-5 min-h-[500px]">
      {products.map((item, index) => (
        <div
          key={item.id}
          className={`border-[0.5px] border-gray-400 relative rounded-lg  w-full flex items-center justify-center flex-col
        ${index === 0 ? "col-span-2 row-span-2" : ""}`}
        >
          <div className="w-full h-full relative">
            <Image
              src={item.image}
              alt={item.title}
              className="object-cover rounded-lg "
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            />
          </div>
          <div className="absolute bottom-3  left-3 bg-black border-[0.5px] border-gray-500 rounded-3xl text-white font-semibold flex items-center justify-evenly px-1 py-[0.3] mt-2 right-2 w-[50%] ">
            <p className="line-clamp-2 px-4 py-3">{item.title}</p>
            <button
              className="p-3 rounded-3xl bg-blue-600 m-2"
              onClick={() => router.push(`/all/${item.id}`)}
            >
              ${item.price}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThreeGrid;
