
import React from 'react'
import Links from './Links'

const NavBar = () => {
  return (
    <div className='bg-[#0d0c22] text-xl h-100 flex justify-items-center justify-between mx-[100px] my-[100px]"'>
        <div className="text-3xl font-bold">Logo</div>
        <div className="">
         <Links/>
        </div>
    </div>
     
  )
}

export default NavBar