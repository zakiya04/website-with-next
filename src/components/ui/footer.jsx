import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full">
      <hr className="border-t border-gray-400 border-[0.5px] opacity-50" />
      <div>
        <div className="px-6 py-12 flex  gap-4 items-cneter justify-between">
          <div className="">
            <Link className="text-white font-semibold" href="/">
              ACME STORE
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-gray-400">
              Home
            </Link>
            <Link href="/about" className="text-gray-400">
              About
            </Link>
            <Link href="/terms" className="text-gray-400">
              Terms & Conditions
            </Link>
            <Link href="shipping/" className="text-gray-400">
              Shipping & Rteurn Policy
            </Link>
            <Link href="/privacy" className="text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-gray-400">
              FAQ
            </Link>
          </div>
          <div>
            <div className="">
              <p className="text-gray-400">Youtube</p>
              <p className="text-gray-400">Facebook</p>
              <p className="text-gray-400">Instagram</p>
              <p className="text-gray-400">Pintrest</p>
              <p className="text-gray-400">Reddit</p>
              <p className="text-gray-400">Discord</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-400 border-[0.5px] opacity-50" />
      <div className="text-neutral-300 flex px-3 py-4 justify-between ">
        <div className="flex gap-3">
          <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
          <p>|</p>
          <a href="https://github.com/zakiya04" target="_blank">
            View the Source-code
          </a>
        </div>
        <div className='px-4'>
          <p>
            Created by <strong>Zakiya</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
