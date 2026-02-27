import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Exosomes() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/5234490/pexels-photo-5234490.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Exosomes</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Exosomes
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Exosome Therapy in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Advanced Skin Repair and Rejuvenation at The Royal Skin Aesthetics Clinic
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Wondering how it differs from other 
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              skin treatments
            </span>
          </Link>
          ? At The Royal Skin Aesthetics Clinic in F7, Islamabad, we offer cutting-edge exosome therapy to promote advanced skin healing and regeneration. Exosomes are tiny messengers derived from stem cells that deliver powerful growth factors to your skin, helping to repair damaged cells and stimulate collagen production, resulting in a youthful, glowing complexion.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Curious about how exosome therapy works? How long will it take to see the results? Our expert team is here to guide you through the process and customize a plan suited to your skin type and needs.
        </p>

        <img 
          src="https://images.pexels.com/photos/8142201/pexels-photo-8142201.jpeg" 
          alt="exosome-treatment" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Exosome Therapy?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Exosome therapy is ideal for individuals seeking a non-invasive solution to rejuvenate their skin and reverse signs of aging. If you have sun damage, fine lines, acne scars, or simply want to enhance your skin's texture and glow, exosome therapy offers an advanced approach to achieving healthy, youthful skin.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Exosomes;