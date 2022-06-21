import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import './style.scss'

export default function StarRating({ rate, className = '' }) {
  const renderStars = () => {
    let stars = []

    if (rate) {
      for (let index = 0; index < 10; index += 2) {
        if (rate >= 2) {
          stars.push(<StarIcon key={index} fontSize="large" />)
        } else if (rate >= 1) {
          stars.push(<StarBorderIcon key={index} fontSize="large" />)
        } else stars.push(<StarHalfIcon key={index} fontSize="large" />)

        rate -= 2
      }
    }

    return stars
  }

  return <div className={`star-rating ${className}`}>{renderStars()}</div>
}
