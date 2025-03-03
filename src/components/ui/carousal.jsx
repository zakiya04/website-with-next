import React from "react";
import Link from "next/link";
import Image from "next/image";

async function Carousal({products}) {

  if (!products?.length) {
    return null;
  };

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <div className="flex gap-4">
        {products.map((product, i) => (
          <div
            key={`${product.id}-${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link
              href={`/products/${product.id}`}
              className="relative block h-full w-full"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover h-full w-full"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
                <p className="text-sm font-medium">{product.title}</p>
                <p className="text-xs">${product.price} USD</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousal;
