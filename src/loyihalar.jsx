import React from 'react';
import { FaArrowLeft, FaSync, FaArrowRight, FaEnvelope, FaTelegram, FaGithub, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { Container, LeftCont, ButtonBor, Chiziq } from './fatch';


function Loyihalar() {

  const email = localStorage.getItem('email');
  const ism = localStorage.getItem('ism');

  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <LeftCont>
        <ButtonBor>
          <FaArrowLeft 
          role="button" 
          aria-label="previous" 
          tabIndex="0" 
          style={{margin:"10px", cursor:"pointer"}} 
          onClick={() => navigate(-1)}
          />
          <FaSync 
          role="button" 
          aria-label="refresh" 
          tabIndex="0" 
          style={{margin:"10px", cursor:"pointer"}} 
          onClick={() => window.location.reload()}/>
          <FaArrowRight 
          role="button" 
          aria-label="next" 
          tabIndex="0" 
          style={{margin:"10px", cursor:"pointer"}} 
          onClick={() => navigate(1)}
          />
          <h4 style={{marginLeft:"20px"}}>{ism}</h4>
          <p style={{marginLeft:"20px", color:"gray"}}>{email}</p>
        </ButtonBor>
          <img className='Ras' src='https://xabar.uz/static/crop/1/4/920__95_1451606524.jpg' alt="Profile" /><br />
          <h4 style={{marginLeft:"20px"}}>Rustamov Alisher</h4>
          <h5 className='txt'>Web dasturchi</h5>
          <h5 className='txt'>Dizayner</h5>
          <h5 className='txt'>Junior</h5>
          <Chiziq/>
          <div style={{paddingLeft:"20px", paddingRight:"20px"}}>
            <FaEnvelope title="Email" />
            <span style={{marginLeft:"10px"}}>
              rustamov@gmail.com
            </span>
          </div>
          <div style={{paddingLeft:"20px", paddingRight:"20px"}}>
            <FaTelegram title="Telegram" />
            <span style={{marginLeft:"10px"}}>
              @rustamov_alisher
            </span>
          </div>
          <div style={{paddingLeft:"20px", paddingRight:"20px"}}>
            <FaGithub title="GitHub" />
            <span style={{marginLeft:"10px"}}>
              github.com/rustamov-alisher
            </span>
          </div>
          <div style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px"}}>
            <FaPhone title="Telefon" />
            <span style={{marginLeft:"10px"}}>
              +998 90 123 45 67
            </span>
          </div>
        </LeftCont>
        <div>Loyihalar</div>
      </Container>
    </div>
  )
}

export default Loyihalar