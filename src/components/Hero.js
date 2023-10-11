import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-black to-blue-950 py-16 md:py-32 px-4'>
      <div className='max-w-4xl mx-auto'>
          <p className='text-sm md:text-lg text-blue-400'>Syed Imad Ahmed</p>
          <h2 className='text-4xl md:text-4xl xl:text-6xl text-white font-bold tracking-tight pt-2'>Building Web Applications <br/>One Block At A Time</h2>
          <p className='md:text-lg xl:text-xl text-gray-300 font-semibold pt-12 mb-12'>Full Stack Web Developer utilizing JavaScript and React. Working with both front-end and back-end technologies. Focused on ui/ux when building web applications.</p>
          <Link to='/projects' className='border-2 border-white text-white text-xl rounded-md p-4 hover:bg-black transition duration-500 '>Check Projects</Link>
      </div>
    </div>
  )
}

export default Hero