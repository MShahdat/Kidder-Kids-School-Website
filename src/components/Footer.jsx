import React, { useState } from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import {Link} from 'react-router-dom'

const Footer = () => {

  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    toast.success('Thans for your support!')
    setEmail('')
  }

  return (
    <div className='bg-[#0a0a23] text-white'>
      <div className='max-w-7xl px-4 py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div>
          <h3 className='mt-2 md:mt-4 text-xl uppercase text-white font-bold tracking-widest'>Get in Touch</h3>
          <div className='mt-4 text-white/80 flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
              <FaLocationDot />
              <p>145/2 Block-D Gulshan, Dhaka-1200</p>
            </div>
            <div className='flex items-center gap-1'>
              <MdAddCall />
              <p>+8801885374041</p>
            </div>
            <div className='flex items-center gap-1'>
              <MdEmail/>
              <p>+mdshahdat2504@gmail.com</p>
            </div>
          </div>
          <div className='flex gap-2 mt-4'>
            <a href='https://x.com/'><FaTwitter className='size-8 rounded-full bg-orange-600 px-1.5 py-1.5' /></a>
            <a href='https://www.facebook.com/'><FaFacebook className='size-8 rounded-full bg-orange-600 px-1.5 py-1.5' /></a>
            <a href='https://www.instagram.com/'><LuInstagram className='size-8 rounded-full bg-orange-600 px-1.5 py-1.5' /></a>
            <a href='https://www.instagram.com/'><IoLogoYoutube className='size-8 rounded-full bg-orange-600 px-1.5 py-1.5' /></a>
          </div>
        </div>
        <div

        >
          <h1 className='mt-4 text-xl uppercase text-white font-bold tracking-widest'>Quick Access</h1>
          <div className='mt-4 flex flex-col text-white/80 gap-1 tracking-wide'>
            <Link to={'/about'}>About Us</Link>
            <Link to={'/teachers'}>Teachers</Link>
            <Link to={'/events'}>Events</Link>
            <Link to={'/privacy'}>Privacy Policy</Link>
            <Link to={'/terms&condition'}>Terms & Conditions</Link>
          </div>
        </div>
        <div

        >
          <h2 className='mt-4 text-xl uppercase text-white font-bold tracking-widest'>Photo Gallery</h2>
          <div className='mt-4 lg:mt-8 grid grid-cols-3'>
            <img className='h-24 max-w-full object-cover' src='https://plus.unsplash.com/premium_photo-1681966726189-f1f02f4f8bcc?q=80&w=1145&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            <img className='h-24 max-w-full object-cover' src='https://plus.unsplash.com/premium_photo-1703716852987-f92b2ce9e1c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D'></img>
            <img className='h-24 max-w-full object-cover' src='https://plus.unsplash.com/premium_photo-1754341219249-149809aea07c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            <img className='h-24 max-w-full object-cover' src='https://plus.unsplash.com/premium_photo-1663126628313-79e2400a9bbd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            <img className='h-24 max-w-full object-cover' src='https://images.unsplash.com/photo-1599376672737-bd66af54c8f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            <img className='h-24 max-w-full object-cover' src='https://plus.unsplash.com/premium_photo-1661375206780-60e8560bf99c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'></img>
          </div>
        </div>
        <div

        >
          <h2 className='mt-4 text-xl uppercase text-white font-bold tracking-widest'>Newsletter</h2>
          <p className='mt-4 lg:mt-8 text-white/78 text-[16px] leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, harum?</p>
          <form onSubmit={handleSubmit} className='mt-4 lg:mt-4 flex flex-col gap-2'>
            <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='Email...' required className='bg-white text-black/70 w-full text-[16px] font-medium px-4 py-2 rounded shadow-2xl outline-none'></input>
            <button type='submit' className='bg-orange-600 text-center py-1.5 font-bold text-[16px] rounded w-full'>Subscribe</button>
          </form>
        </div>
      </div>
      <div

        className='py-4 px-4 text-white/80 bg-orange-700 text-center'>
        Copyright ©2025 All rights reserved. This template is made by Shahdat
      </div>
    </div>
  );
};

export default Footer;