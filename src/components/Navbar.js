import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex justify-between border-b-2 border-gray-800 bg-black text-white py-2 px-4'>
            <div>
                <h1 className='text-lg p-2 font-semibold tracking-tight'><Link to='/'>Imad's Portfolio</Link></h1>
            </div>
            <div className='hidden md:flex'>
                <Link to='/' className='text-lg font-semibold mr-2 border-2 border-black hover:border-white hover:text-white rounded-md transition duration-500 p-2'>Home</Link>
                <Link to='/projects' className='text-lg font-semibold mr-2 border-2 border-black hover:border-white hover:text-white rounded-md transition duration-500 p-2'>Projects</Link>
                <a className='text-lg font-semibold border-2 border-white bg-white text-black hover:bg-black hover:text-white rounded-md transition duration-500 p-2' href="./resume.pdf" target="_blank">Resume</a>
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

            <div className={open ? 'flex flex-col absolute w-auto h-auto bg-white text-black top-16 right-2 z-10 text-center' : 'hidden'}>

                <Link to='/' className='p-4 hover:bg-gray-300'>Home</Link>
                <Link to='/projects' className='p-4 hover:bg-gray-300'>Projects</Link>
                <a className='p-4 hover:bg-gray-300' href="./resume.pdf" target="_blank">Resume</a>

            </div>
        </div>
    )
}

export default Navbar