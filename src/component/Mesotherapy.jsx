import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Mesotherapy() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/5468701/pexels-photo-5468701.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Mesotherapy</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Mesotherapy
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Mesotherapy in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Revitalize Your Skin with Targeted Nutrient Therapy
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Curious about how mesotherapy works? At The Royal
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              Skin Aesthetics
            </span>
          </Link>
          Clinic in F7, Islamabad, we offer mesotherapy, a cutting-edge treatment designed to rejuvenate and refresh your skin by delivering vitamins, enzymes, and other active ingredients directly into the skin's middle layer.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          This non-surgical treatment enhances skin hydration, improves texture, and reduces signs of aging.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Wondering if it's safe for your skin type or how many sessions you'll need? Our experts are here to answer your questions and provide a personalized treatment plan that addresses your specific concerns.
        </p>

        <img 
          src="https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg" 
          alt="mesotherapy-treatment" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover' 
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Mesotherapy?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Mesotherapy is ideal for individuals seeking to improve skin hydration, tone, and elasticity. It's also effective for treating fine lines, wrinkles, and pigmentation issues. If you're looking for a non-invasive way to rejuvenate your skin and achieve a youthful glow, mesotherapy is the perfect solution.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Mesotherapy;