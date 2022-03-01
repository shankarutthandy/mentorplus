import React from 'react'
import ReactDOM from 'react-dom';
const style1={
    backgroundColor:"rgba(0,0,0,0.6)",
    position:"fixed",
    top:0,
    right:0,
    left:0,
    bottom:0,
    zIndex:"1000",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}
const style2={
    width:"50%",
    height:"50%",
    backgroundColor:"white",
    color:"black",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-evenly",
    borderRadius:"10px",
    border:"1px solid black"
}
export default function Modal({popup,children,close}) {


  if(!popup)return null;
  return (
    ReactDOM.createPortal(<div style={style1}>
      <div style={style2}>
        {children}
        <button style={{border:"none",padding:"2%",backgroundColor:"#030336",color:"white",borderRadius:"10px",cursor:"pointer"}} onClick={close}>Close</button>
      </div>
    </div>,document.getElementById('popup')
    )
  )
}

