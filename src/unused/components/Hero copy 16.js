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
          variants={itemVariant1} className='text-sm md:text-xl pb-16 md:pb-20'>Custom tailored to fit your requirements</p>

      </div>

      {/* create microanimations for these icons and when you click itll be like a modal popup to show the info */}


      {/* <div className='flex justify-center gap-4 text-xl'>
  <div className='w-[300px] py-16 bg-gray-200 border-[1px] border-gray-300 rounded-md text-center'>
  <p>New Website</p>
  </div>
  <div className='w-[300px] py-16 bg-gray-200 border-[1px] border-gray-300 rounded-md text-center'>
  <p>Existing Website</p>
  </div>
</div> */}

      <div className='flex justify-center'>
        <Link to='/form' className='inline-flex text-lg font-semibold bg-[#084cab] hover:bg-blue-700 text-white rounded-full py-2 px-4'>
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 my-auto ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Link>
      </div>

      {/* <div className='flex justify-center gap-4 text-xl'>
        <div className='w-[300px] bg-black text-white border-[1px] border-gray-300 rounded-md text-center pt-4'>
          <p>Looking to</p>
          <p className='text-sm'>Create a new website</p>
          <p className='text-sm'>Upgrade an existing website</p>
          <div className='flex justify-end pt-16 mr-2 mb-2'>
          <p className='inline-flex text-sm bg-white rounded-full text-black p-1'>
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 my-auto ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </p>
          </div>
        </div>
        <div className='w-[300px] bg-black text-white border-[1px] border-gray-300 rounded-md text-center pt-4'>
          <p>Upgrade Website</p>
          <div className='flex justify-end pt-16 mr-2 mb-2'>
          <p className='inline-flex text-sm bg-white rounded-full text-black p-1'>
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 my-auto ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </p>
          </div>
        </div>
      </div> */}


      {/* <div className='flex justify-center'>
  <input className='border-[#084cab] border-[1px] rounded-l-full'/>
  <p className='bg-[#084cab] text-white p-2 border-[#084cab] border-[1px] rounded-r-full'>Get Started</p>
  <div className='b-2 b-black'></div>
  <p className='bg-black rounded-full ml-4 p-2 text-white my-auto'>Get Started</p>
</div> */}


      <div className='flex gap-8 flex-row justify-center pb-20'>

        {/* <motion.div variants={itemVariant2} whileHover={{ scale: 2 }}>


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
          </motion.div> */}

      </div>
      <div className='hidden md:flex justify-center max-w-[1200px] mx-auto gap-2 text-gray-400 pt-4 pb-8'>
        {/* <p>Worked with:</p>
        <p>Willis & Monroe Associates</p>
        <p>-</p>
        <p>Mission Possible Escape Rooms</p> */}

        <p>Offering website development and design services for your small business to increase and grow your online presence</p>

      </div>



      {/* <div className='flex flex-row md:flex-col gap-6 absolute top-[415px] md:top-[250px] left-[80px] 2xl:left-[200px] max-w-[200px] md:max-w-[50px] text-sm text-center text-gray-400'>
        <div>
          <img src='images/name.png' className='' />
          <p>about</p>
        </div>
        <div>
          <img src='images/folder.png' className='' />
          <p>projects</p>
        </div>
        <div>
          <img src='images/price.png' className='' />
          <p>pricing</p>
        </div>
      </div> */}


      {/* <img src='images/computer.jpg' className='absolute top-0 -z-10 left-[1400px] w-[800px]' /> */}



      {/* <div className='sticky bottom-0 md:hidden'>
        <div>
          <img src='images/name.png' className='' />
          <p>about</p>
        </div>
        <hr className='bg-gray-300 h-[2px]'/>
        <div>
          <img src='images/folder.png' className='' />
          <p>projects</p>
        </div>
        <hr className='bg-gray-300 h-[2px]'/>
        <div>
          <img src='images/price.png' className='' />
          <p>pricing</p>
        </div>
      </div> */}



    </div>

  )
}

export default Hero