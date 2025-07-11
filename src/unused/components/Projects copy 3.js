import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
    // {
    //     name: 'Mission Possible',
    //     picture: '/images/mp-design.png',
    //     url: '/projects/mp',
    //     description: 'Escape Room',
    // },
    // {
    //     name: 'Site Fix',
    //     picture: '/images/sitefix-full.png',
    //     url: '/projects/sf',
    //     description: 'Website Agency',
    // },
    {
        name: 'Willis Monroe Insurance',
        picture: '/images/wmi-full.png',
        url: '/projects/wmi',
        description: 'Insurance Agency',
    },
    // {
    //     name: 'Trendily',
    //     picture: '/images/trendily-full.png',
    //     url: '/projects/trnd',
    //     description: 'Social Media Manager',
    // }
]

const Projects = () => {
    return (
        <div className='h-[700px] overflow-hidden'>
            {/* <img src='images/hero-bg.jpg' className='-z-10 absolute' /> */}

        <div className='py-40 p-4 bg-blue-800 bg-opacity-70 text-white'>
            <div className='max-w-[1200px] mx-auto'>
            <h3 className='text-4xl pb-4'>Featured Project</h3>
            <div className='flex flex-col md:flex-row'>

                <img src='images/wmi-full.png' className='w-[200px]'/>

        <div className='flex-1 py-32 md:py-0'>
        {projects.map((item) => (
                            <div className='mx-auto md:mx-0 py-4 md:py-0'>
                            {/* <div className='mx-auto md:mx-0 py-4 md:py-0'> */}
                                <div className='max-h-[350px] max-w-[500px] overflow-hidden '>
                                <Link to={item.url} >
                                    <img src={item.picture} className='w-[385px] p-[1px] bg-gray-300 rounded-md m-1 hover:bg-black hover:-translate-y-[900px] ease-out transition duration-[30000ms]' />
                                </Link>
                            </div>
                                {/* <div className=' m-1 p-[1px]'>
                                    <h3 className='text-blue-500 text-xl font-semibold'><Link to={item.url}>{item.name}</Link></h3>
                                    <p className='text-gray-500'>{item.description}</p>
                                </div> */}
                            </div>
                        ))}
        </div>
<div className='flex-1'>


        <h3 className='text-4xl pb-4'>WillisMonroeInsurance.com</h3>
        {/* <p className='text-3xl pb-12'>Created a redesign for the website</p> */}
        <p className='font-semibold'>Created a redesign for the website</p>
        <p>Upgrading an existing website</p>
</div>
        

        </div>

            </div>

            {/* <div className='pb-8 md:pb-16 px-4'> */}
            <div className='hidden py-16 md:py-32 px-4'>
                <div className='max-w-[1200px] mx-auto text-gray-700'>
                    <h2 className='text-2xl md:text-4xl text-blue-500 font-semibold tracking-tight mb-8'>Featured Project</h2>
                    <p className='text-center text-gray-400 hidden md:block'>(hover to scroll)</p>
                    <div className='flex flex-col md:flex-row justify-center gap-4'>
                        {projects.map((item) => (
                            <div className='mx-auto md:mx-0 py-4 md:py-0'>
                            {/* <div className='mx-auto md:mx-0 py-4 md:py-0'> */}
                                <div className='max-h-[350px] max-w-[500px] overflow-hidden '>
                                <Link to={item.url} >
                                    <img src={item.picture} className='w-[385px] p-[1px] bg-gray-300 rounded-md m-1 hover:bg-black hover:-translate-y-[900px] ease-out transition duration-[30000ms]' />
                                </Link>
                            </div>
                                <div className=' m-1 p-[1px]'>
                                    <h3 className='text-blue-500 text-xl font-semibold'><Link to={item.url}>{item.name}</Link></h3>
                                    <p className='text-gray-500'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className='text-center text-gray-700 underline mt-4'>
                        <Link to='/projects'>View All Projects</Link>
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Projects