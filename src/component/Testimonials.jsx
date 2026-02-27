import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Testimonials() {
  return (
    <div className="px-4 md:px-10 text-center">
      <h1 className="text-3xl font-bold text-amber-400 mb-4 mt-8">
        Testimonials
      </h1>

      <div className="flex justify-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="w-24 sm:w-32 h-[3px] bg-amber-400"></div>
        </div>
      </div>

      <p className="text-black text-xl sm:text-2xl mb-2 font-semibold mt-4">
        What Our Clients Say
      </p>

      <p className="text-gray-500 mb-8 font-semibold text-sm sm:text-base mt-2 max-w-3xl mx-auto">
        Discover firsthand testimonials from our satisfied clients, sharing their experiences and successes with our exceptional services.
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
              src="https://images.pexels.com/photos/16931116/pexels-photo-16931116.jpeg"
              alt="Slide 1"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg cursor-pointer"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/33940225/pexels-photo-33940225.jpeg"
              alt="Slide 2"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg cursor-pointer"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/16931116/pexels-photo-16931116.jpeg"
              alt="Slide 3"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg cursor-pointer"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/33940225/pexels-photo-33940225.jpeg"
              alt="Slide 4"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg cursor-pointer"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;