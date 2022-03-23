import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';

const OldDoctorLoginPage = ({doctorEmail, setDoctorEmail, password, setPassword, setSignedIn, checkData}) => {

    const router = useRouter();
    const [formComplete, setFormComplete] = useState(false);
    
  return (
    <div className='flex flex-col items-center mt-40 md:mt-16'>
        <div className='flex flex-col'>
            {/* email */}
            <div className='flex flex-col items-start mt-4'>
                <label className='text-blue-600 text-lg font-semibold'>Email</label>
                <input className='border rounded-xl w-72 p-2 mt-1 border-blue-400' type='email' placeholder='Enter your email' value={doctorEmail} required onChange={e => setDoctorEmail(e.target.value)}/>
            </div>
            {/* password */}
            <div className='flex flex-col items-start mt-4'>
                <label className='text-blue-600 text-lg font-semibold'>Password</label>
                <input className='border rounded-xl w-72 p-2 mt-1 border-blue-400' type='text' placeholder='Enter your password' value={password} required onChange={e => setPassword(e.target.value)}/>
            </div>
            
            {
            (doctorEmail === '' || password === '') ? (
                <div onClick={() => setFormComplete(true)} className='flex flex-col items-center justify-center mt-10 mb-20 md:mb-0'>
                    <div className='flex items-center'>
                        <p className='bg-green-500 font-semibold text-lg py-2 px-4 text-white shadow-2xl rounded-xl cursor-pointer transform hover:scale-105'>
                            Sign In
                        </p>
                        <div onClick={()=> router.push('/healerlogin')} className=' ml-4 cursor-pointer underline text-lob_text hover:text-blue-500'>
                            Sign Up
                        </div>
                    </div>
                    <p className='mt-2 text-red-400 '>{formComplete && 'Please add your sign-in credentials'}</p>
                </div>
            ) : (
                <div onClick={checkData} className='flex items-center justify-center mt-10 mb-20 md:mb-0'>
                    <div onClick={() => setSignedIn(true)}>
                    <p className='bg-green-500 font-semibold text-lg py-2 px-4 text-white shadow-2xl rounded-xl cursor-pointer transform hover:scale-105'>
                        Sign In
                    </p>
                    </div>
                </div>
            )
        }
        </div>
    </div>
  )
}

export default OldDoctorLoginPage