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

    <div className='pt-2 pb-2 md:mb-8 px-4 overflow-hidden'>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition:{duration: 1.5} }}
      viewport={{ once: true }}
       className='flex flex-col md:flex-row text-black py-2 px-4 max-w-[1200px] mx-auto'>
        <div className='max-w-[600px] mr-8'>

          <h2
            className=' text-3xl md:text-6xl font-semibold pt-16 md:pt-32 pb-4 md:pb-8 text-black'>Website Solutions For Your Business</h2>

          <p className='text-lg md:text-xl text-gray-600 pb-8 md:pb-16'>Website development and design services custom tailored to help increase and grow your online presence.</p>

          <Link to='/form' className='inline-flex text-lg md:text-xl font-semibold bg-black hover:bg-gradient-to-br hover:from-[#084cabb5] hover:to-[#084cab] text-white rounded-full py-2 px-4'>
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 my-auto ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </Link>
        </div>
        <div className='max-w-[600px]'>
          {/* <div className='bg-yellow-400 rounded-3xl'> */}
          <img src='images/hero-img.jpg' className='border-yellow-400 border-l-[20px] border-t-[20px] max-w-[500px] rounded-xl mt-8 md:mt-32 ml-4 md:ml-8' />
          {/* </div> */}
        </div>
      </motion.div>



    </div>

  )
}

export default Hero