import { useRouter } from 'next/router'
import React from 'react'

const DoctorsLoginCard = () => {

  const router = useRouter();
  
  return (
    <div className='bg-white flex items-center p-4 my-2 mx-1 rounded-lg shadow-lg fixed'>
        <div className='text-gray-600 font-semibold'>
            Are you are Professional?
        </div>
        <div onClick={()=> router.push('/healerlogin')} className='font-semibold bg-yellow-400 ml-4 px-2 py-1 rounded-lg text-white cursor-pointer hover:bg-lob_green'>
            Register
        </div>
    </div>
  )
}

export default DoctorsLoginCard