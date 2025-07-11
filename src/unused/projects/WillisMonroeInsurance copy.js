import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const WillisMonroeInsurance = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <div className='text-center bg-black px-4 py-8 md:py-16'>
                <div className='max-w-[700px] mx-auto'>
                    <h2 className='text-2xl md:text-4xl text-blue-500 mb-8 font-bold'>Willis Monroe Insurance</h2>
                </div>
            </div>
            <div className='' id='projects'>
                <div className='py-8 md:py-16 px-4'>
                    <div className='max-w-4xl mx-auto'>
                        <div className='flex flex-col'>

                            <div className='mt-8 overflow-hidden'>
                                <a href='https://willismonroeinsurance.com' target="_blank">
                                    <img src='/images/wmi-current.png' className='shadow-md shadow-gray-800' />
                                </a>
                            </div>

                            <div className='max-w-[1200px] mx-auto text-gray-700'>


                            </div>

                            <div className='pt-4 mb-16'>
                                <h3 className='text-2xl md:text-4xl font-bold mt-2'>Insurance Agency</h3>
                                <h2 className='md:text-lg font-semibold text-blue-500 mb-8'><a href='https://willismonroeinsurance.com' target="_blank">willismonroeinsurance.com</a></h2>
                                <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500 mr-2' href='https://willismonroeinsurance.com' target="_blank">View Live</a>
                                <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500' href='https://github.com/imadahmed101/willismonroeinsurance' target="_blank">GitHub</a>
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
                        <div className='mx-auto md:mx-0 py-4 md:py-0'>
                            <div onClick={() => { setShow((prev) => !prev) }} className='max-w-[1200px]'>
                                {show && <img src='/images/wmi-full.png' className='w-[900px] mx-auto p-[1px] bg-blue-300 rounded-md m-1' />}
                                {!show && <img src='/images/wmi-full.png' className='max-w-auto mx-auto p-[1px] bg-gray-300 rounded-md m-1' />}
                                {/* {!show && <img src='/images/wmi-1.png' className='max-w-auto p-[1px] bg-gray-300 rounded-md m-1 hover:border-black hover:border-[20px] hover:bg-black -translate-y-[900px] hover:-translate-y-[0px] hover:duration-[1000ms] ease-in-out transition duration-[20000ms]' />} */}
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <Link to='/projects' className='border-2 border-black bg-white text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500'>Back to projects</Link>
                            <a href="../resume.pdf" target="_blank" className='border-2 border-black bg-white text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500'>View Resume</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WillisMonroeInsurance