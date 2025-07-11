import { useState } from 'react'

const technologies = [
  {
    name: 'JavaScript',
    picture: '/images/javascript-color.svg'
  },
  {
    name: 'React',
    picture: '/images/react-color.svg'
  },
  {
    name: 'Node',
    picture: '/images/nodejs-color.svg'
  },
  {
    name: 'Azure',
    picture: '/images/azure.svg'
  },
  {
    name: 'GitHub',
    picture: '/images/github.svg'
  },
  {
    name: 'MongoDB',
    picture: '/images/mongodb.svg'
  },
  {
    name: 'Tailwind',
    picture: '/images/tailwindcss-color.svg'
  },
  {
    name: 'MUI',
    picture: '/images/mui-color.svg'
  },
  {
    name: 'Bootstrap',
    picture: '/images/bootstrap-color.svg'
  }
]

const About = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='' id='about'>
      <div className='py-16 md:py-32 px-4'>
            {/* <div className='pb-8 md:pb-16 px-4'> */}

        <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto text-gray-600'>
          <div className='flex-1'>
            <h2 className='text-2xl md:text-4xl text-gray-900 font-semibold tracking-tight mb-8'>About Me</h2>
            <p className='mb-4'>Hello, My name is Syed Imad Ahmed.
              As a full stack developer, I hold a diploma in computer programming and specialize in web development.
              My primary coding language for full stack development is JavaScript.</p>
            <p className='mb-4'>On the front-end using React, I create engaging and responsive Single Page Applications (SPAs) and Progressive Web Applications (PWAs).
              On the back end, I have diverse experience with various technologies, with a particular focus on Node within the JavaScript ecosystem.
            </p>
            
            {!open && <button onClick={()=>setOpen(true)} className='underline'>Read More</button>}
            
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
              {technologies.map((item) => (
                <div className='py-2'>
                  <img src={item.picture} className='h-10 mx-auto' />
                  <p className='text-center font-semibold'>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About