import React from 'react'
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";


export const Reviews = () => {
  return (
    <div className='p-8 flex flex-col gap-8 bg-gray-100'>
      <h1 className='font-bold text-[40px] text-center'>Let's hear what they says</h1>
      <div className=' flex justify-center gap-5'>
        <span className='text-5xl text-primary'><RiDoubleQuotesL/></span>
        <p className='max-w-2xl text-center text-gray-500'>¡Experiencia excepcional! Confiamos en Impactful Digital Products para transformar nuestra visión en una realidad en línea, ¡y no podríamos estar más felices con los resultados! Su equipo talentoso de diseñadores web capturó perfectamente la esencia de nuestra marca y la tradujo en un sitio web impresionante. Cada detalle fue cuidadosamente considerado, desde la estética visual hasta la funcionalidad impecable.</p>
        <span className='text-5xl text-primary'><RiDoubleQuotesR/></span>
      </div>
      {/* Clients */}
      <div className='flex flex-col gap-8 items-center justify-center'>
        <div className='flex items-center justify-center gap-8 md:gap-12'>
          <img
            className='w-8 h-8 md:w-14 md:h-14 object-cover rounded-full'
            src='https://img.freepik.com/foto-gratis/chico-worldface-espanol-fondo-blanco_53876-137665.jpg?w=826&t=st=1692876145~exp=1692876745~hmac=701f2c297ceea698cbc69048638acb5a39086e4e1f8f14489cde37e1312b955d'
          />
          <img
            className='w-10 h-10 md:w-16 md:h-16 object-cover rounded-full'
            src='https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg?w=1380&t=st=1692876151~exp=1692876751~hmac=2d8112097601539c16af95b2d64728c750b4b2ba9ef7ea5ab1eb1410cf890771'
          />
          <img
            className='h-12 w-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white'
            src='https://img.freepik.com/foto-gratis/joven-morena-ropa-informal-mirando-lado-otro-sonrisa-cara-expresion-natural-riendo-confiado_839833-10725.jpg?w=1380&t=st=1692876182~exp=1692876782~hmac=6d69d6fc7d9678c4cc86485378094b0b919c8ce651e41efe6db557de4d0804e1'
          />
          <img
            className='w-10 h-10 md:w-16 md:h-16 object-cover rounded-full'
            src='https://img.freepik.com/foto-gratis/apuesto-hombre-negocios-exitoso-traje-telefono-movil_176420-31774.jpg?w=1380&t=st=1692876154~exp=1692876754~hmac=db0be64633e914e567313283b3c2c3db29bb0ce8c93504fb6bbb0116c939e0ec'
          />
          <img
            className='w-8 h-8 md:w-14 md:h-14 object-cover rounded-full'
            src='https://img.freepik.com/foto-gratis/autorretrato-hermosa-nina-china_1262-18293.jpg?w=1380&t=st=1692876176~exp=1692876776~hmac=4c48c2ebf8cde43f56d4b9d53f47e2f83920533fc36fba708976b536f4d7e5b3'
          />
        </div>
        <div className=''>
          <h3 className='text-center text-[24px] font-bold'>Ricky Aprilia</h3>
          <h5 className='text-center text-[18px] text-gray-500'>Founder of Varibo</h5>
        </div>
      </div>
    </div>
  )
}
