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
    <div className='px-4 pb-16 min-h-screen'>
      <div className='max-w-[500px] border-gray-300 border-[1px] p-4 my-4 rounded-md mx-auto'>
        <h2 className='py-8 text-2xl font-semibold text-center'>New Client Registration</h2>
        <p className='text-xl pb-4'>Are you looking for...</p>
        <div className='flex flex-row justify-center gap-4'>
          <button onClick={() => (setBusinessName(true), setExistingWebsite(false))} className='py-8 px-2 md:py-16 w-[300px] border-gray-300 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300 border-[1px] text-center'>
            <p>A Brand New Website</p>
          </button>
          <button onClick={() => (setExistingWebsite(true))} className='py-8 px-2 md:py-16 w-[300px] border-gray-300 hover:bg-gray-300 border-[1px] text-center'>
            <p>Upgrading An Existing Website</p>
          </button>
        </div>

        {existingWebsite &&

          <div className='pt-8'>
            <p className='text-xl pb-4'>Existing Website URL</p>
            <input className='p-2 border-gray-300 border-[1px]' />
            <div className='text-right'>
              {
                !businessName &&
                <button onClick={() => setBusinessName(true)} className='bg-black p-2 rounded-full text-white'>Continue</button>
              }
            </div>
          </div>
        }

        {businessName &&

          <div className='pt-8'>
            <p className='text-xl pb-4'>Business Name</p>
            <input className='p-2 border-gray-300 border-[1px]' />
            <div className='text-right'>
              {
                !industry &&
                <button onClick={() => setIndustry(true)} className='bg-black p-2 rounded-full text-white'>Continue</button>
              }
            </div>
          </div>
        }

        {industry &&

          <div className='pt-8'>
            <p className='text-xl pb-4'>What type of industry are you in?</p>
            <select className='p-2 border-gray-300 border-[1px]'>

              <option disabled>Select</option>
              <option>E-commerce</option>
              <option>Service</option>
              <option>Entertainment</option>
              <option>Food</option>
              <option>Other</option>
            </select>
            <div className='text-right'>
              {
                !description &&
                <button onClick={() => setDescription(true)} className='bg-black p-2 rounded-full text-white'>Continue</button>
              }
            </div>
          </div>
        }


        {description &&

          <div className='pt-8'>
            <p className='text-xl pb-4'>Short description of what products or services you offer...</p>
            <input className='p-2 border-gray-300 border-[1px]' />
            <div className='text-right'>
              {
                !outcome &&
                <button onClick={() => setOutcome(true)} className='bg-black p-2 rounded-full text-white'>Continue</button>
              }
            </div>
          </div>
        }


        {outcome &&

          <div className='pt-8'>
            <p className='text-xl pb-4'>What are you looking to do...</p>
            <select className='p-2 border-gray-300 border-[1px]'>

              <option disabled>Select</option>
              <option>Building Online Presence</option>
              <option>Lead Generation</option>
              <option>Brand Awareness</option>
              <option>Other</option>
            </select>
            <div className='text-right'>
              {
                !budget &&
                <button onClick={() => setBudget(true)} className='bg-black p-2 rounded-full text-white'>Continue</button>
              }
            </div>
          </div>
        }

        {budget &&

          <div className='pt-8'>
            <p className='text-xl pb-4'>Anticipated Budget?</p>
            <select className='p-2 border-gray-300 border-[1px]'>

              <option disabled>Select</option>
              <option>$0-$300</option>
              <option>$300-$500</option>
              <option>$500-$1000</option>
              <option>$1000+</option>
              <option>Not Sure</option>
            </select>
            <div className='text-right'>
              {
                !info &&
                <button onClick={() => setInfo(true)} className='bg-black p-2 rounded-full text-white'>Continue</button>
              }
            </div>
          </div>
        }

        {info &&

          <div className='pt-8'>
            <p className='text-xl pb-4'>Your Name</p>
            <input className='p-2 border-gray-300 border-[1px]' />
            <p className='text-xl pb-4'>Email Address</p>
            <input className='p-2 border-gray-300 border-[1px]' />
            <p className='text-xl pb-4'>Repeat Email Address</p>
            <input className='p-2 border-gray-300 border-[1px]' />
            <p className='text-xl pb-4'>Your Phone Number</p>
            <input className='p-2 border-gray-300 border-[1px]' />
            <p className='text-xl pb-4'>Best Method Of Contact</p>
            <select className='p-2 border-gray-300 border-[1px]'>

              <option disabled>Select</option>
              <option>Email</option>
              <option>Phone</option>
              <option>Both</option>
            </select>
            <div className='text-right'>
              {
                !submit &&
                <button onClick={() => (submitForm())} className='inline-flex bg-black p-2 rounded-full text-white text-right'>
                  Submit
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 my-auto ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Form