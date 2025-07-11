import React from 'react'
import { motion } from 'framer-motion'

const containerVariant = {
  hidden: { 
    opacity: 0,
    y: 80
   },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 4,
    },
    y: 0
  }
}

const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const Services = () => {
  return (
    <div>


      <div className='text-gray-700 pt-[120px] pb-40 p-4 max-w-[1200px] mx-auto'>
        <motion.section
          variants=
          {containerVariant}
          initial='hidden'
          animate='show'
          >
        <div className='flex flex-col md:flex-row'>

          <div className='flex-1'>


            <h3 className='text-4xl pb-4'>Upgrading or Creating</h3>
            <p className='text-3xl pb-12'>We can help at any stage of the process.</p>
            <p className='font-semibold'>Upgrading an existing website</p>
            <p>Creating a brand new website</p>

            <div className='text-gray-600'>

              <p className='pt-16 text-lg'>Elevate Your Online Presence with Our Expert Website Redesign Services!</p>

            </div>

            <p className='hidden'>
              🌟 Elevate Your Online Presence with Our Expert Website Redesign Services! 🌟

              Is your website feeling outdated? Does it lack the visual appeal and functionality to captivate your audience? Don't let an underwhelming online presence hold your business back! At [Your Agency Name], we specialize in breathing new life into existing websites with our professional redesign services.

              🚀 Why Choose Us for Your Website Redesign? 🚀

              Tailored Solutions: We understand that every business is unique. That's why our team of skilled designers and developers will work closely with you to understand your specific goals and tailor a redesign that aligns perfectly with your brand identity and objectives.

              Modern Design: Impress your visitors with a sleek, modern design that reflects the latest trends and best practices in web design. Whether you're looking for a clean and minimalist look or a bold and vibrant aesthetic, we've got you covered.

              Enhanced User Experience: A user-friendly website is key to keeping visitors engaged and driving conversions. Our redesigns focus on optimizing the user experience, making it easier for your audience to navigate your site, find the information they need, and take action.

              Mobile Responsiveness: With an increasing number of users accessing the web from mobile devices, having a responsive website is non-negotiable. Our redesigns are fully optimized for mobile devices, ensuring a seamless experience across all screen sizes.

              SEO Optimization: A beautiful website is only effective if people can find it. Our redesign process includes thorough SEO optimization to improve your site's visibility in search engine results and attract more organic traffic.

              Fast Turnaround: We understand that time is of the essence. Our team is committed to delivering your redesigned website in a timely manner, without compromising on quality.

              Ready to Give Your Website a Makeover?

              Don't let an outdated website hold your business back. Contact us today to schedule a consultation and take the first step towards a stunning website redesign that will impress your audience and drive results. Let's elevate your online presence together!
            </p>
          </div>



          <div className='flex-1 ml-16 text-blue-600 font-semibold text-2xl my-auto'>
            <p className=''>

              Tailored Solutions
            </p>
            <p className=''>
              Modern Design

            </p>
            <p className=''>
              Enhanced User Experience

            </p>
            <p className=''>
              Mobile Responsiveness

            </p>
            <p className=''>
              SEO Optimization

            </p>
            <p className=''>

              Fast Turnaround

            </p>
          </div>


        </div>
            </motion.section>
      </div>

      <div className='text-gray-700 pt-80 pb-40 p-4 max-w-[1200px] mx-auto'>
        <div className='flex flex-col md:flex-row'>

          <div className='flex-1 bg-black py-32 md:py-0'>
          </div>
          <div className='flex-1 pl-4'>


            <h3 className='text-4xl pb-4'>Custom Design</h3>
            <p className='text-3xl pb-12'>Fully customizable layouts and pages</p>
            <p className='font-semibold'>Custom landing page</p>
            <p>Custom secondary pages</p>
          </div>



        </div>
      </div>



      <div className='text-gray-700 pt-80 pb-40 p-4 max-w-[1200px] mx-auto'>
        <div className='flex flex-col md:flex-row'>

          <div className='flex-1'>


            <h3 className='text-4xl pb-4'>Full Service</h3>
            <p className='text-3xl pb-12'>Offering Lead Generation and Advertising</p>
            <p className='font-semibold'>Lead generation</p>
            <p>Advertising</p>
          </div>



          <div className='flex-1 bg-black py-32 md:py-0'>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Services