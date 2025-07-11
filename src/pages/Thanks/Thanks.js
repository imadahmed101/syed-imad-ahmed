import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

const Thanks = () => {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className='max-w-[600px] px-2 mx-auto text-center'>
                <h1 className='pt-8 pb-4 text-2xl'>Thanks for sending your inquiry!</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 mx-auto mb-4 text-green-600 opacity-70">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className='text-gray-500 pb-8'>
                    Please allow 24-48 business hours to get in touch with you.
                </p>
                <Link to='/' className='underline'>Back Home</Link>
            </div>
        </div>
    )
}

export default Thanks