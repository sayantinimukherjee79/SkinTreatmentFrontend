import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import Promosection from './Promosection';
import Ourservices from './Ourservices';
import Testimonials from './Testimonials';
import Fixedicon from './Fixedicon';

function Services() {
    return (
        <div>
            <section>
                <div>
                    <Fixedicon/>
                </div>
                <div className="flex justify-between h-90 bg-[url('https://images.pexels.com/photos/14256897/pexels-photo-14256897.jpeg')] bg-cover bg-center">
                    <h1 className='font-bold text-2xl text-amber-700 mt-25 px-30'>Services</h1>

                    <div className='flex mr-40 gap-10'>
                        <h2 className='text-black mt-25 font-semibold'>Home </h2>
                        <div className='text-amber-400 mt-27'><FaChevronRight /></div>
                        <h2 className='text-black mt-25 font-semibold'>Services</h2>
                    </div>
                </div>
            </section>


            <section className='mt-140'>
                <Ourservices/>
            </section>

            <section>
                <Testimonials/>
            </section>

            <section className='mb-20'>
                <Promosection/>
            </section>


        </div>
    )
}

export default Services