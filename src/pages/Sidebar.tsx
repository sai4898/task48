import React from 'react'
import Home from './Home'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-red-500 w-60 h-screen p-3 flex flex-col text-white'>
        <div className='m-4'>
            <NavLink to='/'>
                <h1>Home</h1>
            </NavLink>
        </div>
        <div className='m-4'>
      
            <NavLink to='/contact'>
                <h1>Map</h1>
            </NavLink>
        </div> 
        <div className='m-4'>
        
            <NavLink to='/form'>
                <h1>Contact Form</h1>
            </NavLink>
        </div>

    </div>
  )
}

export default Sidebar