import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import './style.scss'

export default function AppAd() {
  return (
    <div className="app-ad flex">
      <div className="app-ad__left basis-6/12 shrink-0">
        <div className="text-3xl font-bold mb-4">
          Ứng dụng tiện lợi dành cho người yêu điện ảnh
        </div>
        <div className="mb-4">
          Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi
          quà hấp dẫn.
        </div>
        <button className="download-app">App miễn phí - Tải về ngay!</button>
        <div className="text-3">
          TIX có hai phiên bản{' '}
          <a href="# " className="underline">
            iOS
          </a>{' '}
          &{' '}
          <a href="# " className="underline">
            Android
          </a>
        </div>
      </div>
      <div className="basis-6/12 shrink-0 relative">
        <img
          className="mobile-img"
          src={require('assets/images/app-ad/mobile.png')}
          alt="mobile"
        />
        <div className="swiper__wrapper">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
          >
            {[...Array(15).keys()].map((el, index) => (
              <SwiperSlide key={index}>
                <img
                  src={require(`assets/images/app-ad/slide${index + 1}.jpg`)}
                  alt="app-ad"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
