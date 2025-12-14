import { Link } from "react-router-dom";
import { IoIosArrowForward, IoMdSad } from "react-icons/io";

const HeroCard = (props) => {

    return (
        <div className='relative text-white w-full h-[200px] sm:h-[260px] md:h-[280px] xl:h-[320px]'>
            <img src={props.url}
            className="absolute inset-0 w-full h-full object-cover"
            ></img>
            <div className="max-w-7xl h-full px-4 py-0 mx-auto relative">
              <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                <h3 className='text-5xl sm:text-6xl lg:text-7xl font-bold font-lobster tracking-wider'>{props.page}</h3>
                <div className="flex items-center gap-1 md:text-[18px] font-medium">
                  <Link to={'/'} className="flex items-center gap-0">
                    <h2 className="text-orange-600">Home </h2>
                  <IoIosArrowForward className="mt-1"/>
                  </Link>
                  <p>About</p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default HeroCard;