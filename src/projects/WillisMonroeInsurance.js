import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const WillisMonroeInsurance = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <Navbar />
            {/* <div className='text-center px-4 pt-8 md:py-16'>
                <div className='max-w-[700px] mx-auto'>
                    <h2 className='text-2xl md:text-4xl text-blue-500 md:mb-2 font-bold'>Willis Monroe Insurance</h2>
                </div>
            </div> */}
            <div className='flex flex-col-reverse md:flex-row py-4 px-4'>
                <div className='flex-1'>
                    <img src='/images/wmi-full.png' className='w-[600px] md:mx-auto p-[1px] rounded-md m-1' />
                </div>
                <div className='flex-1 md:ml-4 md:mr-32'>

                    <h3 className='text-2xl md:text-4xl font-bold mt-2'>Insurance Agency Website</h3>
                    <h2 className='md:text-lg font-semibold text-blue-500 mb-8'><a href='https://willismonroeinsurance.com' target="_blank">willismonroeinsurance.com</a></h2>
                    <h4 className='text-xl font-semibold mb-2'>Web Design</h4>
                    <p className='mb-8'>Created a web design for an insurance agency website. Roughly 7 pages, landing page, and 6 secondary pages. Fully responsive and user friendly application.</p>
                    <h4 className='text-xl font-semibold mb-2'>Lead Generation</h4>
                    <p className='mb-8'>Built to increase company presence and for lead generation.</p>
                    <h4 className='text-xl font-semibold mb-2'>Domain Registration</h4>
                        
                        <p className='mb-8'>Handled domain registration.</p>
                    
                            
                        <h4 className='text-xl font-semibold mb-2'>Web Hosting</h4>
                        <p className='mb-8'>Server management and upkeep of hosting.</p>
                        <h4 className='text-xl font-semibold mb-2'>Email Configuration</h4>
                        <p className='mb-8'>Setup and troubleshooting business email.</p>
                   
{/* 
                    <div className='inline-flex gap-2 flex-wrap'>
                        <p className='text-red-300 bg-black px-1.5 py-0.5 rounded font-semibold'>Web Design</p>
                        <div>
                        <p>Created a web design for an insurance agency website. Roughly 7 pages, landing page, and 6 secondary pages. Fully responsive and user friendly application.</p>
                        </div>
                        <p className='text-yellow-300 bg-black px-1.5 py-0.5 rounded font-semibold'>Lead Generation</p>
                        <div>

                        <p className=''>Built to increase company presence and for lead generation.</p>
                        </div>
                        <p className='text-green-300 bg-black px-1.5 py-0.5 rounded font-semibold'>Domain Registration</p>
                        <div>
                        <p>Handled domain registration.</p>
                        </div>
                            
                        <p className='text-purple-300 bg-black px-1.5 py-0.5 rounded font-semibold'>Web Hosting</p>
                        <div>
                        <p>Server management and upkeep of hosting.</p>
                        </div>
                        <p className='text-blue-300 bg-black px-1.5 py-0.5 rounded font-semibold'>Email Configuration</p>
                    </div>
                    <p className='mt-8 mb-8 text-gray-700'>Overhaul of the previous design. Fully responsive and user friendly application built to increase company presence and for lead generation. Utilizing React for the front end. Custom responsive design built using Tailwind CSS. Forms powered by EmailJS.</p> */}

                    <div className='flex justify-start py-8'>
                        <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500 mr-2' href='https://willismonroeinsurance.com' target="_blank">View Live</a>
                        <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500 mr-2' href='https://github.com/imadahmed101/willismonroeinsurance' target="_blank">GitHub</a>
                        <Link to='/projects' className='border-2 border-black bg-white text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500'>Back to projects</Link>
                    </div>
                </div>
            </div>


            {/* <div className='' id='projects'>
                <div className='py-0 pb-2 md:py-16 px-4'>
                    <div className='max-w-4xl mx-auto'>
                        <div className='flex flex-col'>

                            <div className='my-8 overflow-hidden'>
                                <a href='https://willismonroeinsurance.com' target="_blank">
                                    <img src='/images/wmi-current.png' className='shadow-md shadow-gray-800' />
                                </a>
                            </div>

                            <div className='max-w-[1200px] mx-auto text-gray-700'>


                            </div>

                            <div className='inline-flex gap-2 flex-wrap'>
                                <p className='text-red-300 bg-black px-1.5 py-0.5 rounded font-semibold'>Web Design</p>
                                <p className='text-yellow-300 bg-black px-1.5 py-0.5 rounded font-semibold'>Lead Generation</p>
                                <p className='text-green-300 bg-black px-1.5 py-0.5 rounded font-semibold'>Domain Registration</p>
                                <p className='text-purple-300 bg-black px-1.5 py-0.5 rounded font-semibold'>Web Hosting</p>
                                <p className='text-blue-300 bg-black px-1.5 py-0.5 rounded font-semibold'>Email Configuration</p>
                            </div>
                            <div className='pt-4 mb-8 md:mb-16'>
                                <h3 className='text-2xl md:text-4xl font-bold mt-2'>Insurance Agency</h3>
                                <h2 className='md:text-lg font-semibold text-blue-500 mb-8'><a href='https://willismonroeinsurance.com' target="_blank">willismonroeinsurance.com</a></h2>

                                <p className='mt-8 mb-8 text-gray-700'>Overhaul of the previous design. Fully responsive and user friendly application built to increase company presence and for lead generation. Utilizing React for the front end. Custom responsive design built using Tailwind CSS. Forms powered by EmailJS.</p>
                                <p className='font-semibold mb-4'>
                                    <span className='bg-purple-900 text-white mr-2 px-2 py-1'>
                                        Front-End
                                    </span>
                                    React
                                </p>
                                <p className='font-semibold mb-4'>
                                    <span className='bg-purple-900 text-white mr-2 px-2 py-1'>
                                        Styling
                                    </span>
                                    Tailwind CSS
                                    Material UI
                                </p>
                                <p className='font-semibold mb-4'>
                                    <span className='bg-purple-900 text-white mr-2 px-2 py-1'>
                                        3rd Party Apps
                                    </span>
                                    EmailJS
                                    Zoho
                                </p>
                            </div>
                        </div>
                        <div className='mb-8'>

                            <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500 mr-2' href='https://willismonroeinsurance.com' target="_blank">View Live</a>
                            <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500' href='https://github.com/imadahmed101/willismonroeinsurance' target="_blank">GitHub</a>
                        </div>
                        <div className='mx-auto md:mx-0 py-4 md:py-0'>
                            <div onClick={() => { setShow((prev) => !prev) }} className='max-w-[1200px]'>
                                {show && <img src='/images/wmi-full.png' className='w-[900px] mx-auto p-[1px] bg-blue-300 rounded-md m-1' />}
                                {!show && <img src='/images/wmi-full.png' className='max-w-auto mx-auto p-[1px] bg-gray-300 rounded-md m-1' />}
                            </div>
                        </div>

                        <div className='flex justify-between pt-2'>
                            <Link to='/projects' className='border-2 border-black bg-white text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500'>Back to projects</Link>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default WillisMonroeInsurance