import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Contact from './Contact'

const technologies = [
  {
    name: 'JavaScript',
    picture: '/images/javascript-color.svg',
    alt:'Javascript Logo'
  },
  {
    name: 'React',
    picture: '/images/react-color.svg',
    alt: 'React Logo'
  },
  {
    name: 'Node',
    picture: '/images/nodejs-color.svg',
    alt: 'Node Logo'
  },
  {
    name: 'Azure',
    picture: '/images/azure.svg',
    alt: 'Azure Logo'
  },
  {
    name: 'GitHub',
    picture: '/images/github.svg',
    alt: 'GitHub Logo'
  },
  {
    name: 'MongoDB',
    picture: '/images/mongodb.svg',
    alt: 'MongoDB Logo'
  },
  {
    name: 'Tailwind',
    picture: '/images/tailwindcss-color.svg',
    alt: 'Tailwind Logo'
  },
  {
    name: 'MUI',
    picture: '/images/mui-color.svg',
    alt: 'MUI Logo'
  },
  {
    name: 'Bootstrap',
    picture: '/images/bootstrap-color.svg',
    alt: 'Bootstrap Logo'
  }
]

const About = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='min-h-screen'>

      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='py-4' id='about'>

        <div className=''>

          <div className='pb-8 px-4'>
            <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto text-gray-600'>
              <div className='flex-1'>
              <h2 className='text-3xl pt-4 pb-8'>About Me <span>
                {/* <h2 className='text-2xl md:text-4xl text-gray-900 font-semibold tracking-tight mb-8'>About Me <span> */}
                  <a className='inline-flex text-lg font-semibold text-gray-600 underline hover:text-blue-500 transition duration-500' href="/resume.pdf" target="_blank">
                    Resume
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>


                  </a>
                </span></h2>
                <p className='mb-4'>Hello, My name is Syed Imad Ahmed.
                  As a full stack developer, I hold a diploma in computer programming and specialize in web development.
                  My primary coding language for full stack development is JavaScript.</p>
                <p className='mb-4'>On the front-end using React, I create engaging and responsive Single Page Applications (SPAs) and Progressive Web Applications (PWAs).
                  On the back end, I have diverse experience with various technologies, with a particular focus on Node within the JavaScript ecosystem.
                </p>

                {!open && <button onClick={() => setOpen(true)} className='underline'>Read More</button>}

                {open && <div>
                  <p className='mb-4'>In my development workflow, I employ a range of solutions to effectively manage, build, and deploy repositories.
                    Data management and security are paramount, and I utilize databases to ensure the integrity and confidentiality of application data.
                    MongoDB is a key component of my skill set, contributing to the MERN (MongoDB, Express, React, Node) stack.
                  </p>
                  <p>To enhance the user experience, I work with different styling libraries and frameworks, ensuring that the user interface is not only functional but also aesthetically pleasing.
                    My goal is to create seamless and visually appealing applications that meet both user and business requirements.
                  </p>
                </div>}

              </div>
              <div className='flex-1'>
                <h2 className='text-xl md:text-2xl mt-8 md:mt-0 mb-8 text-blue-500 font-semibold tracking-tight'>Tech</h2>
                <div className='grid grid-cols-3 md:grid-cols-3 gap-4 mx-auto'>
                  {technologies.map((item, key) => (
                    <div key={key} className='py-2'>
                      <img src={item.picture} alt={item.alt} className='h-10 mx-auto' />
                      <p className='text-center font-semibold'>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Contact />
    </div>

  )
}

export default About