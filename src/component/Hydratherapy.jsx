import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Hydratherapy() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/8096926/pexels-photo-8096926.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Hydratherapy</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Hydratherapy
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Experience #1 Hydratherapy in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Revitalize Your Skin with Deep Hydration
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Wondering if Hydratherapy can help restore your skin's moisture balance? At The Royal
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              Skin Aesthetics
            </span>
          </Link>
          Clinic in F7, Islamabad, our Hydratherapy treatment provides deep hydration, nourishing your skin and restoring its natural glow. This non-invasive treatment uses advanced hydration techniques to rejuvenate dry, tired, and dull skin, leaving it refreshed and radiant.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Are you struggling with dry or flaky skin? How long does the treatment take, and what results can you expect? Our team of experts is here to address all your questions and customize the treatment to your skin's specific needs.
        </p>

        <img 
          src="https://images.pexels.com/photos/5891039/pexels-photo-5891039.jpeg" 
          alt="hydratherapy-treatment" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Hydratherapy?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Hydratherapy is ideal for anyone with dry, dehydrated, or dull skin. Whether you're looking to restore moisture after sun exposure, combat the effects of aging, or simply achieve a more radiant complexion, this treatment is perfect for you. Suitable for all skin types, Hydratherapy offers a gentle yet effective solution for skin in need of hydration and rejuvenation.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Hydratherapy;