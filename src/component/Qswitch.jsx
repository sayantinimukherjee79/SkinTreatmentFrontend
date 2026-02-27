import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Qswitch() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/6476081/pexels-photo-6476081.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Q-Switch</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Q-Switch
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Q-Switch Laser Treatment in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Brighten Your Skin and Target Pigmentation Effectively
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Are you struggling with dark spots or pigmentation? At The Royal Skin Aesthetics Clinic in F7, Islamabad, our Q-Switch laser treatment offers an advanced solution for targeting pigmentation, sunspots, and uneven skin tone. This non-invasive laser technology helps brighten your complexion and improve skin texture, leaving you with a more radiant and youthful appearance.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Wondering how many sessions you'll need for visible results? Is Q-Switch suitable for your skin type? Our expert team is here to answer your questions and provide a customized treatment plan tailored to your skin's needs.
        </p>

        <img 
          src="https://images.pexels.com/photos/6476081/pexels-photo-6476081.jpeg" 
          alt="Q-Switch Laser" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover' 
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Q-Switch Laser Treatment?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Q-Switch is ideal for individuals looking to reduce pigmentation, melasma, or dark spots. If you want a non-surgical solution to achieve a clearer and brighter complexion, this treatment is perfect for you. Suitable for all skin types, it's a safe and effective option for those seeking an even skin tone and enhanced radiance.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Qswitch;