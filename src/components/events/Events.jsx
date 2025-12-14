import React from 'react';

const Events = () => {

  const event = [
    {
      id: 1,
      url: 'https://plus.unsplash.com/premium_photo-1663090860773-7084274b15ac?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Play outdoor sports with your child',
      date: 'Monday, Sep 20, 2025',
      des: 'A day hike above Manang Valley in Nepal used to acclimatise to the altitude before embarking on a few further daysof the hike.',
    },
    {
      id: 2,
      url: 'https://plus.unsplash.com/premium_photo-1703716853028-0b7dcc971a89?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Play outdoor sports with your child',
      date: 'Saturday, April 11, 2025',
      des: 'Lorem, ipsum dolor sit amet consectetur',
    },
    {
      id: 3,
      url: 'https://plus.unsplash.com/premium_photo-1687757693334-f6b600ceb88f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Play outdoor sports with your child',
      date: 'Saturday, April 11, 2025',
      des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae autem architecto vero vitae dignissimos ',
    },
    {
      id: 3,
      url: 'https://plus.unsplash.com/premium_photo-1661876481462-a1ef663b8524?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Play outdoor sports with your child',
      date: 'Wednesday, Oct 20, 2025',
      des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1614113036347-9f60df80730a?q=80&w=1197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Play outdoor sports with your child',
      date: 'Tuesday, May 12, 2025',
      des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae autem architecto vero vitae dignissimos adipisci ad at in voluptatum. Quisquam assumenda possimus doloribus nostrum corporis amet, fugiat sapiente consectetur!',
    },
  ]
  return (
    <div className=' overflow-auto text-white'>
      <div className='max-w-7xl px-4 py-12 mx-auto'>
        <h2 className='text-center text-4xl md:text-5xl font-medium font-lobster tracking-wider text-black/90'>Our Latest Events</h2>
        <p className='mt-4 tracking-wide text-black/60 text-center mx-auto w-full md:w-4/5 xl:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores at tempore laborum accusantium quos ea excepturi deserunt quam maiores.</p>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
          {
            event.map((item, idx) => {
              return (
                <div key={idx} className='bg-white h-92 relative rounded shadow-2xl flex flex-col gap-2 pb-2 hover:scale-105 duration-500 transform'>
                  <div className='px-2 py-2'>
                    <img src={item.url} className='w-full h-44 object-cover rounded-t-lg'></img>
                    <h3 className='text-lg mt-1 font-medium text-black/90 line-clamp-1'>{item.title}</h3>
                    <p className='text-black/60 text-[14px] font-medium'>{item.date}</p>
                    <p className='mt-3 text-[16px] tracking-wide text-black/50 line-clamp-2'>{item.des}</p>
                    <div className='flex items-center justify-between absolute bottom-4 right-2 left-2'>
                      <a href='#' className='border bg-orange-600 active:bg-orange-700 cursor-pointer  text-white px-2 py-0.5 rounded'>Read more</a>
                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Events;