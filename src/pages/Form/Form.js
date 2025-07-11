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
    },
    validationSchema: yup.object({
      url: yup
        .string()
        .required('Required Field'),
      businessName: yup
        .string()
        .required('Required Field'),
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

  return (
    <div className='pt-2 md:p-4 min-h-screen'>
        <h1 className='text-2xl text-black font-semibold text-center my-8'>New Client Inquiry</h1>
      <div className='flex max-w-[1200px] mx-auto'>

      <form onSubmit={formik.handleSubmit} className='flex-1 max-w-[600px] mx-auto py-4 px-4 md:px-8'>


        <div className='px-4'>


          
            <div>
              <div className='flex flex-col'>

              <label className='flex flex-col text-gray-700 text-xl font-semibold mb-6'>Your Name
                  <input id="userName"
                    name="userName"
                    placeholder='name'
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-500' />
                  {formik.touched.userName && formik.errors.userName ? <div className='text-red-600 font-medium'>{formik.errors.userName}</div> : null}
                </label>

                <label className='flex flex-col text-gray-700 text-xl font-semibold mb-6'>Business Name
                  <input id="businessName"
                    name="businessName"
                    placeholder='abc company'
                    value={formik.values.businessName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-500' />
                  {formik.touched.businessName && formik.errors.businessName ? <div className='text-red-600 font-medium'>{formik.errors.businessName}</div> : null}
                </label>

                <label className='flex flex-col text-gray-700 text-xl font-semibold mb-6'>Your Email
                  <input id="userEmail"
                    name="userEmail"
                    placeholder='user@example.com'
                    value={formik.values.userEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-500' />
                  {formik.touched.userEmail && formik.errors.userEmail ? <div className='text-red-600 font-medium'>{formik.errors.userEmail}</div> : null}
                </label>

                <label className='flex flex-col text-gray-700 text-xl font-semibold mb-6'>Confirm Your Email
                  <input id="confirmEmail"
                    name="confirmEmail"
                    placeholder='user@example.com'
                    value={formik.values.confirmEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-500' />
                  {formik.touched.confirmEmail && formik.errors.confirmEmail ? <div className='text-red-600 font-medium'>{formik.errors.confirmEmail}</div> : null}
                </label>

                <label className='flex flex-col text-gray-700 text-xl font-semibold mb-6'>Brand New or Existing Website?
                  <select
                  id="service"
                  name="service"
                  value={formik.values.service}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-500'>
                  <option value=''>Select</option>
                  <option value='create'>Create A Brand New Website</option>
                  <option value='upgrade'>Upgrade An Existing Website</option>
                </select>
                  {formik.touched.service && formik.errors.service ? <div className='text-red-600 font-medium'>{formik.errors.service}</div> : null}
                </label>

                

{formik.values.service === "upgrade" &&

                <label className='flex flex-col text-gray-700 text-xl font-semibold mb-6'>Existing Website URL
                  <input id="url"
                    name="url"
                    placeholder='www.example.com'
                    value={formik.values.url}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='px-4 py-2 rounded-md text-lg mt-2 text-black font-medium border-[1px] border-gray-500' />
                  {formik.touched.url && formik.errors.url ? <div className='text-red-600 font-medium'>{formik.errors.url}</div> : null}
                </label>
                  }

              </div>

              <div className='text-right'>
              <button type='submit' className='bg-black p-2 rounded-full text-white hover:bg-gradient-to-br hover:from-[#084cabb5] hover:to-[#084cab]'>Submit</button>

              </div>

            </div>
          

            </div>

      </form>
      <div className='flex-1 hidden xl:flex'>
        <img src='/images/contact.jpg'/>

    </div>
    </div>
    </div>
  )
}

export default Form