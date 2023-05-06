import React from 'react';
import Logo from './img/sigailogo2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { FaSignInAlt,FaHome } from 'react-icons/fa';
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <a href="/">
        <img src={Logo} alt="Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="/"><FaHome size={22} style={{marginBottom: '8'}}/>   Home </a></li>
        <li><a href="/">Events</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/"><FaSignInAlt size={22} style={{marginBottom: '8'}}/>   Login </a></li>
      </ul>
    </nav>
    </>
  );
};
export default Navbar;
