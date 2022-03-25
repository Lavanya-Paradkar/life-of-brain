import React from 'react'

const Ytb = () => {
  return (
    <div className='flex items-center justify-center flex-col md:flex-row py-8 md:py-20'>
        <div className='grid md:grid-cols-2'>
            <div className='px-2 lg:px-4 py-2 lg:py-5 overflow-hidden'>
                <iframe className='w-full h-48 lg:w-128 lg:h-72' src="https://www.youtube.com/embed/slWuyvucTrE" />
            </div>
            <div className='px-2 lg:px-4 py-2 lg:py-5 overflow-hidden'>
                <iframe className='w-full h-48 lg:w-128 lg:h-72' src="https://www.youtube.com/embed/4GsxCsLv8UQ" />
            </div>
            <div className='px-2 lg:px-4 py-2 lg:py-5 overflow-hidden'>
                <iframe className='w-full h-48 lg:w-128 lg:h-72' src="https://www.youtube.com/embed/qnjBAsAiCAA"/>
            </div>
            <div className='px-2 lg:px-4 py-2 lg:py-5 overflow-hidden'>
                <iframe className='w-full h-48 lg:w-128 lg:h-72' src="https://www.youtube.com/embed/SgaElLVzReQ"/>
            </div>
        </div>
    </div>

  )
}

export default Ytb