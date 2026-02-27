import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Hydrafacial() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Hydrafacial</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Hydrafacial
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          #1 Hydrafacial in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Deep Cleanse and Hydrate Your Skin for a Radiant Glow
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Wondering how a Hydrafacial differs from other facials? At The Royal
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              Skin Aesthetics
            </span>
          </Link>
          Clinic in F7, Islamabad, we offer Hydrafacial treatments designed to deeply cleanse, exfoliate, and hydrate your skin, leaving it smooth and glowing. This non-invasive, multi-step facial targets impurities and provides intense moisture, restoring your skin's natural radiance.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Is it suitable for your skin type? How often should you get it for the best results? Our expert team is here to address all your questions and customize the treatment to your specific skin care needs.
        </p>

        <img 
          src="https://images.pexels.com/photos/4586721/pexels-photo-4586721.jpeg" 
          alt="hydrafacial-treatment" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for a Hydrafacial?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Hydrafacial is ideal for anyone looking to improve skin texture, minimize pores, or treat issues like dullness, dehydration, or mild acne. It's a gentle, effective option for all skin types and is perfect for those who want an immediate, radiant glow without downtime.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Hydrafacial;