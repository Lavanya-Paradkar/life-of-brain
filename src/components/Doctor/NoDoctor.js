import { EmojiHappyIcon } from '@heroicons/react/outline'
import React from 'react';
import { useRouter } from 'next/router';

const NoDoctor = () => {

  const router = useRouter();

  return (
    <div className='flex mt-20 items-center justify-center w-auto h-auto border border-blue-50 bg-white flex-grow rounded-2xl shadow-2xl'>
        <div className='flex flex-col items-center justify-center p-8'>
          <div className='font-bold text-md mb-6 text-gray-400'>
            No Records Found
          </div>
          <div className='text-sm mb-4'>
            Please email us on <a className='text-lob_text hover:underline italic font-semibold' href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info.lifeofbrain@gmail.com">info.lifeofbrain@gmail.com</a>
          </div>
          <div className='text-md text-green-500 font-medium'>
            We value your feedback :)
          </div>
            
        </div>
    </div>
  )
}

export default NoDoctor


