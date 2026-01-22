import React from 'react';
import { FaBusAlt } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { BsPencilSquare } from "react-icons/bs";
import { GiSchoolBag } from "react-icons/gi";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion.js';
import { MediaQuery } from '../../hook/MediaQuery.jsx';

const facility = [
  {
    id: 1,
    icon: <FaBusAlt />,
    name: "Safe Transport",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    color: "orange"
  },
  {
    id: 2,
    icon: <IoIosFootball />,
    name: "Playground",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi tempora ",
    color: "green"
  },
  {
    id: 3,
    icon: <FaHouseChimneyUser />,
    name: "Healthy Canteen",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    color: "red"
  },
  {
    id: 4,
    icon: <SiGoogleclassroom />,
    name: "Positive Learning",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque excepturi ",
    color: "yellow"
  },
  {
    id: 5,
    icon: <BsPencilSquare />,
    name: "Arts and Crafts",
    des: "Lorem ipsum dolor sit amet consectetur, ",
    color: "cyan"
  },
  {
    id: 6,
    icon: <GiSchoolBag />,
    name: "Educational Tour",
    des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    color: "pink"
  },
];


const colorClasses = {
  orange: { bg: "bg-orange-100", hover: "group-hover:bg-orange-500", text: "text-orange-600" },
  green: { bg: "bg-green-100", hover: "group-hover:bg-green-500", text: "text-green-500" },
  red: { bg: "bg-red-100", hover: "group-hover:bg-red-500", text: "text-red-600" },
  yellow: { bg: "bg-yellow-100", hover: "group-hover:bg-yellow-500", text: "text-yellow-600" },
  cyan: { bg: "bg-cyan-100", hover: "group-hover:bg-cyan-500", text: "text-cyan-600" },
  pink: { bg: "bg-pink-100", hover: "group-hover:bg-pink-500", text: "text-pink-600" },
};

const Facility = () => {

  const isMobile = MediaQuery("(max-width: 639px)");
  const isTab = MediaQuery("(min-width: 640px) and (max-width: 1023px)");

  const modVal = isTab ? 2 : 3;

  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className='text-center text-4xl md:text-5xl font-medium font-lobster tracking-wider dark:text-white text-black/90'>Our Services</motion.h2>
        <motion.p
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className='mt-4 tracking-wide dark:text-white/80 text-black/60 text-center mx-auto w-full md:w-4/5 xl:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores at tempore laborum accusantium quos ea excepturi deserunt quam maiores.</motion.p>
        <div className='mt-4 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-y-4'>
          {facility.map((fac, idx) => {
            const cls = colorClasses[fac.color];
            const delay = isMobile ? 0.2 : (idx % modVal) * 0.25;
            return (
              <motion.div
                variants={fadeIn("up", delay)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false}}
                key={idx} className="flex flex-col items-center justify-center">
                <div className="group cursor-pointer transition-all duration-500 ease-in-out">
                  <div className="w-full flex justify-center mt-10">
                    <div className="relative transition-all duration-500">

                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-12 group-hover:scale-105">
                        <span className={`w-3 h-8 ${cls.bg} rounded-full ${cls.hover} transition-all duration-500`}></span>
                        <span className={`w-3 h-8 ${cls.bg} rounded-full ${cls.hover} transition-all duration-500`}></span>
                      </span>

                      <div className={`w-28 h-28 ${cls.bg} rounded-full flex justify-center items-center
                                    ${cls.hover} transition-all duration-500 transform group-hover:scale-105`}>
                        <div className={`${cls.text} group-hover:text-white/90 text-6xl`}>{fac.icon}</div>
                      </div>
                    </div>
                  </div>
                  <div className={`-mt-0.5 w-72 h-72 flex flex-col gap-6 justify-center items-center rounded-full 
                                ${cls.bg} ${cls.hover} transition-all duration-500 transform group-hover:scale-103`}>

                    <p className={`text-3xl font-semibold ${cls.text} group-hover:text-white transition-all duration-500`}>
                      {fac.name}
                    </p>

                    <p className="text-center tracking-wide text-black/50 px-2 group-hover:text-white/90 transition-all duration-500">
                      {fac.des}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Facility;
