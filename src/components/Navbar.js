import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <header className=' top-0 bg-yellow-300 z-50 border-gray-300'>
        {/* <header className=' sticky top-0 bg-white border-b-[1px] z-50 border-gray-300'> */}

            <div className='flex justify-between text-black py-2 px-4 max-w-[1200px] mx-auto'>
                <h1 className='p-2 font-semibold tracking-tight'><Link to='/' onClick={() => setOpen(false)}>Syed Imad Ahmed</Link></h1>
                <nav className='hidden md:flex'>
                    <Link to='/' className='font-semibold mr-4 hover:text-blue-500 transition duration-500 p-2'>Home</Link>
                    <Link to='/services' className='font-semibold mr-4 hover:text-blue-500 transition duration-500 p-2'>Services</Link>
                    <Link to='/projects' className='font-semibold mr-4 hover:text-blue-500 transition duration-500 p-2'>Projects</Link>
                    {/* <Link to='/dev' className='font-semibold mr-4 hover:text-blue-500 transition duration-500 p-2'>Dev</Link> */}
                    <Link to='/about' className='font-semibold mr-4 hover:text-blue-500 transition duration-500 p-2'>About</Link>
                    <Link to='/form' className='inline-flex font-semibold bg-gradient-to-br from-[#084cabb5] to-[#084cab] hover:from-black hover:to-black text-white py-2 px-4'>
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </Link>
                </nav>
                <div className='flex md:hidden'>
                    <button aria-label='Open the menu' className='my-auto' onClick={() => setOpen((prev) => !prev)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={open ? 'hidden' : 'flex w-6 h-6'}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={open ? 'flex w-6 h-6' : 'hidden'}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className={open ? 'flex md:hidden flex-col absolute w-full z-100 bg-white text-black top-14 right-0 font-semibold' : 'hidden'}>
                    <Link to='/' onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-gray-500'>Home
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <Link to='/services' onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-gray-500'>Services
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <Link to='/projects' onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-gray-500'>Projects
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                                        {/* <Link to='/dev' onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-gray-500'>Dev
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link> */}
                    <Link to='/about' onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-gray-500'>About
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <Link to='/form' onClick={() => setOpen(false)} className='flex justify-between p-4 hover:bg-gray-300 border-b border-gray-500'>Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar