import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Hifu() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/3373721/pexels-photo-3373721.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>HIFU</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          HIFU
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          HIFU Treatment in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Non-Surgical Skin Tightening and Lifting
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Are you looking for a way to lift and firm your skin without going under the knife? At The Royal
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              Skin Aesthetics
            </span>
          </Link>
          Clinic in F7, Islamabad, we offer HIFU (High-Intensity Focused Ultrasound) treatments for non-invasive skin tightening and lifting. This advanced technology targets deep layers of the skin, stimulating collagen production to reduce sagging and improve skin elasticity without surgery.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          How many sessions will you need to see results? Is HIFU painful? Our team of experts will address all your concerns and guide you through the process, ensuring a customized treatment plan tailored to your skin's needs.
        </p>

        <img 
          src="https://images.pexels.com/photos/3373721/pexels-photo-3373721.jpeg" 
          alt="hifu-treatment" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for HIFU?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          HIFU is ideal for those who want a non-surgical facelift or skin tightening solution. It's perfect for individuals looking to reduce fine lines, wrinkles, or sagging skin on the face and neck. If you're seeking a safe, effective way to rejuvenate your skin without downtime, HIFU is the right choice for you.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Hifu;