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
  } }
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
   },
  show: { 
    opacity: 1,
    transition: {
      duration: 2,
      delay: 5,
    }
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
      delay: 5,
    }
   }
}

const itemVariant4 = {
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

const itemVariant5 = {
  hidden: { opacity: 0 },
  show: { opacity: 0.4,
  transition: {
    duration: 3,
    delay: 4,
  } }
}

const itemVariant6 = {
  hidden: { opacity: 0 },
  show: { opacity: 0.4,
  transition: {
    duration: 3,
    delay: 4,
  } }
}


const Hero = () => {
  return (
    <motion.div variants={containerVariant} initial='hidden'
    animate='show' className=''>


        <div className='py-2 px-4 '>
          <div className='text-center text-black py-2 px-4 max-w-[1200px] mx-auto'>

            <motion.h2
              variants={itemVariant}

              className=' text-3xl md:text-6xl pt-32 pb-4 md:pt-32 px-4 flex justify-center text-gray-700'>Website Solutions For Your Business</motion.h2>

            {/* can make this change to display more relevant benefits */}
            <motion.p
              variants={itemVariant1} className='text-sm md:text-xl pt-8 pb-16 md:pb-60'>Custom tailored to fit your requirements</motion.p>

          </div>



          <motion.div variants={itemVariant2} className='flex gap-4 flex-row justify-center'>


            {/* create microanimations for these icons and when you click itll be like a modal popup to show the info */}

            
              
              <div>
                <img src='images/name.png' className='h-[75px]' />
                <p className='text-center text-gray-600'>About Me</p>
              </div>

              <div>
                <img src='images/folder.png' className='h-[75px]' />
                <p className='text-center text-gray-600'>Projects</p>
              </div>

              <div>
                <img src='images/price.png' className='h-[75px]' />
                <p className='text-center text-gray-600'>Pricing</p>
              </div>

            </motion.div>

            {/*             
            <motion.div variants={itemVariant} className='w-[100px] md:w-[200px] pb-4 rounded-md bg-[#de0000] text-center text-white'>
              <h3>HELLO</h3>
              <p>my name is</p>
              <div className='bg-white md:py-8 mx-2'>
                <p className='md:text-4xl text-gray-700'>Imad</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariant} className='w-[100px] md:w-[200px] pb-4 rounded-md bg-[#f5d64c] text-center text-white'>
              <div className='flex flex-row'>
                <div className='flex-1 bg-[#d3b841] rounded-tl-md py-2'>
                  <p className='text-[10px] md:text-xs text-black text-left ml-2 font-semibold'>Projects</p>

                </div>
                <div className='flex-1 bg-white'>

                </div>
              </div>
              <div className=' py-6 md:py-8 mx-2'>
              </div>
            </motion.div>

            <motion.div variants={itemVariant} className='w-[100px] md:w-[200px] py-8 rounded-md bg-[#6da24b] text-center text-white'>
              <div className='bg-[#9fd052] md:py-8 mx-2'>
                <p className='md:text-4xl text-gray-700'>Pricing</p>
              </div>
            </motion.div> */}


          <motion.div variants={itemVariant3} className='absolute top-0 -z-10 max-h-[760px] overflow-hidden'>
            <img src='images/hero-bg.jpg' className='' />

          </motion.div>

        </div>

    </motion.div>

  )
}

export default Hero