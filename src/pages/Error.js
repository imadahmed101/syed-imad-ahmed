import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Error = () => {
  return (
    <div className='min-h-screen text-center'>
      <Navbar />
      <h2 className='text-xl font-semibold py-16'>
        Page not Found.
      </h2>
      <p>
        <Link to='/' className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500'>Back to home</Link>
      </p>
    </div>
  )
}

export default Error