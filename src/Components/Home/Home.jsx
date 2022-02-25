import React, { useState } from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import './Home.css'
export default function Home({onClose,slots}) {
  const [date,setDate]=useState(-1);
  const [slot,setSlot]=useState(-1);
  return (
    <div className='home'>
    <div className="top-home">
    <IoMdArrowRoundBack className='back-btn'onClick={onClose}/><br />
    <span className="home-title">Book Demo Session Slot</span>
    <br />
    <hr style={{width:"5%",display:"inline-block",border:"none",backgroundColor:'blue',height:"2px"}}/>
    <hr style={{width:"5%",display:"inline-block",border:"none",backgroundColor:'red',height:"2px"}}/>
    </div>
    <div className="select-date">
    <span className='select-date-text'>Select Date</span><br />
    <div className="card-container">
    {slots.map((ele,key)=>{
      return (
        <div key={key} className={date===key?"date-card active":"date-card"} onClick={()=>{setDate(key);setSlot(-1)}}>
          <span className='smaller'>{ele.day}</span>
          <span>{ele.date}</span>
          <span className='smaller'>{ele.month}</span>
        </div>
      )
    })}
    </div>
    </div>
    <div className="select-slot">
      <span className="select-slot-text">Select Slot</span><br />
      <div className="card-container slot">
        {date===-1?null:(slots[date].availability.map((ele,key)=>{
          return (<div className={slot===key?"slot-card center active":"slot-card center"} key={key} onClick={()=>setSlot(key)}>{ele}</div>)
        }))}
      </div>
    </div>
    <button className="proceed-btn">Proceed to Pay</button>
    </div>
  )
}
