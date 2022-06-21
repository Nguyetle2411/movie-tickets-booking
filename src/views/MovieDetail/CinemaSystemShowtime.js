import { Tabs, Box } from '@mui/material'
import api from 'api'
import CinemaSystemAccordion from 'components/CinamaSystemAccordion'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Tab } from './styled'

const today = '2022-01-01'

export default function CinemaSystemShowtime({ chosenCinemaSystem }) {
  const { movieId } = useParams()
  const [showtime, setShowtime] = useState([])
  const [chosenDate, setChosenDate] = React.useState(today)
  const handleChange = (event, newValue) => {
    setChosenDate(newValue)
  }

  const renderTab = () => {
    let days = [
      'Chủ nhật',
      ' Thứ 2',
      ' Thứ 3',
      ' Thứ 4',
      ' Thứ 5',
      ' Thứ 6',
      ' Thứ 7'
    ]

    let arrayTab = [...Array(14)].map((item, index) => {
      let day = new Date(today)
      let nextDay = new Date(day)

      nextDay.setDate(day.getDate() + index)

      return (
        <Tab
          key={index}
          label={
            <>
              <div className="m-0">{days[nextDay.getDay()]}</div>
              <div className="m-0">{nextDay.getDate()}</div>
            </>
          }
          value={nextDay.toISOString().slice(0, 10)}
        />
      )
    })
    return arrayTab
  }

  const renderShowtime = () => {
    const todayShowtime = showtime
      .find(el => el.cinemaSystemId === chosenCinemaSystem.cinemaSystemId)
      ?.cinemaList.filter(cinema =>
        cinema.showtime.some(
          elm => elm.ngayChieuGioChieu.slice(0, 10) === chosenDate
        )
      )

    return todayShowtime?.length ? (
      <CinemaSystemAccordion cinemaShowtime={todayShowtime} />
    ) : (
      <div className="font-bold text-center mt-8">
        <span>Không có suất chiếu.</span>
      </div>
    )
  }

  const getShowtimeByMovie = async movieId => {
    try {
      const { data } = await api.getShowtimeByMovie(movieId)
      setShowtime(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (movieId) {
      getShowtimeByMovie(movieId)
    }
  }, [movieId])

  return chosenCinemaSystem ? (
    <div className="cinema-system-showtime">
      <Box>
        <Tabs
          value={chosenDate}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="cinema-system-show-time-tabs"
        >
          {renderTab()}
        </Tabs>
      </Box>
      {renderShowtime()}
    </div>
  ) : null
}
