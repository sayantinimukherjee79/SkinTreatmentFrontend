import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Details() {
    const handelSubmit = (e) => {
        e.preventDefault();
        alert("Appointment Booked Successfully");
    }

    return (
        <div className="flex justify-center px-4 sm:px-6 md:px-0 mt-10">
            <div className="w-full max-w-md sm:max-w-lg bg-white shadow-2xl rounded-2xl p-6 sm:p-8">
                {/* Heading + paragraph */}
                <div className="text-center mb-8">
                    <h1 className="text-black text-2xl sm:text-3xl font-semibold">Book An Appointment</h1>
                    <p className="text-gray-500 font-medium mt-2 sm:mt-3 text-sm sm:text-base">
                        Enhance your beauty — book your appointment at The Royal Aesthetics today!
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handelSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    {/* Services */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Services</label>
                        <select
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                            <option value="">Select Service</option>
                            <option value="laser">Laser Hair Reduction</option>
                            <option value="prp">PRP Face & Scalp</option>
                            <option value="exosomes">Exosomes</option>
                            <option value="botox">Botox</option>
                            <option value="fillers">Fillers</option>
                            <option value="mesotherapy">Mesotherapy</option>
                            <option value="hydrafacial">Hydrafacial</option>
                            <option value="hydratherapy">Hydratherapy</option>
                            <option value="chemicalpeels">Chemical Peels</option>
                            <option value="fatreduction">Emsculpt Fat Reduction</option>
                            <option value="emsella">Emsella</option>
                            <option value="threads">Threads</option>
                            <option value="facelift">Aptos Face Lift</option>
                            <option value="bodyfillers">Body Fillers</option>
                            <option value="hifu">HIFU</option>
                            <option value="qswitch">Q-Switch</option>
                            <option value="fatinjection">Fat Dissolving Injection</option>
                            <option value="poly">Polynucleotides</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Date</label>
                        <input
                            type="date"
                            placeholder="Select Date"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    {/* Button */}
                    <div className="text-center">
                        <button className="w-full bg-amber-400 text-white font-semibold rounded-3xl px-6 py-3 mt-4 sm:mt-6 cursor-pointer hover:bg-amber-500 transition-all duration-300">
                            Book An Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Details;