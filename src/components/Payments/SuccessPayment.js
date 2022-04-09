import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React from 'react'

const SuccessPayment = () => {

  const router = useRouter();

  return (
    <div className='flex justify-center items-center w-auto h-auto p-4 md:p-20 mt-40 md:mt-10 z-50 rounded-lg bg-white '>
        <div className='flex flex-col items-center'>
            <p className='text-green-500 flex items-center text-3xl font-bold'><BadgeCheckIcon className='w-10 h-10 mr-1 text-green-500'/>Payment Successful</p>
            <p className='mt-8 text-lg text-gray-500'>The session link will be sent to you shortly via email</p>
            <p className='mt-2 text-xl font-semibold text-blue-500'>Kindly be patient</p>
            <div onClick={() => router.push('/')} className='flex cursor-pointer mt-10 bg-peachdark text-white rounded-lg px-2 py-1 items-center justify-center hover:bg-yellow-500'>
              <ArrowSmLeftIcon className='w-6 h-6 mr-1'/>
              <p>Back to Homepage</p>
            </div>
        </div>
    </div>
  )
}

export default SuccessPayment