import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// import Form from '../pages/Form'


const containerVariant = {

}

const itemVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
    }
  }
}

const itemVariant1 = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 2,
    }
  }
}

const itemVariant2 = {

  hidden: {
    opacity: 0,
    y: 80
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 4,
    },
    y: 0
  }
}

const itemVariant3 = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 4,
    }
  }
}



const Hero = () => {
  return (

    <div className='py-2 px-4'>
      <div className='text-center text-black py-2 px-4 max-w-[1200px] mx-auto'>

        <h2
          className=' text-3xl md:text-6xl font-semibold pt-16 pb-4 md:pt-32 px-4 flex justify-center text-black'>Website Solutions For Your Business</h2>

        {/* can make this change to display more relevant benefits */}
        <p
          variants={itemVariant1} className='text-sm max-w-[600px] mx-auto md:text-xl pb-16 md:pb-20'>Offering website development and design services for your small business to increase and grow your online presence.</p>

      </div>

      {/* create microanimations for these icons and when you click itll be like a modal popup to show the info */}

      <div className='flex justify-center'>
        <Link to='/form' className='inline-flex text-lg font-semibold bg-[#084cab] hover:bg-blue-700 text-white rounded-full py-2 px-4'>
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 my-auto ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Link>
      </div>

      <div className='flex gap-8 flex-row justify-center pb-20'>

      </div>
      <div className='hidden md:flex justify-center max-w-[1200px] mx-auto gap-2 text-gray-400 pt-4 pb-8'>

        <p></p>

      </div>

    </div>

  )
}

export default Hero