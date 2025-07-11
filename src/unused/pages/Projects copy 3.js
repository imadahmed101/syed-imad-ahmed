import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar copy 5'

const projects = [
    // {
    //     name: 'Mission Possible',
    //     picture: '/images/mp-tab.png',
    //     url: 'https://missionpossibleescaperooms.com',
    //     link: '/projects/mp',
    //     description: 'Web Agency Application built using the MERN stack. React for the front end, Node and Express for the backend. Using MongoDB as the database and Azure/GitHub for CI/CD.',
    //     tech: 'React, Node, Express, MongoDB, Azure, GitHub',
    // },
    {
        name: 'Site Fix',
        picture: '/images/sitefix-tag.png',
        url: 'http://sitefix.ca',
        link: '/projects/sf',
        description: 'Web Agency Application built using the MERN stack. React for the front end, Node and Express for the backend. Using MongoDB as the database and Azure/GitHub for CI/CD.',
        tech: 'React, Node, Express, MongoDB, Azure, GitHub',
    },
    {
        name: 'Willis Monroe Insurance',
        picture: '/images/wmi-tag.png',
        url: 'https://willismonroeinsurance.com',
        link: '/projects/wmi',
        description: 'Update of the previous design. Fully responsive and user friendly application built to increase company presence and for lead generation. Utilizing React for the front end. Custom responsive design built using Tailwind CSS and MUI. Forms powered by EmailJS.',
        tech: 'React, Tailwind CSS, EmailJS',
    },
    {
        name: 'Trendily',
        picture: '/images/trendily-tag.png',
        url: 'https://trendily.ai',
        link: '/projects/trnd',
        description: 'Website application utilizing React for the front end. Custom responsive design built using Tailwind CSS. 3rd party widget integration with Calendly.',
        tech: 'React, Tailwind CSS, Calendly',
    }
]

const Projects = () => {
    return (
        <div className='text-black min-h-screen'>
            <Navbar />
            <div className='text-center px-4 py-16'>
                <div className='max-w-[700px] mx-auto'>
                    <h2 className='text-2xl md:text-4xl mb-8 font-bold'>Projects</h2>
                </div>
            </div>

            <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto py-8 gap-4 border-b-[1px] border-gray-300 md:border-transparent text-gray-700 '>
                <div className='flex-1'>

                    <Link to='/projects/wmi'>
                        <img src='/images/wmi-tag.png' className='md:rounded-md hover:border-black' />
                    </Link>
                </div>
                <div className='flex-1 px-6'>
                    <Link to='/projects/wmi'>
                        
                        <h3 className='text-blue-500 text-xl font-semibold mb-4'>Willis Monroe Insurance</h3>
                    </Link>
                    <a href='https://willismonroeinsurance.com' target='_blank' className='underline text-gray-700'>https://willismonroeinsurance.com</a>
                    <p className='text-gray-700 my-4'>Update of the previous design. Fully responsive and user friendly application built to increase company presence and for lead generation. Utilizing React for the front end. Custom responsive design built using Tailwind CSS and MUI. Forms powered by EmailJS.</p>
                    <div className='inline-flex gap-2'>
                        <p className='text-blue-300 bg-blue-900 px-1.5 py-0.5 rounded font-semibold'>React</p>
                        <p className='text-purple-300 bg-purple-900 px-1.5 py-0.5 rounded font-semibold'>Tailwind CSS</p>
                        <p className='text-orange-300 bg-orange-900 px-1.5 py-0.5 rounded font-semibold'>EmailJS</p>
                    </div>
                    <div className='mt-4'>
                        <Link to='/projects/wmi' className='text-gray-700 font-semibold underline'>View Case Study</Link>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto py-8 gap-4 border-b-[1px] border-gray-300 md:border-transparent text-gray-700 '>
                <div className='flex-1'>

                    <Link to='/projects/sf'>
                        <img src='/images/sitefix-tag.png' className='md:rounded-md hover:border-black' />
                    </Link>
                </div>
                <div className='flex-1 px-6'>
                    <Link to='/projects/sf'>
                        
                        <h3 className='text-blue-500 text-xl font-semibold mb-4'>Willis Monroe Insurance</h3>
                    </Link>
                    <a href='https://willismonroeinsurance.com' target='_blank' className='underline text-gray-700'>https://willismonroeinsurance.com</a>
                    <p className='text-gray-700 my-4'>Update of the previous design. Fully responsive and user friendly application built to increase company presence and for lead generation. Utilizing React for the front end. Custom responsive design built using Tailwind CSS and MUI. Forms powered by EmailJS.</p>
                    <div className='inline-flex gap-2'>
                        <p className='text-blue-300 bg-blue-900 px-1.5 py-0.5 rounded font-semibold'>React</p>
                        <p className='text-purple-300 bg-purple-900 px-1.5 py-0.5 rounded font-semibold'>Tailwind CSS</p>
                        <p className='text-orange-300 bg-orange-900 px-1.5 py-0.5 rounded font-semibold'>EmailJS</p>
                    </div>
                    <div className='mt-4'>
                        <Link to='/projects/sf' className='text-gray-700 font-semibold underline'>View Case Study</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects