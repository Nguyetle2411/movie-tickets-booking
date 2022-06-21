import React, { useEffect, useState } from 'react'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select
} from '@mui/material'
import './style.scss'
import api from 'api'
import { useNavigate } from 'react-router-dom'

function QuickSelect({
  name,
  label,
  className,
  items,
  value,
  onChange,
  disabled
}) {
  return (
    <FormControl
      className={className}
      variant="standard"
      sx={{ m: 1, minWidth: 120 }}
      disabled={disabled}
    >
      <InputLabel id={`$quick-booking-${name}-label`}>{label}</InputLabel>
      <Select
        name={name}
        labelId={`quick-booking-${name}-label`}
        label={label}
        value={value}
        onChange={onChange}
      >
        {items.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default function QuickBooking() {
  const navigate = useNavigate()

  const [state, setState] = useState({
    movie: '',
    cinema: '',
    date: '',
    time: ''
  })

  const [movieList, setMovieList] = useState([])
  const [cinemaList, setCinemaList] = useState([])
  const [dateList, setDateList] = useState([])
  const [showtimeList, setShowtimeList] = useState([])

  const getMovieList = async () => {
    try {
      const { data } = await api.getMovieList()
      setMovieList(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getShowtimeByMovie = async movieId => {
    try {
      const { data } = await api.getShowtimeByMovie(movieId)
      const list = data.reduce((acc, cur) => {
        cur.cinemaList.forEach(el => {
          acc.push(el)
        })
        return acc
      }, [])
      setCinemaList(list)
    } catch (error) {
      console.log(error)
    }
  }

  const handleQuickSelectChange = e => {
    const { name, value } = e.target

    if (name === 'movie') {
      getShowtimeByMovie(value)
    }

    if (name === 'cinema') {
      const dateList = [
        ...new Set(
          cinemaList.reduce((acc, cur) => {
            cur.showtime.forEach(el => {
              const date = el.ngayChieuGioChieu.slice(0, 10)
              acc.push(date)
            })
            return acc
          }, [])
        )
      ].map(el => ({ label: el, value: el }))

      setDateList(dateList)
    }

    if (name === 'date') {
      const showtimeList = cinemaList
        .find(el => el.cinemaId === state.cinema)
        .showtime.filter(el => el.ngayChieuGioChieu.slice(0, 10) === value)
        .map(el => ({
          label: el.ngayChieuGioChieu.slice(11),
          value: el.showtimeId
        }))
      setShowtimeList(showtimeList)
    }

    setState(prevState => {
      switch (name) {
        case 'movie':
          return {
            movie: value,
            cinema: '',
            date: '',
            time: ''
          }
        case 'cinema':
          return {
            ...prevState,
            cinema: value,
            date: '',
            time: ''
          }
        case 'date':
          return {
            ...prevState,
            date: value,
            time: ''
          }
        default:
          return {
            ...prevState,
            [name]: value
          }
      }
    })
  }

  const checkEnable = requiredValues => {
    if (!requiredValues) {
      return true
    }

    return !requiredValues.some(value => state[value] === '')
  }

  const isCompleted = state.time

  useEffect(() => {
    getMovieList()
  }, [])

  return (
    <div className="relative h-20">
      <Paper className="quick-booking" elevation={3}>
        <QuickSelect
          key="movie"
          value={state.movie}
          onChange={handleQuickSelectChange}
          name="movie"
          label="Phim"
          items={movieList.map(el => ({
            value: el.movieId,
            label: el.tenPhim
          }))}
          className="w-64"
        />
        <QuickSelect
          key="cinema"
          value={state.cinema}
          onChange={handleQuickSelectChange}
          name="cinema"
          label="Rạp"
          items={cinemaList.map(el => ({
            value: el.cinemaId,
            label: el.tenCumRap
          }))}
          className="w-32"
          disabled={!checkEnable(['movie'])}
        />
        <QuickSelect
          key="date"
          value={state.date}
          onChange={handleQuickSelectChange}
          name="date"
          label="Ngày xem"
          items={dateList}
          className="w-32"
          disabled={!checkEnable(['cinema'])}
        />
        <QuickSelect
          key="time"
          value={state.time}
          onChange={handleQuickSelectChange}
          name="time"
          label="Suất chiếu"
          items={showtimeList}
          className="w-32"
          disabled={!checkEnable(['date'])}
        />
        <Button
          className="quick-booking__btn"
          variant="contained"
          color="primary"
          disabled={!isCompleted}
          onClick={() => {
            navigate(`booking/${state.time}`)
          }}
        >
          Mua vé ngay
        </Button>
      </Paper>
    </div>
  )
}
