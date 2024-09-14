import React from 'react'

const Product = ({product}) => {
    const {category, price , image, description} = product;
    
    
  return (
    <div className='border-2 border-red-600'>
       <h1>{category}</h1>
       <img src={image} alt="" />
       <p>{price}</p>
       <p>{description}</p>

    </div>
  )
}

export default Product