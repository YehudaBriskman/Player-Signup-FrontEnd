import React, { useEffect, useState } from 'react'
import ProductControll from './ProductControll'
import ProductView from './ProductView'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => { console.log(products) }, [products])
  
  return (
    <>
      <ProductControll setProducts={setProducts} />
      <ProductView setProducts={setProducts} products={products} />
    </>
  )
}

export default Products