import React, { useState } from 'react';
import { teacher } from '../../../public/teacher';
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
import { MediaQuery } from '../../hook/MediaQuery';
import { isFirstVisit } from '../../motion/visit';

const Teachers = () => {

  const isMobile = MediaQuery("(max-width: 639px)");
  const isTab = MediaQuery("(min-width: 640px) and (max-width: 1023px)");

  const modVal = isTab ? 2 : 3;
const [animate] = useState(() => isFirstVisit('teacher'))
  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <motion.h2
          variants={fadeIn("up", .2)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className='text-center text-4xl md:text-5xl font-medium font-lobster tracking-wider text-black/90 dark:text-white/95'>Our Teachers</motion.h2>
        <motion.p
          variants={animate ? fadeIn("up", .3) : undefined}
          initial={animate ? "hidden" : undefined}
          whileInView={animate ? 'show' : undefined}
          viewport={defaultViewport}
          className='mt-4 tracking-wide text-black/60 dark:text-white/70 text-center mx-auto w-full md:w-4/5 xl:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores at tempore laborum accusantium quos ea excepturi deserunt quam maiores.</motion.p>
        <div className='mt-12 space-y-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {
            teacher.map((tea, idx) => {
              const delay = isMobile ? 0.2 : (idx % modVal) * 0.25;
              return (
                <motion.div
                  variants={animate ? fadeIn("up", delay) : undefined}
                  initial={animate ? "hidden" : undefined}
                  whileInView={animate ? 'show' : undefined}
                  viewport={defaultViewport}
                  key={tea.id} className='relative group transition-all duration-300 ease-in-out'>
                  <div className='group-hover:-translate-y-[12px] duration-500 transform'>
                    <img src={tea.url}
                      style={{ clipPath: 'ellipse(40% 50% at 50% 50%)' }}
                      className='w-[320px] sm:w-[320px] h-[450px] sm:h-[450px] object-cover relative mx-auto'
                    ></img>
                    <div className='absolute right-10 sm:right-4 bottom-0 w-[200px] sm:w-[220px] h-[200px] sm:h-[220px] rounded-full bg-white border-12 group-hover:border-orange-600 duration-500 transform border-orange-50'>
                      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1'>
                        <h3 className='font-semibold text-black text-xl text-center leading-tight'>{tea.name}</h3>
                        <p className='text-[16px] text-black/50 text-center'>{tea.des}</p>
                        <div className='mt-2 flex items-center gap-2'>
                          <a href='#' className='bg-orange-600 w-8 h-8 rounded-full relative'>
                            <FaFacebookF className='text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
                          </a>
                          <a href='#' className='bg-orange-600 w-8 h-8 rounded-full relative'>
                            <FaLinkedinIn className='text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
                          </a>
                          <a href='#' className='bg-orange-600 w-8 h-8 rounded-full relative'>
                            <FaInstagram className='text-white text-[18px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Teachers;