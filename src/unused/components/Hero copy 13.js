import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


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
    <motion.div variants={containerVariant} initial='hidden'
      animate='show' className=''>


      <div className='py-2 px-4 bg-[#3a6db2]'>
        <div className='text-center text-white py-2 px-4 max-w-[1200px] mx-auto'>

          <motion.h2
            variants={itemVariant}

            className=' text-3xl md:text-6xl font-semibold pt-16 pb-4 md:pt-32 px-4 flex justify-center text-white'>Website Solutions For Your Business</motion.h2>

          {/* can make this change to display more relevant benefits */}
          <motion.p
            variants={itemVariant1} className='text-sm md:text-xl pb-16 md:pb-20'>Custom tailored to fit your requirements</motion.p>

        </div>





        {/* create microanimations for these icons and when you click itll be like a modal popup to show the info */}

        <div className='flex gap-8 flex-row justify-center pb-20'>

          <motion.div variants={itemVariant2} whileHover={{ scale: 2 }}>


            <img src='images/name.png' className='mx-auto h-[50px] md:h-[75px]' />
            <p className='text-center text-gray-200'>About Me</p>
          </motion.div>


          <motion.div variants={itemVariant2} whileHover={{ scale: 2 }}>
            <img src='images/folder.png' className='mx-auto h-[50px] md:h-[75px]' />
            <p className='text-center text-gray-200'>Projects</p>
          </motion.div>

          <motion.div variants={itemVariant2} whileHover={{ scale: 2 }}>

            <img src='images/price.png' className='mx-auto h-[50px] md:h-[75px]' />
            <p className='text-center text-gray-200'>Pricing</p>
          </motion.div>


          {/* <motion.div variants={itemVariant3} className='absolute top-0 -z-10 max-h-[760px] overflow-hidden'>
            <img src='images/hero-bg.jpg' className='' />

          </motion.div> */}

        </div>
        </div>

    </motion.div>

  )
}

export default Hero