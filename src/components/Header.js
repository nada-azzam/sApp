import React , {useState }from 'react';
import logo from '../assets/imgs/logo-white.png'

const Header = () => {
   const [showNavToggState , SetshowNavToggState ]= useState({
      show:false
   })
   const toggleNav = ()=>{
      const doesShow = showNavToggState.show;
      SetshowNavToggState({show:!doesShow})
   }
   const mainNavStyle = {

    };
   return (

      <nav  >
         <div className="container">
            <a href="#" className="navbar-brand">
               <img src={logo} alt="Kion logo" className="logo" />
            </a>
            <ul style={showNavToggState.show? { display:'block'} : {}} className="main-nav js--main-nav">
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

            <span  className={showNavToggState.show? ' active navTrigger' :'navTrigger' } onClick={toggleNav}>
               <i></i>
               <i></i>
               <i></i>
            </span>
         </div>

      </nav>
   );
}

export default Header;
