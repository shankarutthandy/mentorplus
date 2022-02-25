import React from 'react'
import './MenuBar.css'
export default function MenuBar({sidebar,setPage,home,profile}) {
  return (
    <div className={sidebar?'menubar active':'menubar'}>
    <div className='title'>Mentor<span style={{color:"red"}}>Plus</span></div>
    <div className={home?"menu-item active center":"menu-item center"} onClick={()=>setPage("home")}>Home</div>
    <div className={profile?"menu-item active center":"menu-item center"} onClick={()=>setPage("profile")}>Profile</div>
    <div className="menu-item center"></div>
    <div className="menu-item center"></div>
    </div>
  )
}
