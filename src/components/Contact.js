import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='bg-gradient-to-b from-blue-950 to-black text-center' id='contact'>
            <div className='pt-4 md:pt-8 px-4'>
                <h2 className='text-2xl md:text-4xl text-white font-bold tracking-tight'>Contact Me</h2>
                {/* <p className='text-gray-300 font-semibold pt-4'>Reach out to me using the following methods below.</p> */}
                <div className='flex justify-center py-4 md:py-8 gap-2'>
                    {/* <Link to='/linkedin'> */}
                    <a href='https://linkedin.com/in/syed-imad-ahmed' target="_blank" className='opacity-100 transition duration-300 ease-in-out hover:opacity-40'>

                    <img src='/images/linked-in.svg' className='h-10' />
                    </a>
                    {/* </Link> */}
                    
                    {/* <Link to='/github'> */}
                    <a href='https://github.com/imadahmed101' target="_blank" className='opacity-100 transition duration-300 ease-in-out hover:opacity-40'>

                    <img src='/images/github.svg' className='h-10' />
                    </a>
                    {/* </Link> */}
                </div>

            </div>

        </div>
    )
}

export default Contact