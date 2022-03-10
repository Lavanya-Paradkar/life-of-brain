import { ClipboardListIcon, CreditCardIcon, LockClosedIcon, PencilIcon, PlusIcon, TableIcon, TranslateIcon, UserCircleIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react'
import MyProfile from './UserProfileTabs/MyProfile';
import Login from './UserProfileTabs/Login';
import Remedy from './UserProfileTabs/Remedy';
import Transactions from './UserProfileTabs/Transactions';
import Languages from './UserProfileTabs/Languages';

const UserProfile = () => {

    const [profile, setProfile] = useState(true);
    const [login, setLogin] = useState(false);
    const [remedy, setRemedy] = useState(false);
    const [transaction, setTransaction] = useState(false);
    const [language, setLanguage] = useState(false);


    const {data: session} = useSession();

    const selectOption = (profile, login, remedy, transaction, language) =>{
        setProfile(profile);
        setLogin(login);
        setRemedy(remedy);
        setTransaction(transaction);
        setLanguage(language);
    }

  return (
    <div>
        {session && 
        <div className='hidden md:flex mt-3'>
            {/* left */}
            <div className=''>
                <div className={profile ? 'flex my-6 p-2 items-center justify-center rounded-r-full shadow-xl bg-blue-50 w-auto md:w-60 h-8 md:h-16 cursor-pointer' : 'flex my-6 p-2 items-center justify-center rounded-r-full shadow-xl bg-white w-auto md:w-60 h-8 md:h-16 cursor-pointer'} onClick={()=>selectOption(true, false, false, false, false)}>
                    <UserCircleIcon className='h-6 w-6 mr-2  text-lob_text'/>
                    <p className='text-lg font-semibold text-lob_text'>
                        My Profile 
                    </p>
                </div>
                <div className={login ? 'flex my-6 p-2 items-center justify-center rounded-r-full shadow-xl bg-blue-50 w-auto md:w-60 h-8 md:h-16 cursor-pointer' : 'flex my-6 p-2 items-center justify-center rounded-r-full shadow-xl bg-white w-auto md:w-60 h-8 md:h-16 cursor-pointer'} onClick={()=>selectOption(false, true, false, false, false)}>
                    <LockClosedIcon className='h-6 w-6 mr-2  text-lob_text'/>
                    <p className='text-lg font-semibold text-lob_text'>
                        Login & Security
                    </p>
                </div>
                <div className={remedy ? 'flex my-6 p-2 items-center justify-center rounded-r-full shadow-xl bg-blue-50 w-auto md:w-60 h-8 md:h-16 cursor-pointer' : 'flex my-6 p-2 items-center justify-center rounded-r-full shadow-xl bg-white w-auto md:w-60 h-8 md:h-16 cursor-pointer'} onClick={()=>selectOption(false, false, true, false, false)} >
                    <ClipboardListIcon className='h-6 w-6 mr-2  text-lob_text'/>
                    <p className='text-lg font-semibold text-lob_text'>
                        Remedy Status
                    </p>
                </div>
                <div className={transaction ? 'flex my-6 p-2 items-center justify-center rounded-r-full shadow-xl bg-blue-50 w-auto md:w-60 h-8 md:h-16 cursor-pointer' : 'flex my-6 p-2 items-center justify-center rounded-r-full shadow-xl bg-white w-auto md:w-60 h-8 md:h-16 cursor-pointer'} onClick={()=>selectOption(false, false, false, true, false)}>
                    <CreditCardIcon className='h-6 w-6 mr-2  text-lob_text'/>
                    <p className='text-lg font-semibold text-lob_text'>
                        Transactions
                    </p>
                </div>
                <div className={language ? 'flex my-6 p-2 items-center justify-center rounded-r-full shadow-xl bg-blue-50 w-auto md:w-60 h-8 md:h-16 cursor-pointer' : 'flex my-6 p-2 items-center justify-center rounded-r-full shadow-xl bg-white w-auto md:w-60 h-8 md:h-16 cursor-pointer'} onClick={()=>selectOption(false, false, false, false, true)}>
                    <TranslateIcon className='h-6 w-6 mr-2  text-lob_text'/>
                    <p className='text-lg font-semibold text-lob_text'>
                        Languages
                    </p>
                </div>
            </div>

            {/* right */}
            
            {profile && <div className='w-full mt-4 mx-20'><MyProfile/></div>}
            {login && <div className='w-full mt-4 mx-20'><Login/></div>}
            {remedy && <div className='w-full mt-4 mx-20'><Remedy/></div>}
            {transaction && <div className='w-full mt-4 mx-20'><Transactions/></div>}
            {language && <div className='w-full mt-4 mx-20'><Languages/></div>}

        </div>
        }

        {/* Mobile View */}
        {session && 
            <div className='flex flex-col md:hidden mt-2'>
                {/* tabs */}
                
                <div className='flex flex-col bg-white shadow-xl rounded-2xl px-4 py-3 m-2'>
                    <div className='overflow-auto mb-5 pb-5'>
                        <div className='flex justify-between w-128'>
                            <div className={profile ? 'text-lob_text text-sm font-semibold border-b-2 border-lob_text py-1' : 'text-lightblue text-sm font-semibold border-b-2 border-white py-1'} onClick={()=>selectOption(true, false, false, false, false)}>
                                My Profile
                            </div>
                            <div className={login ? 'text-lob_text text-sm font-semibold border-b-2 border-lob_text py-1' : 'text-lightblue text-sm font-semibold border-b-2 border-white py-1'} onClick={()=>selectOption(false, true, false, false, false)}>
                                Login & Security
                            </div>
                            <div className={remedy ? 'text-lob_text text-sm font-semibold border-b-2 border-lob_text py-1' : 'text-lightblue text-sm font-semibold border-b-2 border-white py-1'} onClick={()=>selectOption(false, false, true, false, false)}>
                                Remedy Status
                            </div>
                            <div className={transaction ? 'text-lob_text text-sm font-semibold border-b-2 border-lob_text py-1' : 'text-lightblue text-sm font-semibold border-b-2 border-white py-1'} onClick={()=>selectOption(false, false, false, true, false)}>
                                Transactions
                            </div>
                            <div className={language ? 'text-lob_text text-sm font-semibold border-b-2 border-lob_text py-1' : 'text-lightblue text-sm font-semibold border-b-2 border-white py-1'} onClick={()=>selectOption(false, false, false, false, true)}>
                                Languages
                            </div>
                        </div>
                    </div>

                    <div>
                        {profile && <div className='w-full mt-4'><MyProfile/></div>}
                        {login && <div className='w-full mt-4'><Login/></div>}
                        {remedy && <div className='w-full mt-4'><Remedy/></div>}
                        {transaction && <div className='w-full mt-4'><Transactions/></div>}
                        {language && <div className='w-full mt-4'><Languages/></div>}
                    </div>
                </div>
                
            </div>
        }
        {!session && 
            <div className='w-96 mt-20 h-auto p-10 flex items-center bg-white justify-center mx-auto shadow-md rounded-xl'>
                <p className='text-xl font-semibold text-green-600'>
                    Please Sign In
                </p>
            </div>
        }
    </div>
  )
}

export default UserProfile