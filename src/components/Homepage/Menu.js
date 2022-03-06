import { ChartSquareBarIcon, CogIcon, LockClosedIcon, PencilAltIcon, UserCircleIcon, XIcon } from '@heroicons/react/outline'
import React from 'react';
import { useRouter } from 'next/router';

const Menu = ({menuOpen, setMenuOpen, session, signIn, signOut}) => {
    const router = useRouter();
  return (
    <div className='w-auto h-auto bg-white shadow-xl rounded-xl flex flex-col fixed right-2 md:right-8 mt-0.5 z-50' onMouseLeave={()=>setMenuOpen(false)}>
        
        <div className='flex flex-col px-4 py-3'>

            {/* Name */}
            <div className='italic text-gray-400 flex text-xs'>
                Signed In as
            </div>
            <div className='flex items-center text-md md:text-lg font-serif text-wood'>
                {session.user.name}
            </div>
            <div className='w-full my-2 h-px bg-blue-100'></div>

            {/* profile */}
            <div className='flex items-center justify-start text-md text-lob_text cursor-pointer underline hover:text-blue-400 p-1'>
                <UserCircleIcon className='h-7 w-7 p-1 mr-1'/>
                My Account
            </div>

            {/* Notebook */}
            <div  className='flex items-center justify-start text-md text-lob_text cursor-pointer underline hover:text-blue-400 p-1'>
                <PencilAltIcon className='h-7 w-7 p-1 mr-1'/>
                Brain Bin
            </div>
            <div className='w-full my-2 h-px bg-blue-100'></div>

            {/* Settings */}
            <div  className='flex items-center justify-start text-sm cursor-pointer text-gray-600 hover:underline p-1'>
                <CogIcon className='h-6 w-6 p-1'/>
                Settings
            </div>
            <div onClick={!session ? signIn: signOut} className='flex items-center justify-center text-sm font-semibold bg-white text-red-400 shadow-md border border-red-200 rounded-full hover:text-red-300 cursor-pointer py-1 px-4 mt-2'>
                {!session ? `Sign In` : `Sign Out`}
            </div>

        </div>
    </div>
  )
}

export default Menu