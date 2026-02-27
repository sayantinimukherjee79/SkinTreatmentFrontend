import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Botox() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/7581572/pexels-photo-7581572.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Botox</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Botox
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Botox Treatments in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Smooth Away Wrinkles and Restore a Youthful Look
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Do you wonder how Botox can soften your wrinkles? At The Royal Skin Aesthetics Clinic in F7, Islamabad, our expert Botox
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              treatments
            </span>
          </Link>
          help you achieve a smoother, more youthful appearance by reducing fine lines and wrinkles. This non-invasive procedure offers quick and noticeable results, perfect for those looking to refresh their facial features without downtime.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Do you wonder how Botox can soften your wrinkles? How long does the effect last, and will it look natural? Our skilled professionals are here to answer your questions and customize a Botox treatment plan based on your aesthetic goals.
        </p>

        <img 
          src="https://images.pexels.com/photos/7581572/pexels-photo-7581572.jpeg" 
          alt="imagebotox" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Botox?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Botox is ideal for anyone looking to reduce the appearance of crow's feet, frown lines, or forehead wrinkles. If you're seeking a non-surgical solution to maintain a youthful, refreshed look with minimal downtime, Botox is a great option for you. Suitable for both men and women, Botox offers subtle, natural-looking results.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Botox;