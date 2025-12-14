import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { hero } from '../../../public/hero';

const Hero = () => {

  const settings = {
    infinite: true,
    speed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    dots: true,
  };

  return (
    <div className=" w-full">
      <Slider {...settings} className="h-screen overflow-hidden">
        {hero.map((ba, idx) => (
          <div key={idx} className="relative h-[88vh] md:h-[90vh] lg:h-[86vh]"> {/* FIXED */}

            <img
              src={ba.url}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="relative max-w-7xl mx-auto text-white h-full flex items-center px-4 sm:px-8">
              <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2"> {/* now works properly */}
                <div className="flex flex-col gap-8 w-[80%] md:w-[70%] ">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-lobster tracking-widest">
                    {ba.title}
                  </h2>

                  <p className='text-[17px] md:text-[18px]'>{ba.des}</p>

                  <div className="flex items-center gap-4">
                    <button className="px-4 sm:px-8 py-2.5 bg-orange-600 font-medium text-[14px] rounded-full">
                      Learn More
                    </button>
                    <button className="px-4 sm:px-8 py-2.5 bg-[#140d3d] font-medium text-[14px] rounded-full">
                      Our Classes
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Hero;
