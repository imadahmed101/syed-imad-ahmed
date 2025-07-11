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
    <div className='px-4 pt-8'>


      {/* <div className='bg-black text-white max-w-[1200px] p-8 rounded-[50px] mx-auto'> */}
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


      <div className='text-black pt-20 pb-20 p-4 max-w-[1200px] mx-auto'>
        <motion.section
          // variants=
          // {containerVariant}
          // initial='hidden'
          // animate='show'

          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
        >

          <div>

            <h3 className='text-3xl pb-4'>Upgrading or Creating</h3>
            <p className='text-2xl pb-12'>We can help at any stage of the process.</p>
          </div>
          <div className='flex flex-col md:flex-row'>

            <div className='flex-1'>

              <div className=''>

                <p className='pb-16 text-lg'>Elevate Your Online Presence with Our Expert Website Services! Perfect solution for comapnies that already have an existing website running or for comapnies that are trying to establish their first online presence.</p>

              </div>
              <p className='font-semibold'>Upgrading an existing website</p>
              <p>Creating a brand new website</p>


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



            <div className='flex-1 ml-16 text-blue-600 font-semibold text-xl my-auto'>
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

      <div className='text-gray-700 pt-20 pb-20 p-4 max-w-[1200px] mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row'>

          <div className='flex-1 mr-2'>
            {/* <img src='images/layout.jpg' className='rounded-md border-t-8 border-l-8 border-yellow-400'/> */}
            {/* <img src='images/layout.jpg' className='rounded-md'/> */}
            <img src='images/web-design.svg' className=''/>
          </div>
          <div className='flex-1 pl-4'>


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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row'>

          <div className='flex-1 mr-4'>


            <h3 className='text-4xl pb-4'>Full Service</h3>
            <p className='text-xl pb-8'>Creating your website is just the beginning. We offer a full suite of optional services such as domain registration, hosting, copy writing, lead generation and more. You can choose to add on these services as your business grows.</p>
            <p>Domain registration</p>
            <p>Hosting</p>
            <p>Copy writing</p>
            <p>Lead generation</p>
          </div>



          <div className='flex-1'>
            <img src='images/web-design-1.svg'/>
          </div>


        </motion.div>
      </div>


    </div>
  )
}

export default Services