import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { fadeIn, defaultViewport } from '../../motion/Motion';
import { MediaQuery } from '../../hook/MediaQuery';
import { isFirstVisit } from '../../motion/visit';

const About2 = () => {

  const isMobile = MediaQuery("(max-width: 767px)")

  const [animate] = useState(() => isFirstVisit('about2'))

  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <div className='max-w-7xl px-4 sm:px-16 md:px-4 py-16 mx-auto'>
        <div className='bg-red-50 dark:bg-black dark:border-white/20 dark:border rounded-xl min:h-[430px]'>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
            <motion.div
              variants={animate ?  fadeIn(isMobile ? "up" : "right", 0.3) : undefined}
              initial={animate ?  "hidden" : undefined}
              whileInView={animate ?  'show' : undefined}
              viewport={defaultViewport}
              className="">
              <img src='https://plus.unsplash.com/premium_photo-1663108237864-da30e09faab8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full h-[430px] object-cover rounded-l-xl' ></img>
            </motion.div>
            <div className='flex flex-col justify-center py-8 px-4'>
              <motion.h2
                variants={animate ?  fadeIn("up", 0.2) : undefined}
                initial={animate ?  "hidden" : undefined}
                whileInView={animate ?  'show' : undefined}
                viewport={defaultViewport}
                className=' text-4xl font-medium  text-black/80 dark:text-white font-lobster tracking-widest'>Become A Teacher</motion.h2>
              <motion.p
                variants={animate ?  fadeIn("up", 0.3) : undefined}
                initial={animate ?  "hidden" : undefined}
                whileInView={animate ?  'show' : undefined}
                viewport={defaultViewport}
                className='mt-8 tracking-wide sm:text-[18px] dark:text-white/70 text-black/60 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius qui nulla ea adipisci deserunt vero molestias nemo illum alias, quia, doloremque magnam optio officia voluptatem. Corporis ratione cupiditate molestias.</motion.p>

              <motion.div
                variants={animate ?  fadeIn("up", 0.4) : undefined}
                initial={animate ?  "hidden" : undefined}
                whileInView={animate ?  'show' : undefined}
                viewport={defaultViewport}
                className='mt-8 flex bg-orange-600 text-white rounded-full items-center justify-center gap-1 active:bg-orange-700'>
                <button className='font-medium py-2 sm:py-2.5'>Get Started Now </button>
                <FaArrowRight className='mt-1' />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;