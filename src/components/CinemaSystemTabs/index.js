import { Tab, Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './style.scss'
import api from 'api'
import { cinemaSystemImgMapping } from 'constants/images'

export default function CinemaSystemTabs({ value, onChange }) {
  const [cinemaSystemList, setCinemaSystemList] = useState([])

  const handleChange = (event, newValue) => {
    onChange(newValue)
  }

  const getCinemaSystemList = async () => {
    try {
      const { data } = await api.getCinemaSystemList()
      setCinemaSystemList(data)
      handleChange(null, data[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCinemaSystemList()
  }, [])

  return value ? (
    <Tabs
      indicatorColor="primary"
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="cinema-system-tabs"
      className="cinema-system-tabs"
      sx={{ minWidth: 90 }}
    >
      {cinemaSystemList.map((cinemaSystem, index) => {
        return (
          <Tab
            className="cinema-system-item"
            label={
              <img
                className="h-12"
                src={cinemaSystemImgMapping[cinemaSystem.logo]}
                alt={`${cinemaSystem.biDanh}`}
              />
            }
            key={index}
            value={cinemaSystem}
          />
        )
      })}
    </Tabs>
  ) : null
}
