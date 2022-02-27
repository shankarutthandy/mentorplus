import React, { useState } from 'react'
import './NavBar.css'
import * as Fa from 'react-icons/fa'
import {AiFillCaretDown} from 'react-icons/ai'
import { onlineTraining } from './NavbarData'
export default function NavBar({onMenuClick,dropDown,setDropState}) {
  const [innerHover,setInnerHover]=useState(0)
  return (
    <>
    <div className='navbar'>
    <div className="navbar-left"><Fa.FaBars className='baricon' onClick={onMenuClick}/></div>
    <div className="navbar-center">Mentor<span style={{color:"red"}}>Plus<sup>+</sup></span></div>
    <div className="navbar-right">
      <div className="center dropdown" onMouseEnter={()=>setDropState([true,false,false])} onMouseLeave={()=>setDropState([false,false,false])}>
        <span className="drop">Online Trainings<AiFillCaretDown className='dropeff'/></span>
        {dropDown[0]?(
          <div className="table">
            <div className="divisions">
              <span className={innerHover===0?"division-title":"division-title"} onMouseEnter={()=>setInnerHover(0)}>Recommended for You</span>
              <span className={innerHover===1?"division-title active":"division-title"} onMouseEnter={()=>setInnerHover(1)}>Programming</span>
              <span className={innerHover===2?"division-title active":"division-title"} onMouseEnter={()=>setInnerHover(2)}>Bussiness & Management </span>
              <span className={innerHover===3?"division-title active":"division-title"} onMouseEnter={()=>setInnerHover(3)}>Core Engineering</span>
              <span className={innerHover===4?"division-title active":"division-title"} onMouseEnter={()=>setInnerHover(4)}>Data Science</span>
              <span className={innerHover===5?"division-title active":"division-title"} onMouseEnter={()=>setInnerHover(5)}>UI/UX Design</span>
              <span className={innerHover===6?"division-title active":"division-title"} onMouseEnter={()=>setInnerHover(6)}>Creative Arts</span>
              <span className={innerHover===7?"division-title active":"division-title"} onMouseEnter={()=>setInnerHover(7)}>Language</span>
            </div>
            <div className="divisions">
            {
            onlineTraining[innerHover].map((ele,key)=>{
              return (<span key={key} className="division-title result">{ele}</span>)
            })
            }
            </div>
          </div>
         ):null}
      </div>
      <div className="center dropdown" onMouseEnter={()=>setDropState([false,true,false])} onMouseLeave={()=>setDropState([false,false,false])}><span className="drop ">Get Involved<AiFillCaretDown className='dropeff'/></span>
      {dropDown[1]?(
        <div className="table">
        <div className="divisions uni">
        <span className="division-title uni">Member/Staff</span>
        <span className="division-title uni">Sponsor</span>
        <span className="division-title uni">Mentor</span>
        <span className="division-title uni">Teaching Assistant</span>
        <span className="division-title uni">Marketting</span>
        </div>
        </div>
      ):null}
      </div>
      <div className="center dropdown" onMouseEnter={()=>setDropState([false,false,true])} onMouseLeave={()=>setDropState([false,false,false])}><span className="drop ">Upcoming courses<AiFillCaretDown className='dropeff'/></span>
      {
        dropDown[2]?(
          <div className="table">
          <div className="divisions uni">
          <span className="division-title uni">IBM Data Engineering</span>
          <span className="division-title uni">Intuit Bookkeeping</span>
          <span className="division-title uni">Google Project Management</span>
          <span className="division-title uni">IBM Cyber Security</span>
          <span className="division-title uni">Salesforce Sales Management</span>
          </div>
          </div>
        ):null
      }
      </div>
      <div className="logout">Logout</div>
    </div>
    </div>
    <hr className='line'/>
    </>
  )
}
