import { LockClosedIcon, XIcon } from '@heroicons/react/outline'
import React from 'react';
import { useRouter } from 'next/router';

const MobileMenu = ({menuOpen, setMenuOpen, session, signIn, signOut}) => {
    const router = useRouter();
  return (
    <div className='w-48 h-72 bg-white shadow-xl rounded-2xl flex flex-col fixed right-1 z-50' onMouseOut={()=>setMenuOpen(false)}>
        <div className='w-8 h-8 p-1 rounded-full flex text-yellow-600 absolute right-2 top-2 justify-end items-end' onClick={()=>setMenuOpen(false)}>
            <XIcon/>
        </div>
        <div className='flex flex-col items-center'>
            <div onClick={()=> router.push('/about')} className='text-xl font-semibold text-lob_text cursor-pointer mt-8 p-2'>
                About
            </div>
            <div className='w-28 h-px bg-yellow-200'></div>
            <div onClick={()=> router.push('/assess')} className='text-xl font-semibold text-lob_text cursor-pointer p-2'>
                Assess
            </div>
            <div className='w-28 h-px bg-yellow-200'></div>
            <div onClick={()=> router.push('https://join.slack.com/t/lifeofbrain/shared_invite/zt-149t385io-2sd7l~kU5RouUl2OFrT5Dw')} className='text-xl font-semibold text-lob_text cursor-pointer p-2'>
                Community
            </div>
            <div className='w-28 h-px bg-yellow-200'></div>
            <div onClick={()=> router.push('/doctors')} className='text-xl font-semibold text-lob_text cursor-pointer p-2'>
                Doctors
            </div>

            <div onClick={!session ? signIn: signOut} className='text-xl font-semibold text-white bg-lob_text rounded-full cursor-pointer py-2 px-6 mt-4'>
                {!session ? `Sign In` : `Sign Out`}
            </div>

        </div>
        


    </div>
  )
}

export default MobileMenu