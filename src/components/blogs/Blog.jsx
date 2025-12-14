import React from 'react';



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
    },
  ]

  return (
    <div className=''>
      <div className='max-w-7xl px-4 py-12 mx-auto'>
        <h2 className='text-center text-4xl md:text-5xl font-medium font-lobster tracking-wider text-black/90'>Our Blogs</h2>
        <p className='mt-4 tracking-wide text-black/60 text-center mx-auto w-full md:w-4/5 xl:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores at tempore laborum accusantium quos ea excepturi deserunt quam maiores.</p>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
          {
            data.map((item, idx) => {
              return (
                <div key={idx} className='h-92 relative bg-white shadow-lg rounded-xl hover:scale-103 overflow-hidden duration-500 transform'>
                  <img src={item.url} className='h-44 w-full object-cover rounded-xl'></img>

                  <div className='px-2 mt-2'>
                    <p className='text-orange-600 text-xs font-medium'>{item.tag}</p>
                    <h3 className='mt-2 text-lg font-medium leading-tight line-clamp-1'>{item.title}</h3>
                    <p className='mt-2 line-clamp-2 text-sm text-gray-500'>{item.des}</p>
                    <div className='flex items-center gap-4 mt-4 pb-4 absolute bottom-2'>
                      <img src={item.profile} className='h-10 w-10 mt-1 rounded-full object-cover '></img>
                      <div className='flex flex-col leading-tight'>
                        <p className='text-md font-semibold'>{item.author}</p>
                        <p className='text-xs font-semibold text-gray-600'>{item.folwars} followers</p>
                      </div>
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

export default Blog;