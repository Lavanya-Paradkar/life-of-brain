import React from 'react'

const Languages = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white shadow-none md:shadow-xl rounded-2xl p-0 md:p-4 m-0 md:m-2'>
        <div className='flex flex-col items-center'>
            <div className='text-lg text-blue-800 font-semibold'>
                Language Selected
            </div>
            <div className='text-md mt-4 text-gray-500'>
                English (en-US)
            </div>
        </div>
    </div>
  )
}

export default Languages