import React from 'react';
import List from './List';
import { useRouter } from 'next/router';
import {aboutData} from './data/aboutData.js';

const Process = () => {

  const router = useRouter();
  
  return(
    <div className="flex flex-col md:flex-row bg-papayalight w-full px-4 md:px-16 py-8 md:py-24 justify-between">
      <div className="flex-1 flex sm:justify-center md:justify-start sm:items-center md:items-start flex-col sm:text-center md:text-left sm:mr-0 md:mr-20">
          <h1 className="text-3xl md:text-5xl text-green-600 font-semibold font-sans mb-2">We are always with <span className='font-sans font-bold'>you</span>. Let's take a step towards a <span className='italic text-blue-500'>peaceful</span> life.</h1>
          <div onClick={()=> router.push('/assess')} className='hidden md:block bg-yellow-400 text-xl items-center font-semibold font-mono px-6 py-2 mt-6 text-white w-56 rounded-full cursor-pointer shadow-md hover:bg-green-500 hover:text-white hover:shadow-2xl'>
              Assess Your Mind
          </div>
      </div>
      <div className="flex-2 flex justify-start items-center flex-col">
        {aboutData.map((item, index) => (
            <List imgsrc={item.imgsrc} title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Process;