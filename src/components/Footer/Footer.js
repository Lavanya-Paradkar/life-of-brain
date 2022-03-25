import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Footer = () => {
  var currentTime = new Date()
  var currentyear = currentTime.getFullYear()

  const router = useRouter();
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
                    About Us
                </div>
                <div className='mt-6'>
                <div onClick={() => router.push('/ourteam')} className='font-medium mb-1 text-md cursor-pointer text-yellow-400 hover:underline hover:text-yellow-600'>
                        Our Team
                    </div>
                    <div className='font-medium mb-1 text-md cursor-pointer text-yellow-400 hover:underline hover:text-yellow-600'>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info.lifeofbrain@gmail.com">Contact Us</a>
                    </div>
                    <div className='font-medium mb-1 text-md cursor-pointer text-yellow-400 hover:underline hover:text-yellow-600'>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info.lifeofbrain@gmail.com">Help Center</a>
                    </div>
                    <div onClick={() => router.push('https://forms.gle/NhA6DaLxUXJkkCH56')} className='font-medium mb-1 text-md cursor-pointer text-yellow-400 hover:underline hover:text-yellow-600'>
                        Feedback
                    </div>
                </div>
                
                
            </div>
            <div className='flex flex-1 flex-col'>
                <div className='font-semibold text-xl text-lob_text-peach'>
                    Join Us
                </div>
                
                <div className='mt-6 grid grid-cols-3 md:flex md:flex-row'>
                    {/* fb */}
                    <div onClick={()=> router.push('https://www.facebook.com/Life-Of-Brain-105582952106029')} className='mb-2 mr-4 cursor-pointer transform hover:scale-110'>
                        <Image
                            src="/fb_icon.png"
                            width={30}
                            height={30}
                            objectFit="contain"
                            className=""
                        />
                    </div>
                    {/* insta */}
                    <div onClick={()=> router.push('https://www.instagram.com/lifeofbrain.official/')} className='mb-2 mr-4 cursor-pointer transform hover:scale-110'>
                        <Image
                            src="/insta_icon.png"
                            width={30}
                            height={30}
                            objectFit="contain"
                            className=""
                        />
                    </div>
                    {/* ytb */}
                    <div onClick={()=> router.push('https://www.youtube.com/channel/UCBxMp9UHmIW0fa4igpSUuXw')} className='mb-2 mr-4 cursor-pointer transform hover:scale-110'>
                        <Image
                            src="/youtube_icon.png"
                            width={30}
                            height={30}
                            objectFit="contain"
                            className=""
                        />
                    </div>
                    
                    {/*                     
                    <div className='mb-2 mr-4 cursor-pointer transform hover:scale-110'>
                        <Image
                            src="/linkedin_icon.png"
                            width={30}
                            height={30}
                            objectFit="contain"
                            className=""
                        />
                    </div>
            
                    <div className='mb-2 mr-4 cursor-pointer transform hover:scale-110'>
                        <Image
                            src="/twitter_icon.png"
                            width={30}
                            height={30}
                            objectFit="contain"
                            className=""
                        />
                    </div> */}
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