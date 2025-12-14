import React from 'react';
import { classes } from '../../../public/classes';


const Class = () => {
  return (
    <div className='max-w-7xl px-4 py-12 mx-auto'>
      <h2 className='text-center text-4xl md:text-5xl font-medium font-lobster tracking-wider text-black/90'>School Classes</h2>
      <p className='mt-4 tracking-wide text-black/60 text-center mx-auto w-full md:w-4/5 xl:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores at tempore laborum accusantium quos ea excepturi deserunt quam maiores.</p>
      <div className='mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-6  mx-auto'>
        {
          classes.map((cls, idx) => (
            <div key={idx} className='group transition-all ease-in-out w-full sm:w-3/4 mx-auto md:w-full'>
              <div className='group-hover:-translate-y-[12px] transform duration-500'>
                <img src={cls.cover}
                className='w-66 sm:w-72 h-66 sm:h-72 mx-auto object-cover rounded-full border-12 border-[#fcebe4] group-hover:border-orange-600 duration-500 transform'
              ></img>
              <div className='bg-red-50 px-4 py-4 rounded-lg -mt-6'>
                <h1 className='mt-6 text-center text-3xl font-medium font-lobster text-black/80'>{cls.class}</h1>
                <div className='mt-8 flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <img src={cls.profile} className='w-12 h-12 object-cover rounded-full'></img>
                    <div className='flex flex-col gap-0'>
                      <p className='text-[16px] font-medium text-orange-600'>{cls.name}</p>
                      <p className='text-[14px] text-black/50 font-medium'>{cls.des}</p>
                    </div>
                  </div>
                  <p className='px-4 py-2 rounded-full bg-orange-600 text-white font-medium '>${cls.fee}</p>
                </div>
                <div className='mt-6 pb-4 grid grid-cols-3 gap-2'>
                  <div className=''>
                    <h3 className='h-0.5 w-full bg-red-600 '></h3>
                    <h3 className='mt-2 px-2 text-[17px] text-red-600 font-medium'>Age</h3>
                    <p className='mt-1.5 px-2 text-black/60 text-[14px] font-medium '>{cls.age} Years</p>
                  </div>
                  <div className=''>
                    <h3 className='h-0.5 w-full bg-green-600 '></h3>
                    <h3 className='mt-2 px-0 text-[17px] text-green-600 font-medium'>Time</h3>
                    <p className='mt-1.5 px-0 text-black/60 text-[14px] font-medium '>{cls.time}</p>
                  </div>
                  <div className=''>
                    <h3 className='h-0.5 w-full bg-blue-600 '></h3>
                    <h3 className='mt-2 px-2 text-[17px] text-blue-600 font-medium'>Capasity</h3>
                    <p className='mt-1.5 px-2 text-black/60 text-[14px] font-medium '> {cls.capacity} Kids</p>
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

export default Class;