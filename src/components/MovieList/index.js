import React, { useState } from 'react'
import Movies from './Movies'
import './style.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import api from 'api'

const MOVIE_TYPE = {
  nowShowing: '/now-showing',
  comingSoon: '/coming-soon'
}

export default function ListMovie() {
  const [movieList, setMovieList] = useState([])
  const [movieListDisplay, setMovieListDisplay] = useState([])
  const location = useLocation()
  const movieType = location.pathname

  const getMovieList = async () => {
    try {
      const { data } = await api.getMovieList()
      setMovieList(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setMovieListDisplay(movieList)
  }, [movieList])

  useEffect(() => {
    setMovieListDisplay(
      movieType === MOVIE_TYPE.comingSoon ? [...movieList].reverse() : movieList
    )
  }, [movieType])

  useEffect(() => {
    getMovieList()
  }, [])

  return (
    <div className="movie-list">
      <div className="movie-list__tabs">
        <NavLink className="movie-list__tabs__item" to={MOVIE_TYPE.nowShowing}>
          Đang chiếu
        </NavLink>
        <NavLink className="movie-list__tabs__item" to={MOVIE_TYPE.comingSoon}>
          Sắp chiếu
        </NavLink>
      </div>

      <div className="movie-list__movies">
        <Movies movies={movieListDisplay} />
      </div>
    </div>
  )
}
