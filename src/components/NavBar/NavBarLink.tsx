'use client'
import React from 'react'
import { LinkItem } from './Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavBarLinkProps {
    item: LinkItem;
  }
  
  const NavBarLink: React.FC<NavBarLinkProps> = ({ item }) => {
    const pathName = usePathname();
  
    // Check if the current path matches the link's path
    const isActive = pathName === item.path;
  
    return (
      <Link
        href={item.path}
        className={`${isActive ? 'max-w-[160px] text-[#0d0c22] bg-white rounded-[20px]' : 'text-white'} px-4 py-2 `}
      >
        {item.title}
      </Link>
    );
  };
  
  export default NavBarLink;