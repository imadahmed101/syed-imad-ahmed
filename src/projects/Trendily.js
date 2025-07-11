import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Trendily = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <Navbar/>
            <div className='flex flex-col-reverse md:flex-row py-4 px-4'>
                <div className='flex-1'>
                    <img src='/images/trendily-full.png' className='w-[600px] md:mx-auto p-[1px] rounded-md m-1' />
                </div>
                <div className='flex-1 md:ml-4 md:mr-32'>

                    <h3 className='text-2xl md:text-4xl font-bold mt-2'>Social Media Manager Website</h3>
                    <h2 className='md:text-lg font-semibold text-blue-500 mb-8'>trendily.ai</h2>
                    {/* <h2 className='md:text-lg font-semibold text-blue-500 mb-8'><a href='https://trendily.ai' target="_blank">trendily.ai</a></h2> */}
                    <h4 className='text-xl font-semibold mb-2'>Web Design</h4>
                    <p className='mb-8'>Created a web design for a social media management company. Custom landing page, and contact form with 3rd party booking widget. Fully responsive and user friendly design.</p>
                    <h4 className='text-xl font-semibold mb-2'>Lead Generation</h4>
                    <p className='mb-8'>Built to increase company presence and for lead generation.</p>
                    

                    <div className='flex justify-start py-8'>
                        {/* <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500 mr-2' href='https://willismonroeinsurance.com' target="_blank">View Live</a>
                        <a className='border-2 border-black text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500 mr-2' href='https://github.com/imadahmed101/willismonroeinsurance' target="_blank">GitHub</a> */}
                        <Link to='/projects' className='border-2 border-black bg-white text-black rounded-full p-2 hover:bg-black hover:text-white transition duration-500'>Back to projects</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trendily