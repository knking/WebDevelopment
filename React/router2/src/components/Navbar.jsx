import React from 'react'
import logo from '../assets/myLogo.png'
const Navbar = () => {
  return (
    <>
     <div className='navbar'>
        <img src={logo} alt="img" width='50px' />
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Product</li>
            <li>About</li>
            
        </ul>
        <button>Get Started</button>
    </div>
    </>
   
  )
}

export default Navbar