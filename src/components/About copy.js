import React from 'react'

const About = () => {
  return (
    <div className='bg-black'>
    <div className='py-8 px-4'>
      <h2 className='text-2xl text-white font-bold tracking-tight'>About Me</h2>
      <p className='text-gray-300 font-semibold pt-4'>Hello, My name is Syed Imad Ahmed. I am a web developer using React to create front-end web applications.</p>
      <div className='flex py-8 gap-2'>
        <img src='/images/javascript-color.svg' className='h-10' />
      </div>
      <p className='text-gray-300 font-semibold'>Utilizing JavaScript as my main coding language.</p>

      <div className='flex py-8 gap-2'>
        <img src='/images/react-color.svg' className='h-10' />
      </div>
      <p className='text-gray-300 font-semibold'>Leveraging React for the front end to build SPA's and PWA's.</p>

      <div className='flex py-8 gap-2'>
        <img src='/images/nodejs-color.svg' className='h-10' />
        <img src='/images/firebase-color.svg' className='h-10' />
      </div>
      <p className='text-gray-300 font-semibold'>Experience with various back ends. Primarily using Node within the JavaScript ecosystem.</p>

      <div className='flex py-8 gap-2'>
        <img src='/images/tailwindcss-color.svg' className='h-10' />
        <img src='/images/mui-color.svg' className='h-10' />
        <img src='/images/bootstrap-color.svg' className='h-10' />
      </div>
      <p className='text-gray-300 font-semibold'>Working with different styling libraries and frameworks to create beautiful UI.</p>


    </div>

  </div>
    // <div className='bg-black'>
    //   <div className='py-8 px-4'>
    //     <h2 className='text-2xl text-white font-bold tracking-tight'>About Me</h2>
    //     <p className='text-gray-300 font-semibold pt-4'>Hello, My name is Syed Imad Ahmed. I am a web developer using React to create front-end web applications.</p>
    //     <div className='flex flex-row py-8 gap-2'>
    //       <img src='/images/javascript-color.svg' className='h-10' />
    //       <img src='/images/react-color.svg' className='h-10' />
    //       <img src='/images/nodejs-color.svg' className='h-10' />
    //       <img src='/images/tailwindcss-color.svg' className='h-10' />
    //       <img src='/images/mui-color.svg' className='h-10' />
    //       <img src='/images/bootstrap-color.svg' className='h-10' />
    //     </div>
    //     <p className='text-gray-300 font-semibold'>Hello, My name is Syed Imad Ahmed. I am a web developer using React to create front-end web applications.</p>
    //   </div>

    // </div>
    //   <div className='flex flex-col bg-black text-white p-10'>
    //   <h2 className=''>About Me</h2>
    //   <p className='pt-4'>Hello, My name is Syed Imad Ahmed. I am a web developer using React to create front-end web applications.</p>

    // </div>

  )
}

export default About