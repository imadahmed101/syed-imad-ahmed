import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate()
  const [existingWebsite, setExistingWebsite] = useState(false)
  const [businessName, setBusinessName] = useState(false)
  const [industry, setIndustry] = useState(false)
  const [description, setDescription] = useState(false)
  const [outcome, setOutcome] = useState(false)
  const [budget, setBudget] = useState(false)
  const [info, setInfo] = useState(false)
  const [submit, setSubmit] = useState(false)

  const submitForm = () => {
    setSubmit(true);
    alert('Submitted Form')
    navigate('/')

  }

  return (
    <div className='px-4 min-h-screen'>
      <div className='max-w-[1200px] mx-auto flex flex-row'>
        <div className='bg-blue-800 '>
          <h2>Selected Plan</h2>
          <div className='w-[500px] py-8 px-2 md:py-2 '>
          <p className='text-xl py-4 font-semibold text-center'>Starter</p>
          <p className='text-3xl pb-8 text-center'>$299 <span className='text-gray-500 text-sm'>/year</span></p>

          <p className='hover:bg-[#084cab] bg-black text-white text-xl py-2 mb-8 text-center rounded-md'>Start</p>


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

        </div>

        <div className='max-w-[500px] flex flex-col md:border-gray-300 md:border-[1px] px-6 pb-4 my-4 rounded-md mx-auto'>
          <h2 className='py-8 text-2xl font-semibold text-center'>New Client Registration</h2>
          <p>Are you looking to</p>
          <select className='border-[1px] border-gray-400 px-4 py-2 rounded-md text-lg mb-6'>
            <option>Select</option>
            <option>Create Brand New Website</option>
            <option>Upgrade An Existing Website</option>
          </select>

          <p>Existing Website URL</p>
          <input className='border-[1px] border-b-gray-400 px-4 py-2 text-lg mb-6' />

          <p>Business Name</p>
          <input className='border-[1px] border-b-gray-400 px-4 py-2 text-lg mb-6' />

          <p>What type of industry are you in?</p>
          <select className='border-[1px] border-gray-400 px-4 py-2 rounded-md text-lg mb-6'>


            <option>Select</option>
            <option>E-commerce</option>
            <option>Service</option>
            <option>Entertainment</option>
            <option>Food</option>
            <option>Other</option>
          </select>

          <p>Short description of what products or services you offer...</p>
          <textarea className='border-[1px] border-b-gray-400 px-4 py-2 text-lg mb-6' />

          <p>What are you looking to do...</p>
          <select className='border-[1px] border-gray-400 px-4 py-2 rounded-md text-lg mb-6'>

            <option>Select</option>
            <option>Building Online Presence</option>
            <option>Lead Generation</option>
            <option>Brand Awareness</option>
            <option>Other</option>
          </select>

          <p>Anticipated Budget?</p>
          <select className='border-[1px] border-gray-400 px-4 py-2 rounded-md text-lg mb-6'>
            <option>Select</option>
            <option>$0-$300</option>
            <option>$300-$500</option>
            <option>$500-$1000</option>
            <option>$1000+</option>
            <option>Not Sure</option>
          </select>

          <p>Your Name</p>
          <input className='border-[1px] border-b-gray-400 px-4 py-2 text-lg mb-6' />

          <p>Email Address</p>
          <input className='border-[1px] border-b-gray-400 px-4 py-2 text-lg mb-6' />

          <p>Confirm Email Address</p>
          <input className='border-[1px] border-b-gray-400 px-4 py-2 text-lg mb-6' />

          <p>Your Phone Number</p>
          <input className='border-[1px] border-b-gray-400 px-4 py-2 text-lg mb-6' />

          <p>Best Method Of Contact</p>
          <select className='border-[1px] border-gray-400 px-4 py-2 rounded-md text-lg mb-6'>
            <option >Select</option>
            <option>Email</option>
            <option>Phone</option>
            <option>Both</option>
          </select>

          <p>Best Time Of Contact</p>
          <select className='border-[1px] border-gray-400 px-4 py-2 rounded-md text-lg mb-6'>
            <option >Select</option>
            <option>9am-11am</option>
            <option>11am-1pm</option>
            <option>1pm-3pm</option>
            <option>3pm-5pm</option>
          </select>

          <button type='submit' onClick={() => submitForm()} className='bg-black hover:bg-[#084cab] text-white rounded-md py-2 text-lg'>Submit</button>

        </div>
      </div>
    </div>

  )
}

export default Form