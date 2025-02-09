import PostCard from '@/components/postCard/postCard'
import React from 'react'

const Blog = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-items-center ">
      <div className="lg:w-[30%] sm:w-[100%] md:w-[54%] min-w-[250px] ">
        <PostCard />
      </div>
      <div className="w-[30%] min-w-[250px]">
        <PostCard />
      </div>
      <div className="w-[30%] min-w-[250px]">
        <PostCard />
      </div>
      <div className="w-[30%] min-w-[250px]">
        <PostCard />
      </div>
    </div>
  )
}

export default Blog
