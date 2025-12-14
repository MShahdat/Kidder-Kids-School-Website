import React, { useRef, useState, useEffect } from 'react';
import { BiSolidQuoteSingleRight, BiSolidQuoteSingleLeft } from "react-icons/bi";
import Slider from "react-slick";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from '../../../public/testimonial';

const Testimonials = () => {

  const slideRef = useRef(null);

  const getSlidesToShow = (width) => {
          if (!width) return 2
          if (width <= 767) return 1
          return 2
      }
  
      const [slidesToShow, setSlidesToShow] = useState(() => {
          if (typeof window !== 'undefined') return getSlidesToShow(window.innerWidth)
          return 2
      })
  
      useEffect(() => {
          const handleResize = () => setSlidesToShow(getSlidesToShow(window.innerWidth))
          // ensure correct value on mount
          handleResize()
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
      }, [])


  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    speed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1, 
        },
      },
    ]
  };

  return (
    <div className='max-w-6xl px-4 py-16 mx-auto'>
      
      <h2 className='text-center text-4xl md:text-5xl font-medium font-lobster tracking-wider text-black/90'>
        Our Clients Says
      </h2>

      <p className='mt-4 tracking-wide text-black/60 text-center mx-auto w-full md:w-4/5 xl:w-2/3'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores at tempore
        laborum accusantium quos ea excepturi deserunt quam maiores.
      </p>

      <div className='mt-8 relative'>
        <div className='absolute right-4 top-0 z-10'>
          <div className='flex items-center gap-4'>
            <div 
              onClick={() => slideRef.current?.slickPrev()} 
              className='px-1 py-0.5 bg-orange-600 active:bg-orange-700 flex items-center justify-center rounded'
            >
              <RiArrowLeftLine className='text-white size-7' />
            </div>
            <div 
              onClick={() => slideRef.current?.slickNext()} 
              className='px-1 py-0.5 bg-orange-600 active:bg-orange-700 flex items-center justify-center rounded'
            >
              <RiArrowRightLine className='text-white size-7' />
            </div>

          </div>
        </div>

        <Slider ref={slideRef} {...settings}>
          {testimonial.map((tes, idx) => (
            <div key={idx} className='mt-12 px-2'>
              <div className='relative bg-red-50 py-4 px-4 rounded-lg h-[250px]'>

                <div className="relative px-10 py-6 bg-white h-[140px] rounded-lg">
                  <div className="absolute left-2 top-4 text-orange-600">
                    <div className='flex '>
                      <BiSolidQuoteSingleLeft  className='size-8'/>
                      <BiSolidQuoteSingleLeft className='size-8'/>
                    </div>
                  </div>
                  <p className="text-[18px] pl-8 text-black/60 line-clamp-4">{tes.msg}</p>
                </div>

                <div className='absolute left-4 bottom-4 px-2 mt-4 flex gap-2'>
                  <img 
                    src={tes.profile} 
                    className='w-14 h-14 rounded-full object-cover'
                  />
                  <div className='flex flex-col'>
                    <h3 className='font-medium text-black/90'>{tes.name}</h3>
                    <p className='text-black/60'>{tes.pro}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default Testimonials;
