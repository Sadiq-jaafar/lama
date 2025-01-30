"use client"
import React, { useState } from 'react';
import NavBarLink from './NavBarLink';

export interface LinkItem {
  title: string;
  path: string;
}

const links: LinkItem[] = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];
const Links: React.FC = () => {

 const [open , setOpen]= useState(false)

  const session= true
  const isAdmin = true

  return (
    <div className="">

    <div className='flex gap-[10px] justify-items-center'>
      {links.map((link) => (
        // <Link href={link.path} key={link.title}>
        //   {link.title}
        // </Link>
        <NavBarLink item={link} key={link.title} />
      ))}
      {
  session ? (
    <>
      {isAdmin && <NavBarLink key="admin" item={{ title: "Admin", path: "/admin" }} />}
      <button className='bg-white text-[#0d0c22] font-bold px-4'>Logout</button>
    </>
  ) : (
    <NavBarLink key="login" item={{ title: "Login", path: "/login" }} />
  )
}
    </div> 
    <button onClick={()=> setOpen((prev)=> !prev)}>mwnu</button>
    {open && (
  <div className="absolute top-[100px] right-0 h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-[10px]">
    {links.map((link) => (
      <NavBarLink item={link} key={link.title} />
    ))}
  </div>
)}

    </div>
  );
};

export default Links;