import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Banner1 from 'assets/images/banner-1.jpeg'
import Banner2 from 'assets/images/banner-2.jpeg'
import Banner3 from 'assets/images/banner-3.jpeg'
import Banner4 from 'assets/images/banner-4.jpeg'
import './style.scss'

export default function Banner() {
  return (
    <div>
      <Swiper navigation modules={[Navigation]} slidesPerView={1}>
        <SwiperSlide>
          <img className="banner__img" src={Banner1} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner__img" src={Banner2} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner__img" src={Banner3} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner__img" src={Banner4} alt="banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
