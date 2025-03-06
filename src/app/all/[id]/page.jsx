import React from 'react';
import ProductInfo from '@/components/cartt/showProduct';

function ItemList({params}) {
  
  return (
    <div>
      <ProductInfo params={params}/>
    </div>
  )
}

export default ItemList