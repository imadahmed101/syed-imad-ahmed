import React from 'react'

const Projects = () => {
    return (
        <div className='bg-black'>
            <div className='py-32 px-4'>
                <h2 className='text-2xl text-white font-bold tracking-tight'>Projects</h2>
                <div className='bg-orange-500 p-4 mt-4 rounded-sm'>
                <img src='/images/trendily1.png' className='shadow-md shadow-gray-800' />
                </div>

                <div className='bg-blue-500 p-4 mt-4 rounded-sm'>
                <img src='/images/wmi.png' className='shadow-md shadow-gray-800' />
                </div>
                
                </div>

        </div>

        // <div className='flex flex-col bg-blue-400 text-white p-10'>
        //     <h2 className=''>Projects</h2>
        //     <div className='flex'>

        //         <div className='p-4 bg-black'>
        //             <img src='/images/wmi.png' />
        //         </div>
        //         <div className='p-4 bg-black'>
        //             <img src='/images/trendily1.png' />
        //         </div>
        //     </div>

        // </div>
    )
}

export default Projects