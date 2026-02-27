import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentButton from "./Appointmentbutton";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { path: '/laser', name: 'Laser Hair Reduction' },
    { path: '/facelift', name: 'Aptos Face Lift' },
    { path: '/bodyfillers', name: 'Body Fillers' },
    { path: '/botox', name: 'Botox' },
    { path: '/peel', name: 'Chemical Peels' },
    { path: '/fatreduction', name: 'Emsculpt Fat Reduction' },
    { path: '/emsella', name: 'Emsella' },
    { path: '/exosomes', name: 'Exosomes' },
    { path: '/fatinjection', name: 'Fat Dissolving Injection' },
    { path: '/fillers', name: 'Fillers' },
    { path: '/hifu', name: 'HIFU' },
    { path: '/hydrafacial', name: 'Hydra-facial-1' },
    { path: '/hydratherapy', name: 'Hydratherapy' },
    { path: '/mesotherapy', name: 'Mesotherapy' },
    { path: '/prp', name: 'PRP Face & Scalp' },
    { path: '/qswitch', name: 'Q-Switch' },
    { path: '/thread', name: 'Threads' },
    { path: '/polynucleotides', name: 'Polynucleotides' },
  ];

  return (
    <nav className="bg-black text-white px-4 md:px-8 py-4 md:py-6 relative z-50">
      <div className="flex justify-between items-center w-full">

        {/* Logo Left */}
        <div className="flex-1">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGWacgrsRGFS53FtPeIBb1j6gbMCU3ijBpg&s" 
            alt="Logo" 
            className="h-12 md:h-20 w-auto rounded-full" 
          />
        </div>

        {/* Menu Center */}
        <ul className="hidden lg:flex flex-1 justify-center gap-8 font-semibold text-base md:text-lg items-center">
          <li><Link to="/" className="hover:text-amber-500 transition-colors duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-amber-500 transition-colors duration-300">About</Link></li>

          {/* Services Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="hover:text-amber-500 transition-colors duration-300 flex items-center gap-1"
            >
              Services
            </button>

            {servicesOpen && (
              <ul 
                className="absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-white text-black rounded-lg shadow-lg mt-2 z-50"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map(service => (
                  <li key={service.path} className="px-4 py-2 hover:bg-amber-50 hover:text-amber-500 cursor-pointer">
                    <Link to={service.path}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/appointment" className="hover:text-amber-500 transition-colors duration-300"> Appointment</Link></li>
          <li><Link to="/contact" className="hover:text-amber-500 transition-colors duration-300">Contact</Link></li>
        </ul>

        {/* Appointment Button Right */}
        <div className="hidden lg:flex flex-1 justify-end">
          <AppointmentButton />
        </div>

        {/* Hamburger Button for screens < lg */}
        <button className="lg:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black mt-4 rounded-lg p-4 shadow-lg flex flex-col gap-4 font-semibold text-base">
          <Link to="/" className="hover:text-amber-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-amber-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>About</Link>

          {/* Services Mobile Dropdown */}
          <div>
            <button 
              onClick={() => setServicesOpen(!servicesOpen)} 
              className="hover:text-amber-500 transition-colors duration-300 flex justify-between w-full items-center"
            >
              Services
              <span>{servicesOpen ? '-' : '+'}</span>
            </button>
            {servicesOpen && (
              <ul className="mt-2 flex flex-col gap-1 bg-gray-900 p-2 rounded">
                {services.map(service => (
                  <li key={service.path} className="px-2 py-1 hover:bg-amber-50 hover:text-black rounded">
                    <Link to={service.path} onClick={() => setMenuOpen(false)}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link to="/appointment" className="hover:text-amber-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Book an Appointment</Link>
          <Link to="/contact" className="hover:text-amber-500 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div><AppointmentButton /></div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;