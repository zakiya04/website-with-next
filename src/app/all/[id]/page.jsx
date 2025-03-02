import React from 'react';
import ProductInfo from '@/components/showProduct';
export const dynamic = 'force-dynamic'
async function ItemList({params}) {
  
  return (
    <div>
      <ProductInfo params={params}/>
    </div>
  )
}

export default ItemList