import React from 'react';
import Image from 'next/image';

const Footer = () => {
  var currentTime = new Date()
  var currentyear = currentTime.getFullYear()
  return (
    <div className='flex flex-col'>
        <div className='bg-white p-16 flex'>
            <div className='hidden md:flex flex-grow'>
                <Image
                    src="/logo_text.png"
                    width={200}
                    height={200}
                    objectFit="contain"
                    className=""
                />
            </div>
            <div className='flex flex-col flex-1 mr-2'>
                <div className='font-semibold text-xl text-lob_text-peach'>
                    Support
                </div>
                <div className='mt-6'>
                    <div className='font-medium mb-1 text-md cursor-pointer text-yellow-300 hover:underline hover:text-yellow-600'>
                        Contact Us
                    </div>
                    <div className='font-medium mb-1 text-md cursor-pointer text-yellow-300 hover:underline hover:text-yellow-600'>
                        FAQs
                    </div>
                    <div className='font-medium mb-1 text-md cursor-pointer text-yellow-300 hover:underline hover:text-yellow-600'>
                        Help Center
                    </div>
                    <div className='font-medium mb-1 text-md cursor-pointer text-yellow-300 hover:underline hover:text-yellow-600'>
                        Feedback
                    </div>
                </div>
                
                
            </div>
            <div className='flex flex-1 flex-col'>
                <div className='font-semibold text-xl text-lob_text-peach'>
                    Join us
                </div>
                <div className='mt-6 flex flex-col md:flex-row'>
                    <div className='mb-2 mr-4 cursor-pointer hover:shadow-xl'>
                        <Image
                            src="/fb_icon.png"
                            width={30}
                            height={30}
                            objectFit="contain"
                            className=""
                        />
                    </div>
                    <div className='mb-2 mr-4 cursor-pointer hover:shadow-xl'>
                        <Image
                            src="/insta_icon.png"
                            width={30}
                            height={30}
                            objectFit="contain"
                            className=""
                        />
                    </div>
                    <div className='mb-2 mr-4 cursor-pointer hover:shadow-xl'>
                        <Image
                            src="/youtube_icon.png"
                            width={30}
                            height={30}
                            objectFit="contain"
                            className=""
                        />
                    </div>
                    <div className='mb-2 mr-4 cursor-pointer hover:shadow-xl'>
                        <Image
                            src="/linkedin_icon.png"
                            width={30}
                            height={30}
                            objectFit="contain"
                            className=""
                        />
                    </div>
                    <div className='mb-2 mr-4 cursor-pointer hover:shadow-xl'>
                        <Image
                            src="/twitter_icon.png"
                            width={30}
                            height={30}
                            objectFit="contain"
                            className=""
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Rights */}
        <div className='bg-gray-100 py-4 text-sm mb-20 md:mb-0 flex justify-center items-center'>
            <p>© {currentyear} Life Of Brain | <span className='text-xs hover:underline cursor-pointer'>Terms & Conditions</span></p>
        </div>
    </div>
  )
}

export default Footer