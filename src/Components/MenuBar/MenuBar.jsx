import React from 'react'
import './MenuBar.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
export default function MenuBar({sidebar,setPage,home,profile,onClose}) {
  return (
    // <div className="menubar-container">
    <div className={sidebar?'menubar active':'menubar'}>
    <div className='title'>Mentor<span style={{color:"red"}}>Plus<sup>+</sup></span></div>
    <div className={home?"menu-item active center":"menu-item center"} onClick={()=>setPage("home")}>Home</div>
    <div className={profile?"menu-item active center":"menu-item center"} onClick={()=>setPage("profile")}>Profile</div>
    <AiOutlineArrowLeft className='icon' onClick={onClose}/>
    </div>
    // </div>
  )
}
