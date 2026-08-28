import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FaGithub, FaTimes, FaBars, FaSignOutAlt, FaUser, FaKey, FaCamera, FaTrash } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';


const Navbar = () => {;
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className='body'>
      <nav className="navbar">
        <h2 className="navbar__brand">ALISHER.UZ</h2>
        <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)} >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
          <div className={`navbar__links ${menuOpen ? 'open' : ''}`} >
            <Link className='link' to="/about" onClick={() => setMenuOpen(false)} >Loyihalar</Link>
            <Link className='link' to="/" onClick={() => setMenuOpen(false)} >Bosh sahifa</Link>
            <a href="https://github.com/settings/copilot/features" target="_blank" rel="noreferrer">
            <FaGithub className="navbar__icon" aria-label="GitHub" role="link" />
            </a>
            <div style={{position: 'relative'}}>
            </div>
          </div>  
        </nav>
           
        <main>
           <Outlet />
        </main>

        <footer style={{ 
          color:"white", 
          background:"rgba(0, 0, 0, 0.8)",
          display:"flex",  
          justifyContent:"center",
          gap:"2rem",
          border:"1px solid rgba(255, 255, 255, 0.47)",           
          }}>
            
        </footer>
    </div>
  )
};

export default Navbar;
