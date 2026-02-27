import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Fatreduction() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/7772642/pexels-photo-7772642.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Emsculpt Fat Reduction</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Emsculpt Fat Reduction
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Emsculpt Fat Reduction in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Sculpt Your Body and Build Muscle Without Surgery
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Is it painful or completely safe? At The Royal Skin Aesthetics Clinic in F7, Islamabad, we offer Emsculpt, an innovative fat reduction treatment that not only burns fat but also builds muscle. This non-invasive procedure uses electromagnetic technology to target specific areas of your body, giving you a toned and sculpted appearance without the need for surgery.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Wondering how Emsculpt works? How many sessions will it take to see results? Our team is here to answer all your questions and customize a
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              treatment
            </span>
          </Link>
          plan that fits your body goals.
        </p>

        <img 
          src="https://images.pexels.com/photos/7772685/pexels-photo-7772685.jpeg" 
          alt="emsclupt-fat-reduction" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Emsculpt Fat Reduction?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Emsculpt is ideal for those looking to tone their abdomen, buttocks, thighs, or arms while reducing fat and increasing muscle definition. It's perfect for people who want to enhance their workout results or those who struggle to achieve desired body contours through diet and exercise alone. If you're looking for a non-invasive, quick, and effective body sculpting solution, Emsculpt is a great choice for you.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Fatreduction;