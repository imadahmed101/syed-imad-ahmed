import { useState } from 'react'
import { motion } from 'framer-motion'
import Contact from './Contact'

const technologies = [
  {
    name: 'JavaScript',
    picture: '/images/javascript-color.svg',
    alt: 'Javascript Logo'
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
    <div className=''>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='py-4' id='about'>

        <div className=''>

          <div className='pb-8 px-4'>
            <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto text-gray-600'>
              <div className='flex-1'>
                <section id="hero" className="py-16 text-center relative overflow-hidden">
                  <h1 className="text-4xl font-bold mt-16 mb-8">Hello, I&#39;m Syed Imad Ahmed</h1>
                  <p className="text-2xl font-medium mb-8 bg-yellow-300 max-w-[375px] mx-auto">Tech Support + Web & Cloud Dev</p>
                  {/* <Link href="#projects" className="p-4 bg-black text-white rounded border-2 border-transparent hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition duration-300">View Projects</Link> */}
                </section>

                <section id="about" className="max-w-4xl mx-auto">

                  <h2 className='text-3xl pt-4 pb-8'>About Me <span>
                    {/* <h2 className='text-2xl md:text-4xl text-gray-900 font-semibold tracking-tight mb-8'>About Me <span> */}
                    <a className='inline-flex text-lg font-semibold text-gray-600 underline hover:text-blue-500 transition duration-500' href="/resume.pdf" target="_blank">
                      Resume
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 my-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>


                    </a>
                  </span></h2>

                  <p className='mb-4'>As a full stack developer, I hold a diploma in computer programming and specialize in web development.
                    My primary coding language for full stack development is JavaScript.</p>
                  <p className='mb-4'>On the front-end using React, I create engaging and responsive Single Page Applications (SPAs) and Progressive Web Applications (PWAs).
                    On the back end, I have diverse experience with various technologies, with a particular focus on Node within the JavaScript ecosystem.
                  </p>

                </section>


                <section id="freelance" className='max-w-4xl mx-auto pt-8'>
                  <h3 className='my-4 text-xl font-semibold'>Freelance Services</h3>

                  <div>
                    <p className='mb-4'>In my development workflow, I employ a range of solutions to effectively manage, build, and deploy repositories.
                      Data management and security are paramount, and I utilize databases to ensure the integrity and confidentiality of application data.
                      MongoDB is a key component of my skill set, contributing to the MERN (MongoDB, Express, React, Node) stack.
                    </p>
                    <p>To enhance the user experience, I work with different styling libraries and frameworks, ensuring that the user interface is not only functional but also aesthetically pleasing.
                      My goal is to create seamless and visually appealing applications that meet both user and business requirements.
                    </p>

                  </div>
                </section>


                <section id="tech" className='max-w-4xl mx-auto pt-8'>
                  <h2 className='text-xl md:text-2xl mt-8 md:mt-4 mb-8 text-blue-500 font-semibold tracking-tight'>Tech</h2>
                  <div className='grid grid-cols-3 md:grid-cols-3 gap-4 mx-auto'>
                    {technologies.map((item, key) => (
                      <div key={key} className='py-2'>
                        <img src={item.picture} alt={item.alt} className='h-10 mx-auto' />
                        <p className='text-center font-semibold'>{item.name}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="developer" className='max-w-4xl mx-auto pt-8'>
                  <h3 className='my-4 text-xl font-semibold'>Developer Work</h3>

                </section>

                <section id="about" className="max-w-4xl mx-auto px-4 text-center">
                  <div className="grid md:grid-cols-2 gap-10 text-left">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center bg-yellow-300 max-w-[200px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20z" clipRule="evenodd" />
                        </svg>
                        Who I Am
                      </h3>
                      <p>
                        I&#39;m a Cloud and Full-Stack Developer with a passion for building scalable applications and automating infrastructure using modern cloud-native technologies. With a background in Computer Programming and a postgraduate specialization in Cloud Development & Operations, I bring hands-on experience deploying full-stack apps, creating CI/CD pipelines, and provisioning secure Azure environments using tools like Bicep, GitHub Actions, and Azure CLI.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center bg-yellow-300 max-w-[200px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20z" clipRule="evenodd" />
                        </svg>
                        What I Do
                      </h3>
                      <p>
                        I build cloud-native and serverless apps using React, Node.js, and Azure Functions, and automate cloud infrastructure using Bicep and the Azure CLI. I’ve implemented secure authentication with Azure AD (Entra ID), designed scalable databases using Cosmos DB and Azure SQL, and created CI/CD workflows using GitHub Actions to streamline deployment pipelines. I also manage Linux-based VPS environments for freelance and personal projects.
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold mb-8">Technologies & Tools I Use</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">React</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Node.js</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Cosmos DB</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Azure</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Azure CLI</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Bicep</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Entra ID</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Postman</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">GitHub</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">GitHub Actions</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Docker</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Ubuntu</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="technical" className='max-w-4xl mx-auto pt-8'>

                  <h3 className='my-4 text-xl font-semibold'>Technical Support</h3>

                  <div>
                    <p className='mb-4'>In my development workflow, I employ a range of solutions to effectively manage, build, and deploy repositories.
                      Data management and security are paramount, and I utilize databases to ensure the integrity and confidentiality of application data.
                      MongoDB is a key component of my skill set, contributing to the MERN (MongoDB, Express, React, Node) stack.
                    </p>
                    <p>To enhance the user experience, I work with different styling libraries and frameworks, ensuring that the user interface is not only functional but also aesthetically pleasing.
                      My goal is to create seamless and visually appealing applications that meet both user and business requirements.
                    </p>
                  </div>
                </section>

                <section id="socials" className='max-w-4xl mx-auto'>
                </section>
              </div>

            </div>

          </div>
        </div>
        <Contact />
      </motion.div>
    </div>

  )
}

export default About