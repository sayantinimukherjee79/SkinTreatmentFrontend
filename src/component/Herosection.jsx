import React from 'react'
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { FaStethoscope } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { GiLaserPrecision } from "react-icons/gi";
import { BiSolidInjection } from "react-icons/bi";
import { GiScalpelStrike } from "react-icons/gi";
import { BiInjection } from "react-icons/bi";
import { GiLoveInjection } from "react-icons/gi";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiHolyWater } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";
import { RiScissorsFill } from "react-icons/ri";
import { GiMussel } from "react-icons/gi";
import { TbNeedleThread } from "react-icons/tb";
import { CiDroplet } from "react-icons/ci";
import { PiHairDryerDuotone } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';



//swipper import

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// section import
import Promosection from './Promosection';
import Transform from './Transform';
import Ourservices from './Ourservices';
import Testimonials from './Testimonials';
import Fixedicon from './Fixedicon';




function Herosection() {
    return (
        <div>
            <section>

                <div
                    className="px-5 sm:px-10 py-24 sm:py-48 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/34378044/pexels-photo-34378044.jpeg')",
                    }}
                >
                    {/* Animated Heading */}
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl text-amber-500 font-semibold relative bottom-2 sm:bottom-5"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Redefining Skin Care in F7-Islamabad
                    </motion.h1>

                    {/* Animated Paragraph */}
                    <motion.p
                        className="text-white font-semibold text-sm sm:text-base md:text-lg mt-4 sm:mt-4 md:mt-6"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    >
                        At The Royal Skin Aesthetics Clinic in F7, Islamabad, we are committed to offering advanced, personalized{" "}
                        <Link to='/services'>
                            <span className="text-amber-700 cursor-pointer p-1 underline hover:text-blue-950 font-semibold">
                                skin care treatments
                            </span>
                        </Link>{" "}
                        that celebrate and enhance your natural beauty. Our mission is to help you feel confident and comfortable in your own skin by providing tailored solutions designed to meet your unique needs. Experience a new level of skin care excellence, right here in Islamabad.
                    </motion.p>

                    {/* Animated Button */}
                    <Link to='/services'>
                        <motion.button
                            className="rounded-3xl bg-amber-400 text-white font-semibold p-3 sm:p-4 mt-6 sm:mt-10 inline-block cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            Explore Our Services
                        </motion.button>
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 80, x: -50 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                       className='flex flex-col md:flex-row justify-between 
w-full max-w-[700px] 
rounded-2xl bg-white shadow-lg 
px-4 md:px-0
mt-10 lg:mt-0'
                    >

                        {/* LEFT CONTENT */}
                        <div className='w-full md:w-[500px] pb-10'>
                            <h1 className='text-amber-400 font-semibold text-xl md:text-2xl mt-5 p-5'>
                                How Can We Refine Your Skincare Experience?
                            </h1>

                            <p className='font-semibold mt-2 p-5 text-sm md:text-base'>
                                At The Royal Skin Aesthetics Clinic, we refine your skincare journey with personalized treatments tailored to your unique needs. Whether it's rejuvenation or corrective care, we're here to enhance your skin's health and radiance.
                            </p>

                            <Link to='/services'>
                                <span className='text-amber-300 underline mt-6 block p-5 cursor-pointer hover:-translate-y-2 transition-transform duration-300'>
                                    Explore Service →
                                </span>
                            </Link>
                        </div>

                        {/* RIGHT LIST */}
                        <div className='mt-6 md:mt-10'>
                            <ul className='md:pr-20 space-y-2'>
                                <li className="flex items-center gap-2">
                                    <IoCheckmarkCircle className="text-amber-400" />
                                    <span>Laser hair reduction</span>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <IoCheckmarkCircle className="text-amber-400" />
                                    <span>PRP Face and Scalp</span>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <IoCheckmarkCircle className="text-amber-400" />
                                    <span>Exosomes</span>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <IoCheckmarkCircle className="text-amber-400" />
                                    <span>Botox</span>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <IoCheckmarkCircle className="text-amber-400" />
                                    <span>Fillers</span>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <IoCheckmarkCircle className="text-amber-400" />
                                    <span>Mesotherapy</span>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <IoCheckmarkCircle className="text-amber-400" />
                                    <span>Hydrafacial</span>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <IoCheckmarkCircle className="text-amber-400" />
                                    <span>Hydratherapy</span>
                                </li>

                                <li className='flex items-center gap-2'>
                                    <IoCheckmarkCircle className="text-amber-400" />
                                    <span>Chemical peels</span>
                                </li>
                            </ul>
                        </div>

                    </motion.div>



                    <motion.div
                        initial={{ opacity: 0, y: 100, x: 50 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                       className='
bg-zinc-900 
w-full max-w-[400px] 
rounded-2xl 
px-7 
h-auto lg:h-[430px]
mt-10 lg:mt-0
'
                    >
                        <h1 className='text-amber-300 font-semibold text-xl lg:text-2xl py-6'>
                            Consultation with Our Experts
                        </h1>

                        <p className='text-white mt-2 text-sm lg:text-base'>
                            Discover how we enhance natural beauty and confidence at The Royal Skin Aesthetics Clinic in F7, Islamabad. Schedule a consultation today with our specialists to start your personalized journey toward achieving your beauty goals.
                        </p>

                        <h1 className='text-white mt-7 font-semibold flex items-center gap-2'>
                            <FaPhoneAlt className='text-amber-400' />
                            0331-5130307
                        </h1>
                    </motion.div>
                </div>


            </section>


            <section className="w-full px-4 sm:px-6 lg:px-16 pt-10 lg:pt-16 pb-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <Transform />
                </div>
            </section>

            <section className="w-full px-4 sm:px-6 lg:px-16 pt-120 lg:pt-168 pb-10 lg:pb-16 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <Ourservices />
                </div>
            </section>

            {/* carousale */}

            <section className="w-full mt-10">
                <div className="px-4 sm:px-10 text-center">
                    <h1 className="text-3xl font-bold text-amber-400 mb-4">
                        Transformation Gallery
                    </h1>

                    <p className="text-gray-700 text-lg mb-2 font-semibold mt-5">
                        See the Stunning Results
                    </p>

                    <div className="flex justify-center mt-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                            <div className="w-24 sm:w-32 h-[3px] bg-amber-400"></div>
                        </div>
                    </div>

                    <p className="text-gray-500 mb-8 font-semibold mt-5">
                        Where Precision Meets Beauty
                    </p>

                    <div className="rounded-xl shadow-lg overflow-hidden">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop={true}
                            className="rounded-xl"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1, // mobile
                                },
                                640: {
                                    slidesPerView: 1, // small tablets
                                },
                                768: {
                                    slidesPerView: 2, // tablets
                                },
                                1024: {
                                    slidesPerView: 3, // desktops
                                },
                            }}
                        >
                            <SwiperSlide>
                                <img
                                    src="https://images.pexels.com/photos/2878375/pexels-photo-2878375.jpeg"
                                    alt="Slide 1"
                                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src="https://images.pexels.com/photos/1171039/pexels-photo-1171039.jpeg"
                                    alt="Slide 2"
                                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src="https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg"
                                    alt="Slide 3"
                                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer"
                                />
                            </SwiperSlide>

                            {/* repeat images */}
                            <SwiperSlide>
                                <img
                                    src="https://images.pexels.com/photos/2878375/pexels-photo-2878375.jpeg"
                                    alt="Slide 4"
                                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src="https://images.pexels.com/photos/1171039/pexels-photo-1171039.jpeg"
                                    alt="Slide 5"
                                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src="https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg"
                                    alt="Slide 6"
                                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <style>
                        {`
        .swiper-button-next,
        .swiper-button-prev {
          color: #f59e0b !important; /* Amber 500 */
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #fbbf24 !important; /* Amber 400 on hover */
          z-index: 0 !important;
        }
      `}
                    </style>

                    {/* second carousel */}
                    <section>
                        <Testimonials />
                    </section>
                </div>
            </section>


            {/* promosection */}

            <section>
                <Promosection />
            </section>



            <div>
                <Fixedicon />
            </div>


        </div>
    )
}

export default Herosection