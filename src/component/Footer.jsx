import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

function Footer() {
    return (
        <footer className="bg-gray-950 text-white">
            {/* Main Footer */}
            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-5 px-5 md:px-24 py-10">
                
                {/* Logo & About */}
                <div className="flex-1">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGWacgrsRGFS53FtPeIBb1j6gbMCU3ijBpg&s" 
                        alt="logo" 
                        className="h-12 md:h-20 w-auto mb-4" 
                    />
                    <p className="text-sm md:text-base font-semibold">
                        At The Royal Aesthetic Clinic, we prioritize your unique beauty goals and provide a personalized experience to ensure you feel confident in your skin.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <div className="bg-amber-300 rounded-full p-2 hover:scale-90 transition-transform cursor-pointer"><CiFacebook /></div>
                        <div className="bg-amber-300 rounded-full p-2 hover:scale-90 transition-transform cursor-pointer"><FaInstagram /></div>
                        <div className="bg-amber-300 rounded-full p-2 hover:scale-90 transition-transform cursor-pointer"><FaYoutube /></div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex-1">
                    <p className="font-semibold mb-2">Quick Links</p>
                    <hr className="border-amber-400 mb-4 w-24" />
                    <ul className="space-y-2 text-sm md:text-base">
                        <li className="cursor-pointer hover:text-yellow-500" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>About us</li>
                        <li className="cursor-pointer hover:text-yellow-500" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Services</li>
                        <li className="cursor-pointer hover:text-yellow-500" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contact</li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="flex-1">
                    <p className="font-semibold mb-2">Useful Links</p>
                    <hr className="border-amber-400 mb-4 w-24" />
                    <ul className="space-y-2 text-sm md:text-base">
                        <li className="cursor-pointer hover:text-yellow-500" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Cookie Policy</li>
                        <li className="cursor-pointer hover:text-yellow-500" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Book An Appointment</li>
                    </ul>
                </div>

                {/* Appointment Info */}
                <div className="flex-1">
                    <p className="font-semibold mb-2">Book an Appointment</p>
                    <hr className="border-amber-400 mb-4 w-16" />
                    <div className="flex items-center gap-2 text-sm md:text-base">
                        <FiClock className="text-amber-400 text-lg" />
                        <span>Monday-Saturday 10am-4pm</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base mt-2">
                        <FiClock className="text-amber-400 text-lg" />
                        <span>Sundays-Off</span>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-500 mt-5 pt-4 px-5 md:px-24 flex flex-col md:flex-row justify-between text-sm md:text-base">
                <p>
                    Developed and managed by 
                    <span className="text-amber-600 cursor-pointer hover:text-blue-950 px-1">FurturLift</span>
                </p>
                <p>Copyright © All rights theroyalskinaesthetics reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;