import Image from 'next/image'
import React from 'react'

const SinglePostPage = () => {
  return (
    <div className='flex gap-[100px]'>
        <div className="flex-1 relative h-[calc(100vh-200px)] max-md:hidden">
            <Image className='object-cover' src="/assets/post.jpg" alt='post' fill/>
        </div>
        <div className="flex-[2] flex flex-col gap-[50px]">
            <h1 className="text-2xl font-bold">Title</h1>
            <div className="flex flex-row gap-[20px]">
                <div className="relative w-[50px] h-[50px]">
                    <Image className='object-cover rounded-full' src="/assets/post.jpg" alt='author' fill />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <span className='text-gray-400 font-bold'>Author</span>
                    <span className='font-[100px]'>Sadiq</span>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <span className='text-gray-400 font-bold'>Published</span>
                    <span>01.02.2025</span>
                </div>
            </div>
            <div className='text-[20px]'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid expedita tenetur, praesentium quod modi sit? Quae minima laudantium corrupti quam illo hic harum architecto officia.
            </div>
        </div>
    </div>
  )
}

export default SinglePostPage