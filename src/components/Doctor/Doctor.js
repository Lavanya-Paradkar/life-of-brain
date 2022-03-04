import { EmojiHappyIcon } from '@heroicons/react/outline'
import React from 'react';
import { useRouter } from 'next/router';

const Doctor = () => {

  const router = useRouter();

  return (
    <div className='flex mt-20 items-center justify-center w-auto h-auto border border-blue-50 rounded-2xl shadow-2xl'>
        <div className='flex flex-col items-center justify-center p-8'>
          <div className='font-bold text-xl mb-6 text-red-400'>
            Counselling Page is temporarily unavailable.
          </div>
          <div className='flex items-center text-lg font-medium mb-2'>
            And, here's a solution to it.
          </div>
          <div className='text-lg mb-8'>
            Join the feel good <span onClick={()=> router.push('https://join.slack.com/t/lifeofbrain/shared_invite/zt-149t385io-2sd7l~kU5RouUl2OFrT5Dw')} className='text-yellow-500 cursor-pointer hover:underline font-semibold'>community</span> or email us on <a className='text-lob_text hover:underline italic font-semibold' href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info.lifeofbrain@gmail.com">info.lifeofbrain@gmail.com</a>. 
          </div>
          <div className='text-xl text-green-500 font-medium'>
            You are important to us. Feel free to share your feelings :)
          </div>
            
        </div>



    </div>
  )
}

export default Doctor