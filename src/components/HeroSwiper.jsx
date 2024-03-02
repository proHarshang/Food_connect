import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.scss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function HeroSwiper() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="HeroSwiper">
                
                <SwiperSlide><img src="assets/images/Desk_banner.png" alt="first image" className="w-full h-full"/></SwiperSlide>
                <SwiperSlide><img src="assets/images/photo04.jpg" alt="first image" className="w-full h-full"/></SwiperSlide>
                <SwiperSlide><img src="assets/images/slider05.jpg" alt="first image" className="w-full h-full"/></SwiperSlide>
                
            </Swiper>
        </>
    );
}
