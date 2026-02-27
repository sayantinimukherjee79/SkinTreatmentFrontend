import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Fillers() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/7581583/pexels-photo-7581583.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2 className='text-black'>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2 className='text-black'>Fillers</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black">
          Fillers
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Dermal Fillers in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Enhance Your Natural Beauty with Precision and Care
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Wondering if fillers are right for you? At The Royal
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              Skin Aesthetics
            </span>
          </Link>
          Clinic in F7, Islamabad, our dermal filler treatments are designed to add volume, smooth out wrinkles, and enhance your facial contours. Whether you're looking to plump your lips, define your cheekbones, or reduce deep lines, our expert team ensures a natural and refreshed appearance using the latest filler techniques.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          How long do results last? Is the treatment painful? Our specialists are here to answer all your questions, ensuring you feel confident and informed before starting your filler journey.
        </p>

        <img 
          src="https://images.pexels.com/photos/4586709/pexels-photo-4586709.jpeg" 
          alt="fillers-treatment" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Fillers?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Dermal fillers are ideal for anyone looking to restore volume, smooth out wrinkles, or enhance their facial features without surgery. If you want to achieve a youthful, refreshed appearance with minimal downtime, fillers are the perfect option for you. Suitable for both men and women, fillers provide immediate, natural-looking results.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Fillers;