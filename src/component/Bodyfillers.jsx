import React from 'react';
import { Link } from 'react-router-dom';
import Promosection from './Promosection';
import { FaChevronRight } from "react-icons/fa";
import Fixedicon from './Fixedicon';

function Bodyfillers() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://media.istockphoto.com/id/1213236718/photo/doctor-doing-injection-into-female-beautiful-body.jpg?s=1024x1024&w=is&k=20&c=_qLy1xC_inYJeYVMgyFtut3Z9MbjUHUUQdUAaUil-BQ=')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Body Fillers</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Body Fillers
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          #1 Body Fillers in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Enhance Your Contours with Natural-Looking Volume
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Are you looking to add volume to specific areas of your body? At The Royal Skin Aesthetics Clinic in F7, Islamabad, we offer body fillers to help you achieve a more contoured, sculpted appearance. Our body filler
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              treatments
            </span>
          </Link>
          provide natural-looking volume, enhancing areas like the buttocks, hips, and thighs. This non-surgical solution helps you achieve your desired shape without the need for invasive procedures.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Wondering how body fillers work or how long the results last? Is it safe and effective for you? Our experienced team is here to answer all your questions and create a customized treatment plan tailored to your body goals.
        </p>

        <img 
          src="https://media.istockphoto.com/id/1213236718/photo/doctor-doing-injection-into-female-beautiful-body.jpg?s=1024x1024&w=is&k=20&c=_qLy1xC_inYJeYVMgyFtut3Z9MbjUHUUQdUAaUil-BQ=" 
          alt="bodyfillers" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Body Fillers?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Body fillers are ideal for individuals looking to enhance their natural curves without undergoing surgery. Whether you're seeking a subtle enhancement or more pronounced results, body fillers are perfect for those wanting a non-invasive way to improve body contours and boost confidence.
        </p>
      </div>

      <Promosection />
    </div>
  )
}

export default Bodyfillers;