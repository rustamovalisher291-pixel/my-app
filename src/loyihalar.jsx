import React from 'react';
import { FaArrowLeft, FaSync, FaArrowRight, FaEnvelope, FaTelegram, FaGithub, FaPhone, FaArrowDown } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { Container, LeftCont, ButtonBor, Chiziq } from './fatch';
import { Link } from "react-router-dom";
import Part from "./part.jsx"


function Loyihalar() {


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
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => navigate(-1)}
            />
            <FaSync
              role="button"
              aria-label="refresh"
              tabIndex="0"
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => window.location.reload()} />
            <FaArrowRight
              role="button"
              aria-label="next"
              tabIndex="0"
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => navigate(1)}
            />
          </ButtonBor>

          <img className='Ras' src='https://xabar.uz/static/crop/1/4/920__95_1451606524.jpg' alt="Profile" /><br />
          <h4 style={{ marginLeft: "20px" }}>Rustamov Alisher</h4>
          <h5 className='txt'>Web dasturchi</h5>
          <h5 className='txt'>Dizayner</h5>
          <h5 className='txt'>Junior</h5>
          <Chiziq />
          <p className='tx'> Men bilan bog'lanish <FaArrowDown /> </p>
          <Link className='leftText' to="https://mail.google.com/mail/u/0/?fs=1&to=rustamovalisher291@gmail.com&su=&body=&tf=cm" target="_blank" rel="noreferrer">
            <FaEnvelope title="Email" />
            <span className='Span'>
              Gmail
            </span>
          </Link>
          <Link className='leftText' to="https://t.me/Obito_2343" target="_blank" rel="noreferrer">
            <FaTelegram title="Telegram" />
            <span className='Span' >
              Telegram
            </span>
          </Link>
          <Link className='leftText' to="https://github.com/rustamovalisher291-pixel" target="_blank" rel="noreferrer">
            <FaGithub title="GitHub" />
            <span className='Span'>
              GitHub
            </span>
          </Link>
          <div className='leftText'>
            <FaPhone title="Telefon" />
            <span className='Span'>
              +998 50 503 8185
            </span>
          </div>
        </LeftCont>
        <Part />
      </Container>
    </div>
  )
}

export default Loyihalar
