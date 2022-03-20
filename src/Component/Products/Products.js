import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({cartCount}) => {
  const [products,setProducts] = useState([])

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
},[])

  return (
    <div className='container'>
      <h1 className='text-success fw-bold py-4'>See All Product</h1>
       <div className='row g-4'>
       {
      products.map(product => <Product product={product} key={product.id} cartCount={cartCount}></Product>)  
      }
       </div>
    </div>
  );
};

export default Products;