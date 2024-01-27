import React from 'react'
import logo from './../assets/images/logo.png'
import { HiOutlineSearch  } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";

function Header() {
  return (
    <div className ='flex items-center'>
          <img src={logo} alt="Logo"  width={60} height={60}/>
          <div className='flex bg-slate-200 p-2 ml-2 w-full items-center '>
              < HiOutlineSearch/>
        <input type="text" className ="bg-transparent outline-none" />
     </div>
          <div className="ml-2">
        <FaMoon/>
     </div>

    </div>
  )
}

export default Header
