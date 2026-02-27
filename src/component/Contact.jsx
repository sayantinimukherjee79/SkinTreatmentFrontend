import React, { useState } from 'react';
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { GiClockwork } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLocationArrow, FaCircle } from "react-icons/fa";
import Fixedicon from './Fixedicon';

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    alert("Appointment booked successfully!");
  }

  return (
    <div>
      <Fixedicon />

      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29239.74285136396!2d88.11006789388594!3d23.64132215390922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9a7245d2881c7%3A0x39ea528616364624!2sKatwa%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1761677896638!5m2!1sen!2sin"
        style={{ width: '100%', height: '350px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>

      {/* Contact Info + Form */}
      <section className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10 lg:gap-20 px-4 sm:px-6 lg:px-20 mt-10 mb-20">

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-8">
          <h3 className="text-amber-600 text-2xl font-semibold italic">Get in Touch</h3>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Contact Us To Get Better Information</h1>
          <p className="italic text-gray-700">Get in touch for accurate insights and personalized solutions. Your journey to relief begins with a simple click or call. Contact us today!</p>

          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 mt-6">
            <ul className="flex-1 flex flex-col gap-2">
              <li className='rounded-md bg-amber-400 text-white text-4xl w-14 h-14 p-1 flex items-center justify-center'><LiaEnvelopeOpenTextSolid /></li>
              <li className='text-xl sm:text-2xl font-bold pt-2'>Get Consultation</li>
              <li className='flex gap-2'><FiPhone className='mt-1 text-amber-400' />0331-5130307</li>
              <li className='flex gap-2'><FaLocationArrow className='mt-1 text-amber-400' />House No 17A street 31 F7/1 Islamabad</li>
              <li className='flex gap-2'><IoMailOpenOutline className='mt-1 text-amber-400' />Drmoaimoona.doraiz@gmail.com</li>
            </ul>

            <ul className="flex-1 flex flex-col gap-2">
              <li className='rounded-md bg-amber-400 text-white text-4xl w-14 h-14 p-1 flex items-center justify-center'><GiClockwork /></li>
              <li className='text-xl sm:text-2xl font-bold pt-2'>Open Hours</li>
              <li className='flex gap-2'><FaCircle className='mt-1 text-amber-400' />Monday - Sunday</li>
              <li className='flex gap-2'><FaCircle className='mt-1 text-amber-400' />9am-5pm</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 
             w-full max-w-md sm:max-w-lg lg:max-w-xl 
             mx-auto lg:mx-0 overflow-hidden"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Book Appointment
          </h2>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {['name', 'email', 'phone', 'service', 'date'].map((field, idx) => {

              if (field === 'service') {
                return (
                  <div className="sm:col-span-2 min-w-0" key={idx}>
                    <label className="block text-gray-700 mb-1">
                      Service
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full max-w-full min-w-0 px-4 py-3 
                         border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="Laser Hair Reduction">Laser Hair Reduction</option>
                      <option value="Botox Injection">Botox Injection</option>
                      <option value="PRP Face & Scalp">PRP Face & Scalp</option>
                      <option value="Fillers">Fillers</option>
                      <option value="Mesotherapy">Mesotherapy</option>
                      <option value="Hydrafacial">Hydrafacial</option>
                      <option value="Hydratherapy">Hydratherapy</option>
                      <option value="Chemical Peels">Chemical Peels</option>
                      <option value="Emsculpt Fat Reduction">Emsculpt Fat Reduction</option>
                      <option value="Emsella">Emsella</option>
                      <option value="Threads">Threads</option>
                      <option value="Aptos Face Lift">Aptos Face Lift</option>
                      <option value="Body Fillers">Body Fillers</option>
                      <option value="HIFU">HIFU</option>
                      <option value="Q-Switch">Q-Switch</option>
                      <option value="Fat Dissolving Injection">Fat Dissolving Injection</option>
                      <option value="Polynucleotides">Polynucleotides</option>
                    </select>
                  </div>
                );
              }

              return (
                <div key={idx} className="min-w-0">
                  <label className="block text-gray-700 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>

                  <input
                    type={
                      field === 'email'
                        ? 'email'
                        : field === 'phone'
                          ? 'tel'
                          : field === 'date'
                            ? 'date'
                            : 'text'
                    }
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full max-w-full min-w-0 px-4 py-3 
                       border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
              );
            })}

          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 
               text-white font-semibold py-3 rounded-full 
               transition mt-6"
          >
            Book An Appointment
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact;