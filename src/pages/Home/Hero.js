import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '../../animations/animation.json'

const Hero = () => {

  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(45, true);
    }
  }, []);

  return (

    <div className='bg-yellow-300 pt-2 pb-2 px-4 overflow-hidden'>
      <div className='flex flex-col md:flex-row text-center md:text-left text-black py-2 px-4 max-w-[1200px] mx-auto'>
        <div className='flex-1 max-w-[600px] mx-auto md:mr-8'>
          <h2 className=' text-5xl md:text-6xl font-bold pt-16 md:pt-32 pb-4 md:pb-8 text-black'>Website Solutions For Your Business</h2>
          <p className='text-lg md:text-2xl text-gray-900 font-bold pb-8 md:pb-16'>Website development and design services custom tailored to help increase and grow your online presence.</p>


          <Link to='/form' className='inline-flex text-lg md:text-xl font-semibold bg-gradient-to-br from-[#084cabb5] to-[#084cab] hover:from-black hover:to-black text-white py-2 px-4 mr-4'>
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 my-auto ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </Link>

        </div>
        <div className='flex-1 max-w-[600px] mx-auto overflow-hidden'>
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={false}
            autoplay={true}
            className='w-[250px] md:w-[550px]' />

        </div>
      </div>
    </div>

  )
}

export default Hero