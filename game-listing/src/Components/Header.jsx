import React from 'react'
import logo from './../assets/images/logo.png'
import { HiOutlineSearch  } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";

function Header() {
  return (
    <div className ='flex items-center'>
          <img src={logo} alt="Logo"  width={60} height={70}/>
          <div className='flex bg-slate-200 p-2 ml-2 w-full mx-5 rounded-full items-center '>
              < HiOutlineSearch/>
        <input type="text" placeholder='Search Games' className =" px-2 bg-transparent outline-none" />
     </div>
          <div className="ml-2">
        <FaMoon/>
     </div>

    </div>
  )
}

export default Header
