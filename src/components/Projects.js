import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div className='bg-gradient-to-b from-gray-900 to-blue-950 text-white' id='projects'>
            <div className='py-16 md:py-32 px-4'>
                <div className='max-w-4xl mx-auto'>

                    <h2 className='text-2xl md:text-4xl md:text-center text-white font-bold tracking-tight'>Featured Project</h2>

                    <div className='flex flex-col'>

                        <div className='mt-8 overflow-hidden'>
                            <a href='https://studentconnect.azurewebsites.net/' target="_blank">
                                <img src='/images/sc.png' className='shadow-md shadow-gray-800 hover:scale-105 transition duration-500' />
                            </a>
                        </div>
                        <div className='pt-4 mb-16'>
                            <h3 className='text-2xl md:text-4xl font-bold mt-2'>Online Forum</h3>
                            <h2 className='md:text-lg font-semibold text-blue-500 mb-8'><a href='https://studentconnect.azurewebsites.net/' target="_blank">Student Connect</a></h2>
                            <p className='md:text-lg text-gray-300 font-semibold mb-8 '>Full Stack Application built using the MERN stack. React for the front end, Node and Express for the back end. Using MongoDB as the database and Azure/GitHub for CI/CD.</p>
                            <p className='font-semibold'>
                                <span className='bg-purple-900 px-2 py-1'>
                                    React, Node, Express, MongoDB, Azure, GitHub
                                </span>
                            </p>
                        </div>
                    </div>
                    <a href='/projects' className='border-2 bg-white text-black text-xl rounded-md p-4 hover:bg-black hover:text-white transition duration-500'>View All Projects</a>

                </div>

            </div>
        </div>
    )
}

export default Projects