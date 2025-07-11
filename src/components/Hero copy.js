import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '../animations/aaaa.json'

const Hero = () => {
  return (

    <div className='pt-2 pb-2 md:mb-8 px-4 overflow-hidden'>
      <div className='flex flex-col md:flex-row text-center md:text-left text-black py-2 px-4 max-w-[1200px] mx-auto'>
        <div className='flex-1 max-w-[600px] mx-auto md:mr-8'>
          <h2 className=' text-3xl md:text-6xl font-semibold pt-16 md:pt-32 pb-4 md:pb-8 text-black'>Website Solutions For Your Business</h2>
          <p className='text-lg md:text-xl text-gray-600 pb-8 md:pb-16'>Website development and design services custom tailored to help increase and grow your online presence.</p>

          <Link to='/form' className='inline-flex text-lg md:text-xl font-semibold bg-black hover:bg-gradient-to-br hover:from-[#084cabb5] hover:to-[#084cab] text-white rounded-full py-2 px-4'>
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 my-auto ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </Link>
        </div>
        <div className='flex-1 max-w-[600px] mx-auto overflow-hidden'>
        {/* <Lottie animationData={animationData} className='w-[250px] md:w-[550px]' /> */}
        
        <picture>
                    <source type='image/webp' srcSet="images/hero-img-2.webp" />
          <img src='images/hero-img-2.jpg' alt='Working together to complete your business objectives' className='w-[300px] sm:w-[400px] md:w-[500px] h-[206px] sm:h-[277px] md:h-[344px] object-cover mt-8 md:mt-32 mx-auto' />
                </picture>
        </div>
      </div>
    </div>

  )
}

export default Hero