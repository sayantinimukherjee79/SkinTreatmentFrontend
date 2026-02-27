import React from 'react';
import { Link } from 'react-router-dom';
import Promosection from './Promosection';
import { FaChevronRight } from "react-icons/fa";
import Fixedicon from './Fixedicon';

function Laser() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/5240768/pexels-photo-5240768.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Laser Hair Reduction</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Laser Hair Reduction
        </h1>

      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Laser Hair Reduction in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Say Goodbye to Unwanted Hair with Lasting Results
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Are you tired of constantly shaving or waxing? At The Royal
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              Skin Aesthetics
            </span>
          </Link>
          Clinic in F7, Islamabad, we offer advanced laser hair reduction treatments designed to provide smooth, hair-free skin with long-lasting results. Using state-of-the-art technology, we ensure a comfortable and effective solution to unwanted hair.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Wondering if laser hair reduction can work for you? How many sessions will you need? Our team is here to answer all your questions and tailor a treatment plan that fits your skin type and hair growth pattern.
        </p>

        <img
          src="https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg"
          alt="imagelaser"
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Laser Hair Reduction?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Laser hair reduction is ideal for anyone looking for a long-term solution to unwanted hair. If you struggle with razor bumps, ingrown hairs, or simply want a hassle-free way to maintain smooth skin, laser hair reduction is a safe and effective treatment perfect for you. Suitable for both men and women.
        </p>
      </div>

      <Promosection />
    </div>
  )
}

export default Laser;