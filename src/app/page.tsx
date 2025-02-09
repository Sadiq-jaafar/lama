import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row gap-[100px] p-5'>
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-[60px] font-bold">Creative Thought Agency</h1>
        <p className="text-[20px] text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae quasi praesentium quam officia perspiciatis facilis magnam quisquam, rerum atque exercitationem.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
            Learn More
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-900 transition-all">
            Contact
          </button>
        </div>
        {/* Brands Image */}
        <div className="w-full h-[50px] relative grayscale">
          <Image
            src="/assets/brands.png"
            alt="Brand logos"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative h-[400px] md:h-auto">
        <Image
          src='/assets/hero.gif'
          alt='Hero animation'
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;