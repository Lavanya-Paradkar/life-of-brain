import React from 'react'

const Ytb = () => {
  return (
    <div className='flex items-center justify-center flex-col md:flex-row py-8 md:py-20'>
        <div className='grid md:grid-cols-2'>
            <div className='px-0 md:px-2 lg:px-5 py-2'>
                <iframe height={250} width={360} src="https://www.youtube.com/embed/slWuyvucTrE" />
            </div>
            <div className='px-0 md:px-2 lg:px-5 py-2'>
                <iframe height={250} width={360} src="https://www.youtube.com/embed/qnjBAsAiCAA"/>
            </div>
            <div className='px-0 md:px-2 lg:px-5 py-2'>
                <iframe height={250} width={360} src="https://www.youtube.com/embed/SgaElLVzReQ"/>
            </div>
            <div className='px-0 md:px-2 lg:px-5 py-2'>
                <iframe height={250} width={360} src="https://www.youtube.com/embed/LIuw9MB3m7E"/>
            </div>
        </div>
    </div>

  )
}

export default Ytb