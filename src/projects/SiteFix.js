import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SiteFix = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <Navbar/>
            <div className='flex flex-col-reverse md:flex-row py-4 px-4'>
                <div className='flex-1'>
                    <img src='/images/sitefix-full.png' className='w-[600px] md:mx-auto p-[1px] rounded-md m-1' />
                </div>
                <div className='flex-1 md:ml-4 md:mr-32'>

                    <h3 className='text-2xl md:text-4xl font-bold mt-2'>Web Agency Website</h3>
                    <h2 className='md:text-lg font-semibold text-blue-500 mb-8'>sitefix.ca</h2>
                    {/* <h2 className='md:text-lg font-semibold text-blue-500 mb-8'><a href='https://sitefix.ca' target="_blank">sitefix.ca</a></h2> */}
                    <h4 className='text-xl font-semibold mb-2'>Web Design</h4>
                    <p className='mb-8'>Created a web design for a web agency. Custom landing page, and admin section with various pages. Fully responsive and user friendly application.</p>
                    <h4 className='text-xl font-semibold mb-2'>Full Stack Application</h4>
                    <p className='mb-8'>Built with React on the front end and Node/Express on the backend.</p>
                    <h4 className='text-xl font-semibold mb-2'>Domain Registration</h4>
                    <p className='mb-8'>Handled domain registration.</p>        
                        <h4 className='text-xl font-semibold mb-2'>Web Hosting</h4>
                        <p className='mb-8'>Server management and upkeep of hosting.</p>
                        <h4 className='text-xl font-semibold mb-2'>API's</h4>
                        <p className='mb-8'>Using REST API for communication between front end and back end.</p>
                        <h4 className='text-xl font-semibold mb-2'>CI/CD</h4>
                        <p className='mb-8'>Setup CI/CD pipeline with GitHub and Azure.</p>
                        <h4 className='text-xl font-semibold mb-2'>Database</h4>
                        <p className='mb-8'>NoSQL database used to store application info.</p>                   

                    <div className='flex justify-start py-8'>
                        {/* <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500 mr-2' href='https://willismonroeinsurance.com' target="_blank">View Live</a> */}
                        {/* <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500 mr-2' href='https://github.com/imadahmed101/willismonroeinsurance' target="_blank">GitHub</a> */}
                        <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500 mr-2    ' href='https://github.com/imadahmed101/sitefix-backend' target="_blank">GitHub</a>
                        <Link to='/projects' className='border-2 border-black bg-white text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500'>Back to projects</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SiteFix