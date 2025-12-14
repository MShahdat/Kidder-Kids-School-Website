import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/Context';
import { FaBookReader } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Nav = () => {

  const [open, setOpen] = useContext(dataContext);
  const [facilityOpen, setFacilityOpen] = useState(false);
  const [sideTop, setsideTop] = useState(false);


  const navigate = useNavigate()

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5) {
      setsideTop(true);
    } else {
      setsideTop(false);
    }
  };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navitem = [
    { path: '/', link: 'Home' },
    { path: '/about', link: 'About' },
    { path: '/classes', link: 'Classes' },

    {
      path: '/facilities',
      link: 'Services',
      children: [
        {path: '/facilities', link: 'Facility'},
        { path: '/teachers', link: 'Teachers' },
        { path: '/appointment', link: 'Appointment' },
        { path: '/events', link: 'Events' },
        { path: '/testimonials', link: 'Testimonials' },
      ]
    },

    { path: '/blogs', link: 'Blogs' },
    { path: '/contact', link: 'Contact' },
  ]


  return (
    <div
      className={`
                bg-[#0f0a2c] text-white sticky left-0 top-0 z-50 
                transition-all duration-500
                
            `}
    >
      <nav
        className='max-w-7xl px-4 py-4 mx-auto flex items-center justify-between'>
        <Link to={'/'} className='text-2xl sm:text-2xl lg:text-3xl font-bold uppercase'>
          <div className='flex gap-3 items-center text-orange-600'>
            <FaBookReader className='size-8 font-bold' />
            <h3 className='font-dancing'>Kider</h3>
          </div>
        </Link>

        <div className='flex items-center gap-4 lg:gap-6'>
          {navitem.map((item, idx) => {
            if (item.children) {
              return (
                <div key={idx} className='relative group hidden md:block'>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-0.5 text-[18px] font-semibold tracking-[1px] 
            ${isActive ? 'text-orange-600 font-bold underline' : ''}`
                    }
                  >
                    <h2>{item.link}</h2>
                    <IoIosArrowDown className='mt-0 size-6'/>
                  </NavLink>

                  {/* Dropdown */}
                  <div className='absolute left-0 top-full bg-white shadow-md rounded
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible
                       transition-all duration-300 w-40'>
                    {item.children.map((child, cidx) => (
                      <NavLink
                        key={cidx}
                        to={child.path}
                        className='block px-4 py-2 text-[16px] font-medium hover:text-orange-700 hover:bg-gray-100 text-black'
                      >
                        {child.link}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `hidden md:block text-[16px] font-semibold tracking-[1px] 
        ${isActive ? 'text-orange-600 font-bold underline' : ''}`
                }
              >
                {item.link}
              </NavLink>
            )
          })}

        </div>

        <div className=''>
          <div className='flex items-end md:items-center gap-4'>


            <div onClick={() => {
              // setSignInOpen(true)
            }} className='px-4 py-1 text-[16px] bg-orange-600 text-white cursor-pointer font-semibold rounded-full hidden md:block active:bg-orange-700'>
              <div className='flex items-center justify-center gap-1'>
                <h3>Join Us</h3>
                <IoMdArrowRoundForward />
              </div>
            </div>

            <div onClick={() => {
              setOpen(!open)
            }} className={`block md:hidden text-white/70 border-2 border-gray-300 rounded-md px-2 py-0.5`}>
              {open ? <RxCross2 className='size-6 md:size-8' /> : <IoMdMenu className='size-6 md:size-8' />}
            </div>

          </div>
        </div>

      </nav>

      {/* Mobile menu */}
      <div className={` w-1/2 fixed ${sideTop ? 'top-20' : ''} right-0 md:hidden bg-white text-black/80 shadow-2xl px-4 transform transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col gap-4 sm:px-4 mt-0 pt-4 pb-8  '>
          {navitem.map((item, idx) => {
            if (item.children) {
              return (
                <div key={idx}>
                  
                  <button
                    onClick={() => setFacilityOpen(!facilityOpen)}
                    className='text-lg font-semibold w-full text-left flex gap-1 items-center hover:text-orange-600 hover:scale-101 duration-500 transform'
                  >
                    {item.link}
                    <div>
                      {facilityOpen ? <IoIosArrowUp className='size-6 mt-0.5'/> : <IoIosArrowDown className='size-6 mt-0.5'/>}
                    </div>
                  </button>

                  
                  {facilityOpen && (
                    <div className='bg-white rounded shadow flex flex-col py-2 gap-0'>
                      {item.children.map((child, cidx) => (
                        <Link
                          key={cidx}
                          to={child.path}
                          onClick={() => setOpen(false)}
                          className='hover:scale-101 duration-500 hover:text-orange-600 transform text-[18px] text-black/70 font-medium px-4 py-1'
                        >
                          {child.link}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setOpen(false)}
                className='text-lg hover:scale-101 duration-500 hover:text-orange-600 transform font-semibold'
              >
                {item.link}
              </Link>
            );
          })}


          <div onClick={() => {
            setOpen(!open)
            // setSignInOpen(true)
          }} className='cursor-pointer text-center text-lg py-1.5 bg-orange-600 text-white font-semibold rounded w-full'>
            <div className='flex items-center justify-center gap-1'>
                <h3>Join Us</h3>
                <IoMdArrowRoundForward />
              </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Nav;
