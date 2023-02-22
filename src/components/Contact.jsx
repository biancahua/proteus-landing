import React from 'react';


export const Contact = () => {
  const handleClick = () => {
    console.log('handleClick in Contact pending functionality');
  };

  return (
    <div className='w-full flex flex-col justify-center items-center my-36'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-5xl font-bold border-b-[3px] border-pink'>Contact Us</p>
        <p className='text-2xl text-gray-pink py-8'>Reach out to us with any questions!</p>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <button className='w-60' id="contact-btn" onClick={handleClick}>LET'S TALK</button>
      </div>
    </div>
  )
}