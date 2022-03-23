import React from 'react';
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../../slices/basketSlice';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Currency from 'react-currency-formatter';
import { ArrowCircleUpIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';


const DoctorCard = ({
  img, 
  name, 
  price, 
  address, 
  approved, 
  profession, 
  category, 
  email, 
  experience,
  currency
}) => {

  const {data: session} = useSession();
  const router = useRouter();

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const doctor = {
      img,
      name,
      price,
      address, 
      profession, 
      category, 
      email, 
      experience,
    };

    dispatch(addToBasket(doctor));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({name}));

  };

  const [content, setContent] = useState(null);
  const Refresh = ({children}) => {
    const active = content != setContent
    if (active) {
        return (
            <div>
                {children}
            </div>
        )
    }
}

  return (
    <Refresh>
    {approved && 
    <div className='flex flex-row md:flex-col w-full md:w-52 items-center justify-evenly p-2 rounded-lg bg-white shadow-xl mb-2 mx-0 md:mx-1.5 animate-fadeIn'>
      <div className='flex'>
        <Image
            src={img}
            width={120}
            height={120}
            className='rounded-lg h-auto'
        />
      </div>

      <div className='ml-4 md:ml-0 flex flex-col items-center'>
        {/* name */}
        <p className='flex flex-col items-center text-center text-lg text-lob_text font-semibold mt-2 p-1'>{name}</p>
        {/* price */}
        <div className='flex items-center text-yellow-600 font-medium mt-2'>
          <div className='mr-1'>{currency}</div>
          <div>{price}</div>
          <p className='text-xs md:text-sm ml-1'>/session</p>
        </div>
        {/* exp */}
        <div className='flex items-center text-gray-600 mt-1'>
          <InformationCircleIcon className='w-3 h-3 mr-1'/>
          <p className='text-xs'>{experience} exp.</p>
        </div>
        {/* btn */}
        <div onClick={addItemToBasket} className='bg-green-500 mt-4 flex items-center justify-center text-sm font-semibold text-white px-3 py-1 rounded-lg cursor-pointer transform hover:scale-105'>
            <div>Connect</div>
        </div>
      </div>
    </div>
    }
    </Refresh>
  )
}

export default DoctorCard