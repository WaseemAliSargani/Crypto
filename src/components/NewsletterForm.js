import React from 'react';

const NewsletterForm = () => {
  return <form className='flex-1 flex flex-col lg:flex-row items-start w-full  gap-y-6 lg:gap-x-10'>
    <input
      className='input text-base text-white placeholder:text-white placeholder:text-base'
      type="text"
      placeholder='Enter your email' />
    <button className='btn bg-white hover:bg-white/70 text-darkblue px-8'>Subsribe</button>
  </form>
};

export default NewsletterForm;
