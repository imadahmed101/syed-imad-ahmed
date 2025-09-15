import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div className='text-black min-h-screen'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >

                <div className='text-center px-4 pb-8'>

                    <section id="projects" className="py-16">
                        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
                        <div className="max-w-6xl mx-auto px-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                                {/* Card 1 */}
                                <Link to='/projects/wmi' className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                    <img
                                        // src="/images/cloud1.svg"
                                        src='/images/wmi-tag.png'
                                        alt='Willis & Monroe Associates insurance agency project.'
                                        // className='md:rounded-md hover:border-black'
                                        // alt="Cloud Native Full Stack App"
                                        className="rounded-md mb-4 h-60 w-full object-cover"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">Insurance Agency Website</h3>
                                    <p className="text-gray-800 mb-3">
                                        A full-stack cloud-native app built with secure authentication via Entra ID, React front-end, and a scalable Node.js back-end using Cosmos DB.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-3 text-gray-600">
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">React</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Node.js</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Azure</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Cosmos DB</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Entra ID</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <a href="https://github.com/imadahmed101/student-portal-azure-cloudnative" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </Link>
                                {/* Card 2 */}
                                <Link to='/projects/sf' className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                    <img
                                        src='/images/sitefix-tag.png'
                                        alt='Sitefix web agency project.'
                                        //   className='md:rounded-md hover:border-black'
                                        // src="/images/cloud1.svg"
                                        // alt="Serverless Function App"
                                        className="rounded-md mb-4 h-60 w-full object-cover"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">Web Agency Website</h3>
                                    <p className="text-gray-800 mb-3">
                                        A serverless workout tracker built with Azure Functions, integrating blob/table/queue storage and automated reminders.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-3 text-gray-600">
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Function App</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Serverless Functions</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Azure</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Storage Accounts</span>
                                    </div>
                                    <div className="text-sm font-medium">
                                        <a href="https://github.com/imadahmed101/workout-tracker-azure-serverless" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </Link>
                                {/* Card 3 */}
                                <Link to='/projects/trnd' className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                    <img
                                        src='/images/trendily-tag.png'
                                        alt='Trendily social media marketing agency project.'
                                        // src="/images/cloud1.svg"
                                        // alt="Infrastructure as Code"
                                        className="rounded-md mb-4 h-60 w-full object-cover"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">Social Media Manager Website</h3>
                                    <p className="text-gray-800 mb-3">
                                        Automated deployment of web app infrastructure using Azure Bicep templates and CLI for a consistent, production-ready environment.
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-gray-600 mb-3">
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Azure</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Infrastucture as Code</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Bicep</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">CLI</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <a href="https://github.com/imadahmed101/webapp-iac-azure-bicep" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </Link>
                                {/* Card 4 */}
                                <Link to='/projects/trnd' className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                    <img
                                        src='/images/trendily-tag.png'
                                        alt='Trendily social media marketing agency project.'
                                        // src="/images/cloud1.svg"
                                        // alt="Infrastructure as Code"
                                        className="rounded-md mb-4 h-60 w-full object-cover"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">Social Media Manager Website</h3>
                                    <p className="text-gray-800 mb-3">
                                        Automated deployment of web app infrastructure using Azure Bicep templates and CLI for a consistent, production-ready environment.
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-gray-600 mb-3">
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Azure</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Infrastucture as Code</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Bicep</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">CLI</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <a href="https://github.com/imadahmed101/webapp-iac-azure-bicep" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </Link>

                                {/* Card 1 */}
                                <div className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                    <img
                                        src="/images/cloud1.svg"
                                        alt="Cloud Native Full Stack App"
                                        className="rounded-md mb-4 h-60 w-full object-cover"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">Cloud Native Full Stack App</h3>
                                    <p className="text-gray-800 mb-3">
                                        A full-stack cloud-native app built with secure authentication via Entra ID, React front-end, and a scalable Node.js back-end using Cosmos DB.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-3 text-gray-600">
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">React</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Node.js</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Azure</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Cosmos DB</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Entra ID</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <a href="https://github.com/imadahmed101/student-portal-azure-cloudnative" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                    <img
                                        src="/images/cloud1.svg"
                                        alt="Serverless Function App"
                                        className="rounded-md mb-4 h-60 w-full object-cover"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">Serverless Function App</h3>
                                    <p className="text-gray-800 mb-3">
                                        A serverless workout tracker built with Azure Functions, integrating blob/table/queue storage and automated reminders.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-3 text-gray-600">
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Function App</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Serverless Functions</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Azure</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Storage Accounts</span>
                                    </div>
                                    <div className="text-sm font-medium">
                                        <a href="https://github.com/imadahmed101/workout-tracker-azure-serverless" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="flex flex-col justify-between h-full rounded-lg border p-5 shadow-lg">
                                    <img
                                        src="/images/cloud1.svg"
                                        alt="Infrastructure as Code"
                                        className="rounded-md mb-4 h-60 w-full object-cover"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">Infrastructure as Code</h3>
                                    <p className="text-gray-800 mb-3">
                                        Automated deployment of web app infrastructure using Azure Bicep templates and CLI for a consistent, production-ready environment.
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-gray-600 mb-3">
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Azure</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Infrastucture as Code</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">Bicep</span>
                                        <span className="text-sm bg-gray-200 px-2 py-1 rounded">CLI</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium">
                                        <a href="https://github.com/imadahmed101/webapp-iac-azure-bicep" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                
                </div>

            </motion.div>
        </div>
    )
}

export default Projects