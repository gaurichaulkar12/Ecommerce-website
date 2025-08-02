import React, { useState } from 'react'
import './Navbar.css'
import logo from "../assets/logo.png"
import cart from "../assets/cart-icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="50px"/>
        <p>TrendyCart</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() =>{setMenu("home")}}><Link style={{textDecoration:"none",color:"#626262"}}to="/">Home</Link>  {menu==="home"? <hr/>:<></>}</li>
        <li onClick={() =>{setMenu("men")}}> <Link style={{textDecoration:"none",color:"#626262"}}
         to="/men">Men</Link>  {menu==="men"? <hr/>:<></>}</li>
        <li onClick={() =>{setMenu("women")}}> <Link style={{textDecoration:"none",color:"#626262"}}to="/women">Women</Link>  {menu==="women"? <hr/>:<></>}</li>
        <li onClick={() =>{setMenu("kids")}}> <Link style={{textDecoration:"none",color:"#626262"}}to="/kids">Kids </Link> {menu==="kids"? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"> <button>Login</button> </Link>
        <Link to="/cart"> <img src={cart} alt="" height="40px" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
