import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

const getTimeEnd = timeStart => {
  let d = new Date()
  d.setHours(timeStart.slice(0, 2), timeStart.slice(3), 0)
  d.setHours(d.getHours() + 2)
  let timeEnd = d.toLocaleTimeString('en-GB').slice(0, 5)
  return timeEnd
}

export default function ShowtimeButtonList({ showtimeList }) {
  return (
    <div className="showtime-button-list">
      {showtimeList?.length ? (
        showtimeList.map((showtime, index) => {
          return (
            <NavLink
              className="showtime-button-list__item"
              to={`/booking/${showtime.showtimeId}`}
              key={index}
            >
              <span className="start-time">
                {showtime.ngayChieuGioChieu.slice(11, 16)}
              </span>
              <span className="end-time">
                {` ~ ${getTimeEnd(showtime.ngayChieuGioChieu.slice(11, 16))}`}
              </span>
            </NavLink>
          )
        })
      ) : (
        <div className="showtime-button-list__empty-showtime">
          <span>Không có suất chiếu.</span>
        </div>
      )}
    </div>
  )
}
