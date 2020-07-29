import React from 'react';
import logo from '../assets/imgs/logo-white.png'

const Header = ()=> {
  return (

    <nav className="" >
         <div className="container">
            <a href="" className="navbar-brand">
            <img src={logo} alt="Kion logo" className="logo"/>
            </a>
            <ul className="main-nav js--main-nav">
               <li>
                  <a href="#hero">Home </a>
               </li>
               <li className="nav-item">
                  <a href="#services">Services</a>
               </li>
               <li className="nav-item">
                  <a href="#contact">Contact Us</a>
               </li>
               <li className="nav-item">
                  <a href="#features">Features</a>
               </li>
               <li className="nav-item">
                  <a href="#review">Testmonial</a>
               </li>
            </ul>
            <a className="mobile-nav-icon js--nav-icon"><i className="fas fa-align-justify"></i></a>
         </div>

      </nav>
  );
}

export default Header;
