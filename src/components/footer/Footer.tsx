import React from 'react';

const Footer = () => {
  return (
    <div className='flex items-center justify-between h-[100px] text-gray-50 p-4 max-md:flex-col'>
      {/* Left-aligned content (Brand Name) */}
      <div className="font-bold text-lg">MaxDev</div>

      {/* Right-aligned content (Footer Text) */}
      <div className="text-xs">
        © {new Date().getFullYear()} MaxDev. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;