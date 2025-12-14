import React, { useState } from 'react';
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sub, setSub] = useState('');
  const [msg, setMsg] = useState('')

  const formhandle = () => {

  }
  return (
    <div className='max-w-7xl px-4 py-16 mx-auto'>

      <h2 className='text-center text-4xl md:text-5xl font-medium font-lobster tracking-wider text-black/90'>Get in Touch</h2>
      <p className='mt-4 tracking-wide text-black/60 text-center mx-auto w-full md:w-4/5 xl:w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores at tempore laborum accusantium quos ea excepturi deserunt quam maiores.</p>
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-4 gap-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='bg-red-50 relative w-24 h-24 rounded-full'>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <FaLocationDot className='text-4xl sm:text-4xl ' />
            </div>
          </div>
          <p className='text-[17px] mt-2 font-medium text-black/80'>145/2 Block-D Gulshan, Dhaka-1200</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='bg-red-50 relative w-24 h-24 rounded-full'>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <MdEmail className='text-4xl sm:text-4xl ' />
            </div>
          </div>
          <p className='text-[17px] mt-2 font-medium text-black/80'>kidder@gmail.com</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='bg-red-50 relative w-24 h-24 rounded-full'>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <MdAddCall className='text-4xl sm:text-4xl ' />
            </div>
          </div>
          <p className='text-[17px] mt-2 font-medium text-black/80'>+8801885374041</p>
        </div>
      </div>

      <div className='  mt-16 grid grid-cols-1 md:grid-cols-2 rounded-lg'>
        <div className='bg-orange-600 text-white'>
          <div className='mt-0 p-8'>
          <p className='text-[17px] text-white tracking-wide leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem odio ipsum reiciendis soluta deserunt rem minus iure obcaecati adipisci. Voluptatum.</p>
          <form onSubmit={formhandle} className='mt-8 w-full '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='mt-0 block font-semibold text-lg'>Full Name</label>
                <input onChange={(e) => setName(e.target.value)} type='text' value={name} placeholder='Full Name' required className='mt-1 outline-none text-[17px] bg-white text-black/70 font-medium rounded px-3 py-2.5 w-full'></input>
              </div>

              <div>
                <label className='mt-0 block font-semibold text-lg'>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='example@gmail.com' required className='mt-1 outline-none text-[17px] bg-white text-black/70 font-medium rounded px-3 py-2.5 w-full'></input>
              </div>
            </div>

            {/* <label className='mt-3 block font-semibold text-lg text-black/80'>Subject</label>
            <input onChange={(e) => setSub(e.target.value)} type='text' value={sub} placeholder='Subject' required className='mt-1 outline-none text-[17px] bg-white text-black/70 font-medium rounded px-3 py-2.5 w-full'></input> */}

            <label className='mt-3 block font-semibold text-lg '>Message</label>
            <textarea onChange={(e) => setMsg(e.target.value)} type='text' rows={3} value={msg} placeholder='Write message' required className='mt-1 outline-none text-[17px] bg-white text-black/70 font-medium rounded px-3 py-2.5 w-full'></textarea>


            <button type='submit' className='bg-white w-full text-center text-orange-600 font-bold text[18px] px-6 rounded mt-2 py-1.5'>Submit</button>
          </form>
        </div>
        </div>
        <div className="w-full min-h-[400px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.03611072465634!2d90.49947640059956!3d23.69947466809364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6ef045b692f%3A0x72ac0cae5d660029!2sMFXX%2BRP4%2C%20Narayanganj%201361!5e1!3m2!1sen!2sbd!4v1764966094488!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>

  );
};

export default Contact;