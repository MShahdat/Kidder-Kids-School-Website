import React, { useState } from 'react';
import { FaComments } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
import { MediaQuery } from '../../hook/MediaQuery';
import { isFirstVisit } from '../../motion/visit';

const Blog = () => {

  const data = [
    {
      id: 1,
      author: 'Eleanor Pea',
      profile: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      folwars: '4.5k',
      url: 'https://images.unsplash.com/photo-1614113036347-9f60df80730a?q=80&w=1197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to pay attention to your child?',
      tag: '#kider #child #kids',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam?',
      comment: 40,
    },
    {
      id: 2,
      author: 'Eleanor Pea',
      profile: 'https://plus.unsplash.com/premium_photo-1664533227600-12a2375fcb94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
      folwars: '110k',
      url: 'https://plus.unsplash.com/premium_photo-1701984401462-f1c709ce722e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Play outdoor sports with your child',
      tag: '#kider #child #kids',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      comment: 15,
    },
    {
      id: 3,
      author: 'Eleanor Pea',
      profile: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFufGVufDB8fDB8fHww',
      folwars: '152k',
      url: 'https://images.unsplash.com/photo-1613794713137-a78aba4be84a?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to pay attention to your child?',
      tag: '#kider #child #kids',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      comment: 58,
    },
    {
      id: 4,
      author: 'Eleanor Pea',
      profile: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww',
      folwars: '200k',
      url: 'https://plus.unsplash.com/premium_photo-1701984401340-62ac0a8ab4b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Play outdoor sports with your child',
      tag: '#kider #child #kids',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,',
      comment: 45,
    },
    {
      id: 5,
      author: 'Eleanor Pea',
      profile: 'https://images.unsplash.com/photo-1571764303004-255d3fdc5a6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      folwars: '300k',
      url: 'https://plus.unsplash.com/premium_photo-1661876481462-a1ef663b8524?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to make time for your kids?',
      tag: '#kider #child #kids',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam?',
      comment: 35,
    },
    {
      id: 6,
      author: 'Eleanor Pea',
      profile: 'https://images.unsplash.com/photo-1643970115024-35a62c9c5ef7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
      folwars: '145k',
      url: 'https://plus.unsplash.com/premium_photo-1687757693334-f6b600ceb88f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Play outdoor sports with your child',
      tag: '#kider #child #kids',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      comment: 19,
    },
    {
      id: 7,
      author: 'Eleanor Pea',
      profile: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      folwars: '145k',
      url: 'https://plus.unsplash.com/premium_photo-1703716853028-0b7dcc971a89?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to make time for your kids?',
      tag: '#kider #child #kids',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam?',
      comment: 43,
    },
    {
      id: 8,
      author: 'Eleanor Pea',
      profile: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      folwars: '145k',
      url: 'https://plus.unsplash.com/premium_photo-1663090860773-7084274b15ac?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to make time for your kids?',
      tag: '#kider #child #kids',
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam?',
      comment: 14,
    },
  ]

  const isMobile = MediaQuery("(max-width: 639px)");
  const isTab = MediaQuery("(min-width: 640px) and (max-width: 767px)");
  const modVal = isTab ? 2 : 3;

  const [animate] = useState(() => isFirstVisit('blog'))
  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <div className='max-w-6xl px-4 py-12 mx-auto'>
        <motion.h2
          variants={fadeIn("up", .2)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className='text-center text-4xl md:text-5xl font-medium font-lobster tracking-wider text-black/90 dark:text-white/95'>Our Blogs</motion.h2>
        <motion.p
          variants={animate ? fadeIn("up", .3) : undefined}
          initial={animate ? "hidden" : undefined}
          whileInView={animate ? 'show' : undefined}
          viewport={defaultViewport}
          className='mt-4 tracking-wide dark:text-white/70 text-black/60 text-center mx-auto w-full md:w-4/5 xl:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores at tempore laborum accusantium quos ea excepturi deserunt quam maiores.</motion.p>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4'>
          {
            data.map((item, idx) => {
              const delay = isMobile ? 0.2 : (idx % modVal) * 0.25;
              return (
                <motion.div
                  variants={animate ? fadeIn("up", delay) : undefined}
                  initial={animate ? "hidden" : undefined}
                  whileInView={animate ? 'show' : undefined}
                  viewport={defaultViewport}
                  key={idx}
                  className='h-92 relative bg-white shadow-lg rounded-xl hover:scale-103 overflow-hidden duration-500 transform'
                  >
                  <Link to={'/blogs:${item.id}'} className=''>
                    <img src={item.url} className='h-44 w-full object-cover rounded-xl'></img>

                    <div className='px-2 mt-2'>
                      <p className='text-orange-600 text-xs font-medium'>{item.tag}</p>
                      <h3 className='mt-2 text-lg text-black/95 font-medium leading-tight line-clamp-1'>{item.title}</h3>
                      <p className='mt-2 line-clamp-2 text-sm text-gray-500'>{item.des}</p>
                      <div className='absolute bottom-2 left-2 right-4'>
                        <div className=' flex justify-between items-center'>
                          <div className='flex items-center gap-4 mt-4 pb-4 '>
                            <img src={item.profile} className='h-10 w-10 mt-1 rounded-full object-cover '></img>
                            <div className='flex flex-col leading-tight'>
                              <p className='text-md text-black/95 font-semibold'>{item.author}</p>
                              <p className='text-xs font-semibold text-gray-600'>{item.folwars} followers</p>
                            </div>
                          </div>
                          {/* <div className='relative bg-black/10 w-8 mt-4 h-8'
                        style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 33% 100%, 50% 75%, 0% 75%)'}}
                        >
                          <p className='flex flex-col items-center justify-center text-black/80 font-semibold text-[18px]'>{item.comment}</p>
                        </div> */}
                          <div className='mt-4 flex text-black/90 items-center gap-1.5'>
                            <FaComments className='text-xl' />
                            <p className='font-medium'>{item.comment}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })
          }
        </div>

      </div>
    </div>
  );
};

export default Blog;