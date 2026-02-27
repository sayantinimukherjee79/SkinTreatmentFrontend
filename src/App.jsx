import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Services from './component/Services';
import About from './component/About';
import Appointment from './component/Appointment';
import Laser from './component/Laser';
import Botox from './component/Botox';
import Prp from './component/Prp';
import Exosomes from './component/Exosomes';
import Fillers from './component/Fillers';
import Mesotherapy from './component/Mesotherapy';
import Hydrafacial from './component/Hydrafacial';
import Hydratherapy from './component/Hydratherapy';
import Peel from './component/Peel';
import Fatreduction from './component/Fatreduction';
import Emsella from './component/Emsella';
import Thread from './component/Thread';
import Facelift from './component/Facelift';
import Bodyfillers from './component/Bodyfillers';
import Hifu from './component/Hifu';
import Qswitch from './component/Qswitch';
import Fatinjection from './component/Fatinjection';
import Polynucleotides from './component/Polynucleotides';
import ScrollToTop from './component/ScrollToTop';


function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        {/* Home route — opens HeroSection */}
        <Route path="/" element={<Herosection />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/laser" element={<Laser/>} />
        <Route path="/botox" element={<Botox/>} />
        <Route path="/prp" element={<Prp/>} />
        <Route path='/exosomes' element={<Exosomes/>} />
        <Route path='/fillers' element={<Fillers/>} />
        <Route path='/mesotherapy' element={<Mesotherapy/>} />
        <Route path='/hydrafacial' element={<Hydrafacial/>} />
        <Route path='/hydratherapy' element={<Hydratherapy/>} />
        <Route path='/peel' element={<Peel/>}/>
        <Route path='/fatreduction' element={<Fatreduction/>}/>
        <Route path='/emsella' element={<Emsella/>}/>
        <Route path='/thread' element={<Thread/>}/>
        <Route path='/facelift' element={<Facelift/>}/>
        <Route path='/bodyfillers' element={<Bodyfillers/>}/>
        <Route path='/hifu' element={<Hifu/>} />
        <Route path='/qswitch' element={<Qswitch/>} />
        <Route path='/fatinjection' element={<Fatinjection/>}/>
        <Route path='/polynucleotides' element={<Polynucleotides/>}/>
        

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
