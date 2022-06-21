import React from 'react'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import './style.scss'
import ShowtimeButtonList from 'components/ShowtimeButtonList'
import { movieImgMapping } from 'constants/images'

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 'calc(100% - 40px)',
    transform: 'translateX(-50%)',
    borderBottom: '1px solid rgba(238, 238, 238)'
  },
  boxShadow: 'none',
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: 20,
  minHeight: 56,
  display: 'flex',
  alignItems: 'center',
  '& .MuiAccordionSummary-content': {
    margin: '0'
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '10px 20px'
}))

export default function MovieListAccordion({ movieList }) {
  const today = '2022-01-01'

  const movieListToShow = movieList.filter(movie =>
    movie.showtime.some(
      showtime => showtime.ngayChieuGioChieu.slice(0, 10) === today
    )
  )

  const renderShowtimeList = movie => {
    return (
      <ShowtimeButtonList
        showtimeList={
          movie.showtime?.filter(
            showtime => showtime.ngayChieuGioChieu.slice(0, 10) === today
          ) || []
        }
      />
    )
  }

  return (
    <div className="movie-list-accordion">
      {movieListToShow.map(movie => (
        <Accordion
          disableGutters
          key={movie.movieId}
          className="movie-list-accordion__item"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={movie.movieId}
            id={movie.movieId}
          >
            <img
              className="h-12 w-12"
              src={movieImgMapping[movie.hinhAnh]}
              alt="movie-img"
            ></img>
            <div className="movie__info">
              <div className="movie__name">{movie.tenPhim}</div>
              <div className="movie__duration">120 phút</div>
            </div>
          </AccordionSummary>
          <AccordionDetails className="movie-list-accordion__showtime-list">
            <Typography>{renderShowtimeList(movie)}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
