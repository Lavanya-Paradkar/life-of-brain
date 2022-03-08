import React from 'react'

const Result = ({result, restart, router}) => {
  return (
        <div className='flex mt-10 items-center w-auto h-auto border border-blue-50 rounded-2xl shadow-2xl animate-popUp'>
            <div className='flex flex-col items-center justify-center p-8'>
                {/* score */}
                <div className=' flex text-3xl font-bold mb-4'>
                    Your mental health status is : <div 
                        className={result > 22 ? 'text-red-800 text-3xl font-bold ml-4': 
                        (result > 15 ? 'text-red-600 text-3xl font-bold ml-4':(
                            result > 10 ? 'text-yellow-800 text-3xl font-bold ml-4': (
                                result > 8 ? 'text-yellow-600 text-3xl font-bold ml-4': (
                                    result > 5 ? 'text-yellow-400 text-3xl font-bold ml-4': (
                                        result >= 0 && 'text-green-600 text-3xl font-bold ml-4'
                                    )
                                )
                            )
                        ))}>{(100 - result*1.999).toFixed(2)}% </div>
                </div>
                {/* suggestions */}
                <div className='w-auto lg:w-128'>
                    {
                        result > 22 && 
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center font-bold text-2xl text-white rounded-2xl px-4 py-2  bg-red-800 my-1'>
                                Extreme Depression
                            </div>
                            <div className='text-lg text-center mt-2 p-2 font-semibold'>
                                Do not worry, friend. Now that you are aware of your mental health status, it is our responsibility to help you get better.
                                The solution is right <span onClick={()=> router.push('/doctors')} className='font-bold text-blue-600 underline p-1 cursor-pointer hover:text-green-400'>here</span>. Do not hesitate in self-care. It's your life, and we are with you in making it better.
                            </div>
                        </div>
                    }
                    {
                        result > 15 && result <= 22 && 
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center font-bold text-2xl text-white rounded-2xl px-4 py-2  bg-red-600 my-1'>
                                Severe Depression
                            </div>
                            <div className='text-lg text-center mt-2 p-2 font-semibold'>
                                Do not worry, friend. Now that you are aware of your mental health status, it is our responsibility to help you get better.
                                The solution is right <span onClick={()=> router.push('/doctors')} className='font-bold text-blue-600 underline p-1 cursor-pointer hover:text-green-400'>here</span>. Do not hesitate. It's your life, and we are with you in making it better.
                            </div>
                        </div>

                    }
                    {
                        result > 10 && result <= 15 && 
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center font-bold text-2xl text-white rounded-2xl px-4 py-2  bg-yellow-800 my-1'>
                                Moderate Depression
                            </div>
                            <div className='text-lg text-center mt-2 p-2 font-semibold'>
                                Do not worry, friend. Now that you are aware of your mental health status, it is our responsibility to help you get better.
                                The solution is right <span onClick={()=> router.push('/doctors')} className='font-bold text-blue-600 underline p-1 cursor-pointer hover:text-green-400'>here</span>. Do not hesitate. It's your life, and we are with you in making it better.
                            </div>
                            </div>
                    }
                    {
                        result > 8 && result <= 10 && 
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center font-bold text-2xl text-white rounded-2xl px-4 py-2  bg-yellow-600 my-1'>
                                Borderline Clinical Depression
                            </div>
                            <div className='text-lg text-center mt-2 p-2 font-semibold'>
                                Do not worry, friend. Now that you are aware of your mental health status, it is our responsibility to help you get better.
                                The solution is right <span onClick={()=> router.push('/doctors')} className='font-bold text-blue-600 underline p-1 cursor-pointer hover:text-green-400'>here</span>. Do not hesitate. It's your life, and we are with you in making it better.
                            </div>
                            </div>
                    }
                    {
                        result > 5 && result <= 8 && 
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center font-bold text-2xl text-white rounded-2xl px-4 py-2  bg-yellow-400 my-1'>
                                Mild Mood Disturbances
                            </div>
                            <div className='text-lg text-center mt-2 p-2 font-semibold'>
                                Do not worry, friend. These are just mood disturbances. You yourself have the power to resolve the issues. In case, you are looking for solution,
                                it's right <span onClick={()=> router.push('/doctors')} className='font-bold text-blue-600 underline p-1 cursor-pointer hover:text-green-400'>here</span>. Do not hesitate. It's your life, and we are with you in making it better.
                            </div>
                        </div>
                    }
                    {
                        result >= 0 && result <= 5 && 
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center font-bold text-2xl text-white rounded-2xl px-4 py-2  bg-green-600 my-1'>
                                Normal 
                            </div>
                            <div className='text-lg text-center mt-2 p-2 font-semibold'>
                                Congrats, friend ! Your mental health status is perfectly normal. No need to worry. For more support, please feel free to <span onClick={()=> router.push('https://join.slack.com/t/lifeofbrain/shared_invite/zt-149t385io-2sd7l~kU5RouUl2OFrT5Dw')} className='font-bold text-blue-600 underline p-1 cursor-pointer hover:text-green-400'>join</span> our community.
                            </div>
                        </div>
                    }
                </div>
                {/* buttons */}
                <div className='flex mt-3'>
                    {result > 8 &&
                        <div onClick={()=> router.push('/doctors')} className='flex items-center mx-2 mt-4 px-6 py-2 bg-red-400 rounded-full cursor-pointer text-white hover:bg-green-500'>
                            <p className='flex font-semibold items-center justify-center'>Feel Better</p>
                        </div>
                    }
                    <div onClick={()=>restart()} className='flex items-center mx-2 mt-4 px-6 py-2 rounded-full cursor-pointer bg-white text-blue-700 border-2 border-blue-700 hover:text-yellow-500 hover:border-yellow-500'>
                        <p className='flex font-semibold items-center justify-center'>Start Again</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Result