import React from 'react'
// icons
import { RiMailFill, RiPencilRuler2Line, RiLightbulbFlashLine, RiSmartphoneFill, RiMacFill} from "react-icons/ri";
export const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:p-20 p-8 gap-8 md:gap-20'>
        {/* Contact */}
        <div className='flex flex-col gap-4'>
            <h1 className='text-[40px] font-bold'>How can we help you</h1>
            <p className='text-[20px] text-gray-500'>Follow our newsletter. We will regulary update our latest project and availability.</p>
            <form className='w-full'>
                <div className='relative'>
                    <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-2xl'/>
                    <input 
                        type='text' 
                        className='w-full bg-gray-200 py-4 pl-10 pr-36 rounded-xl outline-none' 
                        placeholder='Enter your email address'
                    />
                    <button type='submit' className='absolute text-lg font-semibold py-2 px-6 bg-primary text-white rounded-xl right-2 top-1/2 -translate-y-1/2'>Suscribe</button>
                </div>
            </form>
        </div>
        {/* Type of Services */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col gap-2'>
            <RiPencilRuler2Line className='text-3xl p-2 bg-secondary text-primary box-content rounded-xl'/>
            <h3 className='text-2xl font-bold'>UX/UI Design</h3>
            <p className='text-gray-500'>Attractive and accessible user interfaces.</p>
          </div>
          <div className='flex flex-col gap-2'>
            <RiLightbulbFlashLine className='text-3xl p-2 bg-secondary text-primary box-content rounded-xl'/>
            <h3 className='text-2xl font-bold'>Logo Branding</h3>
            <p className='text-gray-500'>Materialize your idea with an artistic and eye-catching touch.</p>
          </div>
          <div className='flex flex-col gap-2'>
            <RiSmartphoneFill className='text-3xl p-2 bg-secondary text-primary box-content rounded-xl'/>
            <h3 className='text-2xl font-bold'>App Design</h3>
            <p className='text-gray-500'>Adaptable designs for mobile</p>
          </div>
          <div className='flex flex-col gap-2'>
            <RiMacFill className='text-3xl p-2 bg-secondary text-primary box-content rounded-xl'/>
            <h3 className='text-2xl font-bold'>Webiste Design</h3>
            <p className='text-gray-500'>Adaptable designs for PC</p>
          </div>
        </div>
    </div>
  )
}
