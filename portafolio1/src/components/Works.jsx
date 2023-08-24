import React from 'react'

export const Works = () => {
  return (
    <div className='p-8 xl:p-20 '>
      <div className='mb-8'>
        <h1 className='font-bold text-[40px]'>
        We create world-class digital products
        </h1>
        <p className='text-xl text-gray-500'>
        Providing information about world design to the best instructors, aiding through information
        </p>
      </div>
      {/* Works izq*/}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-2'>
          <img src='work1.png' className='w-full rounded-3xl object-cover'/>
          <p className='text-gray-500'>App Design - June 20, 2022</p>
          <h3 className='text-2xl font-bold'>App Redesign</h3>
          <p>By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping</p>
        </div>
        {/* Works der*/}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col gap-4'>
            <img src='work2.png' className='w-full rounded-3xl h-56 object-cover'/>
            <p className='text-gray-500'>App Design - June 20, 2022</p>
            <h3 className='text-2xl font-bold'>Redesign channel website landing page</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <img src='work3.png' className='w-full rounded-3xl h-56 object-cover'/>
            <p className='text-gray-500'>App Design - June 20, 2022</p>
            <h3 className='text-2xl font-bold'>New Locator App For a New Company</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <img src='work4.png' className='w-full rounded-3xl h-56 object-cover'/>
            <p className='text-gray-500'>App Design - June 20, 2022</p>
            <h3 className='text-2xl font-bold'>Rental Rooms Web App Platform</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <img src='work5.png' className='w-full rounded-3xl h-56 object-cover'/>
            <p className='text-gray-500'>App Design - June 20, 2022</p>
            <h3 className='text-2xl font-bold'>Calendar App for Big SASS Company</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
