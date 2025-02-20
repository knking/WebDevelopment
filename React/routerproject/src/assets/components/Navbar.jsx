import React from "react";
import { NavLink } from "react-router";
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={({isActive})=> isActive ? "link-active":""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive})=>isActive ? "link-active":""}>About</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({isActive}) =>isActive ? "link-active":""}>Dashboard</NavLink>
        </li>
        
      </ul>
    </div>
  );
}

export default Navbar;
