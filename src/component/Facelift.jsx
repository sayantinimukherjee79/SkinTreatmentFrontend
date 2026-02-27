import React from 'react';
import { Link } from 'react-router-dom';
import Promosection from './Promosection';
import { FaChevronRight } from "react-icons/fa";
import Fixedicon from './Fixedicon';

function Facelift() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/5659019/pexels-photo-5659019.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2 className="text-black">Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2 className="text-black">Aptos Face Lift</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black">
          Aptos Face Lift
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Aptos FaceLift in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Lift and Rejuvenate Your Face Without Surgery
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Is it a safe alternative to traditional facelifts? At The Royal Skin Aesthetics Clinic in F7, Islamabad, we offer the Aptos facelift, a minimally
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              invasive treatment
            </span>
          </Link>
          designed to lift sagging skin and restore a youthful appearance. Using innovative threads, the Aptos face lift tightens and contours your face without the need for surgery, offering natural-looking results with minimal downtime.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Wondering how the Aptos face lift works? How long do the results last? Our expert team is here to answer all your questions, helping you make an informed decision about your facial rejuvenation.
        </p>

        <img 
          src="https://images.pexels.com/photos/5659019/pexels-photo-5659019.jpeg" 
          alt="facelift" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for the Aptos Face Lift?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          The Aptos face lift is ideal for individuals experiencing mild to moderate sagging skin, loss of facial volume, or early signs of aging. If you're seeking a non-surgical option to lift and tighten your skin with subtle, natural results, this procedure is perfect for you. Suitable for both men and women, the Aptos face lift offers a quick recovery and long-lasting results.
        </p>
      </div>

      <Promosection />
    </div>
  )
}

export default Facelift;