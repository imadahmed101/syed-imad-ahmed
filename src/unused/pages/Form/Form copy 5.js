import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Form = () => {
  const navigate = useNavigate()

  const [submit, setSubmit] = useState(false)

  const [service, setService] = useState('')
  const [url, setUrl] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [industry, setIndustry] = useState('')
  const [businessDescription, setBusinessDescription] = useState('')

  const [outcome, setOutcome] = useState('')
  const [budget, setBudget] = useState('')

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [contactMethod, setContactMethod] = useState('')
  const [contactTime, setContactTime] = useState('')



  const [businessInfo, setBusinessInfo] = useState(false)
  const [servicesInfo, setServicesInfo] = useState(false)
  const [personalInfo, setPersonalInfo] = useState(false)


  const submitForm = () => {
    setSubmit(true);
    alert('Submitted Form')
    navigate('/')

  }

  return (
    <div className='md:p-4 min-h-screen bg-[#084cab]'>
      <div className='max-w-[500px] py-4 px-2 md:px-8 mx-auto'>
        <h1 className='text-2xl text-white font-semibold text-center mb-4'>New Client Inquiry</h1>

        <div className='flex flex-row text-center justify-between text-gray-400 mb-8'>

          {!businessInfo ?
              <div className='text-white'>
                <p>1</p>
                <p>Business Info</p>
              </div>
              :
              <div>
                <p>1</p>
                <p>Business Info</p>
              </div>
              }

          <hr className='w-4 my-auto' />

          {businessInfo && !servicesInfo ?
          <div className='text-white'>
                <p>2</p>
                <p>Services Info</p>
              </div>
              :
              <div>
                <p>2</p>
                <p>Services Info</p>
              </div>
              }

          <hr className='w-4 my-auto' />

          {businessInfo && servicesInfo && !personalInfo ?
              <div className='text-white'>
                <p>3</p>
                <p>Personal Info</p>
              </div>
              :
              <div>
                <p>3</p>
                <p>Personal Info</p>
              </div>
              }

        </div>

        {!businessInfo &&
          <div>
            <div className='flex flex-col'>
              
              <p className='text-white font-semibold mb-2'>Are you looking to</p>
              <select name='service' value={service} onChange={e => setService(e.target.value)} className='px-4 py-2 rounded-md text-lg mb-6'>
                <option>Select</option>
                <option value='create'>Create A Brand New Website</option>
                <option value='upgrade'>Upgrade An Existing Website</option>
              </select>
              
              <p className='text-white font-semibold mb-2'>Existing Website URL</p>
              <input name='url' value={url} onChange={e => setUrl(e.target.value)} className='rounded-md px-4 py-2 text-lg mb-6' />
              
              <p className='text-white font-semibold mb-2'>Business Name</p>
              <input name='businessName' value={businessName} onChange={e => setBusinessName(e.target.value)} className='rounded-md px-4 py-2 text-lg mb-6' />
              
              <p className='text-white font-semibold mb-2'>What type of industry are you in?</p>
              <select name='industry' value={industry} onChange={e => setIndustry(e.target.value)} className='px-4 py-2 rounded-md text-lg mb-6'>
                <option>Select</option>
                <option value='ecommerce'>E-commerce</option>
                <option value='service'>Service</option>
                <option value='entertainment'>Entertainment</option>
                <option value='food'>Food</option>
                <option value='other'>Other</option>
              </select>
              
              <p className='text-white font-semibold mb-2'>Short description of what products or services you offer...</p>
              <textarea name='businessDescription' value={businessDescription} onChange={e => setBusinessDescription(e.target.value)} className='rounded-md px-4 py-2 text-lg mb-6' />
            </div>
            
            <div className='text-right'>
              <button onClick={() => setBusinessInfo(true)} className='bg-black p-2 rounded-full text-white hover:bg-white hover:text-black'>Continue</button>
            </div>

          </div>
        }

        {businessInfo && !servicesInfo &&
          <div>
            <div className='flex flex-col'>

              <p className='text-white font-semibold mb-2'>What are you looking to do?</p>
              <select name='outcome' value={outcome} onChange={e => setOutcome(e.target.value)} className='px-4 py-2 rounded-md text-lg mb-6'>
                <option>Select</option>
                <option value='presence'>Building Online Presence</option>
                <option value='lead'>Lead Generation</option>
                <option value='awareness'>Brand Awareness</option>
                <option value='other'>Other</option>
              </select>

              <p className='text-white font-semibold mb-2'>Anticipated Budget?</p>
              <select name='budget' value={budget} onChange={e => setBudget(e.target.value)} className='px-4 py-2 rounded-md text-lg mb-6'>
                <option>Select</option>
                <option value='0-300'>$0-$300</option>
                <option value='300-500'>$300-$500</option>
                <option value='500-1000'>$500-$1000</option>
                <option value='1000+'>$1000+</option>
                <option value='unsure'>Not Sure</option>
              </select>

            </div>

            <div className='flex flex-row justify-between'>

              <div className=''>
                <button onClick={() => setBusinessInfo(false)} className='p-2 rounded-full text-white'>Back</button>
              </div>

              <div className=''>
                <button onClick={() => setServicesInfo(true)} className='bg-black p-2 rounded-full text-white hover:bg-white hover:text-black'>Continue</button>
              </div>

            </div>
          </div>
        }


        {businessInfo && servicesInfo && !personalInfo &&
          <div>

            <div className='flex flex-col'>

              <p className='text-white font-semibold mb-2'>Your Name</p>
              <input name='userName' value={userName} onChange={e => setUserName(e.target.value)} className='rounded-md px-4 py-2 text-lg mb-6' />

              <p className='text-white font-semibold mb-2'>Email Address</p>
              <input name='userEmail' value={userEmail} onChange={e => setUserEmail(e.target.value)} className='rounded-md px-4 py-2 text-lg mb-6' />

              <p className='text-white font-semibold mb-2'>Confirm Email Address</p>
              <input name='confirmEmail' value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} className='rounded-md px-4 py-2 text-lg mb-6' />

              <p className='text-white font-semibold mb-2'>Your Phone Number</p>
              <input name='userPhones' value={userPhone} onChange={e => setUserPhone(e.target.value)} className='rounded-md px-4 py-2 text-lg mb-6' />

              <p className='text-white font-semibold mb-2'>Best Method Of Contact</p>

              <select name='contactMethod' value={contactMethod} onChange={e => setContactMethod(e.target.value)} className='px-4 py-2 rounded-md text-lg mb-6'>
                <option >Select</option>
                <option value='email'>Email</option>
                <option value='phone'>Phone</option>
                <option value='both'>Both</option>
              </select>

              <p className='text-white font-semibold mb-2'>Best Time To Contact</p>
              <select name='contactTime' value={contactTime} onChange={e => setContactTime(e.target.value)} className='px-4 py-2 rounded-md text-lg mb-6'>
                <option >Select</option>
                <option value='9-11'>9am-11am</option>
                <option value='11-1'>11am-1pm</option>
                <option value='1-3'>1pm-3pm</option>
                <option value='3-5'>3pm-5pm</option>
                <option value='5-8'>5pm-8pm</option>
              </select>

            </div>

            <div className='flex flex-row justify-between'>

              <div className=''>
                <button onClick={() => setServicesInfo(false)} className='p-2 rounded-full text-white'>Back</button>
              </div>

              <div className=''>
                <button onClick={() => submitForm()} className='bg-black p-2 rounded-full text-white hover:bg-white hover:text-black'>Continue</button>
              </div>

            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default Form