import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Polynucleotides() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/8945928/pexels-photo-8945928.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Polynucleotides</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Polynucleotides
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Polynucleotide Treatments in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Advanced Skin Rejuvenation and Repair for Radiant Results
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Are you wondering how Polynucleotides work to improve your skin? At The Royal 
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer p-1 underline hover:text-blue-950 font-semibold">
              Skin Aesthetics
            </span>
          </Link> 
          Clinic in F7, Islamabad, our Polynucleotide treatments offer cutting-edge skin rejuvenation using innovative technology. Polynucleotides, derived from natural sources, help to stimulate cellular regeneration and repair, enhancing skin texture and elasticity for a more youthful appearance.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          What specific skin issues can they address? How many sessions will you need to see visible results? Our experts are here to provide answers and tailor the treatment to meet your unique skin care needs.
        </p>

        <img 
          src="https://images.pexels.com/photos/8945928/pexels-photo-8945928.jpeg" 
          alt="Polynucleotides" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover' 
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Polynucleotides?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Polynucleotide treatments are ideal for individuals seeking to revitalize their skin, improve texture, and reduce signs of aging. If you're looking for a non-invasive solution to enhance skin quality and promote a more youthful glow, Polynucleotides are a great choice for you.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Polynucleotides;