import React from 'react'

export const Clients = () => {
  return (
    <div className='bg-gray-100 p-8 flex flex-col items-center justify-center gap-4 mt-10 xl:mt-0'>
        <h1 className='text-2xl font-medium text-gray-800'>Trusted by greatest companies</h1>
        <div className='flex flex-col md:flex-row items-center gap-10 flex-wrap'>
            <img className='w-40' src='google.png'/>
            <img className='w-40' src='amazon.png'/>
            <img className='w-40' src='airbnb.png'/>
            <img className='w-40' src='shopify.png'/>
            <img className='w-40' src='binance.png'/>
        </div>
    </div>
  )
}
