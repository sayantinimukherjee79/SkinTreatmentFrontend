import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Fatinjection() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://media.istockphoto.com/id/2025692203/photo/woman-injecting-insulin-in-stomach-skin.jpg?s=1024x1024&w=is&k=20&c=gXyppbcXQX8lBUuBz-_7Ouv0GB7wExb3RTvyjbrH-aI=')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2 className='text-black'>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2 className='text-black'>Fat Dissolving Injection</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black">
          Fat Dissolving Injection
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          #1 Fat Dissolving Injections in Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Target Stubborn Fat and Achieve a Slimmer Look
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Are you struggling with localized fat that won't budge? At The Royal
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              Skin Aesthetics
            </span>
          </Link>
          Clinic in F7, Islamabad, our fat dissolving injections provide a non-surgical solution to eliminate stubborn fat deposits. This treatment uses specially formulated injections to break down and remove fat cells in areas resistant to diet and exercise, helping you achieve a more contoured appearance.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Wondering how effective fat dissolving injections are for areas like the chin, abdomen, or thighs? How many sessions will you need? Our expert team is ready to address all your concerns and customize a treatment plan for your body's needs.
        </p>

        <img 
          src="https://media.istockphoto.com/id/2025692203/photo/woman-injecting-insulin-in-stomach-skin.jpg?s=1024x1024&w=is&k=20&c=gXyppbcXQX8lBUuBz-_7Ouv0GB7wExb3RTvyjbrH-aI=" 
          alt="fat-injection" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Fat Dissolving Injections?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Fat dissolving injections are ideal for individuals who are close to their ideal weight but struggle with small, stubborn pockets of fat that don't respond to traditional weight loss methods. If you're seeking a minimally invasive way to refine your body shape and target specific areas, this treatment is perfect for you.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Fatinjection;