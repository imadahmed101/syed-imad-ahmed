import React from 'react'
import { Link } from 'react-router-dom'

const StudentConnect = () => {
    return (
        <div className='bg-gradient-to-b from-black via-blue-950 to-gray-950 text-white' id='projects'>
            <div className='py-16 md:py-32 px-4'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-2xl md:text-4xl md:text-center text-white font-bold tracking-tight'>Projects</h2>
                    <div className='flex flex-col'>
                        <div className='mt-32 overflow-hidden'>
                            <a href='https://studentconnect.azurewebsites.net/' target="_blank">
                                <img src='/images/sc.png' className='shadow-md shadow-gray-800 hover:scale-105 transition duration-500' />
                            </a>
                        </div>
                        <div className='pt-4'>
                            <h3 className='text-2xl md:text-4xl font-bold mt-2'>Online Forum</h3>
                            <h2 className='md:text-lg font-semibold text-blue-500 mb-8'><a href='https://studentconnect.azurewebsites.net/' target="_blank">Student Connect</a></h2>
                            <a className='border-2 border-white text-white text-lg rounded-md px-4 py-2 hover:bg-black transition duration-500 mr-2' href='https://studentconnect.azurewebsites.net/' target="_blank">Live</a>
                            <a className='border-2 border-white text-white text-lg rounded-md px-4 py-2 hover:bg-black transition duration-500' href='https://github.com/imadahmed101/student-connect' target="_blank">GitHub</a>
                            <p className='md:text-lg text-gray-300 font-semibold mt-8 mb-8 '>Full Stack Application built using the MERN stack. React for the front end, Node and Express for the backend. Using MongoDB as the database and Azure/GitHub for CI/CD.</p>
                            <p className='font-semibold mb-4'>
                                <span className='bg-purple-900 px-2 py-1'>
                                    Front-End
                                </span>
                                React
                            </p>
                            <p className='font-semibold mb-4'>
                                <span className='bg-purple-900 px-2 py-1'>
                                    Back-End
                                </span>
                                Node.js
                                Express.js
                            </p>
                            <p className='font-semibold mb-4'>
                                <span className='bg-purple-900 px-2 py-1'>
                                    Database
                                </span>
                                MongoDB
                            </p>
                            <p className='font-semibold mb-4'>
                                <span className='bg-purple-900 px-2 py-1'>
                                    CI/CD DevOps
                                </span>
                                Azure
                                GitHub
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <Link to='/projects' className='border-2 border-black bg-white text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500'>Back to projects</Link>
                        <a href="../resume.pdf" target="_blank" className='border-2 bg-white text-black text-xl rounded-md p-4 hover:bg-black hover:text-white transition duration-500'>View Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentConnect