import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Emsella() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/6620839/pexels-photo-6620839.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2 className='text-black'>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2 className='text-black'>Emsella</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black">
          Emsella
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Emsella Treatment in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Restore Pelvic Health and Confidence with Non-Invasive Care
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Are you struggling with urinary leakage? At The Royal Skin Aesthetics Clinic in F7, Islamabad, our Emsella treatment offers a breakthrough solution for pelvic floor strengthening and urinary incontinence. This non-invasive therapy uses high-intensity electromagnetic energy to stimulate deep pelvic muscles, improving control and restoring confidence without surgery or downtime.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Wondering if Emsella is the right solution for your pelvic health? How many sessions will it take to see results? Our expert team is here to answer your questions and create a personalized plan based on your individual
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              needs
            </span>
          </Link>.
        </p>

        <img 
          src="https://images.pexels.com/photos/4612159/pexels-photo-4612159.jpeg" 
          alt="emsella-treatment" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Emsella?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Emsella is ideal for anyone suffering from weakened pelvic muscles, urinary incontinence, or postpartum recovery challenges. This 
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              treatment
            </span>
          </Link> 
          is especially beneficial for women seeking a non-surgical solution to regain pelvic health and improve their quality of life. If you're looking for a comfortable, effective way to restore your confidence, Emsella may be the perfect option for you.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Emsella;