import React from 'react'
import { useLoaderData } from 'react-router-dom'

const MoreInfo = () => {
    const moreInfo = useLoaderData();
    const {title, price ,image, description} = moreInfo;
    
  return (
    <div>
         <h1>{title}</h1>
       <img src={image} alt="" />
       <p>{price}</p>
       <p>{description}</p>
    </div>
  )
}

export default MoreInfo