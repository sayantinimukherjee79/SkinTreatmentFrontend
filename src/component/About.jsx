import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Transform from './Transform';
import Fixedicon from './Fixedicon';


function About() {
  return (
    <div>
      <section>
        <div>
          <Fixedicon />
        </div>

        <div
          className="
      flex flex-col sm:flex-row 
      justify-between items-center 
      min-h-[250px] lg:h-90
      bg-[url('https://images.pexels.com/photos/6629549/pexels-photo-6629549.jpeg')] 
      bg-cover bg-center
      px-6 sm:px-10 lg:px-20
      py-10
    "
        >
          {/* LEFT TITLE */}
          <h1 className="font-bold text-2xl sm:text-3xl text-white">
            About
          </h1>

          {/* RIGHT BREADCRUMB */}
          <div className="flex items-center gap-3 sm:gap-6 mt-6 sm:mt-0">
            <h2 className="text-white text-sm sm:text-base">Home</h2>

            <FaChevronRight className="text-amber-400 text-xs sm:text-sm" />

            <h2 className="text-white text-sm sm:text-base">About</h2>
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Transform />
        </div>
      </section>

      <section className="mt-12 lg:mt-20 mb-12 lg:mb-20 px-4 sm:px-6 lg:px-56">
        <h1 className="font-bold text-3xl sm:text-4xl text-black text-center">
          Dr. Maimoona Doraiz
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start mt-10">

          {/* IMAGE CARD */}
          <div className="relative rounded-3xl shadow-2xl w-full max-w-md lg:max-w-xl h-[350px] sm:h-[450px] lg:h-[500px] p-4 bg-white overflow-hidden group">

            <img
              src="https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg"
              alt="doctorsimage"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-300/60 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out rounded-3xl"></div>

            {/* Name Card */}
            <div className="bg-amber-400 rounded-2xl w-[85%] mx-auto py-4 px-4 flex flex-col items-center justify-center text-center absolute -bottom-10 left-1/2 -translate-x-1/2">
              <h1 className="text-white font-semibold text-lg sm:text-xl">
                Dr. Maimoona Doraiz
              </h1>
              <p className="text-white text-sm sm:text-base">
                Best Aesthetic Physician in F7- Islamabad
              </p>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="w-full lg:w-1/2">
            <h1 className="font-semibold text-black text-xl sm:text-2xl">
              Best Aesthetic Physician in F7- Islamabad
            </h1>

            <p className="mt-3 text-sm sm:text-base">
              Dr. Maimoona Doraiz holds an MBBS degree from the University of Health Sciences (UHS) and a BSe from Punjab University (Pb), providing her with a strong medical foundation.
            </p>

            <h1 className="font-semibold text-black text-xl sm:text-2xl mt-5">
              Advanced Aesthetic Training
            </h1>

            <p className="mt-3 text-sm sm:text-base">
              Dr. Maimoona has undergone extensive training in medical aesthetics, earning several diplomas and certificates from prestigious institutions:
            </p>

            <div className="space-y-4 mt-4 text-sm sm:text-base">
              <p><span className="font-semibold">• Diploma in Complete Medical Aesthetic Course -</span> American Association of Continuing Medical Education</p>
              <p><span className="font-semibold">• Diploma Certificate in Complete Medical Aesthetic Course -</span> Pakistan Academy of Laser Dentistry</p>
              <p><span className="font-semibold">• Certificate in Complete Medical Aesthetic Course -</span> American Accreditation Association (AAA)</p>
              <p><span className="font-semibold">• Certificate in Complete Medical Aesthetic Course -</span> American Association of Continuing Medical</p>
              <p><span className="font-semibold">• Education Certificate of Continuing Professional Development -</span> The Complete Medical Aesthetic Course</p>
            </div>

            <h1 className="font-semibold text-black text-xl sm:text-2xl mt-5">
              Professional Expertise
            </h1>

            <p className="mt-3 text-sm sm:text-base">
              Recognized as one of the leading medical aesthetic specialists in Islamabad, Dr. Maimoona Doraiz's expertise spans a wide range of advanced aesthetic treatments. She is renowned for her ability to enhance natural beauty while ensuring optimal skin health.
            </p>

            <p className="mt-3 text-sm sm:text-base">
              As the premier aesthetic specialist at The Royal Aesthetic Clinic, Dr. Maimoona offers personalized treatments tailored to meet each patient's unique needs.
            </p>
          </div>

        </div>
      </section>

      <section className='mb-10'>
        <Promosection />
      </section>

    </div>
  )
}

export default About