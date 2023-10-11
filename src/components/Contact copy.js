import React from 'react'

const Contact = () => {
    return (
        <div className='bg-black'>
            <div className='py-8 px-4'>
                <h2 className='text-2xl text-white font-bold tracking-tight'>Contact Me</h2>
                <p className='text-gray-300 font-semibold pt-4'>Reach out to me using the following methods below.</p>
                <div className='flex py-8 gap-2'>
                    <img src='/images/linked-in.svg' className='h-10' />
                    <img src='/images/github.svg' className='h-10' />
                </div>

            </div>

        </div>
    )
}

export default Contact