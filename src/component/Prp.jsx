import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Prp() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/5241044/pexels-photo-5241044.jpeg')] bg-cover bg-center text-black px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>PRP Face & Scalp</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          PRP Face & Scalp
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          PRP Face & Scalp Treatment in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Rejuvenate Your Skin and Revitalize Your Hair Naturally
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Is it the right treatment for your skin or hair concerns? At The Royal Skin Aesthetics Clinic in F7, Islamabad, our PRP (Platelet-Rich Plasma) treatments for the face and scalp offer a natural way to rejuvenate your skin and promote healthy hair growth. By using your body's own platelets, PRP stimulates collagen production and hair follicle repair, giving you noticeable improvements without invasive procedures.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Curious about how PRP works? How long before you see results? Our specialists will answer all your questions and guide you through the process, ensuring personalized care for your unique needs.
        </p>

        <img 
          src="https://images.pexels.com/photos/28994390/pexels-photo-28994390.jpeg" 
          alt="PRP treatment" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover' 
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for PRP Face & Scalp?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          PRP is perfect for individuals looking to boost skin elasticity, reduce fine lines, or treat acne scars naturally. It's also an excellent option for those experiencing hair thinning or early hair loss. If you prefer a non-surgical, regenerative approach to skin and hair care, PRP face and scalp treatments are an ideal choice for you.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Prp;