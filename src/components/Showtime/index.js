import { Paper } from '@mui/material'
import api from 'api'
import CinemaSystemTabs from 'components/CinemaSystemTabs'
import CinemaTabs from 'components/CinemaTabs'
import MovieListAccordion from 'components/MovieListAccordion'
import React, { useEffect, useState } from 'react'
import './style.scss'

export default function Showtime() {
  const [chosenCinemaSystem, setChosenCinemaSystem] = useState(null)
  const [chosenCinema, setChosenCinema] = useState(null)
  const [showtimeListByCinemaSystem, setShowtimeListByCinemaSystem] =
    useState(null)

  const handleCinemaSystemTabsChange = value => {
    setChosenCinemaSystem(value)
  }

  const handleCinemaTabsChange = value => {
    setChosenCinema(value)
  }

  const getShowtimeByCinemaSystem = async cinemaSystemId => {
    try {
      const { data } = await api.getShowtimeByCinemaSystem(cinemaSystemId)
      setShowtimeListByCinemaSystem(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (chosenCinemaSystem) {
      getShowtimeByCinemaSystem(chosenCinemaSystem.cinemaSystemId)
    }
  }, [chosenCinemaSystem])

  const showtimeListByCinema =
    showtimeListByCinemaSystem?.find(
      el => el.cinemaId === chosenCinema?.cinemaId
    )?.movieList || []

  return (
    <Paper elevation={3} className="showtime">
      <CinemaSystemTabs
        value={chosenCinemaSystem}
        onChange={handleCinemaSystemTabsChange}
      />
      <CinemaTabs
        chosenCinemaSystem={chosenCinemaSystem}
        onChange={handleCinemaTabsChange}
        value={chosenCinema}
      />
      <MovieListAccordion movieList={showtimeListByCinema} />
    </Paper>
  )
}
