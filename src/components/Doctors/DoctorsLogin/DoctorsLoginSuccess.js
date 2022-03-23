import { BadgeCheckIcon } from '@heroicons/react/solid'
import React from 'react'

const DoctorsLoginSuccess = () => {
  return (
    <div className='flex justify-center items-center w-auto h-auto p-4 md:p-20 mt-40 md:mt-10 z-50 rounded-lg bg-white '>
        <div className='flex flex-col items-center'>
            <p className='text-green-500 flex items-center text-2xl font-bold'><BadgeCheckIcon className="w-10 h-10 text-green-500 mr-2"/>Registeration Successful</p>
            <p className='mt-8 text-lg text-yellow-500'>Profile verification may take upto 24 hrs.</p>
            <p className='mt-2 text-xl font-semibold text-blue-600'>Please be patient</p>
        </div>
    </div>
  )
}

export default DoctorsLoginSuccess