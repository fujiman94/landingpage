import React from 'react'
// icons
import { RiCheckboxBlankCircleFill, RiInstagramLine, RiFacebookLine, RiTwitterLine, RiGithubLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className='bg-footer p-8 xl:p-10 absolute -z-10 left-0 right-0'>
        {/* Logo & Social */}
        <div>
            <div className='flex flex-col gap-10 items-center border-b pb-8 border-gray-500 justify-between md:flex-row md:gap-2 hover:text-white transition-colors'>
                {/* Logo */}
                <a href='#' className='text-2xl font-bold relative p-1 bg-footer text-gray-200'>
                Power
                <span className='text-primary text-5xl'>
                .
                </span>
                {" "}
                <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10'/>
                </a>
                {/* Social Media*/}
                <ul>
                    <li className='flex flex-col md:flex-row gap-8'>
                    <a href='#' className='bg-primary text-white p-4 rounded-full hover:text-gray-300 transition-colors'><RiInstagramLine/></a>
                    <a href='#' className='bg-primary text-white p-4 rounded-full hover:text-gray-300 transition-colors'><RiFacebookLine/></a>
                    <a href='#' className='bg-primary text-white p-4 rounded-full hover:text-gray-300 transition-colors'><RiTwitterLine/></a>
                    <a href='#' className='bg-primary text-white p-4 rounded-full hover:text-gray-300 transition-colors'><RiGithubLine/></a>
                    </li>
                </ul>
            </div>
        </div>
        {/* Company Info */}
        <div className='py-4'>
            <h3 className='p-1 text-gray-200 font-bold text-xl py-4 text-center md:text-left'>Company</h3>
            <nav className='p-16 flex flex-col gap-4 md:flex-row justify-between text-gray-300 py-4  items-center text-center'>
                <a href='#' className='hover:text-white transition-colors'>About Us</a>
                <a href='#' className='hover:text-white transition-colors'>Press</a>
                <a href='#' className='hover:text-white transition-colors'>Investors</a>
                <a href='#' className='hover:text-white transition-colors'>Events</a>
                <a href='#' className='hover:text-white transition-colors'>Terms of use</a>
                <a href='#' className='hover:text-white transition-colors'>Privacy policy</a>
                <button className=' bg-primary text-white py-2 px-5 rounded-xl text-xl xl:w-auto hover:text-gray-300 transition-colors'>
                    Contact Us
                </button>
            </nav>
        </div>
        
        {/* Rights */}
        <div className='flex justify-center text-center p-2'>
            <h2 className='text-gray-300'>© fujimant 2023 - All Rights Reserved</h2>
        </div>
    </footer>
  )
}

export default Footer;