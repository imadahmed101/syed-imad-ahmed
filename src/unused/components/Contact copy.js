import React from 'react'

const Contact = () => {
    return (
        <div className='bg-black text-center'>
            <div className='pt-4 md:pt-8 px-4'>
                <h2 className='text-2xl md:text-4xl text-white font-bold tracking-tight'>Contact Me</h2>
                <div className='flex justify-center py-4 md:py-8 gap-2'>
                    <a href='https://linkedin.com/in/syed-imad-ahmed' target="_blank" className='opacity-100 transition duration-300 ease-in-out hover:opacity-80'>
                    <img src='/images/linked-in.svg' className='h-10' />
                    </a>
                    <a href='https://github.com/imadahmed101' target="_blank" className='opacity-100 transition duration-300 ease-in-out hover:opacity-80'>
                    <img src='/images/github.svg' className='h-10' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact