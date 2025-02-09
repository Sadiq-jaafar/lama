import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[100px] p-5">
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-[50px]">
        <h2 className="text-2xl font-bold text-blue-500">About Agency</h2>
        <h1 className="text-4xl font-bold">
          We create digital ideas that are bigger, bolder, braver, and better.
        </h1>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam laborum tempora culpa eveniet vel blanditiis corrupti laudantium sunt numquam deserunt magnam in quaerat eaque, asperiores velit voluptatum consectetur repellendus reiciendis!
        </p>

        {/* Stats Section */}
        <div className="flex gap-8">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-blue-500">10K+</h1>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-blue-500">234K+</h1>
            <p className="text-gray-600">People Reached</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-blue-500">5K+</h1>
            <p className="text-gray-600">Services and Plugins</p>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 relative h-[400px] md:h-auto">
        <Image
          src="/assets/about.png"
          alt="About Agency"
          fill
          className="object-cover p-[50px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;