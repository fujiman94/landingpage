import React, { useState } from 'react'
//icons
import { RiCheckboxBlankCircleFill, RiMenuFill, RiCloseLine } from "react-icons/ri";


export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='flex items-center w-full py-4 px-8 h-[15vh] justify-between xl:justify-start z-50'>
        <div className='xl:w-1/6 text-center -mt-4 hover:text-gray-300 transition-colors'>
            <a href='#' className='text-2xl font-bold relative p-1 bg-white'>
            Power
            <span className='text-primary text-5xl'>
            .
            </span>
            {" "}
            <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10'/>
            </a>
        </div>
        <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 flex-col flex xl:static flex-1 xl:flex-row items-center gap-10 justify-center transition-all duration-500 z-50`}>
            <a href='#' className='hover:text-gray-300 transition-colors'>Home</a>
            <a href='#' className='hover:text-gray-300 transition-colors'>About Us</a>
            <a href='#' className='hover:text-gray-300 transition-colors'>Services</a>
            <a href='#' className='hover:text-gray-300 transition-colors'>Products</a>
        </nav>
        <button onClick={ () => setShowMenu(!showMenu) } className='text-2xl p-2 xl:hidden'>
          {showMenu ? <RiCloseLine/> : <RiMenuFill/>}
        </button>
    </header>
  )
}
 