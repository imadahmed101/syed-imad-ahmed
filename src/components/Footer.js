import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-black p-4'>
      <div className='flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto text-gray-400'>
        <p>© 2025 Syed Imad Ahmed</p>
        <div className='inline-flex flex-wrap'>
          <Link to='/services' className='mr-2 md:mr-4'>Services</Link>
          <Link to='/projects' className='mr-2 md:mr-4'>Projects</Link>
          <Link to='/about' className='mr-2 md:mr-4'>About</Link>
          <Link to='/form' className='mr-2 md:mr-4'>Get Started</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer