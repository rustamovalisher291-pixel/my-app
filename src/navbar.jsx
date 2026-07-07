import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FaGithub, FaTimes, FaBars, FaSignOutAlt, FaUser, FaKey, FaCamera, FaTrash } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';


const Navbar = ({setKirdi}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profilOpen, setProfilOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [ismModal, setismModal] = useState(false)
  const [yangiIsm, setYangiIsm] = useState('');


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfilOpen(false);
      }
  };
  document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])

  const ism = localStorage.getItem('ism');
  const rasm = localStorage.getItem('rasm');

  const chiqish = () => {
    localStorage.removeItem('kirdi')
    setKirdi(false)
  }
  const rasmOchir = () => {
  localStorage.removeItem('rasm');
  window.location.reload();
};

const ismSaqlash = () => {
  if (yangiIsm.trim() === '') return;
  localStorage.setItem('ism', yangiIsm);
  window.location.reload();
};

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
              <div onClick={() => setProfilOpen(!profilOpen)} style={{cursor: 'pointer'}}>
                {rasm ? (
                  <img src={rasm} alt="profil" className='navbar__profil__rasm' />
                ) : (
                  <div className='navbar__profil__default'>
                    {ism ? ism[0].toUpperCase() : <FaUser />}
                  </div>
                )}
              </div>
            </div>
            {profilOpen && (
              <div className='profil__dropdown' ref={dropdownRef} >
                <p style={{color: 'gray', fontSize: '13px', padding: '10px 15px', margin: 0}}>{ism}</p>
                <hr style={{borderColor: 'rgba(255,255,255,0.1)', margin: 0}}/>
                <label className='dropdown__item' style={{cursor: 'pointer'}}>
                  <FaCamera /> Rasm o'zgartirish
                  <input 
                    type='file' 
                    accept='image/*' 
                    style={{display: 'none'}}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          localStorage.setItem('rasm', ev.target.result);
                          window.location.reload();
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
                <div className='dropdown__item' onClick={rasmOchir} style={{color:'red'}}>
                  <FaTrash /> Rasmni o'chirish
                </div>
                <div className='dropdown__item' onClick={() => alert('Tez kunda!')}>
                  <FaKey /> Parolni tiklash
                </div>
                <hr style={{borderColor: 'rgba(255,255,255,0.1)', margin: 0}}/>

                <div style={{
                  padding:'10px 15px', 
                  display:'flex', 
                  flexDirection:'column', 
                  gap:'8px'}}>
                    <span style={{color:'gray', fontSize:'13px'}}>Ismni tahrirlash</span>
                    <input
                      type='text'
                      value={yangiIsm}
                      onChange={(e) => setYangiIsm(e.target.value)}
                      style={{
                        padding:'8px', borderRadius:'8px',
                        border:'1px solid rgba(255,255,255,0.2)',
                        backgroundColor:'rgb(38,40,38)',
                        color:'white', fontSize:'14px', outline:'none'
                      }}
                    />
                    <button onClick={ismSaqlash} 
                    style={{
                      border:'none', 
                      padding:'8px', 
                      borderRadius:'8px',
                      backgroundColor:'rgb(16, 183, 16)', 
                      color:'white', 
                      cursor:'pointer',
                      boxShadow:'0 2px 5px rgba(36, 232, 6, 0.63)'
                    }}>Saqlash</button>
                  </div>

                  <hr style={{borderColor:'rgba(255,255,255,0.1)', margin:0}}/>

                <div className='dropdown__item' onClick={chiqish} style={{color: 'red'}}>
                  <FaSignOutAlt /> Chiqish
                </div>
              </div>
            )}
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
