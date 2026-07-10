import React from 'react'
import "./Navbar.css"
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaSync, FaStar, FaUser, FaPalette, FaEnvelope, 
  FaTelegram, FaGithub, FaPhone, FaArrowDown } from 'react-icons/fa';
import { Container, LeftCont, ButtonBor, Chiziq, } from './fatch';
import { Link } from 'react-router-dom';


const Login = () =>{


const navigate = useNavigate();

  return(
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
        </ButtonBor>
        
          <img className='Ras' src='https://xabar.uz/static/crop/1/4/920__95_1451606524.jpg' alt="Profile" /><br />
          <h4 style={{marginLeft:"20px"}}>Rustamov Alisher</h4>
          <h5 className='txt'>Web dasturchi</h5>
          <h5 className='txt'>Dizayner</h5>
          <h5 className='txt'>Junior</h5>
          <Chiziq/>
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
       <h1>Men haqimda</h1>
       <div className='chiziq'> </div>
      <h3>Salom, mening ismim Rustamov Alisher</h3>
      <h3>Men Frontend va Backend dasturchiman</h3>
      <h3>Bu mening birinchi React loyiham</h3>
      <h3>Mening vazifam web saytlarni yaratish</h3><br/>
      <h3>Men web saytlarni yaratish orqali foydalanuvchilarga qulaylik yaratish uchun ishlayman</h3>
      <h3>Umid qilamanki sizga yoqadi :)</h3><br />
      <button className='buttons' type="button" >Bog'lanish</button>
      <h1>Asbob-uskunalar</h1>
      <div className='chiziq'> </div>
      <div className='icon'>
        <img className='rasm' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="React logo" />
        <img className='rasm' src='https://cdn.iconscout.com/icon/free/png-256/free-html-5-icon-svg-download-png-1175208.png?f=webp' alt="HTML5 logo" />
        <img className='rasm' src='https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' alt="CSS3 logo"  />
        <img className='rasm' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' alt="JavaScript logo"  />
      </div>
      <h1>Men nimalar qila olaman?</h1>
      <div className='chiziq'> </div>
      <h3 className='bottom1'><FaPalette style={{
        color:"coral"
      }} /> Men web saytlarni yaratish, dizayn qilish va optimallashtirish bo'yicha tajribaga egaman</h3>
      <h3 className='bottom1'><FaStar style={{
        color:"yellow"
      }} /> Men foydalanuvchi tajribasini yaxshilash uchun zamonaviy texnologiyalar va amaliyotlardan foydalanaman</h3>
      <h3 className='bottom1'><FaUser style={{
        color:"slateblue"
      }} /> Men jamoada ishlashni va loyihalarni muvaffaqiyatli yakunlashni yaxshi ko'raman.</h3>
      </Container>
    </div>
  )
}
export default Login;