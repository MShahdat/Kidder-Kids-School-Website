import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const About2 = () => {

  return (
    <div className='max-w-7xl px-4 sm:px-16 md:px-4 py-16 mx-auto'>
      <div className='bg-red-50 rounded-xl min:h-[430px]'>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className="">
            <img src='https://plus.unsplash.com/premium_photo-1663108237864-da30e09faab8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full h-[430px] object-cover rounded-l-xl' ></img>
          </div>
          <div className='flex flex-col justify-center py-8 px-4'>
            <h2 className=' text-4xl font-medium  text-black/80 font-lobster tracking-widest'>Become A Teacher</h2>
            <p className='mt-8 tracking-wide sm:text-[18px] text-black/60 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius qui nulla ea adipisci deserunt vero molestias nemo illum alias, quia, doloremque magnam optio officia voluptatem. Corporis ratione cupiditate molestias.</p>

            <div className='mt-8 flex bg-orange-600 text-white rounded-full items-center justify-center gap-1 active:bg-orange-700'>
              <button className='font-medium py-2 sm:py-2.5'>Get Started Now </button>
              <FaArrowRight className='mt-1' />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;