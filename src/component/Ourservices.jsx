import React from 'react'
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
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Ourservices() {
    return (
        <div>
            <section className='-mt-120'>
                <div className="flex flex-col items-center text-center 
                lg:flex-row lg:justify-between lg:items-start lg:text-left
                lg:gap-12 xl:gap-20">

                    <div className="lg:block">
                        <motion.h3
                            className="text-amber-700 font-semibold text-2xl 
                       lg:relative lg:left-20"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Our Services
                        </motion.h3>

                        <h1 className="text-3xl font-bold text-black mt-3 
                       lg:relative lg:left-20 lg:top-4">
                            What Service We Offer
                        </h1>
                    </div>

                    <p className="text-gray-800 text-base sm:text-lg font-semibold 
                  w-full px-4 mt-6
                  lg:w-[600px] lg:mt-0">
                        At The Royal Skin Aesthetics Clinic in F7, Islamabad, we offer a comprehensive range of advanced skincare services tailored to meet the unique needs of our clients. From rejuvenating facials to cutting-edge
                        <Link to="/services">
                            <span className="text-amber-700 cursor-pointer p-1 underline hover:text-blue-950 font-semibold">
                                cosmetics treatments
                            </span>
                        </Link>
                        , our expert team is dedicated to providing personalized care, helping you achieve radiant, healthy skin right here in the heart of the city
                    </p>

                    <Link to="/services" className="mt-6 lg:mt-0">
                        <button className="bg-amber-400 text-amber-50 font-semibold underline rounded-2xl 
                           w-40 h-12 cursor-pointer
                           lg:relative lg:right-10 lg:top-10">
                            View All Services
                        </button>
                    </Link>

                </div>

                <motion.div
                    className="flex flex-col items-center 
             md:grid md:grid-cols-2 
             xl:flex xl:flex-row xl:justify-between 
             gap-12 mt-20 px-4 sm:px-8 lg:px-16 xl:px-20"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    {/* CARD 1 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/5069611/pexels-photo-5069611.jpeg"
                            alt="laserhair"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        {/* White Overlay Card */}
                        <div className="absolute left-1/2 -translate-x-1/2 
                  bottom-[-60px] w-[90%] 
                  bg-white rounded-2xl shadow-2xl p-6 flex">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                    flex items-center justify-center mr-4">
                                <GiLaserPrecision />
                            </div>

                            <div className="text-left">
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Laser Hair Reduction
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Achieve smooth, hair-free skin with our advanced laser hair reduction treatments
                                </p>
                                <Link to="/laser">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/7581589/pexels-photo-7581589.jpeg"
                            alt="botox"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        {/* White Overlay Card */}
                        <div className="absolute left-1/2 -translate-x-1/2 
                  bottom-[-60px] lg:bottom-[-70px]
                  w-[90%] bg-white rounded-2xl 
                  shadow-2xl p-6 flex">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                    flex items-center justify-center mr-4">
                                <BiSolidInjection />
                            </div>

                            <div className="text-left">
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Botox Injection
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Smooth fine lines and wrinkles with our expert Botox injections for a youthful look.
                                </p>
                                <Link to="/botox">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/7320790/pexels-photo-7320790.jpeg"
                            alt="prpscalp"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        {/* White Overlay Card */}
                        <div className="absolute left-1/2 -translate-x-1/2 
                  bottom-[-60px] lg:bottom-[-70px]
                  w-[90%] bg-white rounded-2xl 
                  shadow-2xl p-6 flex">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                    flex items-center justify-center mr-4">
                                <GiScalpelStrike />
                            </div>

                            <div className="text-left">
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    PRP Face & Scalp
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Revitalize your skin and scalp with PRP therapy, promoting natural rejuvenation.
                                </p>

                                <Link to="/prp">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </motion.div>



                {/* second */}

                <motion.div
                    className="flex flex-col items-center 
             md:grid md:grid-cols-2 
             xl:flex xl:flex-row xl:justify-between 
             gap-12 mt-20 px-4 sm:px-8 lg:px-16 xl:px-20"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    {/* CARD 1 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/28407648/pexels-photo-28407648.jpeg"
                            alt="exosomes"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="absolute left-1/2 -translate-x-1/2 
                    bottom-[-60px] lg:bottom-[-70px]
                    w-[90%] bg-white rounded-2xl 
                    shadow-2xl p-6 flex">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <BiInjection />
                            </div>

                            <div className="text-left">
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Exosomes
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Boost your skin's health and repair with cutting-edge exosome treatments.
                                </p>
                                <Link to="/exosomes">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/7581578/pexels-photo-7581578.jpeg"
                            alt="fillers"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="absolute left-1/2 -translate-x-1/2 
                    bottom-[-60px] lg:bottom-[-70px]
                    w-[90%] bg-white rounded-2xl 
                    shadow-2xl p-6 flex">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <GiLoveInjection />
                            </div>

                            <div className="text-left">
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Fillers
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Enhance your facial contours with dermal fillers for a fuller, rejuvenated appearance.
                                </p>
                                <Link to="/fillers">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/6193360/pexels-photo-6193360.jpeg"
                            alt="mesotherapy"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="absolute left-1/2 -translate-x-1/2 
                    bottom-[-60px] lg:bottom-[-70px]
                    w-[90%] bg-white rounded-2xl 
                    shadow-2xl p-6 flex">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <FaSprayCanSparkles />
                            </div>

                            <div className="text-left">
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Mesotherapy
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Nourish and rejuvenate your skin with targeted mesotherapy solutions.
                                </p>
                                <Link to="/mesotherapy">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </motion.div>


                {/* third */}

                <motion.div
                    className="flex flex-col items-center 
             md:grid md:grid-cols-2 
             xl:flex xl:flex-row xl:justify-between 
             gap-12 mt-20 px-4 sm:px-8 lg:px-16 xl:px-20"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    {/* Card 1 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/4586746/pexels-photo-4586746.jpeg"
                            alt="laserhair"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <FaHandHoldingWater />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Hydrafacial
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Enjoy glowing, hydrated skin with our refreshing and deep-cleansing Hydrafacial.
                                </p>
                                <Link to="/hydrafacial">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/9154250/pexels-photo-9154250.jpeg"
                            alt="botox"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <GiHolyWater />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Hydratherapy
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Restore your skin's moisture and vitality with our hydrating therapy treatments.
                                </p>
                                <Link to="/hydratherapy">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/7479666/pexels-photo-7479666.jpeg"
                            alt="chemicalpeel"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <SlChemistry />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Chemical Peels
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Reveal fresher, smoother skin with our customized chemical peel treatments.
                                </p>
                                <Link to="/peel">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </motion.div>

                {/* fourth */}

                <motion.div
                    className="flex flex-col items-center 
             md:grid md:grid-cols-2 
             xl:flex xl:flex-row xl:justify-between 
             gap-12 mt-20 px-4 sm:px-8 lg:px-16 xl:px-20"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    {/* Card 1 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/7772642/pexels-photo-7772642.jpeg"
                            alt="emsulpt"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <RiScissorsFill />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Emsculpt Fat Reduction
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Sculpt and tone your body with non-invasive Emsculpt fat reduction technology.
                                </p>
                                <Link to="/fatreduction">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/6663378/pexels-photo-6663378.jpeg"
                            alt="emsella"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <GiMussel />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Emsella
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Improve pelvic health and strengthen muscles with the innovative Emsella treatment.
                                </p>
                                <Link to="/emsella">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/8558244/pexels-photo-8558244.jpeg"
                            alt="threads"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <TbNeedleThread />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Threads
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Lift and tighten sagging skin with minimally invasive thread lift procedures.
                                </p>
                                <Link to="/thread">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </motion.div>

                {/* fifth */}

                <motion.div
                    className="flex flex-col items-center 
             md:grid md:grid-cols-2 
             xl:flex xl:flex-row xl:justify-between 
             gap-12 mt-20 px-4 sm:px-8 lg:px-16 xl:px-20"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    {/* Card 1 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/6706879/pexels-photo-6706879.jpeg"
                            alt="aptos"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <GiLaserPrecision />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Aptos Face Lift
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Achieve a youthful, lifted look with the Aptos non-surgical face lift.
                                </p>
                                <Link to="/facelift">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/8187500/pexels-photo-8187500.jpeg"
                            alt="bodyfillers"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <BiSolidInjection />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Body Fillers
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Contour and enhance your body with specialized body filler treatments.
                                </p>
                                <Link to="/bodyfillers">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/7479541/pexels-photo-7479541.jpeg"
                            alt="hifu"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <PiHairDryerDuotone />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    HIFU
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Experience non-invasive skin tightening and lifting with advanced HIFU technology.
                                </p>
                                <Link to="/hifu">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </motion.div>

                {/* sixth */}
                <motion.div
                    className="flex flex-col items-center 
             md:grid md:grid-cols-2 
             xl:flex xl:flex-row xl:justify-between 
             gap-12 mt-20 px-4 sm:px-8 lg:px-16 xl:px-20"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    {/* Card 1 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/6476083/pexels-photo-6476083.jpeg"
                            alt="qswitch"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <GiLaserPrecision />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Q-Switch
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Target pigmentation and achieve clearer skin with our Q-Switch laser treatments.
                                </p>
                                <Link to="/qswitch">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/12599543/pexels-photo-12599543.jpeg"
                            alt="fatinjection"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <BiSolidInjection />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Fat Dissolving Injection
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Eliminate stubborn fat pockets with targeted fat dissolving injections.
                                </p>
                                <Link to="/fatinjection">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="text-center max-w-sm w-full relative mb-24">
                        <img
                            src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg"
                            alt="polynucleotides"
                            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[420px] object-cover"
                        />

                        <div className="flex bg-white rounded-2xl shadow-2xl 
                    p-6 absolute left-4 right-4 -bottom-16">

                            <div className="text-2xl bg-white rounded-lg h-14 w-14 
                      flex items-center justify-center mr-4">
                                <CiDroplet />
                            </div>

                            <div>
                                <h1 className="text-amber-400 font-semibold text-lg sm:text-xl">
                                    Polynucleotides
                                </h1>
                                <p className="text-gray-700 font-semibold mt-2 text-sm sm:text-base">
                                    Boost skin regeneration and repair with our innovative polynucleotide treatments.
                                </p>
                                <Link to="/polynucleotides">
                                    <span className="text-amber-400 underline block mt-4 cursor-pointer">
                                        Read More →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </motion.div>


            </section >
        </div >
    )
}

export default Ourservices