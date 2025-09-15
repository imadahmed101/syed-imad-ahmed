import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='md:mb-8 font-semibold'>
            <div className='bg-gradient-to-br from-[#084cabb5] to-[#084cab] rounded-none xl:rounded-md px-4 py-16 max-w-[1200px] text-left md:text-center mx-auto text-white'>
                <div className='max-w-[600px] mx-auto'>
                    <h5 className='text-3xl pb-4'>Limited Time Offer - First Month Free</h5>
                    <p className='text-lg pb-8'>With our current promotion, get a web designed and deployed for no startup cost.</p>
                    <Link to='/form' className='inline-flex text-lg md:text-xl font-semibold bg-black hover:bg-white text-white hover:text-black py-2 px-4'>
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 my-auto ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact