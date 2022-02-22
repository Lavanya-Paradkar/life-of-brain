import React from 'react'

const Ytb = () => {
  return (
    <div className='flex items-center justify-center flex-col md:flex-row px-2 md:px-12 py-8 md:py-20'>
        <div className='grid md:grid-cols-2 xl:grid-cols'>
            <div className='px-3 py-2'>
                <iframe height={180} width={250} src="https://www.youtube.com/embed/slWuyvucTrE" />
            </div>
            <div className='px-3 py-2'>
                <iframe height={180} width={250} src="https://www.youtube.com/embed/qnjBAsAiCAA"/>
            </div>
            <div className='px-3 py-2'>
                <iframe height={180} width={250} src="https://www.youtube.com/embed/SgaElLVzReQ"/>
            </div>
            <div className='px-3 py-2'>
                <iframe height={180} width={250} src="https://www.youtube.com/embed/LIuw9MB3m7E"/>
            </div>
        </div>
    </div>

  )
}

export default Ytb