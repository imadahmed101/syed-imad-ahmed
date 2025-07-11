import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='bg-black'>
            <div className='flex justify-between text-white py-2 px-4 max-w-[1200px] mx-auto'>
                <h1 className='p-2 font-semibold tracking-tight'><Link to='/' onClick={()=>setOpen(false)}>Imad's Portfolio</Link></h1>
                <div className='hidden md:flex'>
                    <Link to='/' className='font-semibold mr-4 hover:text-blue-500 transition duration-500 p-2'>Home</Link>
                    <Link to='/projects' className='font-semibold mr-4 hover:text-blue-500 transition duration-500 p-2'>Projects</Link>
                    <a className='font-semibold text-white hover:text-blue-500 transition duration-500 p-2' href="/resume.pdf" target="_blank">Resume</a>
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
                    <Link to='/' onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-blue-500'>Home
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <Link to='/projects' onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-blue-500'>Projects
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <a onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-blue-500' href="/resume.pdf" target="_blank">Resume
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