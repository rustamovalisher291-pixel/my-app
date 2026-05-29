import React, {useState} from 'react'
import { Body, Asos } from './fatch';
import "./Navbar.css";
import axios from 'axios';


const Email = ({setKirdi}) => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [xato, setXato] = useState('')
    const [qadam , setQadam] = useState(1)
    const [ism, setIsm] = useState('')
    const [xatoo, setXatoo] = useState('')
    const kirish = async () => {
    if (email === '') { 
        setXato('Email kiriting!')
        return
    }
    if (!email.includes('@')) {
        setXato("Email noto'g'ri!")
        return
    }
    

    try {
        const res = await axios.post("https://sizning-react-saytingiz.vercel.app/login", {
            email: email,
            password: password
        })

        if (res.data.xabar) {
            setQadam(2)
        } else if (res.data.xato) {
            setXato(res.data.xato)
        }

    } catch (err) {
        setXato("Serverga ulanib bo'lmadi!")
    }
    }
    const ismSaqlash = () => {
        if (ism === '') {
            setXato('Ism kiriting!');
            return;
        }
        localStorage.setItem('kirdi', true);
        localStorage.setItem('email', email);
        localStorage.setItem('ism', ism);
        setKirdi(true);
    }

  return (
    <div>
        <Body>
            {qadam === 1 ? ( 
            <Asos>
                <h2 style={{color: 'white', textAlign: 'center'}}>Xush kelibsiz! 👋</h2>
                <p style={{color: 'gray', textAlign: 'center'}}>
                Davom etish uchun emailingizni kiriting
                </p>
                <input
                    type='email'
                    placeholder='email@example.com'
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value)
                    setXato('')
                }}
                style={{
                    padding: '12px', 
                    borderRadius: '8px', 
                    border: '1px solid rgba(255,255,255,0.2)', 
                    backgroundColor: 'rgb(38, 40, 38)', 
                    color: 'white', fontSize: '16px', 
                    outline: 'none'}}
                />
                <input 
                    type='password'
                    placeholder='**********'
                    value={password}
                    onChange={(e) => {
                    setPassword(e.target.value)
                    setXato('')
                }}
                style={{
                    padding: '12px', 
                    borderRadius: '8px', 
                    border: '1px solid rgba(255,255,255,0.2)', 
                    backgroundColor: 'rgb(38, 40, 38)', 
                    color: 'white', fontSize: '16px', 
                    outline: 'none'}}
                />
                {xato && (
                <p style={{color: 'red', fontSize: '14px'}}>{xato}</p>
                )}
                <button
                    className='buttons'
                    onClick={kirish}
                    style={{width: '100%'}}
                >
                Keyingisi
                </button>
            </Asos>) : (
                <Asos>
                    <input 
                    type='text'
                    placeholder='Ism'
                    value={ism}
                    onChange={(e) => {
                    setIsm(e.target.value)
                    setXatoo('')
                }}
                style={{
                    padding: '12px', 
                    borderRadius: '8px', 
                    border: '1px solid rgba(255,255,255,0.2)', 
                    backgroundColor: 'rgb(38, 40, 38)', 
                    color: 'white', fontSize: '16px', 
                    outline: 'none'}}
                />
                {xatoo && (
                    <p style={{color: 'red', fontSize: '14px'}}>{xatoo}</p>
                )}
                <button
                    className='buttons'
                    onClick={ismSaqlash}
                    style={{width: '100%'}}
                >
                Kirish
                </button>
                </Asos>
            )}
        </Body>
    </div>
  )
}
export default Email