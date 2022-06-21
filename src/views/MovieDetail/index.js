import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import CircularProgressWithLabel from 'components/CircularProgressWithLabel'
import StarRating from 'components/StarRating'
import MovieDetailTabs from './MovieDetailTabs'
import api from 'api'
import './style.scss'
import { movieImgMapping } from 'constants/images'

export default function MovieDetail() {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState(null)

  const getMovieDetails = async movieId => {
    try {
      const { data } = await api.getMovieDetails(movieId)
      setMovieDetails(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId)
    }
  }, [movieId])

  return movieDetails ? (
    <div className="movie-detail">
      <div className="movie-detail__top">
        <img
          className="movie-detail__background"
          src={movieImgMapping[movieDetails.hinhAnh]}
          alt={movieDetails.biDanh}
        />
        <div className="movie-detail__gradient" />
        <div className="movie-detail__info flex items-center">
          <div className="movie-detail__poster flex-auto w-3/12">
            <img
              className="w-full"
              src={movieImgMapping[movieDetails.hinhAnh]}
              alt=""
            />
            <div className="movie__play">
              <PlayCircleOutlineIcon />
            </div>
          </div>
          <div className="movie-detail__desc flex-auto w-6/12">
            <p>{movieDetails.ngayKhoiChieu.slice(0, 10)}</p>
            <p className="name">
              <span className="age-type">C13</span>
              {movieDetails.tenPhim}
            </p>
            <p>120 phút - 8.7 IMDb - 2D/Digital</p>
            <button className="book-ticket">Mua vé</button>
          </div>
          <div className="flex-auto w-3/12 text-center">
            <CircularProgressWithLabel value={10} size={120} color="success" />
            <StarRating rate={movieDetails.danhGia} />
            <div className="text-white mt-1">
              <span>6 người đánh giá</span>
            </div>
          </div>
        </div>
      </div>
      <MovieDetailTabs />
    </div>
  ) : null
}
