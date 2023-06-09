import React, { useState } from 'react';
import "./Navbar.css";
import mylogo from "../Logo Shape.png";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setTimeout(() => {
      setMenuOpen(!menuOpen);
    }, 100); // adjust delay as needed
  };
  
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="container-fluid">

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="container d-flex w-100 align-item-center mt-5">
              <div className="logo-wraper">
                <div className="img-wrap">
                  <img src={mylogo} alt="" />
                </div>
                <div className="navbar-brand">
                  <h6><a href="#">Boldo</a></h6>
                </div>
              </div>
              <div className="nav-item-wrap">
                <ul className='navbar-nav'>
                  <li className="nav-item">
                    <a href="#">Product</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Service</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">About</a>
                  </li>
                  <li className="nav-item butn">
                    <a href="#" className="nav-btn">Log in</a>
                  </li>
                </ul>
                {

             !menuOpen ?( <div className="burger-wrap">
                <SlMenu onClick={toggleMenu}/>
              </div>
):(
  <div className="close-sidebar-btn">
  <VscChromeClose onClick={closeMenu}/>
  </div>
)}
              </div>
            </div>
          </div>
        </nav>
      

        <>
   

          <div className={`sidebar ${menuOpen ? 'show-sidebar' : ''}`}>
        <div className="side-logo">
        <div className="img-wrap">
                  <img src={mylogo} alt="" />
                </div>
                <div className="sidebar-brand">
                  <h6><a href="#">Boldo</a></h6>
                </div>
        </div>
            <ul>
              <li key="product"><a href="#">Product</a></li>
              <li key="service"><a href="#">Service</a></li>
              <li key="about"><a href="#">About</a></li>
              <li key="login"><a href="#">Log in</a></li>
            </ul>
          </div>
        </>
      
    </div>
  )
};

export default Navbar;
