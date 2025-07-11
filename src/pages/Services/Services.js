import React from 'react'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import Pricing from '../../components/Pricing'
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <div className='min-h-screen'>
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }} className='max-w-[1200px] mx-auto px-6'>

                <h2 className='text-3xl pt-4 md:pt-8 pb-8'>Services</h2>
                <div className='flex flex-row flex-wrap'>

                    <div className='text-black pb-8 md:p-6 rounded-md max-w-[575px] mx-auto md:mx-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#084cab" className="w-8 h-8 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <h4 className='font-semibold text-lg mb-2'>Website Creation</h4>
                        <p className='text-gray-800'>Custom coding your website from the ground up. Ensuring correct html markup with use of semantic tags and high benchmark for performance.</p>
                    </div>

                    <div className='text-black pb-8 md:p-6 rounded-md max-w-[575px] mx-auto md:mx-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#084cab" className="w-8 h-8 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                        </svg>
                        <h4 className='font-semibold text-lg mb-2'>Website Design</h4>
                        <p className='text-gray-800'>Visually appealing websites. Creating designs that are responsive on all devices and browsers. Maintaining a high level of ux across the board.</p>
                    </div>

                    <div className='text-black pb-8 md:p-6 rounded-md max-w-[575px] mx-auto md:mx-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#084cab" className="w-8 h-8 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <h4 className='font-semibold text-lg mb-2'>Website Hosting</h4>
                        <p className='text-gray-800'>Hosting your website online using modern technologies. High uptime to ensure your website is viewable anytime your customers are browsing, day and night.</p>
                    </div>

                    <div className='text-black pb-8 md:p-6 rounded-md max-w-[575px] mx-auto md:mx-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#084cab" className="w-8 h-8 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        <h4 className='font-semibold text-lg mb-2'>Domain Registration</h4>
                        <p className='text-gray-800'>Helping you secure the right domain name. Balancing keywords as well as branding to come up with a cost effective website address.</p>
                    </div>

                    <div className='text-black pb-8 md:p-6 rounded-md max-w-[575px] mx-auto md:mx-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#084cab" className="w-8 h-8 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>
                        <h4 className='font-semibold text-lg mb-2'>Email Configuration</h4>
                        <p className='text-gray-800'>Use your web address as your email to interact with potential and existing customers. Professional appeal without the headache.</p>
                    </div>

                    <div className='text-black pb-8 md:p-6 rounded-md max-w-[575px] mx-auto md:mx-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#084cab" className="w-8 h-8 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        <h4 className='font-semibold text-lg mb-2'>Copy Writing</h4>
                        <p className='text-gray-800'>Explaining exactly what you do and how you can help your customers. Creating clear copy writing to answer any questions before they even get asked.</p>
                    </div>

                </div>

            </motion.div>
            <Pricing />
            <Contact />
        </div >
    )
}

export default Services