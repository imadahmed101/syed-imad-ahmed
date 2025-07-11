import React from 'react'

const Pricing = () => {
  return (
    <div className='text-gray-700 pt-80 pb-40 p-4 max-w-[1200px] mx-auto'>
      <div className='flex flex-col gap-2 md:flex-row'>

        <div className='flex-1'>


          <h3 className='text-4xl pb-4'>Pricing</h3>
          <p className='text-3xl pb-12'>We have 3 plans to choose from.</p>
          <p className='font-semibold'>Starter</p>
          <p>Advanced</p>
          <p>Expert</p>
        </div>
        <div className='flex-1 border-gray-600 rounded-md border-2 py-32 md:py-0 text-center'>
          <p className='text-xl py-4 font-semibold'>Starter</p>
          <p>Website Design</p>
          <p>Website Creation</p>
          <p>Domain Name</p>
          <p>Hosting</p>
          <p>Custom Landing Page</p>
          <p>1-3 Secondary Pages</p>
          <p className='text-3xl pt-20 pb-2'>$499</p>
          <p className='bg-blue-600 text-white text-xl py-2'>Start</p>

        </div>

        <div className='flex-1 border-gray-600 rounded-md border-2 py-32 md:py-0 text-center'>
          <p className='text-xl py-4 font-semibold'>Advanced</p>
          <p>Website Design</p>
          <p>Website Creation</p>
          <p>Domain Name</p>
          <p>Hosting</p>
          <p>Custom Landing Page</p>
          <p>5-7 Custom Secondary Pages</p>
          <p className='text-3xl pt-20 pb-2'>$999</p>
          <p className='bg-blue-600 text-white text-xl py-2'>Start</p>

        </div>

        <div className='flex-1 border-gray-600 rounded-md border-2 py-32 md:py-0 text-center'>
          <p className='text-xl py-4 font-semibold'>Expert</p>
          <p>Website Design</p>
          <p>Website Creation</p>
          <p>Domain Name</p>
          <p>Hosting</p>
          <p>Email Administration</p>
          <p>Dedicated Advertising Campaign</p>
          <p className='text-3xl pt-20 pb-2'>Custom</p>
          <p className='bg-blue-600 text-white text-xl py-2'>Start</p>

        </div>


      </div>
    </div>
  )
}

export default Pricing