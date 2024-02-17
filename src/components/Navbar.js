import React from 'react';
// import './App.css'; // Import your CSS file for styling
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'
export const Navbar = () => {
  return (
   <>
     <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <NavLink to='/follow-us'>Follow Us</NavLink>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
   </>
  )
}
