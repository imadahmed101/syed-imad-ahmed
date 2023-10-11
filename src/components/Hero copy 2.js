import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black'>

      <div className='flex flex-col min-h-[calc(80vh-60px)] justify-center items-center'>
        <div className='p-4'>
          <p className='text-sm text-blue-400'>Syed Imad Ahmed</p>
          <h2 className='text-2xl text-white font-bold tracking-tight pt-2'>Building Web Applications<br />One Block At A Time</h2>
          <p className='text-gray-300 font-semibold pt-12'>Full Stack Web Developer utilizing JavaScript and React. Working with both front-end and back-end technologies. Focused on ui/ux when building web applications.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero