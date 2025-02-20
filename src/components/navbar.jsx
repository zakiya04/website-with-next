import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <div className="px-6 py-2 flex items-center justify-between w-full">
      <div className="flex items-center justify-evenly gap-4 p-4 w-1/3 ">
        <Link className="text-white font-extrabold" href="/">
          ACME STORE
        </Link>
        <Link className="text-gray-400" href="/all">
          All
        </Link>
        <Link className="text-gray-400" href="/shirts">
          Shirts
        </Link>
        <Link className="text-gray-400" href="/stickers">
          Stickers
        </Link>
      </div>
      <div className="flex justify-center items-center w-1/3 p-4">
        <input
          placeholder="Search for products..."
          className="px-4 py-2 bg-black border border-gray-600 rounded-md w-full outline-none text-gray-500"
        />
      </div>
      <div className="w-1/3  flex items-center justify-end p-4">
        <div className="h-11 w-11 border-gray-500 border flex items-center justify-center rounded-md ">
          <Link href="/cart" className="">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-gray-300 h-5 w-8"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar
