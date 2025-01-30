import React from 'react';
import Links from './Links';

const NavBar = () => {
  return (
    <div className="bg-[#0d0c22] text-xl h-[50px] top-0 flex items-center justify-between mx-[50px] my-[50px] sm:m-[5px]">
      <div className="text-3xl font-bold">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
