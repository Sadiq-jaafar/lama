import React from 'react';
import Links from './Links';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="bg-[#0d0c22] text-xl h-[50px] top-0 flex items-center justify-between">
      <Link href="/" className="text-3xl font-bold">Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
