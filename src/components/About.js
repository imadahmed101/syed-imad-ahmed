import React from 'react'

const About = () => {
  return (
    <div className=' bg-gradient-to-b from-blue-950 to-gray-900' id='about'>
    <div className='py-16 md:py-32 px-4'>
      <div className='max-w-4xl mx-auto'>

      <h2 className='text-2xl md:text-4xl text-white font-bold tracking-tight md:text-center'>About Me</h2>
      <p className='md:text-2xl text-gray-300 font-semibold pt-4 md:text-center'>Hello, My name is Syed Imad Ahmed. I am a web developer with a diploma in computer programming.</p>
      
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-4xl mx-auto'>

      <div className='flex flex-col pt-16 px-4 text-center'>
        <img src='/images/javascript-color.svg' className='h-10 ' />
      <p className='text-gray-300 font-semibold pt-2'>Utilizing JavaScript as my main coding language for full stack development.</p>
      </div>

      <div className='flex flex-col pt-16 px-4 text-center'>
        <img src='/images/react-color.svg' className='h-10' />
      <p className='text-gray-300 font-semibold pt-2'>Leveraging React for the front end to build SPA's and PWA's.</p>
      </div>

      <div className='flex flex-col pt-16 px-4 text-center'>
        <div className='flex flex-row justify-center'>
        <img src='/images/nodejs-color.svg' className='h-10' />
        <img src='/images/firebase-color.svg' className='h-10' />
        </div>
      <p className='text-gray-300 font-semibold pt-2'>Experience with various back ends. Primarily using Node within the JavaScript ecosystem.</p>
      </div>

      <div className='flex flex-col pt-16 px-4 text-center'>
      <div className='flex flex-row justify-center gap-2'>
        <img src='/images/tailwindcss-color.svg' className='h-10' />
        <img src='/images/mui-color.svg' className='h-10' />
        <img src='/images/bootstrap-color.svg' className='h-10' />
        </div>
      <p className='text-gray-300 font-semibold pt-2'>Working with different styling libraries and frameworks to create beautiful UI.</p>
      </div>

      <div className='flex flex-col pt-16 px-4 text-center'>
      <div className='flex flex-row justify-center gap-2'>
        <img src='/images/azure.svg' className='h-10' />
        <img src='/images/github.svg' className='h-10' />
        </div>
      <p className='text-gray-300 font-semibold pt-2'>Using various deployment solutions to manage, build and deploy repositories.</p>
      </div>

      <div className='flex flex-col pt-16 px-4 text-center'>
      <div className='flex flex-row justify-center gap-2'>
        <img src='/images/mongodb.svg' className='h-10' />
        </div>
      <p className='text-gray-300 font-semibold pt-2'>Utilizing databases to hold and secure app data. Using MongoDB as part of the MERN stack.</p>
      </div>


      </div>

      {/* <div className='flex pt-12 gap-2'>
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
      <p className='text-gray-300 font-semibold pt-2'>Working with different styling libraries and frameworks to create beautiful UI.</p> */}


    </div>
    </div>

  </div>

  )
}

export default About