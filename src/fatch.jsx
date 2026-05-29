import React from 'react'
import styled from 'styled-components'

export const Container = styled("div") ({
  height: "auto",
  paddingLeft: "25%",
  backgroundImage: "url('https://img.freepik.com/premium-vector/electric-circuit-diagram-seamless-pattern-design-wall-decors-wallpapers-geometric-pattern_1048043-2.jpg')",
  backgroundAttachment: "fixed",
  color: "white",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  overflow:"hidden",
  wordBreak:"break-word",
  boxSizing:"border-box",
  "@media (max-width: 768px)": {
    paddingLeft:"0",
    paddingRight: "0px",
    paddingBottom: "20px",
  },
}) 
export const LeftCont = styled("div") ({
  position: "absolute",
  left: "0px",
  color: "white",
  backgroundColor: "rgb(31, 29, 29)",
  height: "Auto",
  width: "20%",
  border: "1px solid rgba(255, 255, 255, 0.47)",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  paddingLeft: "0px",
  paddingTop: "20px",
  fontSize: "20px",
  margin:"30px",
  borderRadius:"10px",
  "@media (max-width: 768px)":{
    position:"relative",
    minheight:"auto",
    width:"100%",
    fontSize:"16px",
    marginTop:"0",
    marginLeft:"0"
  },
  "@media (max-width: 480px)":{
    position:"relative",
    minheight:"auto",
    width:"100%",
    height:"110hv",
  },
  "@media (max-width: 375px)":{
    position: "relative",
    minheight:"auto",
    width:"100%",
  }
});
export const ButtonBor = styled("div") ({
  borderBottom: "1px solid rgba(255, 255, 255, 0.47)",
});
export const Chiziq = styled("div") ({
  borderBottom: "2px solid rgba(255, 255, 255, 0.47)",
  width: "100%",
  marginBottom: "20px",
});
export const Asos = styled("div") ({
  backgroundColor: 'rgb(31, 29, 29)',
  padding: '40px',
  borderRadius: '10px',
  border: '1px solid rgba(255,255,255,0.2)',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '350px',
})
export const Body = styled("div") ({
  height: "100vh",
  backgroundImage: "url('https://img.freepik.com/premium-vector/electric-circuit-diagram-seamless-pattern-design-wall-decors-wallpapers-geometric-pattern_1048043-2.jpg')",
  backgroundAttachment: "fixed",
  color: "white",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "5px",
  justifyContent:"center"
})

const fatch = () => {
  return (
    <div>
        ...
    </div>
  )
}

export default fatch