import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostCard = () => {
  return (
    <div className='flex flex-col gap-[30px] mb-[15px]'>
      {/* Image and Rotated Text */}
      <div className="flex rounded-md">
        <div className="w-[90%] h-[350px] relative">
          <Image
            className='object-cover rounded-md'
            src="/assets/post.jpg"
            alt="Post Image"
            fill
          />
        </div>
        <span className="text-[12px] m-auto rotate-[270deg] whitespace-nowrap">
          Date or Tag
        </span>
      </div>

      {/* Title, Description, and Link */}
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-[20px] font-bold w-[80%]">Title</h1>
        <p className="text-gray-600 w-[80%] text-[15px] font-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sequi asperiores quo qui tenetur. Consequatur aperiam error veniam quod deleniti cupiditate nulla atque sequi ea.</p>
        <Link
          href="/blog/post"
          className=" text-underline text-blue-500 hover:text-blue-700 transition-all"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;