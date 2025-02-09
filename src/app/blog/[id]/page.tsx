import Image from 'next/image'
import React from 'react'

const SinglePostPage = () => {
  return (
    <div className=''>
        <div className="">
            <Image src="/assets/post.jpg" alt='post' fill/>
        </div>
        <div className="">
            <h1 className="">Title</h1>
            <div className="">
                <Image src="/assets/post.jpg" alt='' fill />
                <div className="">
                    <span className="">Aurthor</span>
                    <span className="">Sadiq Ja'afae</span>
                </div>
                <div className="">
                    <span className="">Published</span>
                    <span className="">01.02.2025</span>
                </div>
            </div>
            <div className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid expedita tenetur, praesentium quod modi sit? Quae minima laudantium corrupti quam illo hic harum architecto officia.
            </div>

        </div>
    </div>
  )
}

export default SinglePostPage