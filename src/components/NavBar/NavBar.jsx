import React from 'react'
import { Link } from 'react-router-dom';


import { HiShoppingBag } from "react-icons/hi2";
import "./style.css"

function NavBar() {
  

  return (
    <div className='nav-container'>
      <HiShoppingBag color='white' size={30}/>
      <div className='nav-links-container'>
        <Link to="/" className='link-item'>Home</Link>
        <Link to="/cart" className='link-item'>Cart</Link>
      </div>
    </div>
  )
}

export default NavBar