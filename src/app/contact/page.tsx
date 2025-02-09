import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row gap-[100px] items-center p-5'>
      {/* Left Section (Image) */}
      <div className="flex-1 relative h-[500px] w-full">
        <Image
          src="/assets/contact.png" 
          alt="Contact Us"
          fill
          className="object-cover rounded-lg"
          
        />
      </div>

      {/* Right Section (Form) */}
      <div className="flex-1 w-full">
        <form className='flex flex-col gap-[10px]'>
          <input
            className='p-3 rounded-sm outline-none border-none bg-slate-700 text-white placeholder-gray-400'
            type="text"
            placeholder='Name and Surname'
            aria-label="Name and Surname"
          />
          <input
            className='p-3 rounded-sm outline-none border-none bg-slate-700 text-white placeholder-gray-400'
            type="email"
            placeholder='Email Address'
            aria-label="Email Address"
          />
          <input
            className='p-3 rounded-sm outline-none border-none bg-slate-700 text-white placeholder-gray-400'
            type="tel"
            placeholder='Phone Number'
            aria-label="Phone Number"
          />
          <textarea
            className='p-3 rounded-sm outline-none border-none bg-slate-700 text-white placeholder-gray-400'
            name="message"
            id="message"
            rows={7}
            placeholder='Message'
            aria-label="Message"
          />
          <button
            type="submit"
            className='p-3 rounded-sm bg-blue-500 text-white hover:bg-blue-600 transition-all'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;