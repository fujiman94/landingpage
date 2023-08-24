import React from 'react'
// icons
import { RiCheckboxBlankCircleFill, RiInstagramLine, RiFacebookLine, RiTwitterLine, RiGithubLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className='bg-footer p-8 xl:p-20 relative -z-10'>
        {/* Logo & Social */}
        <div>
            <div className='flex justify-between items-center border-b pb-8 border-gray-500'>
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
                    <li className='flex gap-8'>
                    <a href='#' className='bg-primary text-white p-4 rounded-full'><RiInstagramLine/></a>
                    <a href='#' className='bg-primary text-white p-4 rounded-full'><RiFacebookLine/></a>
                    <a href='#' className='bg-primary text-white p-4 rounded-full'><RiTwitterLine/></a>
                    <a href='#' className='bg-primary text-white p-4 rounded-full'><RiGithubLine/></a>
                    </li>
                </ul>
            </div>
        </div>
        {/* Company Info */}
        <div className='py-4'>
            <h2 className='p-1 text-gray-200 font-bold text-xl py-4'>Company</h2>
            <div className='p-1 flex justify-between text-gray-300 py-4  items-center'>
            <a href='#'>About Us</a>
            <a href='#'>Press</a>
            <a href='#'>Investors</a>
            <a href='#'>Events</a>
            <a href='#'>Terms of use</a>
            <a href='#'>Privacy policy</a>
            <button className='w-full bg-primary text-white py-2 px-5 rounded-xl text-xl xl:w-auto'>
              Contact Us
            </button>
            </div>
        </div>
        {/* Rights */}
            <h2 className=''>© fujimant 2023 - </h2>
        <div>

        </div>
    </footer>
  )
}
