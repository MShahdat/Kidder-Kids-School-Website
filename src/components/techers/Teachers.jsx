import React from 'react';
import { teacher } from '../../../public/teacher';
import { FaFacebookF , FaLinkedin, FaInstagram   } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Teachers = () => {
  return (
    <div className='max-w-7xl px-4 py-16 mx-auto'>
      <h2 className='text-center text-4xl md:text-5xl font-medium font-lobster tracking-wider text-black/90'>Our Teachers</h2>
      <p className='mt-4 tracking-wide text-black/60 text-center mx-auto w-full md:w-4/5 xl:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores at tempore laborum accusantium quos ea excepturi deserunt quam maiores.</p>
      <div className='mt-12 space-y-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {
          teacher.map((tea) => (
            <div key={tea.id} className='relative group transition-all duration-300 ease-in-out'>
              <div className='group-hover:-translate-y-[12px] duration-500 transform'>
                <img src={tea.url}
                style={{ clipPath: 'ellipse(40% 50% at 50% 50%)' }}
                className='w-[320px] sm:w-[320px] h-[450px] sm:h-[450px] object-cover relative mx-auto'
                ></img>
                <div className='absolute right-10 sm:right-4 bottom-0 w-[200px] sm:w-[220px] h-[200px] sm:h-[220px] rounded-full bg-white border-12 group-hover:border-orange-600 duration-500 transform border-orange-50'>
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1'>
                    <h3 className='font-semibold text-xl text-center leading-tight'>{tea.name}</h3>
                    <p className='text-[16px] text-black/50 text-center'>{tea.des}</p>
                    <div className='mt-2 flex items-center gap-2'>
                      <a href='#' className='bg-orange-600 w-8 h-8 rounded-full relative'>
                        <FaFacebookF  className='text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
                      </a>
                      <a href='#' className='bg-orange-600 w-8 h-8 rounded-full relative'>
                        <FaLinkedinIn  className='text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
                      </a>
                      <a href='#' className='bg-orange-600 w-8 h-8 rounded-full relative'>
                        <FaInstagram   className='text-white text-[18px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Teachers;