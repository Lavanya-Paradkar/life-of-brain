import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { useRouter } from 'next/router'

const Homepage = () => {
    const router = useRouter();
  return (
    <div>
        <div className='hidden md:block relative z-0'>
            <video autoPlay muted loop style={{ width: '100%', height: '100%'}}>
                <source src="/stressv.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className='md:hidden relative z-0'>
            <video autoPlay muted loop style={{ width: '100%', height: '100%'}}>
                <source src="/stressmv.mp4" type="video/mp4"/>
            </video>
        </div>

        <div className='flex flex-col absolute -mt-96 md:-mt-56 lg:-mt-128 pl-1 lg:pl-12 z-10'>
            <p className='text-7xl font-sans text-white font-bold'>
                Stress isn't Normal
            </p>
            <div onClick={()=> router.push('/assess')} className='flex bg-yellow-600 text-xl items-center justify-center font-semibold font-mono px-6 py-2 mt-6 text-white w-64 rounded-full cursor-pointer hover:bg-lob_text-peach'>
                Assess Your Mind
                <ChevronRightIcon
                    className='w-8 h-8 py-1 pl-3 inline-block'
                />
            </div>
        </div>
    </div>
  )
}

export default Homepage