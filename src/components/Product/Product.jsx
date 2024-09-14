import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {title, price , image, description} = product;
    
    
  return (
    <div className='border-2 border-red-600'>
       <h1>{title}</h1>
       <img src={image} alt="" />
       <p>{price}</p>
       
       <Link to={`/product/${product.id}`}>
       <button className='bg-lime-600 my-5 px-4'>More info...</button>
       </Link>

    </div>
  )
}

export default Product