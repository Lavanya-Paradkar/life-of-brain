import React from 'react';

const List = ({ imgsrc, title, text }) => (
  <div className="flex w-full items-center my-2">
    <div className="bg-white rounded-full flex shadow-lg p-2 items-center w-48 lg:w-60 max-w-sm mr-2 lg:mr-8 hover:shadow-xl">
      <div>
        <img
          src={imgsrc}
          width={70}
          height={70}
          className="cursor-pointer p-1 m-1"
        />
      </div>
      <div className='flex-1 flex items-center justify-center'/>
      <h1 className='text-md lg:text-xl flex items-center p-2 text-center text-red-400 font-serif font-extrabold'>{title}</h1>
    </div>
    <div className="flex flex-1 m-2 rounded-full max-w-sm">
      <p className='font-medium text-gray-800 text-sm lg:text-md '>{text}</p>
    </div>
  </div>
);

export default List;