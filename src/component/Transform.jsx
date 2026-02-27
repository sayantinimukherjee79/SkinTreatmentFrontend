import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Transform() {
  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* TEXT SIDE */}
        <div>
          <motion.h2
            className="text-amber-500 font-semibold text-xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About The Royal Skin Aesthetics Clinic
          </motion.h2>

          <h3 className="text-gray-900 font-bold text-3xl mt-4 leading-snug">
            Transforming Skincare with Advanced Aesthetic Solutions Since 2023
          </h3>

          <p className="text-gray-600 mt-4">
            At The Royal Skin Aesthetics Clinic, located in F7, Islamabad, we
            offer cutting-edge{" "}
            <Link
              to="/services"
              className="text-amber-600 underline font-semibold hover:text-amber-800"
            >
              skin care treatments
            </Link>{" "}
            designed to enhance your natural beauty and restore confidence in
            your skin.
          </p>

          {/* FEATURES */}
          <div className="mt-8 space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center text-amber-500 text-3xl bg-white shadow-md rounded-xl h-16 w-16">
                <FaStethoscope />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Modern Technology
                </h4>
                <p className="text-gray-600 text-sm">
                  We utilize state-of-the-art technology to deliver effective
                  treatments.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center text-amber-500 text-3xl bg-white shadow-md rounded-xl h-16 w-16">
                <CiMoneyBill />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Affordable Pricing
                </h4>
                <p className="text-gray-600 text-sm">
                  We offer treatments at competitive prices without compromising
                  quality.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center text-amber-500 text-3xl bg-white shadow-md rounded-xl h-16 w-16">
                <FaUserDoctor />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Certified Doctor
                </h4>
                <p className="text-gray-600 text-sm">
                  Certified professionals ensuring personalized treatment plans.
                </p>
              </div>
            </div>
          </div>

          <Link to="/about">
            <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition">
              More About Us
            </button>
          </Link>
        </div>

        {/* IMAGE SIDE */}
        <div className="grid grid-cols-2 gap-6">
          <motion.img
            src="https://images.pexels.com/photos/6663373/pexels-photo-6663373.jpeg"
            alt="Facial treatment"
            className="rounded-2xl object-cover h-64 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.img
            src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg"
            alt="Skin care procedure"
            className="rounded-2xl object-cover h-64 w-full "
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.img
            src="https://images.pexels.com/photos/3762636/pexels-photo-3762636.jpeg"
            alt="Beauty treatment"
            className="rounded-2xl object-cover h-64 w-full col-span-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

      </div>
    </section>
  );
}

export default Transform;