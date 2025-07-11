import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Form = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      service: '',
      url: '',
      businessName: '',
      industry: '',
      businessDescription: '',
      outcome: '',
      budget: '',
      userName: '',
      userEmail: '',
      confirmEmail: '',
      userPhone: '',
      contactMethod: '',
      contactTime: '',
    },
    validationSchema: yup.object({
      service: yup
        .string()
        .required('Please choose an option'),
      url: yup
        .string()
        .required('Please choose an option'),
      businessName: yup
        .string()
        .required('Please choose an option'),
      industry: yup
        .string()
        .required('Please choose an option'),
      businessDescription: yup
        .string()
        .required('Please choose an option'),
      outcome: yup
        .string()
        .required('Please choose an option'),
      budget: yup
        .string()
        .required('Please choose an option'),
      userName: yup
        .string()
        .required('Please choose an option'),
      userEmail: yup
        .string()
        .required('Please choose an option'),
      confirmEmail: yup
        .string()
        .required('Please choose an option'),
      userPhone: yup
        .string()
        .required('Please choose an option'),
      contactMethod: yup
        .string()
        .required('Please choose an option'),
      contactTime: yup
        .string()
        .required('Please choose an option'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs.send(process.env.REACT_APP_MY_SERVICE_KEY, process.env.REACT_APP_MY_QUOTE_KEY, values, process.env.REACT_APP_MY_API_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
              setSubmitting(false);
              alert('Error sending request form please try again.')
          });
      setSubmitting(false);
      resetForm();
      alert('Request form successfully sent! Please allow 24-48 business hours for reply.')
    },
  });


  const [submit, setSubmit] = useState(false)

  // const [service, setService] = useState('')
  // const [url, setUrl] = useState('')
  // const [businessName, setBusinessName] = useState('')
  // const [industry, setIndustry] = useState('')
  // const [businessDescription, setBusinessDescription] = useState('')
  // const [outcome, setOutcome] = useState('')
  // const [budget, setBudget] = useState('')
  // const [userName, setUserName] = useState('')
  // const [userEmail, setUserEmail] = useState('')
  // const [confirmEmail, setConfirmEmail] = useState('')
  // const [userPhone, setUserPhone] = useState('')
  // const [contactMethod, setContactMethod] = useState('')
  // const [contactTime, setContactTime] = useState('')

  const [businessInfo, setBusinessInfo] = useState(false)
  const [servicesInfo, setServicesInfo] = useState(false)
  const [personalInfo, setPersonalInfo] = useState(false)


  // const submitForm = () => {
  //   setSubmit(true);
  //   alert('Submitted Form')
  //   navigate('/')

  // }

  return (
    <div className='md:p-4 min-h-screen bg-[#084cab]'>
      <form onSubmit={formik.handleSubmit} className='max-w-[500px] py-4 px-2 md:px-8 mx-auto'>
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

              <label className='flex flex-col text-white font-semibold mb-6'>Are you looking to
                <select
                  id="service"
                  name="service"
                  value={formik.values.service}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium'>
                  <option value=''>Select</option>
                  <option value='create'>Create A Brand New Website</option>
                  <option value='upgrade'>Upgrade An Existing Website</option>
                </select>
                {formik.touched.service && formik.errors.service ? <div className='text-red-600 font-medium'>{formik.errors.service}</div> : null}
              </label>

              <label className='flex flex-col text-white font-semibold mb-6'>Existing Website URL
                <input id="url"
                  name="url"
                  value={formik.values.url}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium' />
                {formik.touched.url && formik.errors.url ? <div className='text-red-600 font-medium'>{formik.errors.url}</div> : null}
              </label>

              <label className='flex flex-col text-white font-semibold mb-6'>Business Name
                <input id="businessName"
                  name="businessName"
                  value={formik.values.businessName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium' />
                {formik.touched.businessName && formik.errors.businessName ? <div className='text-red-600 font-medium'>{formik.errors.businessName}</div> : null}
              </label>

              <label className='flex flex-col text-white font-semibold mb-6'>What type of industry are you in?
                <select id="industry"
                  name="industry"
                  value={formik.values.industry}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium'>
                  <option value=''>Select</option>
                  <option value='ecommerce'>E-commerce</option>
                  <option value='service'>Service</option>
                  <option value='entertainment'>Entertainment</option>
                  <option value='food'>Food</option>
                  <option value='other'>Other</option>
                </select>
                {formik.touched.industry && formik.errors.industry ? <div className='text-red-600 font-medium'>{formik.errors.industry}</div> : null}
              </label>

              <label className='flex flex-col text-white font-semibold mb-6'>Short description of what products or services you offer...
                <textarea id="businessDescription"
                  name="businessDescription"
                  value={formik.values.businessDescription}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium' />
                {formik.touched.businessDescription && formik.errors.businessDescription ? <div className='text-red-600 font-medium'>{formik.errors.businessDescription}</div> : null}
              </label>
            </div>

            <div className='text-right'>
              <button type='button' onClick={() => setBusinessInfo(true)} className='bg-black p-2 rounded-full text-white hover:bg-white hover:text-black'>Continue</button>
            </div>

          </div>
        }

        {businessInfo && !servicesInfo &&
          <div>

            <div className='flex flex-col'>

              <label className='flex flex-col text-white font-semibold mb-6'>What are you looking to do?
                <select
                  id="outcome"
                  name="outcome"
                  value={formik.values.outcome}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium'>
                  <option value=''>Select</option>
                  <option value='presence'>Building Online Presence</option>
                  <option value='lead'>Lead Generation</option>
                  <option value='awareness'>Brand Awareness</option>
                  <option value='other'>Other</option>
                </select>
                {formik.touched.outcome && formik.errors.outcome ? <div className='text-red-600 font-medium'>{formik.errors.outcome}</div> : null}
              </label>


              <label className='flex flex-col text-white font-semibold mb-6'>Anticipated Budget?
                <select id="budget"
                  name="budget"
                  value={formik.values.budget}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium'>
                  <option value=''>Select</option>
                  <option value='0-300'>$0-$300</option>
                  <option value='300-500'>$300-$500</option>
                  <option value='500-1000'>$500-$1000</option>
                  <option value='1000+'>$1000+</option>
                  <option value='unsure'>Not Sure</option>
                </select>
                {formik.touched.budget && formik.errors.budget ? <div className='text-red-600 font-medium'>{formik.errors.budget}</div> : null}
              </label>

            </div>

            <div className='flex flex-row justify-between'>

              <div className=''>
                <button type='button' onClick={() => setBusinessInfo(false)} className='p-2 rounded-full text-white'>Back</button>
              </div>

              <div className=''>
                <button type='button' onClick={() => setServicesInfo(true)} className='bg-black p-2 rounded-full text-white hover:bg-white hover:text-black'>Continue</button>
              </div>

            </div>
          </div>
        }


        {businessInfo && servicesInfo && !personalInfo &&
          <div>

            <div className='flex flex-col'>


              <label className='flex flex-col text-white font-semibold mb-6'>Your Name
                <input id="userName"
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium' />
                {formik.touched.userName && formik.errors.userName ? <div className='text-red-600 font-medium'>{formik.errors.userName}</div> : null}
              </label>

              <label className='flex flex-col text-white font-semibold mb-6'>Your Email
                <input id="userEmail"
                  name="userEmail"
                  value={formik.values.userEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium' />
                {formik.touched.userEmail && formik.errors.userEmail ? <div className='text-red-600 font-medium'>{formik.errors.userEmail}</div> : null}
              </label>

              <label className='flex flex-col text-white font-semibold mb-6'>Confirm Your Email
                <input id="confirmEmail"
                  name="confirmEmail"
                  value={formik.values.confirmEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium' />
                {formik.touched.confirmEmail && formik.errors.confirmEmail ? <div className='text-red-600 font-medium'>{formik.errors.confirmEmail}</div> : null}
              </label>

              <label className='flex flex-col text-white font-semibold mb-6'>Your Phone
                <input id="userPhone"
                  name="userPhone"
                  value={formik.values.userPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium' />
                {formik.touched.userPhone && formik.errors.userPhone ? <div className='text-red-600 font-medium'>{formik.errors.businessName}</div> : null}
              </label>

              <label className='flex flex-col text-white font-semibold mb-6'>Best Method Of Contact
                <select id="contactMethod"
                  name="contactMethod"
                  value={formik.values.contactMethod}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium'>
                  <option value=''>Select</option>
                  <option value='email'>Email</option>
                  <option value='phone'>Phone</option>
                  <option value='both'>Both</option>
                </select>
                {formik.touched.contactMethod && formik.errors.contactMethod ? <div className='text-red-600 font-medium'>{formik.errors.contactMethod}</div> : null}
              </label>

              <label className='flex flex-col text-white font-semibold mb-6'>Best Time To Contact
                <select id="contactTime"
                  name="contactTime"
                  value={formik.values.contactTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium'>
                  <option value=''>Select</option>
                  <option value='9-11'>9am-11am</option>
                  <option value='11-1'>11am-1pm</option>
                  <option value='1-3'>1pm-3pm</option>
                  <option value='3-5'>3pm-5pm</option>
                  <option value='5-8'>5pm-8pm</option>
                </select>
                {formik.touched.contactTime && formik.errors.contactTime ? <div className='text-red-600 font-medium'>{formik.errors.contactTime}</div> : null}
              </label>

            </div>

            <div className='flex flex-row justify-between'>

              <div className=''>
                <button type='button' onClick={() => setServicesInfo(false)} className='p-2 rounded-full text-white'>Back</button>
              </div>

              <div className=''>
                <button type='submit' className='bg-black p-2 rounded-full text-white hover:bg-white hover:text-black'>Continue</button>
              </div>

            </div>
          </div>
        }

      </form>
    </div>
  )
}

export default Form