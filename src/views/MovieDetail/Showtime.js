import { Paper } from '@mui/material'
import CinemaSystemTabs from 'components/CinemaSystemTabs'
import React, { useState } from 'react'
import CinemaSystemShowtime from './CinemaSystemShowtime'

export default function Showtime() {
  const [chosenCinemaSystem, setChosenCinemaSystem] = useState(null)

  const handleCinemaSystemTabsChange = value => {
    setChosenCinemaSystem(value)
  }

  return (
    <Paper elevation={3} className="showtime">
      <CinemaSystemTabs
        value={chosenCinemaSystem}
        onChange={handleCinemaSystemTabsChange}
      />
      <CinemaSystemShowtime chosenCinemaSystem={chosenCinemaSystem} />
    </Paper>
  )
}
