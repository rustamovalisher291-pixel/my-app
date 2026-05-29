import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loyihalar from './loyihalar';
import Email from './Email.jsx';
import { useState } from 'react';

  

const App = () => {
  
  const [kirdi, setKirdi] = useState(localStorage.getItem('kirdi') === 'true' );
  
  return (
    <div>
      {!kirdi ? (<Email setKirdi={setKirdi} />):(
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar setKirdi={setKirdi}/>}>
      <Route index element={<Login/>} />
      <Route path='/about' element={<Loyihalar/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
     )}
    </div>
  )
}

export default App