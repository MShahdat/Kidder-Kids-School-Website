import React from 'react';

const About1 = () => {
  return (
    <div className=''>
      <div className='max-w-7xl px-4 sm:px-16 md:px-4 py-8 mx-auto'>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2'>
          <div className='bg-white shadow-xl rounded-lg px-4 py-2'>
            <h2 className='text-4xl font-semibold font-lobster text-orange-600 tracking-wider mt-2 lg:mt-4'>Learn More About Our Work And Our Cultural Activities</h2>
            <div className='mt-4 text-[16px] sm:text-[17px] tracking-wide text-black/60'>
              <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo molestiae amet voluptates accusamus, consequatur ipsam sequi quaerat accusantium tempora iure ratione quam non, similique temporibus nihil perferendis deleniti nulla.</p>
              <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe rerum at cum incidunt nulla repellendus debitis, ipsam excepturi reiciendis? In laboriosam aut cumque dolores optio odit numquam minus illum quam sed, atque tempore corrupti quos fuga adipisci consequatur quisquam omnis!</p>
            </div>

            <div className='mt-8 flex  items-center justify-between w-full sm:w-2/3 pb-6'>
              <button className='px-4 sm:px-6 py-2 text-white active:bg-orange-700 bg-orange-600 font-medium rounded-full'>Read More</button>
              <div className='flex items-center gap-4'>
                <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' className='h-14 w-14 rounded-full object-cover'></img>
                <div className='flex flex-col '>
                  <p className='text-[16px] font-medium '>Jhon Doe</p>
                  <p className='text-black/60 font-medium text-[14px]'>CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center py-10">
              <div className="relative w-[255px] sm:w-[400px] h-[380px] sm:h-[500px]"
              >
                <div className="aspect-square rounded-full border-[12px] border-orange-50 hover:border-orange-600 duration-500 transform overflow-hidden"
                >
                  <img src='https://plus.unsplash.com/premium_photo-1663054839865-682136ddb526?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="w-full h-full object-cover" />
                </div>

                {/* Bottom Left Small Circle */}
                <div
                  className="absolute -bottom-10 -left-10 rounded-full border-[12px] border-orange-50 hover:border-orange-600 duration-500 transform overflow-hidden bg-white w-[220px] sm:w-[300px] h-[220px] sm:h-[300px]" >
                  <img src='https://plus.unsplash.com/premium_photo-1664910695980-15d650cd5dcb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    className="w-full h-full object-cover" />
                </div>

                {/* Bottom Right Small Circle */}
                <div
                  className="absolute -bottom-10 -right-10 rounded-full border-[12px] border-orange-50 hover:border-orange-600 duration-500 transform overflow-hidden bg-white  w-[220px] sm:w-[300px] h-[220px] sm:h-[300px]" >
                  <img src='https://plus.unsplash.com/premium_photo-1663090954441-df86281e76f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;