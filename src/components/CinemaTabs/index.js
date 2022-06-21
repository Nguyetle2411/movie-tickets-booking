import { Tab, Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BHDStar from 'assets/images/BHDStar.jpg'
import './style.scss'
import CinemaTab from 'components/CinemaTab'
import api from 'api'

export default function CinemaTabs({ chosenCinemaSystem, value, onChange }) {
  const [cinemaList, setCinemaList] = useState([])
  const handleChange = (event, newValue) => {
    onChange(newValue)
  }

  const getCinemaListByCinemaSystem = async cinemaSystemId => {
    try {
      const { data } = await api.getCinemaListByCinemaSystem(cinemaSystemId)
      setCinemaList(data)
      handleChange(null, data[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (chosenCinemaSystem) {
      getCinemaListByCinemaSystem(chosenCinemaSystem.cinemaSystemId)
    }
  }, [chosenCinemaSystem])

  return value ? (
    <Tabs
      indicatorColor="primary"
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="cinema-tabs"
      className="cinema-tabs"
      sx={{ minWidth: 282 }}
    >
      {cinemaList?.map(cinema => (
        <Tab
          label={<CinemaTab cinema={cinema} />}
          key={cinema.cinemaId}
          value={cinema}
        />
      ))}
    </Tabs>
  ) : null
}
