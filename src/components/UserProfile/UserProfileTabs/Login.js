import { PencilIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react'
import React from 'react'

const Login = () => {

    const {data:session} = useSession();

  return (
    <div className='flex flex-col bg-white shadow-none md:shadow-xl rounded-2xl p-0 md:p-4 m-0 md:m-2'>
        <div className='flex flex-col'>
            <div className='text-blue-800 font-semibold p-2'>
                Login ID:
            </div>
            <div className='flex items-center border border-blue-200 rounded-full overflow-x-auto'>
                <div className='w-full py-2 px-4'>
                    {session.user.email}
                </div>
                <div className='flex items-center rounded-r-full bg-green-600 text-white font-semibold py-2 px-3 cursor-pointer hover:bg-green-500'>
                    <PencilIcon className='w-4 h-4 mr-1 text-white'/>
                    Change
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login