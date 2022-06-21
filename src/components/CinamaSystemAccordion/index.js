import React from 'react'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'
import CinemaTab from 'components/CinemaTab'
import ShowtimeButtonList from 'components/ShowtimeButtonList'

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

export default function CinemaSystemAccordion({ cinemaShowtime }) {
  return (
    <div className="cinema-system-accordion">
      {cinemaShowtime.map(el => (
        <Accordion
          disableGutters
          key={el.cinemaId}
          className="cinema-system-accordion__item"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={el.cinemaId}
            id={el.cinemaId}
          >
            <CinemaTab cinema={el} />
          </AccordionSummary>
          <AccordionDetails className="cinema-system-accordion__showtime-list">
            <ShowtimeButtonList showtimeList={el.showtime || []} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
