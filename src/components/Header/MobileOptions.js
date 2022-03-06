import React from 'react';
import { useRouter } from 'next/router';
import { ChartSquareBarIcon, PlayIcon, UserGroupIcon } from '@heroicons/react/outline';

const MobileOptions = () => {

    const router = useRouter();
  return (
    <div className='md:hidden flex items-center justify-evenly h-16 w-full bg-white fixed bottom-0'>
        {/* Assess */}
        <div onClick={()=> router.push('/assess')} className="flex text-lob_text text-xl font-semibold cursor-pointer">
            <div className="flex flex-col items-center transform hover:scale-110">
                <ChartSquareBarIcon className="h-8 w-8 text-lob_text"/>
                <p className="text-xs">Assess</p>
                <div className="absolute top-0 right-0">
                    <span class="animate-ping absolute inline-flex h-4 w-4 -top-0.5 rounded-full bg-blue-500 opacity-50"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 -top-2.5 opacity-75 bg-blue-600"></span>
                </div>
            </div>
        </div>
        {/* Doctors */}
        <div onClick={()=> router.push('/doctors')} className="flex text-lob_text text-xl font-semibold cursor-pointer">
            {/* <p>Doctors</p> */}
            <div className="flex flex-col items-center transform hover:scale-110">
                {/* <PlusSmIcon className="h-8 w-8 font-extrabold text-red-600"/> */}
                <img
                    src="/doctorv.webp"
                    width={30}
                    height={32}
                    objectFit="contain"
                    className="cursor-pointer mb-1"
                />
                <p className="text-xs">Doctors</p>
            </div>
        </div>
        {/* Community */}
        <div onClick={()=> router.push('https://join.slack.com/t/lifeofbrain/shared_invite/zt-149t385io-2sd7l~kU5RouUl2OFrT5Dw')} className="flex text-lob_text text-xl font-semibold cursor-pointer">
            {/* <p>Community</p> */}
            <div className="flex flex-col items-center transform hover:scale-110">
                <UserGroupIcon className="h-8 w-8 text-lob_text"/>
                <p className="text-xs">Community</p>
            </div>
        </div>
        {/* Youtube */}
        <div onClick={()=> router.push('https://www.youtube.com/channel/UCBxMp9UHmIW0fa4igpSUuXw')} className="flex text-lob_text text-xl font-semibold cursor-pointer">
            {/* <p>Community</p> */}
            <div className="flex flex-col items-center transform hover:scale-110">
                <PlayIcon className="h-8 w-8 text-lob_text"/>
                <p className="text-xs">Revive</p>
            </div>
        </div>
    </div>
  )
}

export default MobileOptions