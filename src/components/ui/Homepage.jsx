import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Roboto_Condensed } from 'next/font/google';
const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'], 
    weight: ['800', '900'], 
  });

function ImageUi() {
  return (
    <div className='min-w-screen h-[500px] border-[0.5px] border-gray-400 rounded-lg  flex items-center justify-center flex-col mb-10 relative mt-10'>
        <div className='relative rounded-lg w-full h-full'>
            <Image
            src='/home.jpg'
            alt='design image'
            className='object-cover rounded-lg'
            priority
            fill 
            sizes='100vw'
            />
        </div>
        <div className={`absolute left-2 ${robotoCondensed.className} flex items-center justify-evenly w-full gap-6`}>
            <div>
            <h1 className='text-6xl'>MAKE YOUR WAY FOR NEW DRIP</h1>
            <h1 className='text-center text-3xl'>EXPLORE THE SEASON'S NEW STYLES</h1>
            </div>
            <Link href="/all" className="px-3 py-2 bg-black text-white text-center inline-block">
             View all products
            </Link>
        </div>
    </div>
  )
}

export default ImageUi
