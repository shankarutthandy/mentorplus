import React from 'react'
import './NavBar.css'
import * as Fa from 'react-icons/fa'
export default function NavBar({onMenuClick}) {
  return (
    <>
    <div className='navbar'>
    <Fa.FaBars className='baricon' onClick={onMenuClick}/>
    </div>
    <hr className='line'/>
    </>
  )
}
