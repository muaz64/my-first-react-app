import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-amber-400'>
        <Link> Home </Link>
        <Link>Products </Link>
        <Link> Blogs </Link>
        <Link> About </Link>
        <Link> Contact Us </Link>
        
    
    </div>
  )
}

export default Navbar