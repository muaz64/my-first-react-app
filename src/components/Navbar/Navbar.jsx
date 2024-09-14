import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-amber-400 mb-7'>
        <Link to={"/home"}> Home </Link>
        <Link to={"/product"}>Products </Link>
        <Link to={"/blog"}> Blogs </Link>
        <Link to={"/about"}> About </Link>
        <Link to={"/contact"}> Contact Us </Link>
        
    
    </div>
  )
}

export default Navbar