import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-1'>
        <div className='text-4xl font-serif border-b border-yellow-400 text-yellow-500 p-2'>
            Our Team
        </div>
        {/* cards */}
        <div className='flex flex-col md:flex-row my-4 md:my-16 justify-center items-center'>
            {/* card 1 */}
            <div className='flex items-center flex-col p-2 h-96 mt-2 md:mt-0 sm:w-full md:w-80 mx-2 lg:mx-6 shadow-xl hover:shadow-2xl rounded-2xl hover:border-none border border-blue-100'>
                <div className='my-2'>
                    <Image
                        src="/team_lp.jpg"
                        width={150}
                        height={150}
                        loading='eager'
                        objectFit="contain"
                        className="rounded-xl"
                    />
                </div>
                <div className='text-xl text-gray-600 font-semibold'>
                    Lavanya Paradkar
                </div>
                <div className='text-xs text-gray-400 my-1 font-medium'>
                    Full Stack Developer @Lifeofbrain
                </div>
                <div className='text-navyblue text-center text-sm mt-1 px-2'>
                    Lavanya is a full-stack developer with 
                    over 2 years of experience in React.js, 
                    Next.js and MongoDB. Along with his degree, 
                    he also worked as an intern in various startups. 
                    Currently, he is a final year undergrad at Vellore Institute of Technology.
                </div>
                
            </div>

            {/* card 2 */}
            <div className='flex items-center flex-col p-2 h-96 mt-8 md:mt-0 sm:w-full md:w-80 mx-2 lg:mx-6 shadow-xl hover:shadow-2xl rounded-2xl hover:border-none border border-blue-100'>
                <div className='my-2'>
                    <Image
                        src="/team_pj.jpg"
                        width={150}
                        height={150}
                        loading='eager'
                        objectFit="contain"
                        className="rounded-xl"
                    />
                </div>
                <div className='text-xl text-gray-600 font-semibold'>
                    Prateek Jain
                </div>
                <div className='text-xs text-gray-400 my-1 font-medium'>
                    Machine Learning Developer @Lifeofbrain
                </div>
                <div className='text-navyblue text-center text-sm mt-1 px-2'>
                Prateek is a machine learning developer, with expertise 
                in neural networks and deep learning. He is currently a 
                final year undergrad pursuing B.Tech at Vellore Institute of Technology. 
                </div>
            </div>

            {/* card 3 */}
            <div className='flex items-center flex-col mt-8 md:mt-0 p-2 h-96 sm:w-full md:w-80 mx-2 lg:mx-6 shadow-xl hover:shadow-2xl rounded-2xl hover:border-none border border-blue-100'>
                <div className='my-2'>
                    <Image
                        src="/team_jn.jpeg"
                        width={150}
                        height={150}
                        loading='eager'
                        objectFit="contain"
                        className="rounded-xl"
                    />
                </div>
                <div className='text-xl font-semibold'>
                    Jignyasa Nayak
                </div>
                <div className='text-xs text-gray-400 my-1 font-medium'>
                    Research Analyst @Lifeofbrain
                </div>
                <div className='text-navyblue text-center text-sm mt-1 px-2'>
                Jignyasa is an aspiring android developer and data analyst, currently pursuing B.Tech (final year) at Vellore Institute of Technology.
                She is an avid tech enthusiast with experience in 
                Embedded Technology, IoT and Data Analytics.
                </div>
                
            </div>

            
        </div>
    </div>
  )
}

export default Team