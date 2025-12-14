import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";


const Header = () => {
  return (
   <div className='bg-red-50'>
     <div className='max-w-7xl px-4 lg:px-8 py-1 md:py-2 md:px-4 mx-auto bg-orange-600 text-white'
    style={{clipPath: 'inset(0% 0 0% 0 round 0% 20% 0 20%)'}}
    >
      <div className='flex items-center justify-between'>

        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-[12px] md:text[14px] font-medium'>
          <div className='flex items-center gap-1'>
            <FaLocationDot />
            <p>145/2 Block-D Gulshan, Dhaka-1200</p>
          </div>
          <div className='flex items-center gap-1'>
            <MdAddCall />
            <p>+8801885374041</p>
          </div>
        </div>

        <div className='flex items-center gap-2 md:gap-4'>
          <FaFacebook className='size-4 md:size-4' />
          <FaSquareInstagram className='size-4 md:size-4' />
          <IoLogoYoutube className='size-4 md:size-4' />
        </div>
      </div>
    </div>
   </div>
  );
};

export default Header;