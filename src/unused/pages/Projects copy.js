import React from 'react'
import { Link } from 'react-router-dom'

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
        <div className='text-black'>
            <div className='text-center bg-black text-white px-4 py-8 md:py-16'>
                <div className='max-w-[700px] mx-auto'>
                    <h2 className='text-2xl md:text-4xl text-blue-500 mb-8 font-bold'>Projects</h2>
                </div>
            </div>
            <div className='py-4 md:py-32 px-4'>
                {projects.map((item) => (
                    <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto py-8 gap-4 border-b-[1px] border-gray-300 md:border-transparent text-gray-700 '>
                        <div className='flex-1'>
                            <Link to={item.link}>
                                <img src={item.picture} className='border-gray-300 border-[1px] rounded-md hover:border-black' />
                            </Link>
                        </div>
                        <div className='flex-1'>
                            <Link to={item.link}>
                                <h3 className='text-blue-500 text-xl font-semibold mb-4'>{item.name}</h3>
                            </Link>
                            <a href={item.url} target='_blank' className='underline text-gray-700'>{item.url}</a>
                            <p className='text-gray-700 my-4'>{item.description}</p>
                            <p className='mb-8 text-gray-700 font-semibold'>{item.tech}</p>
                            <Link to={item.link} className='text-gray-700 font-semibold underline'>Learn More</Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects