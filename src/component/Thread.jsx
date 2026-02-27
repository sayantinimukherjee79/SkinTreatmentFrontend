import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Thread() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/5177995/pexels-photo-5177995.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Threads</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Threads
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Thread Lift Treatment in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Lift and Tighten Your Skin with Non-Surgical Threads
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          What areas can be treated with threads? At The Royal Skin Aesthetics Clinic in F7, Islamabad, we offer thread lift treatments to lift and tighten sagging skin without surgery. Using dissolvable threads, this non-invasive procedure stimulates collagen production, providing a natural lift to the face, neck, or body for a youthful and rejuvenated appearance.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Are you wondering how long the results last? Is the procedure painful? Our experts are here to address all your questions and create a customized treatment plan suited to your aesthetic goals.
        </p>

        <img 
          src="https://media.istockphoto.com/id/603912306/photo/master-in-the-cabin-removes-facial-hair-strand.jpg?s=1024x1024&w=is&k=20&c=Lfiynjd_4EWF0yPc1tH1f2mkiMjRctDoegkADH9LSvw=" 
          alt="Thread Lift" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover' 
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for a Thread Lift?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Thread lifts are perfect for individuals who want to combat mild to moderate skin laxity without undergoing surgery. If you're looking for a subtle lift, want to improve sagging skin on your face, neck, or jawline, or are seeking a quick recovery, this treatment is ideal for you. It's suitable for those wanting natural-looking, long-lasting results without invasive procedures.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Thread;