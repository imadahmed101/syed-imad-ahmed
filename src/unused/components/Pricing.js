import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div className='text-gray-700 pt-20 pb-20 p-4 max-w-[900px] mx-auto'>

      <div className='text-center'>


        <h3 className='text-4xl pb-4'>Choose Your Plan</h3>
        <p className='text-2xl pb-12'>Budget friendly pricing to suit your requirements</p>

      </div>
      <div className='flex flex-col gap-8 md:gap-4 md:flex-row'>

        <div className='flex-1 py-8 px-2 md:py-2 '>
          <p className='text-xl py-4 font-semibold text-center'>Starter</p>
          <p className='text-3xl pb-8 text-center'>$299 <span className='text-gray-500 text-sm'>/year</span></p>

          <Link to='/form' className='flex justify-center hover:bg-[#084cab] bg-black text-white text-xl py-2 mb-8 rounded-md'>Start</Link>


          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Website Design</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Website Creation</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Domain Name</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Hosting</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Custom Landing Page</p>
          </div>

          <div className='text-gray-500'>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

              0 Secondary Pages</p>
          </div>


        </div>


        <div className='flex-1 bg-yellow-500 rounded-md py-8 px-2 md:py-2 '>
          <p className='text-xl py-4 font-semibold text-center'>Advanced</p>
          <p className='text-3xl pb-8 text-center'>$499 <span className='text-gray-500 text-sm'>/year</span></p>

          <Link to='/form' className='flex justify-center hover:bg-[#084cab] bg-black text-white text-xl py-2 mb-8 rounded-md'>Start</Link>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Website Design</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Website Creation</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Domain Name</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Hosting</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Custom Landing Page</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              1-3 Secondary Pages</p>
          </div>


        </div>


        <div className='flex-1 py-8 px-2 md:py-2'>
          <p className='text-xl py-4 font-semibold text-center'>Expert</p>
          <p className='text-3xl pb-8 text-center'>$999 <span className='text-gray-500 text-sm'>/year</span></p>

          <Link to='/form' className='flex justify-center hover:bg-[#084cab] bg-black text-white text-xl py-2 mb-8 rounded-md'>Start</Link>


          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Website Design</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Website Creation</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Domain Name</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Hosting</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Custom Landing Page</p>
          </div>

          <div>
            <p className='inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              5-7 Custom Secondary Pages</p>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Pricing