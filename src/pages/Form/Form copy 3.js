import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Pricing from '../../components/Pricing'

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
        .required('Required Field'),
      url: yup
        .string()
        .required('Required Field'),
      businessName: yup
        .string()
        .required('Required Field'),
      industry: yup
        .string()
        .required('Required Field'),
      businessDescription: yup
        .string()
        .required('Required Field')
        .max(300, 'Max 200 characters'),
      outcome: yup
        .string()
        .required('Required Field'),
      budget: yup
        .string()
        .required('Required Field'),
      userName: yup
        .string()
        .required('Required Field'),
      userEmail: yup
        .string()
        .email('Enter a valid email')
        .required('Required Field'),
      confirmEmail: yup
        .string()
        .email('Enter a valid email')
        .required('Required Field'),
      userPhone: yup
        .string()
        .min(10, 'minimum 10 digits')
        .max(15, 'max 15 digits')
        .required('Required Field'),
      contactMethod: yup
        .string()
        .required('Required Field'),
      contactTime: yup
        .string()
        .required('Required Field'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs.send(process.env.REACT_APP_MY_SERVICE_KEY, process.env.REACT_APP_MY_QUOTE_KEY, values, process.env.REACT_APP_MY_API_KEY)
        .then((result) => {
          setSubmitting(false);
          resetForm();
          alert('Request form successfully sent.')
          navigate('/thanks')
        }, (error) => {
          setSubmitting(false);
          alert('Error sending request form please try again.')
        });
    },
  });
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [businessInfo, setBusinessInfo] = useState(false)
  const [servicesInfo, setServicesInfo] = useState(false)
  const [personalInfo, setPersonalInfo] = useState(false)

  return (
    <div className='pt-2 md:p-4 min-h-screen'>
      <form onSubmit={formik.handleSubmit} className='max-w-[500px] py-4 px-4 md:px-8 mx-auto'>
        <h1 className='text-2xl text-black font-semibold text-center mb-4'>New Client Inquiry</h1>

        <div className='flex flex-row text-center justify-center text-gray-400 mb-8'>

          {!businessInfo ?
            <div className='text-black bg-gray-300 px-2 rounded-full'>
              <p>1</p>
              {/* <p>Business Info</p> */}
            </div>
            :
            <button type='button' className='px-2' onClick={() => { setBusinessInfo(false); setServicesInfo(false); setPersonalInfo(false); setOne(false); setTwo(false) }}>
              <p>1</p>
              {/* <p>Business Info</p> */}
            </button>
          }

          {/* <hr className='w-4 my-auto' /> */}

          {businessInfo && !servicesInfo ?
            <div className='text-black bg-gray-300 px-2 rounded-full'>
              <p>2</p>
              {/* <p>Services Info</p> */}
            </div>
            :
            <button type='button' className='px-2' onClick={() => { setBusinessInfo(true); setServicesInfo(false); setPersonalInfo(false); setOne(false); setTwo(false) }}>
              <p>2</p>
              {/* <p>Services Info</p> */}
            </button>
          }

          {/* <hr className='w-4 my-auto' /> */}

          {businessInfo && servicesInfo && !personalInfo ?
            <div className='text-black bg-gray-300 px-2 rounded-full'>
              <p>3</p>
              {/* <p>Personal Info</p> */}
            </div>
            :
            <button type='button' className='px-2' onClick={() => { setBusinessInfo(true); setServicesInfo(true); setPersonalInfo(false); setOne(false); setTwo(false) }}>
              <p>3</p>
              {/* <p>Personal Info</p> */}
            </button>
          }

          {/* <hr className='w-4 my-auto' /> */}


          {businessInfo && servicesInfo && personalInfo && !one ?
            <div className='text-black bg-gray-300 px-2 rounded-full'>
              <p>4</p>
              {/* <p>Business Info</p> */}
            </div>
            :
            <button type='button' className='px-2' onClick={() => { setBusinessInfo(true); setServicesInfo(true); setPersonalInfo(true); setOne(false); setTwo(false) }}>
              <p>4</p>
              {/* <p>Business Info</p> */}
            </button>
          }

          {/* <hr className='w-4 my-auto' /> */}

          {businessInfo && servicesInfo && personalInfo && one && !two ?
            <div className='text-black bg-gray-300 px-2 rounded-full'>
              <p>5</p>
              {/* <p>Services Info</p> */}
            </div>
            :
            <button type='button' className='px-2' onClick={() => { setBusinessInfo(true); setServicesInfo(true); setPersonalInfo(true); setOne(true); setTwo(false) }}>
              <p>5</p>
              {/* <p>Services Info</p> */}
            </button>
          }

          {/* <hr className='w-4 my-auto' /> */}

          {businessInfo && servicesInfo && personalInfo && one && two && !three ?
            <div className='text-black bg-gray-300 px-2 rounded-full'>
              <p>6</p>
              {/* <p>Personal Info</p> */}
            </div>
            :
            <button type='button' className='px-2' onClick={() => { setBusinessInfo(true); setServicesInfo(true); setPersonalInfo(true); setOne(true); setTwo(true) }}>
              <p>6</p>
              {/* <p>Personal Info</p> */}
            </button>
          }

        </div>

        <div className='px-4'>


          {!businessInfo &&
            <div>
              <div className='flex flex-col'>

                <label className='flex flex-col text-gray-700 font-semibold mb-6'>Brand New or Existing Website?
                {/* <label className='flex flex-col text-gray-700 font-semibold mb-6'>Are you looking to */}
                  <select
                  id="service"
                  name="service"
                  value={formik.values.service}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300'>
                  <option value=''>Select</option>
                  <option value='create'>Create A Brand New Website</option>
                  <option value='upgrade'>Upgrade An Existing Website</option>
                </select>
                  {formik.touched.service && formik.errors.service ? <div className='text-red-600 font-medium'>{formik.errors.service}</div> : null}
                </label>

                {/* <div className='flex flex-row'>

                  <button className='bg-red-500 py-8 m-1 p-1'>
                    <option value='create'>Create A Brand New Website</option>
                  </button>

                  <button className='bg-blue-500 py-8 m-1 p-1'>
                    <option value='upgrade'>Upgrade An Existing Website</option>
                  </button>
                </div> */}





              </div>

              <div className='text-right'>
                <button type='button' onClick={() => setBusinessInfo(true)} className='bg-black p-2 rounded-full text-white hover:bg-gradient-to-br hover:from-[#084cabb5] hover:to-[#084cab]'>Continue</button>
              </div>

            </div>
          }

          {businessInfo && !servicesInfo &&
            <div>

              <div className='flex flex-col'>

                <label className='flex flex-col text-gray-700 font-semibold mb-6'>Business Name
                  <input id="businessName"
                    name="businessName"
                    placeholder='abc company'
                    value={formik.values.businessName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300' />
                  {formik.touched.businessName && formik.errors.businessName ? <div className='text-red-600 font-medium'>{formik.errors.businessName}</div> : null}
                </label>


                <label className='flex flex-col text-gray-700 font-semibold mb-6'>Existing Website URL
                  <input id="url"
                    name="url"
                    placeholder='www.example.com'
                    value={formik.values.url}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300' />
                  {formik.touched.url && formik.errors.url ? <div className='text-red-600 font-medium'>{formik.errors.url}</div> : null}
                </label>

              </div>

              <div className='flex flex-row justify-between'>

                <div className=''>
                  <button type='button' onClick={() => setBusinessInfo(false)} className='p-2 rounded-full text-black'>Back</button>
                </div>

                <div className=''>
                  <button type='button' onClick={() => setServicesInfo(true)} className='bg-black p-2 rounded-full text-white hover:bg-gradient-to-br hover:from-[#084cabb5] hover:to-[#084cab]'>Continue</button>
                </div>

              </div>
            </div>
          }


          {businessInfo && servicesInfo && !personalInfo &&
            <div>

              <div className='flex flex-col'>



                <label className='flex flex-col text-gray-700  font-semibold mb-6'>What are you looking to do?
                  <select
                    id="outcome"
                    name="outcome"
                    value={formik.values.outcome}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300'>
                    <option value=''>Select</option>
                    <option value='presence'>Building Online Presence</option>
                    <option value='lead'>Lead Generation</option>
                    <option value='awareness'>Brand Awareness</option>
                    <option value='other'>Other</option>
                  </select>
                  {formik.touched.outcome && formik.errors.outcome ? <div className='text-red-600 font-medium'>{formik.errors.outcome}</div> : null}
                </label>


                <label className='flex flex-col text-gray-700  font-semibold mb-6'>Anticipated Budget?
                  <select id="budget"
                    name="budget"
                    value={formik.values.budget}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300'>
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



              {formik.values.budget === '0-300' &&
                <div className='border-[1px] border-gray-300 rounded-md px-4 py-2 mb-4'>
                  <p className='flex justify-center text-black text-xl py-2 mb-4 rounded-md'>Recommended Plan</p>

                  <div className='flex-1 py-8 px-2 md:py-2 '>
                    <p className='text-xl py-4 font-semibold text-center'>Starter</p>
                    <p className='text-3xl pb-8 text-center'>$299 <span className='text-gray-500 text-sm'>/year</span></p>

                    {/* <p className='flex justify-center bg-black text-white text-xl py-2 mb-8 rounded-md'>Recommended Plan</p> */}


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
              }

              {formik.values.budget === '300-500' &&
                <div>
                  <div className='border-[1px] border-gray-300 rounded-md px-4 py-2 mb-4'>
                    <p className='flex justify-center text-black text-xl py-2 mb-4 rounded-md'>Recommended Plans</p>

                    <div className='flex-1 py-8 px-2 md:py-2 '>
                      <p className='text-xl py-4 font-semibold text-center'>Starter</p>
                      <p className='text-3xl pb-8 text-center'>$299 <span className='text-gray-500 text-sm'>/year</span></p>

                      {/* <p className='flex justify-center bg-black text-white text-xl py-2 mb-8 rounded-md'>Recommended Plan</p> */}


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

                    <hr className='bg-gray-300 mt-2 h-[2px]' />

                    <div className='flex-1 py-8 mt-4 px-2 md:py-2 '>
                      <p className='text-xl py-4 font-semibold text-center'>Advanced</p>
                      <p className='text-3xl pb-8 text-center'>$499 <span className='text-gray-500 text-sm'>/year</span></p>

                      {/* <p className='flex justify-center bg-black text-white text-xl py-2 mb-8 rounded-md'>Recommended Plan</p> */}


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

                  </div>

                </div>
              }

              {formik.values.budget === '500-1000' &&
                <div>
                  <div className='border-[1px] border-gray-300 rounded-md px-4 py-2 mb-4'>
                    <p className='flex justify-center text-black text-xl py-2 mb-4 rounded-md'>Recommended Plans</p>

                    <div className='flex-1 py-8 px-2 md:py-2 '>
                      <p className='text-xl py-4 font-semibold text-center'>Advanced</p>
                      <p className='text-3xl pb-8 text-center'>$499 <span className='text-gray-500 text-sm'>/year</span></p>

                      {/* <p className='flex justify-center bg-black text-white text-xl py-2 mb-8 rounded-md'>Recommended Plan</p> */}


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

                    <hr className='bg-gray-300 mt-2 h-[2px]' />

                    <div className='flex-1 py-8 mt-4 px-2 md:py-2 '>
                      <p className='text-xl py-4 font-semibold text-center'>Expert</p>
                      <p className='text-3xl pb-8 text-center'>$999 <span className='text-gray-500 text-sm'>/year</span></p>

                      {/* <p className='flex justify-center bg-black text-white text-xl py-2 mb-8 rounded-md'>Recommended Plan</p> */}


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
              }

              {formik.values.budget === '1000+' &&
                <div className='border-[1px] border-gray-300 rounded-md px-4 py-2 mb-4'>
                  <p className='flex justify-center text-black text-xl py-2 mb-4 rounded-md'>Recommended Plan</p>

                  <div className='flex-1 py-8 px-2 md:py-2'>
                    <p className='text-xl py-4 font-semibold text-center'>Expert</p>
                    <p className='text-3xl pb-8 text-center'>$999 <span className='text-gray-500 text-sm'>/year</span></p>

                    {/* <p className='flex justify-center bg-black text-white text-xl py-2 mb-8 rounded-md'>Recommended Plan</p> */}


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
              }

              {formik.values.budget === 'unsure' &&

                <div>
                  <div className='border-[1px] border-gray-300 rounded-md px-4 py-2 mb-4'>
                    <p className='flex justify-center text-black text-xl py-2 mb-4 rounded-md'>Recommended Plans</p>

                    <div className='flex-1 py-8 px-2 md:py-2 '>
                      <p className='text-xl py-4 font-semibold text-center'>Starter</p>
                      <p className='text-3xl pb-8 text-center'>$299 <span className='text-gray-500 text-sm'>/year</span></p>

                      {/* <p className='flex justify-center bg-black text-white text-xl py-2 mb-8 rounded-md'>Recommended Plan</p> */}


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

                    <hr className='bg-gray-300 mt-2 h-[2px]' />

                    <div className='flex-1 py-8 mt-4 px-2 md:py-2 '>
                      <p className='text-xl py-4 font-semibold text-center'>Advanced</p>
                      <p className='text-3xl pb-8 text-center'>$499 <span className='text-gray-500 text-sm'>/year</span></p>

                      {/* <p className='flex justify-center bg-black text-white text-xl py-2 mb-8 rounded-md'>Recommended Plan</p> */}


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

                    <hr className='bg-gray-300 mt-2 h-[2px]' />

                    <div className='flex-1 py-8 mt-4 px-2 md:py-2 '>
                      <p className='text-xl py-4 font-semibold text-center'>Expert</p>
                      <p className='text-3xl pb-8 text-center'>$999 <span className='text-gray-500 text-sm'>/year</span></p>

                      {/* <p className='flex justify-center bg-black text-white text-xl py-2 mb-8 rounded-md'>Recommended Plan</p> */}


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


              }

              <div className='flex flex-row justify-between'>

                <div className=''>
                  <button type='button' onClick={() => setServicesInfo(false)} className='p-2 rounded-full text-black'>Back</button>
                </div>

                <div className=''>
                  <button type='button' onClick={() => setPersonalInfo(true)} className='bg-black p-2 rounded-full text-white hover:bg-gradient-to-br hover:from-[#084cabb5] hover:to-[#084cab]'>Continue</button>
                </div>

              </div>
            </div>
          }

          {businessInfo && servicesInfo && personalInfo && !one &&
            <div>

              <div className='flex flex-col'>

                <label className='flex flex-col text-gray-700 font-semibold mb-6'>What type of industry are you in?
                  <select id="industry"
                    name="industry"
                    value={formik.values.industry}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300'>
                    <option value=''>Select</option>
                    <option value='ecommerce'>E-commerce</option>
                    <option value='service'>Service</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='food'>Food</option>
                    <option value='other'>Other</option>
                  </select>
                  {formik.touched.industry && formik.errors.industry ? <div className='text-red-600 font-medium'>{formik.errors.industry}</div> : null}
                </label>

                <label className='flex flex-col text-gray-700 font-semibold mb-6'>Short description of what products or services you offer...
                  <textarea id="businessDescription"
                    name="businessDescription"
                    placeholder='quick description about your business'
                    value={formik.values.businessDescription}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300' />
                  {formik.touched.businessDescription && formik.errors.businessDescription ? <div className='text-red-600 font-medium'>{formik.errors.businessDescription}</div> : null}
                </label>

              </div>

              <div className='flex flex-row justify-between'>

                <div className=''>
                  <button type='button' onClick={() => setPersonalInfo(false)} className='p-2 rounded-full text-black'>Back</button>
                </div>

                <div className=''>
                  <button type='button' onClick={() => setOne(true)} className='bg-black p-2 rounded-full text-white hover:bg-gradient-to-br hover:from-[#084cabb5] hover:to-[#084cab]'>Continue</button>
                </div>

              </div>
            </div>
          }

          {businessInfo && servicesInfo && personalInfo && one && !two &&
            <div>

              <div className='flex flex-col'>


                <label className='flex flex-col text-gray-700 font-semibold mb-6'>Your Name
                  <input id="userName"
                    name="userName"
                    placeholder='name'
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300' />
                  {formik.touched.userName && formik.errors.userName ? <div className='text-red-600 font-medium'>{formik.errors.userName}</div> : null}
                </label>

                <label className='flex flex-col text-gray-700 font-semibold mb-6'>Your Email
                  <input id="userEmail"
                    name="userEmail"
                    placeholder='user@example.com'
                    value={formik.values.userEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300' />
                  {formik.touched.userEmail && formik.errors.userEmail ? <div className='text-red-600 font-medium'>{formik.errors.userEmail}</div> : null}
                </label>

                <label className='flex flex-col text-gray-700 font-semibold mb-6'>Confirm Your Email
                  <input id="confirmEmail"
                    name="confirmEmail"
                    placeholder='user@example.com'
                    value={formik.values.confirmEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300' />
                  {formik.touched.confirmEmail && formik.errors.confirmEmail ? <div className='text-red-600 font-medium'>{formik.errors.confirmEmail}</div> : null}
                </label>

                <label className='flex flex-col text-gray-700 font-semibold mb-6'>Your Phone
                  <input id="userPhone"
                    name="userPhone"
                    placeholder='123-450-0000'
                    value={formik.values.userPhone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300' />
                  {formik.touched.userPhone && formik.errors.userPhone ? <div className='text-red-600 font-medium'>{formik.errors.businessName}</div> : null}
                </label>

              </div>

              <div className='flex flex-row justify-between'>

                <div className=''>
                  <button type='button' onClick={() => setOne(false)} className='p-2 rounded-full text-black'>Back</button>
                </div>

                <div className=''>
                  <button type='button' onClick={() => setTwo(true)} className='bg-black p-2 rounded-full text-white hover:bg-gradient-to-br hover:from-[#084cabb5] hover:to-[#084cab]'>Continue</button>

                </div>

              </div>
            </div>
          }


          {businessInfo && servicesInfo && personalInfo && one && two && !three &&
            <div>

              <div className='flex flex-col'>

                <label className='flex flex-col text-gray-700 font-semibold mb-6'>Best Method Of Contact
                  <select id="contactMethod"
                    name="contactMethod"
                    value={formik.values.contactMethod}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300'>
                    <option value=''>Select</option>
                    <option value='email'>Email</option>
                    <option value='phone'>Phone</option>
                    <option value='both'>Both</option>
                  </select>
                  {formik.touched.contactMethod && formik.errors.contactMethod ? <div className='text-red-600 font-medium'>{formik.errors.contactMethod}</div> : null}
                </label>

                <label className='flex flex-col text-gray-700 font-semibold mb-6'>Best Time To Contact
                  <select id="contactTime"
                    name="contactTime"
                    value={formik.values.contactTime}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-300'>
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
                  <button type='button' onClick={() => setTwo(false)} className='p-2 rounded-full text-black'>Back</button>
                </div>

                <div className=''>
                  <button type='submit' className='bg-black p-2 rounded-full text-white hover:bg-gradient-to-br hover:from-[#084cabb5] hover:to-[#084cab]'>Submit</button>
                </div>

              </div>
            </div>
          }

        </div>

      </form>
    </div>
  )
}

export default Form