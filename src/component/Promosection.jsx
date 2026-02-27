import React from 'react';
import { Link } from 'react-router-dom';

function Promosection() {
    return (
        <div>
            <section className="flex flex-col items-center justify-center text-center bg-[url('https://images.pexels.com/photos/12585835/pexels-photo-12585835.jpeg')] bg-cover bg-center bg-no-repeat h-[360px] sm:h-[450px] md:h-[500px] mt-10 px-4 sm:px-6 md:px-0">
                <h1 className='text-amber-600 font-bold text-xl sm:text-2xl md:text-3xl mt-4'>
                    Transform Your Vision into Reality in F7-Islamabad
                </h1>
                <p className='mt-2 font-semibold text-white text-sm sm:text-base md:text-lg max-w-2xl'>
                    Ready to achieve your ideal look? Contact us today and let's begin your journey to beauty!
                </p>
                <Link to='/appointment'>
                    <button className='bg-amber-500 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-3xl mt-4 text-sm sm:text-base md:text-lg hover:bg-amber-600 transition-colors'>
                        Book an Appointment
                    </button>
                </Link>
            </section>
        </div>
    );
}

export default Promosection;