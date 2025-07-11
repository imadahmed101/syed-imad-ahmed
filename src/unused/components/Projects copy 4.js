import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div className='py-20 md:py-40 p-4 bg-gradient-to-br from-[#084cabb5] to-[#084cab] text-white'>
            <div className='max-w-[1200px] mx-auto'>
                <h3 className='text-4xl pb-4'>Featured Project</h3>
                <div className='flex flex-col md:flex-row'>
                    <img src='images/wmi-full.png' className='hidden w-[200px] max-h-[350px]' />
                    <div className='flex-1 py-20 md:py-0'>
                        <div className='max-h-[350px] max-w-[500px] overflow-hidden '>
                            <Link to='/projects/wmi' >
                                <img src='/images/wmi-full.png' className='w-[385px] bg-gray-300 hover:bg-black hover:-translate-y-[900px] ease-out transition duration-[30000ms]' />
                            </Link>
                        </div>
                            <p className='hidden md:flex text-sm text-blue-200'>Hover over image to scroll</p>
                    </div>
                    <div className='flex-1'>
                        <h3 className='text-2xl md:text-4xl pb-2'>Willis & Monroe Associates</h3>
                        <p className='text-xl md:text-2xl pb-16'>Insurance Agency</p>
                        {/* <p className='underline pb-4'>willismonroeinsurance.com</p> */}
                        <p className='text-lg md:text-xl'>Created a redesign for the whole website. Configured business email and managed domain and hosting.</p>

                        <Link to='/projects/wmi' className='inline-flex text-lg md:text-xl font-semibold bg-black hover:bg-white text-white hover:text-black rounded-full py-2 px-4 mt-8'>
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 my-auto ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects