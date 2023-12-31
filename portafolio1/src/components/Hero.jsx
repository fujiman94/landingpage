import React from 'react'
// Icons
import { RiCheckboxBlankCircleFill, RiPlayLine, RiStarFill, RiCheckboxBlankFill} from "react-icons/ri";


export const Hero = () => {
  return (
    <section className='min-h-[90vh] grid grid-cols-1 xl:grid-cols-8'>
        {/* Information */}
        <div className='md:col-span-5 flex items-center justify-center xl-p-16 p-8'>
          <div className='flex flex-col gap-8'>
          <h1 className='text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]'>
          Web Design ImpactFul Digital {" "}
            <span className='text-primary py-2 px-6 border-8 border-primary relative inline-block'>
            Products
            <RiCheckboxBlankCircleFill className='text-base absolute -left-5 -top-5 rounded-full text-white bg-primary p-2 box-content'/>
            <RiCheckboxBlankCircleFill className='text-base absolute -right-5 -top-5 rounded-full text-white bg-primary p-2 box-content'/>
            <RiCheckboxBlankCircleFill className='text-base absolute -left-5 -bottom-5 rounded-full text-white bg-primary p-2 box-content'/>
            <RiCheckboxBlankCircleFill className='text-base absolute -right-5 -bottom-5 rounded-full text-white bg-primary p-2 box-content'/>
            </span>
          </h1>
          <p className='text-gray-500 text-2xl leading-[2.5rem]'>Help find solutions that are intuitive and aligned with the client's business goals. We provide high-quality services. </p>
          <div className='flex flex-col md:flex-row item-center gap-4'>
            <button className='w-full bg-primary text-white py-2 px-8 rounded-xl text-xl xl:w-auto hover:text-gray-300 transition-colors'>
              Contact Us
            </button>
            <button className='w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8'>
              <RiPlayLine className='bg-secondary rounded-full text-primary p-4 box-content hover:text-gray-300 transition-colors'/>
              Watch our <br/> introduction video
            </button>
          </div>
          </div>
        </div>
        {/* Image */}
        <div className='md:col-span-3 flex items-center justify-center relative p-8'>
          {/* Content Image */}
          <div>
            <img
              src='hero.png'
              className='w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28'
            />
            <div className='relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center max-w-[250px] mx-auto gap-2 -mt-12'>
              <div className='flex items-center'>
                <img
                className='w-10 h-10 object-cover rounded-full ring-2 ring-gray-300'
                src='https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=1380&t=st=1692716658~exp=1692717258~hmac=46307a0f3cb26b55b0f38569eb73de6b37139094f526a0faf27d558d19063fb4'
                />
                <img
                className='w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4 bg-white'
                src='https://img.freepik.com/foto-gratis/retrato-mujer-casual-sonriente_171337-4168.jpg?w=1380&t=st=1692716664~exp=1692717264~hmac=1204e874ca71701725fc8be15234ce0e3108d69f63249061d311f438cfdf4f55'
                />
                <img
                className='w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4 bg-white'
                src='https://img.freepik.com/foto-gratis/morena-guapa-confiada-capucha-naranja-que-te-muestra-mejor-precio-senalando-dedo-arriba-mirando-camara-sonrisa-radiante-satisfecha-anuncia-producto-que-presenta-nueva-aplicacion_176420-52483.jpg?w=1380&t=st=1692716671~exp=1692717271~hmac=6ce9d6e8d72d2747111f3a6427f33f0208e1f9058c2042c58c76f0b6d30e97a0'
                />
                <img
                className='w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4 bg-white'
                src='https://img.freepik.com/foto-gratis/retrato-atractivo-repartidor-asiatico-camiseta-azul-gorra-feliz-sonriendo_74952-3150.jpg?w=1380&t=st=1692716686~exp=1692717286~hmac=064b7a098c007e888f812d09556b75785b648d5e4b16c3161e164b3d772911ab'
                />
                <img
                className='w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4 bg-white'
                src='https://img.freepik.com/foto-gratis/retrato-hombre-camisa-blanca_171337-11986.jpg?w=1380&t=st=1692716744~exp=1692717344~hmac=e5060bc38c9b06e0ec3f0de4f076647c058c931d76ae389468e99d1df0977ad4'
                />
              </div>
              <h2 className='text-xl font-bold tracking-[1px] text-gray-700'>
               120+ Employees
               </h2>
              <div className='flex items-center gap-2 text-lg text-gray-500'>
                <RiStarFill className='text-primary'/>
                5.0 ( 3.1k Reviews)
              </div>
              <div className='absolute -right-12 -bottom-12 -z-10'>
                <div className='relative'>
                <RiCheckboxBlankCircleFill className='text-primary text-8xl'/>
                <div className='absolute left-0 top-0 bg-white w-14 h-14'></div>
                </div>
              </div>
            </div>

          </div>
          {/* Circle */}
          <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-[380px] md:h-[380px] w-[280px] h-[280px] border-[10px] border-primary bg-white rounded-full -z-10'></div>
          {/* Logos */}
          <img className='w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute md:top-[15%] md:right-[5%] right-[10%] top-[15%]' src='figma.png'/>
          <img className='w-10 h-10 md:w-20 md:h-20 object-cover rounded-full  absolute top-[80%] right-[80%] bg-white -rotate-12' src='sketch.png'/>
          <img className='w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute -top-[0%] right-[75%]' src='adobe.png'/>
        </div>
    </section>
  )
}
