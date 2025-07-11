import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='text-center bg-black text-white px-4 py-16 md:py-32'>
      <div className='max-w-[700px] mx-auto'>
        <h2 className='text-2xl md:text-6xl text-blue-500 mb-8 font-bold'>Full Stack Developer</h2>
        <p className='mb-16 font-semibold'>I am a full-stack web developer immersed in the javascript ecosystem. Using various technologies to create usable front ends and reliable back ends.</p>
        <Link to='/projects' className='border-2 border-blue-500 text-white font-semibold rounded-full p-2 mr-2 bg-blue-500 hover:bg-white hover:border-white hover:text-black transition duration-500 '>Check Projects</Link>
        <a href="./resume.pdf" target="_blank" className='border-2 border-white text-white font-semibold rounded-full p-2 hover:bg-white hover:text-black transition duration-500 '>View Resume</a>
      </div>
    </div>
  )
}

export default Hero