import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import Details from './Details';
import Fixedicon from './Fixedicon';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Appointment() {
  return (
    <div>
      {/* Fixed icon */}
      <Fixedicon />

      {/* Header Section */}
      <section className="relative">
        <div className="flex justify-between h-64 sm:h-72 md:h-80 bg-[url('https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg')] bg-cover bg-center px-4 sm:px-10 lg:px-20 items-center">
          <div className="px-4 sm:px-10 lg:px-20 py-6">
            {/* Main heading */}
            <h1 className='font-bold text-xl sm:text-2xl md:text-3xl text-black mb-2'>
              Book An Appointment
            </h1>

            {/* Breadcrumb below heading */}
            <div className='flex gap-2 sm:gap-4 items-center text-sm sm:text-base text-black ml-[-2] sm:ml-0'>
              <h2 className='font-bold'>Home</h2>
              <FaChevronRight className="text-amber-400" />
              <h2 className='font-bold'>Book An Appointment</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10 lg:gap-20 px-4 sm:px-6 lg:px-20 mt-10 mb-20">

        {/* Details Section */}
        <section className="flex-1">
          <Details />
        </section>

        {/* Appointment Info */}
        <div className="flex-1 w-full lg:w-auto">
          <motion.h1
            className='text-amber-500 font-semibold text-xl sm:text-2xl md:text-3xl mb-3'
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Ready to take the next step?
          </motion.h1>

          <h1 className='text-black font-semibold text-lg sm:text-xl md:text-2xl mb-4'>
            Make an Appointment at The Royal Aesthetic Clinic
          </h1>

          <p className='text-gray-700 mb-6 text-sm sm:text-base'>
            At The Royal Aesthetic Clinic, we prioritize your unique beauty goals and provide a personalized experience to ensure you feel confident in your skin. Our expert team offers tailored
            <Link to='/services'>
              <span className='text-emerald-600 font-semibold cursor-pointer px-1 underline hover:text-blue-950'>
                aesthetic solutions
              </span>
            </Link>
            designed to meet your needs with care and precision. Scheduling your appointment is easy — whether online, over the phone, or in person, we're here to guide you every step of the way.
          </p>

          <p className='text-black font-semibold text-sm sm:text-base mb-2'>Opening Hours</p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <p className="text-gray-700 font-medium text-sm sm:text-base">Monday – Sunday</p>
            <div className="flex items-center space-x-2">
              <FiClock className="text-amber-400 text-lg sm:text-xl" />
              <p className="text-gray-700 font-medium text-sm sm:text-base">9am–5pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointment