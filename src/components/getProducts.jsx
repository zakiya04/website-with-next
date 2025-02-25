import React from "react";
import API from "@/core/mainapi";
import Link from "next/link";
import Image from "next/image";

async function GetProducts() {
  const products = await API();
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-6 px-8 m-2">
      {products.map((item) => (
        <li
          key={item.id}
          className="rounded-md overflow-hidden border-[0.5px] border-gray-400 h-[300px] relative"
        >
          <Link href={`/products/${item.id}`} className="block w-full h-full">
            <div className="relative w-full h-[70%]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </div>
            <div className="absolute  left-3 bg-black border-[0.5px] border-gray-500 rounded-3xl text-white font-semibold flex items-center justify-evenly px-1 py-[0.3] mt-2 right-2 ">
              <p className="line-clamp-2 px-4 py-3">{item.title}</p>
              <button className="p-3 rounded-3xl bg-blue-600">
                ${item.price}
              </button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GetProducts;
