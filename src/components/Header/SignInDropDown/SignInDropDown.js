import { IdentificationIcon, UserCircleIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'

const SignInDropDown = ({signInDropDownOpen, setSignInDropDownOpen, healerLogin, setHealerLogin}) => {

    const {data: session} = useSession();
    const router = useRouter();

    const handleHealerLogin = () => {
        setHealerLogin(true);
        console.log(healerLogin);
        
    }

  return (
    <>
    {!session &&
        <div className='w-auto h-auto bg-white shadow-xl rounded-lg flex p-2 fixed right-2 md:right-8 -mt-2.5 z-50' onMouseLeave={()=>setSignInDropDownOpen(false)}>

            <div onClick={signIn} className='text-md p-2 w-24 bg-lighterblue rounded-lg border border-navyblue mr-2 shadow-sm text-navyblue font-semibold flex flex-col items-center cursor-pointer transform hover:scale-105'>
                <UserCircleIcon className='h-12 w-12 mb-2 text-navyblue'/>
                as User
            </div>
            
            <div >
                <div onClick={()=> router.push('/healerlogin')} className='text-md p-2 w-24 bg-papayalight rounded-lg border border-peachdark shadow-sm text-peachdark font-semibold flex flex-col items-center cursor-pointer transform hover:scale-105'>
                    <IdentificationIcon className='h-12 w-12 mb-2 text-peachdark'/>
                    as Healer
                </div>
            </div>
            
        </div>
    }
    </>
  )
}

export default SignInDropDown