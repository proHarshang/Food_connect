import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../index.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function NGOsSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="NGOsSwiper"
            >
                <SwiperSlide><img src="assets/images/photo07.jpg" alt="first image" className="w-full h-full"/></SwiperSlide>
                <SwiperSlide><img src="assets/images/ngo3.jpeg" alt="first image" className="w-full h-full"/></SwiperSlide>
                <SwiperSlide><img src="assets/images/photo06.jpg" alt="first image" className="w-full h-full"/></SwiperSlide>
                
            </Swiper>
        </>
    );
}
