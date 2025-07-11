import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className='px-4 pt-8'>
      <div className='border-blue-400 text-black max-w-[1200px] p-4 rounded-[50px] mx-auto'>
        <h3 className='text-3xl pt-16 md:pt-8 pb-8'>Services</h3>
        <div className='flex flex-col md:flex-row justify-center gap-2 md:gap-8 pb-8 text-white'>
          <div className='bg-gradient-to-br from-[#084cabb5] to-[#084cab] border-[1px] rounded-md py-16 w-[300px] text-center mx-auto md:mx-0'>
            <h4 className='font-semibold text-lg'>Website Creation</h4>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 mx-auto mt-8">
              <path stroke-Linecap="round" stroke-Linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          </div>
          <div className='bg-gradient-to-br from-[#084cabb5] to-[#084cab] border-[1px] rounded-md py-16 w-[300px] text-center mx-auto md:mx-0'>
            <h4 className='font-semibold text-lg'>Website Design</h4>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 mx-auto mt-8">
              <path stroke-Linecap="round" stroke-Linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>
          </div>
          <div className='bg-gradient-to-br from-[#084cabb5] to-[#084cab] border-[1px] rounded-md py-16 w-[300px] text-center mx-auto md:mx-0'>
            <h4 className='font-semibold text-lg'>Additional Services</h4>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 mx-auto mt-8">
              <path stroke-Linecap="round" stroke-Linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className='text-black pt-20 md:pb-20 p-4 max-w-[1200px] mx-auto'>
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className='text-3xl pb-4'>Upgrading or Creating</h3>
            <p className='text-2xl pb-12'>We can help at any stage of the process.</p>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1'>
              <div className='flex flex-col md:flex-row'>
                <p className='pb-16 md:pr-12 text-lg'>Elevate Your Online Presence with Our Expert Website Services! Perfect solution for companies that already have an existing website running or for companies that are trying to establish their first online presence.</p>
                <p className='pb-16 text-lg'>Experience a tailored solution right for your business. Following modern design principles your user experience will be top notch. All plans come with SEO optimization, mobile responsive and fast turn around.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <div className='text-gray-700 pt-20 md:pb-20 p-4 max-w-[1200px] mx-auto'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row'>
          <div className='flex-1 mb-16 md:mb-0'>
            <img src='images/web-design.svg' className='' />
          </div>
          <div className='flex-1 md:pl-12'>
            <h3 className='text-4xl pb-4'>Custom Design</h3>
            <p className='text-xl pb-8'>Fully customized layouts and pages. Choose the amount of custom pages you need and that will fit your required budget. All our plans include a fully custom design for the landing page, and from there you can extend it to the secondary pages of your website as needed. </p>
            <p className=''>Custom landing page</p>
            <p>Optional custom secondary pages</p>
            <p>Responsive design</p>
            <p>Cross browser compatible</p>
          </div>
        </motion.div>
      </div>
      <div className='text-gray-700 pt-20 pb-20 p-4 max-w-[1200px] mx-auto'>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row'>
          <div className='flex-1 md:mr-12'>
            <h3 className='text-4xl pb-4'>Full Service</h3>
            <p className='text-xl pb-8'>Creating your website is just the beginning. We offer a full suite of optional services such as domain registration, hosting, copy writing, lead generation and more. You can choose to add on these services as your business grows.</p>
            <p>Domain registration</p>
            <p>Hosting</p>
            <p>Copy writing</p>
            <p>Lead generation</p>
          </div>
          <div className='flex-1 mt-16 md:mt-0'>
            <img src='images/web-design-1.svg' />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services