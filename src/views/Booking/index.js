import api from 'api'
import React, { useEffect, useState } from 'react'
import BookingStep1 from './BookingStep1'
import BookingStep2 from './BookingStep2'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './style.scss'

export default function Booking() {
  const navigate = useNavigate()

  const account = localStorage.getItem('account')

  const { showtimeId } = useParams()

  const [showtimeDetails, setShowtimeDetails] = useState(null)
  const [step, setStep] = useState(1)
  const [numOfSeats, setNumOfSeats] = React.useState({})

  const backStep = () => {
    setStep(1)
  }

  const nextStep = (step, numOfSeats) => {
    setNumOfSeats(numOfSeats)
    setStep(step)
  }

  const renderStepPage = () => {
    switch (step) {
      case 1:
        return (
          <BookingStep1 nextStep={nextStep} showtimeDetails={showtimeDetails} />
        )
      case 2:
        return (
          <BookingStep2
            backStep={backStep}
            numOfSeats={numOfSeats}
            showtimeDetails={showtimeDetails}
          />
        )
      default:
        break
    }
  }

  const getShowtimeDetails = async showtimeId => {
    try {
      const { data } = await api.getShowtimeDetails(showtimeId)
      setShowtimeDetails(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!account) {
      navigate('/login')
    }
  }, [account])

  useEffect(() => {
    if (showtimeId) {
      getShowtimeDetails(showtimeId)
    }
  }, [showtimeId])

  return (
    <div className="booking">
      <div className="step-booking">
        <div className="step-booking__left">
          <ul>
            <li
              onClick={backStep}
              style={{ cursor: 'pointer' }}
              className={step === 1 ? 'active' : ''}
            >
              <span className="mr-1">01</span>CHỌN LOẠI VÉ
            </li>
            <li className={step === 2 ? 'active' : ''}>
              <span className="mr-1">02</span>CHỌN GHẾ & THANH TOÁN
            </li>
            <li className={step === 3 ? 'active' : ''}>
              <span className="mr-1">03</span>KẾT QUẢ ĐẶT VÉ
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="blank d-none d-md-block" style={{ height: '80px' }}></div> */}
      <div className="mt-20">{renderStepPage()}</div>
    </div>
  )
}
