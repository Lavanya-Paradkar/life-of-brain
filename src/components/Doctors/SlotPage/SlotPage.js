import React, { useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { removeFromBasket, selectItems } from '../../../slices/basketSlice'
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ArrowSmLeftIcon, ArrowSmRightIcon, PencilIcon } from '@heroicons/react/outline';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const stripePromise = loadStripe(process.env.stripe_public_key);

const SlotPage = () => {
    const items = useSelector(selectItems);

    const {data: session} = useSession();
    const router = useRouter();

    const [date, setDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState('');
    const [formIncomplete, setFormIncomplete] = useState(false);
    const dateChange = (d) => {
        setDate(d);
        
    }

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;
    
        const checkoutSession = await axios.post('/api/create-checkout-session', 
        {
          items: items,
          email: items.name,
        });

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if(result.error) alert(result.error.message);

    };

    const dispatch = useDispatch();

    const removeItemFromBasket = (email) => {
        dispatch(removeFromBasket({email}));
    }
    
  return (
    <div className='flex flex-col items-center justify-center mt-4 md:mt-10 mb-20'>

        {/* schedule box container */}
        <div className='flex flex-col md:flex-row border border-peachpuff shadow-md rounded-lg'>

            {/* info */}
            <div className='p-2'>
                {items.map((item) => (
                    <div className='flex flex-col items-center justify-center p-4'>
                        <Image
                            src={item.img} 
                            width={250}
                            height={250}
                            loading='eager'
                            className='rounded-lg'
                        />
                        <div className='flex flex-col items-center'>
                            <p className='text-lg mt-3 p-1 font-semibold text-green-600'>{item.name}</p> 
                        </div>
                         {/* Remove */}
                        <div onClick={() => router.push('/doctors')} className='flex flex-col items-center'>
                            <div onClick={() => removeItemFromBasket(item.email)} className='px-4 py-1 bg-gray-400 text-sm text-white rounded-lg flex items-center justify-center mt-2 cursor-pointer'>
                                <PencilIcon className='w-3 h-3 mr-1'/>
                                <p>Change</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* divider */}
            <div className='flex justify-center items-center w-auto md:w-px h-px md:h-auto mx-10 md:mx-0 my-0 md:my-10 bg-peachpuff'></div>
            
            {/* Selection of meeting */}
            <div className='flex flex-col md:flex-row p-6'>
                
                {/* Select Date */}
                <div className='flex flex-col items-center justify-center my-1'>
                    <p className='text-xl text-peachdark font-semibold my-1'>Select Date</p>  
                    
                    {/* <Calendar 
                        className={!availableDate ? 'p-4 rounded-lg text-gray-500 flex flex-col justify-center items-center' : 
                        'p-4 rounded-lg text-gray-300 flex flex-col justify-center items-center'}
                        onChange={onChange} 
                        value={value} 
                        defaultView="month"
                    /> */}

                    <Calendar
                        date={date}
                        onChange={dateChange}
                        minDate={new Date()}
                        
                    />
                </div>

                {/* slots */}
                <div className='flex flex-col mt-2 md:mt-0 items-center p-2'>
                    <p className='text-xl text-peachdark font-semibold mb-3'>Select a Slot <span className='bg-gray-400 text-xs text-white rounded-full px-2 py-0.5'>Beta</span></p>
                    <div className='mt-2 grid grid-flow-row-dense grid-cols-3'>
                        <div className={ selectedSlot === '10 am IST' ? 'flex items-center justify-center bg-blue-400 text-white text-sm font-medium m-2 border border-blue-400 rounded-full p-2 cursor-pointer'  :  'flex items-center justify-center text-blue-500 text-sm font-medium m-2 border border-blue-400 rounded-full p-2 hover:bg-lighterblue cursor-pointer' } onClick={()=>setSelectedSlot('10 am IST')}>
                            10 am IST
                        </div>
                        <div className={ selectedSlot === '11 am IST' ? 'flex items-center justify-center bg-blue-400 text-white text-sm font-medium m-2 border border-blue-400 rounded-full p-2 cursor-pointer'  :  'flex items-center justify-center text-blue-500 text-sm font-medium m-2 border border-blue-400 rounded-full p-2 hover:bg-lighterblue cursor-pointer' } onClick={()=>setSelectedSlot('11 am IST')}>
                            11 am IST
                        </div>
                        <div className={ selectedSlot === '12 pm IST' ? 'flex items-center justify-center bg-blue-400 text-white text-sm font-medium m-2 border border-blue-400 rounded-full p-2 cursor-pointer'  :  'flex items-center justify-center text-blue-500 text-sm font-medium m-2 border border-blue-400 rounded-full p-2 hover:bg-lighterblue cursor-pointer' } onClick={()=>setSelectedSlot('12 pm IST')}>
                            12 pm IST
                        </div>
                        <div className={ selectedSlot === '1 pm IST' ? 'flex items-center justify-center bg-blue-400 text-white text-sm font-medium m-2 border border-blue-400 rounded-full p-2 cursor-pointer'  :  'flex items-center justify-center text-blue-500 text-sm font-medium m-2 border border-blue-400 rounded-full p-2 hover:bg-lighterblue cursor-pointer' } onClick={()=>setSelectedSlot('1 pm IST')}>
                            1 pm IST
                        </div>
                        <div className={ selectedSlot === '6 pm IST' ? 'flex items-center justify-center bg-blue-400 text-white text-sm font-medium m-2 border border-blue-400 rounded-full p-2 cursor-pointer'  :  'flex items-center justify-center text-blue-500 text-sm font-medium m-2 border border-blue-400 rounded-full p-2 hover:bg-lighterblue cursor-pointer' } onClick={()=>setSelectedSlot('6 pm IST')}>
                            6 pm IST
                        </div>
                        <div className={ selectedSlot === '7 pm IST' ? 'flex items-center justify-center bg-blue-400 text-white text-sm font-medium m-2 border border-blue-400 rounded-full p-2 cursor-pointer'  :  'flex items-center justify-center text-blue-500 text-sm font-medium m-2 border border-blue-400 rounded-full p-2 hover:bg-lighterblue cursor-pointer' } onClick={()=>setSelectedSlot('7 pm IST')}>
                            7 pm IST
                        </div>
                        <div className={ selectedSlot === '8 pm IST' ? 'flex items-center justify-center bg-blue-400 text-white text-sm font-medium m-2 border border-blue-400 rounded-full p-2 cursor-pointer'  :  'flex items-center justify-center text-blue-500 text-sm font-medium m-2 border border-blue-400 rounded-full p-2 hover:bg-lighterblue cursor-pointer' } onClick={()=>setSelectedSlot('8 pm IST')}>
                            8 pm IST
                        </div>
                        <div className={ selectedSlot === '9 pm IST' ? 'flex items-center justify-center bg-blue-400 text-white text-sm font-medium m-2 border border-blue-400 rounded-full p-2 cursor-pointer'  :  'flex items-center justify-center text-blue-500 text-sm font-medium m-2 border border-blue-400 rounded-full p-2 hover:bg-lighterblue cursor-pointer' } onClick={()=>setSelectedSlot('9 pm IST')}>
                            9 pm IST
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
        </div>
        {selectedSlot ? 
        <div onClick={createCheckoutSession} className='mt-6 flex justify-center items-center bg-green-600 px-3 py-2 text-white font-semibold rounded-md cursor-pointer'>
            <p>Next</p> <ArrowSmRightIcon className='w-6 h-6 ml-1'/>
        </div>
        :
        <div className='flex flex-col items-center justify-center'>
            <div onClick={() => setFormIncomplete(true)} className='mt-6 flex justify-center items-center bg-gray-400 px-3 py-2 text-white font-semibold rounded-md cursor-pointer'>
                <p>Next</p> <ArrowSmRightIcon className='w-6 h-6 ml-1'/>
            </div>
            {formIncomplete && <p className='text-red-300 text-sm'>Please select date and slot</p>}
        </div>
        }
    </div>
  )
}

export default SlotPage