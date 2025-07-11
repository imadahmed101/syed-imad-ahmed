import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const containerVariant = {
    hidden: { opacity: 0, y: -40 },
    show: {
        opacity: 1,
        transition: {
            duration: 2,
            delay: 4
        },
        y: 0
    }
}

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className=' '>

            <div className='flex justify-between bg-black rounded-full mt-4 text-white p-2 mx-4 px-2 md:px-4 md:mx-auto max-w-[1200px]'>
                <div className='hidden md:flex'>
                    <Link to='/' className='font-semibold mr-4 hover:text-blue-500 transition duration-500 p-2'>Home</Link>
                    <Link to='/projects' className='font-semibold mr-4 hover:text-blue-500 transition duration-500 p-2'>Projects</Link>
                    <a className='font-semibold hover:text-blue-500 transition duration-500 p-2' href="/resume.pdf" target="_blank">Resume</a>
                </div>
                <h1 className='p-2 font-semibold tracking-tight'><Link to='/' onClick={() => setOpen(false)}>Syed Imad Ahmed</Link></h1>
                <div className='hidden md:flex'>
                <Link to='/form' className='inline-flex font-semibold bg-[#084cab] hover:bg-blue-700 rounded-full mr-4 text-white p-2'>
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 my-auto ml-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
{/* 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 my-auto ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg> */}

                    </Link>
                </div>
                <div className='flex md:hidden'>
                    <button className='my-auto' onClick={() => setOpen((prev) => !prev)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={open ? 'hidden' : 'flex w-6 h-6'}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={open ? 'flex w-6 h-6' : 'hidden'}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className={open ? 'flex md:hidden flex-col absolute w-full h-auto z-100 bg-white text-black top-16 right-0 font-semibold' : 'hidden'}>
                    <Link to='/' onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-gray-500'>Home
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <Link to='/projects' onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-gray-500'>Projects
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <a onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-gray-500' href="/resume.pdf" target="_blank">Resume
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar