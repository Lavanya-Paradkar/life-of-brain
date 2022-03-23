import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems } from '../../../slices/basketSlice'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
const stripePromise = loadStripe(process.env.stripe_public_key);

const SlotPage = () => {
    const items = useSelector(selectItems);

    const {data: session} = useSession();
    const router = useRouter();

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

  return (
    <div className='flex flex-col items-center justify-center'>
        {items.map((item) => (
            <div className='flex flex-col items-center justify-center'>
                <Image
                    src={item.img} 
                    width={200}
                    height={200}
                />
                {item.name}
            </div>
        ))}
        <div onClick={createCheckoutSession} className='bg-gray-500 cursor-pointer'>
            Proceed
        </div>
    </div>
  )
}

export default SlotPage