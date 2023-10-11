import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-900'>
    <div className='py-32 px-4'>
      <h2 className='text-2xl text-white font-bold tracking-tight'>About Me</h2>
      <p className='text-gray-300 font-semibold pt-4'>Hello, My name is Syed Imad Ahmed. I am a web developer with a diploma in computer programming.</p>
      
      <div className='flex pt-12 gap-2'>
        <img src='/images/javascript-color.svg' className='h-10 ' />
      </div>
      <p className='text-gray-300 font-semibold pt-2'>Utilizing JavaScript as my main coding language.</p>

      <div className='flex pt-12 gap-2'>
        <img src='/images/react-color.svg' className='h-10' />
      </div>
      <p className='text-gray-300 font-semibold pt-2'>Leveraging React for the front end to build SPA's and PWA's.</p>

      <div className='flex pt-12 gap-2'>
        <img src='/images/nodejs-color.svg' className='h-10' />
        <img src='/images/firebase-color.svg' className='h-10' />
      </div>
      <p className='text-gray-300 font-semibold pt-2'>Experience with various back ends. Primarily using Node within the JavaScript ecosystem.</p>

      <div className='flex pt-12 gap-2'>
        <img src='/images/tailwindcss-color.svg' className='h-10' />
        <img src='/images/mui-color.svg' className='h-10' />
        <img src='/images/bootstrap-color.svg' className='h-10' />
      </div>
      <p className='text-gray-300 font-semibold pt-2'>Working with different styling libraries and frameworks to create beautiful UI.</p>


    </div>

  </div>

  )
}

export default About