import React from 'react'

const Pricing = () => {
  return (
    <div className='text-gray-700 pt-80 pb-40 p-4 max-w-[1200px] mx-auto'>
        <div className='flex flex-col md:flex-row'>

<div className='flex-1'>


        <h3 className='text-4xl pb-4'>Pricing</h3>
        <p className='text-3xl pb-12'>We have 3 plans to choose from.</p>
        <p className='font-semibold'>Starter</p>
        <p>Advanced</p>
        <p>Expert</p>
</div>
        
        <div className='flex-1 border-gray-600 rounded-md border-2 py-32 md:py-0 text-center'>
        <p className='text-xl py-4'>Starter</p>
        <p>Website Design</p>
        <p>Website Creation</p>
        <p>Domain Name</p>
        <p>Hosting</p>
            
        </div>

        </div>
    </div>
  )
}

export default Pricing