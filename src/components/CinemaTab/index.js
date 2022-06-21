import React from 'react'
import BHDStar from 'assets/images/BHDStar.jpg'
import './style.scss'

export default function CinemaTab({ cinema }) {
  return (
    <div className="cinema-tab">
      <div className="cinema-tab__logo">
        <img className="h-12" src={BHDStar} alt="cinema-tab-logo" />
      </div>
      <div className="cinema-tab__info">
        <div className="cinema-tab__name">{cinema.tenCumRap}</div>
        <div className="cinema-tab__address">
          {cinema.diaChi || 'L5-Vincom 3/2, 3C Đường 3/2, Q.10'}
        </div>
        <div className="cinema-tab__detail">[Chi tiết]</div>
      </div>
    </div>
  )
}
