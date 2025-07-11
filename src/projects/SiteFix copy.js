import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SiteFix = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <Navbar />
            <div className='text-center px-4 py-16'>
                <div className='max-w-[700px] mx-auto'>
                    <h2 className='text-2xl md:text-4xl text-blue-500 mb-8 font-bold'>Site Fix</h2>
                </div>
            </div>
            <div>
                <div className='py-8 md:py-16 px-4'>
                    <div className='max-w-4xl mx-auto'>
                        <div className='max-w-[1200px] mx-auto text-gray-700'>

                            <div className='max-h-[300px] mt-8 overflow-hidden'>
                                <a href='http://sitefix.ca/' target="_blank">
                                    <img src='/images/sitefix-1.png' className='shadow-md shadow-gray-800' />
                                </a>
                            </div>
                        </div>

                        <div className='pt-4 mb-16'>
                            <h3 className='text-2xl md:text-4xl font-bold mt-2'>Web Agency Application</h3>
                            <h2 className='md:text-lg font-semibold text-blue-500 mb-8'><a href='http://sitefix.ca/' target="_blank">sitefix.ca</a></h2>
                            <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500 mr-2' href='http://next.sitefix.ca/' target="_blank">View Live</a>
                            <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500' href='https://github.com/imadahmed101/sitefix-backend' target="_blank">GitHub</a>
                            <p className='mt-8 mb-8 text-gray-700'>Web Agency Application built using the MERN stack. React for the front end, Node and Express for the backend. Using MongoDB as the database and Azure/GitHub for CI/CD.</p>
                            <p className='font-semibold mb-4'>
                                <span className='bg-purple-900 text-white mr-2 px-2 py-1'>
                                    Front-End
                                </span>
                                React
                            </p>
                            <p className='font-semibold mb-4'>
                                <span className='bg-purple-900 text-white mr-2 px-2 py-1'>
                                    Back-End
                                </span>
                                Node.js
                                Express.js
                            </p>
                            <p className='font-semibold mb-4'>
                                <span className='bg-purple-900 text-white mr-2 px-2 py-1'>
                                    Database
                                </span>
                                MongoDB
                            </p>
                            <p className='font-semibold mb-4'>
                                <span className='bg-purple-900 text-white mr-2 px-2 py-1'>
                                    CI/CD DevOps
                                </span>
                                Azure
                                GitHub
                            </p>
                        </div>

                        <div className='mx-auto md:mx-0 py-4 md:py-0'>
                            <div onClick={() => { setShow((prev) => !prev) }} className='max-w-[1200px]'>
                                {show && <img src='/images/sitefix-full.png' className='w-[900px] mx-auto p-[1px] bg-blue-300 rounded-md m-1' />}
                                {!show && <img src='/images/sitefix-full.png' className='max-w-auto mx-auto p-[1px] bg-gray-300 rounded-md m-1' />}
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <Link to='/projects' className='border-2 border-black bg-white text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500'>Back to projects</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SiteFix