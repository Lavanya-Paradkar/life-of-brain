import React from 'react'
import Image from 'next/image'

const Facts = () => {
  return (
    <div>
        {/* cards */}
        <div className='flex flex-col md:flex-row my-8 md:my-32 justify-center items-center'>
            {/* card 1 */}
            <div className='flex items-center flex-col p-2 h-80 sm:w-full md:w-56 mx-2 lg:mx-6 shadow-xl hover:shadow-2xl rounded-2xl hover:border-none border border-blue-100'>
                <div className='mb-2'>
                    <Image
                        src="/card_stress.webp"
                        width={255}
                        height={170}
                        objectFit="contain"
                        className="rounded-xl"
                    />
                </div>
                <div className='text-lob_text text-center text-md px-1'>
                    <p>About <span className='font-bold text-red-500'>1/3rd</span> of people around the world reported feeling <span className='font-semibold'>stressed</span> and worried in 2019.</p>
                </div>
                <div className='font-mono text-right ml-20 text-lob_text-peach py-2'>
                    <p>- Gallup</p>
                </div>
            </div>

            {/* card 2 */}
            <div className='flex items-center flex-col p-2 h-80 sm:w-full md:w-56 mx-2 lg:mx-6 shadow-xl hover:shadow-2xl rounded-2xl hover:border-none border border-blue-100'>
                <div className='mb-2'>
                    <Image
                        src="/card_dep.webp"
                        width={255}
                        height={170}
                        objectFit="contain"
                        className="rounded-xl"
                    />
                </div>
                <div className='text-lob_text text-center text-md px-1'>
                    <p>Depression is a common illness worldwide. Approximately <span className='font-bold text-red-500'>280 million</span> people in the world have <span className='font-semibold'>depression</span>.</p>
                </div>
                <div className='font-mono text-right ml-20 text-lob_text-peach py-2'>
                    <p>- W H O</p>
                </div>
            </div>

            {/* card 3 */}
            <div className='flex items-center flex-col p-2 h-80 sm:w-full md:w-56 mx-2 lg:mx-6 shadow-xl hover:shadow-2xl rounded-2xl hover:border-none border border-blue-100'>
                <div className='mb-2'>
                    <Image
                        src="/card_report.webp"
                        width={255}
                        height={170}
                        objectFit="contain"
                        className="rounded-xl"
                    />
                </div>
                <div className='text-lob_text text-center text-md px-1'>
                    <p>Chronic stress is as <span className='font-semibold'>dangerous</span> as smoking <span className='font-bold text-red-500'>FIVE cigarettes</span> a day.</p>
                </div>
                <div className='font-mono text-right ml-20 text-lob_text-peach py-2'>
                    <p>- Columbia University Medical Center</p>
                </div>
            </div>

            {/* card 4 */}
            <div className='flex items-center flex-col p-2 h-80 sm:w-full md:w-56 mx-2 lg:mx-6 shadow-xl hover:shadow-2xl hover:border-none rounded-2xl border border-blue-100'>
                <div className='mb-2'>
                    <Image
                        src="/card_treat.webp"
                        width={255}
                        height={170}
                        objectFit="contain"
                        className="rounded-xl"
                    />
                </div>
                <div className='text-lob_text text-center text-md px-1'>
                    <p><span className='font-bold text-red-500'>More than 75%</span> of people in low- and middle-income countries receive <span className='font-semibold'>NO</span> treatment for mental disorders.</p>
                </div>
                <div className='font-mono text-right ml-20 text-lob_text-peach py-2'>
                    <p>- W H O</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facts