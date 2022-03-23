import { EyeIcon, EyeOffIcon, PencilIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const DoctorLogin = ({ doctoremail, password}) => {

    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex flex-col bg-white shadow-none md:shadow-xl rounded-2xl p-0 md:p-4 m-0 md:m-2'>
        <div className='flex flex-col'>
            <div className='text-blue-800 font-semibold p-2'>
                Login ID:
            </div>
            <div className='flex items-center border border-blue-200 rounded-full overflow-x-auto'>
                <div className='w-full py-2 px-4'>
                    {doctoremail}
                </div>
                <div className='flex items-center rounded-r-full bg-green-600 text-white font-semibold py-2 px-3 cursor-pointer hover:bg-green-500'>
                    <PencilIcon className='w-4 h-4 mr-1 text-white'/>
                    Change
                </div>
            </div>
        </div>

        <div className='flex flex-col'>
            <div className='text-blue-800 font-semibold p-2'>
                Password:
            </div>
            <div className='flex items-center border border-blue-200 rounded-full overflow-x-auto'>
                <div className='w-full py-2 px-4'>
                    {showPassword ? password : '-------'}
                </div>
                <div onClick={() => setShowPassword(!showPassword)}>
                    {!showPassword ? 
                        <EyeIcon className='w-8 h-8 px-1 text-gray-500'/> :
                        <EyeOffIcon className='w-8 h-8 px-1 text-gray-500'/>
                     }
                </div>
                <div className='flex items-center rounded-r-full bg-green-600 text-white font-semibold py-2 px-3 cursor-pointer hover:bg-green-500'>
                    <PencilIcon className='w-4 h-4 mr-1 text-white'/>
                    Change
                </div>
            </div>
        </div>

        <div onClick={()=> router.push('/')} className='flex items-center p-1 mt-8'>
            <div className='text-white px-4 py-1 rounded-xl cursor-pointer bg-red-400 hover:bg-red-500 text-md font-medium'>
                Sign Out
            </div>
        </div>
    </div>
  )
}

export default DoctorLogin