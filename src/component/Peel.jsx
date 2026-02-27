import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Fixedicon from './Fixedicon';

function Peel() {
  return (
    <div>
      <Fixedicon />

      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[360px] bg-[url('https://images.pexels.com/photos/6977399/pexels-photo-6977399.jpeg')] bg-cover bg-center text-white px-4 md:px-16 flex flex-col justify-center">

        {/* Breadcrumb */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg mb-2 md:mb-4">
          <h2>Home</h2>
          <div className="text-amber-400 flex items-center"><FaChevronRight /></div>
          <h2>Chemical Peels</h2>
        </div>

        {/* Main Heading */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Chemical Peels
        </h1>
      </div>

      {/* Info Section */}
      <div className='mt-6 mb-14 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-32'>
        <h1 className='text-amber-500 font-semibold text-2xl sm:text-3xl md:text-4xl'>
          Chemical Peels in F7, Islamabad
        </h1>
        <h2 className='text-black font-semibold text-xl sm:text-2xl md:text-3xl mt-3'>
          Reveal a Brighter, Smoother Complexion with Customized Treatments
        </h2>

        <p className='text-gray-700 font-semibold mt-5 text-sm sm:text-base md:text-lg'>
          Are you struggling with uneven skin tone, acne scars, or fine lines? At The Royal Skin Aesthetics Clinic in F7, Islamabad, our chemical peels are designed to revitalize your skin by removing dead cells and stimulating the growth of fresh, healthy skin. With tailored solutions for different skin types and concerns, we help you achieve a radiant, youthful glow.
        </p>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Wondering if a chemical peel can help you achieve clearer, smoother skin? How many sessions will you need to see visible results? Our experienced team is here to guide you through every step, ensuring a safe and 
          <Link to='/services'>
            <span className="text-amber-700 cursor-pointer px-1 underline hover:text-blue-950 font-semibold">
              effective treatment
            </span>
          </Link>
          plan customized to your needs.
        </p>

        <img 
          src="https://media.istockphoto.com/id/1037417512/photo/facial-mask-diy-tutorial.jpg?s=1024x1024&w=is&k=20&c=MX7GGCuB5QrYGGNUZo36l_xXgG0pSivTwE6-iXEKWyc=" 
          alt="imagepeel" 
          className='w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mt-7 rounded-lg object-cover'
        />

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-5'>
          Who Should Opt for Chemical Peels?
        </h2>

        <p className='text-gray-700 font-semibold mt-4 text-sm sm:text-base md:text-lg'>
          Chemical peels are ideal for individuals dealing with dull skin, pigmentation, acne scars, or fine lines. Whether you want to brighten your complexion, improve skin texture, or address specific concerns like sun damage, chemical peels offer a non-invasive solution to reveal fresh, rejuvenated skin. Perfect for those looking to enhance their skin's radiance and health.
        </p>
      </div>

      <Promosection />
    </div>
  );
}

export default Peel;