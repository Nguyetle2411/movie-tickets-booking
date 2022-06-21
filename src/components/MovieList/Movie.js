import React from 'react'
import { NavLink } from 'react-router-dom'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { movieImgMapping } from 'constants/images'

export default function Movie({ movie }) {
  return (
    <>
      <div className="movie__wrapper">
        <div className="movie">
          <div className="movie__img">
            <NavLink to={`/movie/${movie.movieId}`}>
              <img src={movieImgMapping[movie.hinhAnh]} alt="movie-alt" />
              <div className="movie__img__overlay" />
            </NavLink>
            <div className="movie__play">
              <PlayCircleOutlineIcon />
            </div>
          </div>
          <div className="movie__info">
            <div className="info">
              <div className="movie-name">{movie.tenPhim}</div>
              <div className="movie-time">103 phút - 7.3 IMDb</div>
            </div>
            <NavLink
              className="book-ticket"
              to={`/detail-movie/${movie.movieId}`}
            >
              <span>MUA VÉ</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
