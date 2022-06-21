import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Screen from 'assets/images/screen.png'
import Noti from 'assets/images/noti.png'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  borderRadius: 1,
  outline: 'none',
  focus: 'none'
}

export default function BookingStep2({
  numOfSeats,
  backStep,
  showtimeDetails
}) {
  const { showtimeInfo, movieInfo, cinemaInfo } = showtimeDetails || {}
  const navigate = useNavigate()

  const [modal, setModal] = useState(false)

  let user = JSON.parse(localStorage.getItem('User')) || {
    taiKhoan: {},
    accessToken: ''
  }

  const [blankSeat, setBlankSeat] = React.useState(false)
  const [timeOut, setTimeOut] = React.useState(false)

  const [blankSeatNoti, setBlankSeatNoti] = React.useState(
    'Bạn không thể bỏ trống 1 ghế ở đầu mỗi dãy'
  )

  const [ticket, setTicket] = React.useState({
    maLichChieu: movieInfo?.maLichChieu,
    danhSachVe: [],
    taiKhoanNguoiDung: user.taiKhoan
  })

  let chooseSeatDone =
    numOfSeats.reduce((a, b) => a.num + b.num) === ticket.danhSachVe.length

  if (chooseSeatDone && !modal && !blankSeat) {
    let tempBlankSeat = blankSeat
    ticket.danhSachVe.forEach(seat => {
      let seatTag = document.getElementById(seat.maGhe)
      if (seatTag.nextSibling && seatTag.nextSibling.nextSibling) {
        let outmostChosenSeat = seatTag
        while (
          outmostChosenSeat.previousSibling.classList.contains('choosing')
        ) {
          outmostChosenSeat = outmostChosenSeat.previousSibling
        }
        if (
          !outmostChosenSeat.previousSibling.classList.contains('base') &&
          seatTag.nextSibling.nextSibling.classList.contains('base') &&
          !seatTag.nextSibling.classList.contains('choosing') &&
          !seatTag.nextSibling.classList.contains('base')
        ) {
          tempBlankSeat = true
          setBlankSeatNoti('Bạn không thể bỏ trống 1 ghế ở đầu mỗi dãy')
        }
      }
      if (seatTag.previousSibling && seatTag.previousSibling.previousSibling) {
        let outmostChosenSeat = seatTag
        while (outmostChosenSeat.nextSibling.classList.contains('choosing')) {
          outmostChosenSeat = outmostChosenSeat.nextSibling
        }
        if (
          !outmostChosenSeat.nextSibling.classList.contains('base') &&
          seatTag.previousSibling.previousSibling.classList.contains('base') &&
          !seatTag.previousSibling.classList.contains('choosing') &&
          !seatTag.previousSibling.classList.contains('base')
        ) {
          tempBlankSeat = true
          setBlankSeatNoti('Bạn không thể bỏ trống 1 ghế ở đầu mỗi dãy')
        }
      }
      if (
        seatTag.previousSibling &&
        seatTag.previousSibling.previousSibling &&
        seatTag.nextSibling &&
        seatTag.nextSibling.nextSibling
      ) {
        if (
          (!seatTag.nextSibling.classList.contains('choosing') &&
            seatTag.nextSibling.nextSibling.classList.contains('choosing') &&
            !seatTag.nextSibling.classList.contains('base')) ||
          (!seatTag.nextSibling.classList.contains('choosing') &&
            seatTag.nextSibling.nextSibling.classList.contains('choosing') &&
            !seatTag.nextSibling.classList.contains('base'))
        ) {
          tempBlankSeat = true
          setBlankSeatNoti('Bạn không thể bỏ trống 1 ghế ở giữa')
        }
      }
    })
    if (tempBlankSeat) {
      setBlankSeat(true)
      setModal(true)
    }
  }

  const chooseSeat = seatInfo => {
    let chosenSeats = ticket.danhSachVe
    if (chosenSeats.indexOf(seatInfo) < 0) {
      if (
        chosenSeats.filter(element => element.loaiGhe === seatInfo.loaiGhe)
          .length <
        numOfSeats.filter(element => element.type === seatInfo.loaiGhe)[0].num
      ) {
        document.getElementById(seatInfo.maGhe).classList.add('choosing')
        setTicket(prevState => ({
          ...prevState,
          danhSachVe: [...prevState.danhSachVe, seatInfo]
        }))
      } else {
        let prevChosenSeats = [...chosenSeats]
        let seatRemove = prevChosenSeats.splice(
          prevChosenSeats.findIndex(item => item.loaiGhe === seatInfo.loaiGhe),
          1
        )
        document
          .getElementById(seatRemove[0].maGhe)
          .classList.remove('choosing')
        document.getElementById(seatInfo.maGhe).classList.add('choosing')
        setTicket(prevState => ({
          ...prevState,
          danhSachVe: [...prevChosenSeats, seatInfo]
        }))
      }
    } else {
      document.getElementById(seatInfo.maGhe).classList.remove('choosing')
      setTicket(prevState => ({
        ...prevState,
        danhSachVe: [
          ...prevState.danhSachVe.filter(item => item.maGhe !== seatInfo.maGhe)
        ]
      }))
    }
    setBlankSeat(false)
  }

  const bookTicket = () => {
    navigate('/')
    Swal.fire({
      icon: 'success',
      text: 'Đặt vé thành công',
      confirmButtonColor: '#fb4226'
    })
  }

  const renderSeat = () => {
    let allSeat = [...showtimeInfo.seatList]
    let mapSeat = []
    let row = 0
    do {
      let rowSeat = allSeat.splice(0, 16)
      rowSeat.splice(2, 0, null)
      rowSeat.splice(15, 0, null)
      mapSeat.push(
        <div className="row-seat" key={row}>
          <span className="row-name">{String.fromCharCode(row + 65)}</span>
          <span className="seat base null">
            <span>0</span>
          </span>
          {rowSeat.map((seat, index) => {
            if (seat === null) {
              return (
                <span className="seat base null" key={index}>
                  <span>0</span>
                </span>
              )
            }
            if (seat.daDat) {
              return (
                <span id={seat.maGhe} className="seat chosen base" key={index}>
                  <span>{seat.tenGhe % 16 === 0 ? 16 : seat.tenGhe % 16}</span>
                </span>
              )
            }
            if (
              !numOfSeats.find(element => element.type === seat.loaiGhe).num
            ) {
              return (
                <span id={seat.maGhe} className="seat cant-choose" key={index}>
                  <span>{seat.tenGhe % 16 === 0 ? 16 : seat.tenGhe % 16}</span>
                </span>
              )
            } else if (seat.loaiGhe === 'Vip') {
              return (
                <span
                  id={seat.maGhe}
                  className="seat notchosen vip"
                  key={index}
                  onClick={() => chooseSeat(seat)}
                >
                  <span>{seat.tenGhe % 16 === 0 ? 16 : seat.tenGhe % 16}</span>
                </span>
              )
            } else {
              return (
                <span
                  id={seat.maGhe}
                  className="seat notchosen"
                  key={index}
                  onClick={() => chooseSeat(seat)}
                >
                  <span>{seat.tenGhe % 16 === 0 ? 16 : seat.tenGhe % 16}</span>
                </span>
              )
            }
          })}
          <span className="seat base null">
            <span>0</span>
          </span>
        </div>
      )
      row++
    } while (allSeat.length >= 16)
    return mapSeat
  }

  const renderListSeat = () => {
    let listSeat = []

    ;[...ticket.danhSachVe]
      .sort((a, b) => a.tenGhe - b.tenGhe)
      .forEach(ticket => {
        if (ticket.tenGhe % 16 === 0) {
          listSeat.push(
            `${String.fromCharCode(parseInt(ticket.tenGhe / 16) + 65 - 1)}16`
          )
        } else {
          listSeat.push(
            `${String.fromCharCode(parseInt(ticket.tenGhe / 16) + 65)}` +
              `${parseInt(ticket.tenGhe % 16)}`
          )
        }
      })
    return listSeat.join(', ')
  }

  let countdownTimer = 0
  const countdownTimerF = () => {
    let seconds = 59
    function secondPassed() {
      let minutes = Math.round((seconds - 30) / 60)
      let remainingSeconds = seconds % 60
      if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      document.getElementById('countdown-timer').innerHTML =
        minutes + ':' + remainingSeconds
      if (seconds === 0) {
        clearInterval(countdownTimer)
        document.getElementById('timeout-booking').style.display = 'block'
        setTimeOut(true)
      } else seconds--
    }
    countdownTimer = setInterval(secondPassed, 1000)
  }

  let tenRap = cinemaInfo?.tenCumRap?.startsWith('BHD Star')
    ? [cinemaInfo?.tenCumRap?.slice(0, 18), cinemaInfo?.tenCumRap?.slice(20)]
    : cinemaInfo?.tenCumRap?.split(' - ')

  useEffect(() => {
    countdownTimerF()
    return () => {
      clearInterval(countdownTimer)
    }
  }, [])

  return (
    <>
      <div id="timeout-booking" className="timeout-booking">
        <div className="contentfull">
          <span>
            Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn
            5 phút.{' '}
            <span
              onClick={backStep}
              style={{ color: '#fb4226', cursor: 'pointer' }}
            >
              Đặt vé lại
            </span>
          </span>
        </div>
      </div>
      <div className="booking-content-2 flex m-0 p-0">
        <div className="booking__left w-9/12 px-4">
          <div className="cinema">
            <div className="cinema__info">
              <p className="cinema__name">
                {tenRap ? (
                  <>
                    <span className="cinema__name__group">{tenRap[0]}</span>
                    {` - ${tenRap[1]}`}
                  </>
                ) : null}
              </p>
              <p className="cinema__time">
                {showtimeInfo?.ngayChieuGioChieu} - {showtimeInfo?.tenRap}
              </p>
            </div>
            <div className="countdown-timer">
              <p>thời gian giữ ghế</p>
              <span id="countdown-timer">0:00</span>
            </div>
          </div>
          <div className="seat-booking__wrap">
            <div className="seat-booking">
              <div className="seat-booking__top">
                <img src={Screen} alt="screen" />
              </div>
              <div className="seat-booking__map">{renderSeat()}</div>
              <div className="seat-booking__bottom row-seat">
                <span className="typeseat">
                  <span className="colorseat seat vip"></span>
                  <span className="nameseat">Ghế Vip</span>
                </span>
                <span className="typeseat">
                  <span className="colorseat seat"></span>
                  <span className="nameseat">Ghế thường</span>
                </span>
                <span className="typeseat">
                  <span className="colorseat seat cant-choose"></span>
                  <span className="nameseat">Ghế không thể chọn</span>
                </span>
                <span className="typeseat">
                  <span className="colorseat seat chosen"></span>
                  <span className="nameseat">Ghế đã có người chọn</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="booking__right w-3/12 p-0">
          <div className="ticket-info px-3">
            <div className="total-cost text-center">
              <span>
                {numOfSeats.reduce(
                  (totalPrice, element) =>
                    totalPrice + element.price * element.num,
                  0
                )}
                đ
              </span>
            </div>
            <div className="movie-info">
              <p className="name">
                <span className="age-type">P</span>
                {movieInfo?.tenPhim}
              </p>
              <p className="cinema-name">{cinemaInfo?.tenCumRap}</p>
              <p className="time">
                {showtimeInfo?.ngayChieuGioChieu} - {showtimeInfo?.tenRap}
              </p>
            </div>
            <div className="seat">
              <div>
                <span>Ghế</span>
                <span className="listSeat">{renderListSeat()}</span>
              </div>
              <span className="price">
                {numOfSeats.reduce(
                  (totalPrice, element) =>
                    totalPrice + element.price * element.num,
                  0
                )}
                đ
              </span>
            </div>
            <div className="user-info">E-mail</div>
            <div className="user-info">Phone</div>
            <div className="method-pay">
              <p>Hình thức thanh toán</p>
            </div>
            <div className="ticket__bottom">
              <div className="notice text-center">
                <p>
                  <i
                    className="fa fa-exclamation-circle mr-1"
                    style={{ color: 'red', fontSize: '16px' }}
                    aria-hidden="true"
                  ></i>
                  Vé đã mua không thể đổi hoặc hoàn tiền
                </p>
                <p>
                  Mã vé sẽ được gửi qua tin nhắn{' '}
                  <span style={{ color: '#f79320' }}>ZMS</span> (tin nhắn Zalo)
                  và <span style={{ color: '#f79320' }}>Email</span> đã nhập.
                </p>
              </div>
              {timeOut || !chooseSeatDone || blankSeat ? (
                <button disabled={true} className="buy-ticket btn">
                  Đặt Vé
                </button>
              ) : (
                <button onClick={() => bookTicket()} className="buy-ticket btn">
                  Đặt Vé
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        classes="blank-seat-notification"
      >
        <Box sx={style}>
          <div className="blank-seat-notification">
            <div className="blank-seat-notification__body">
              <img src={Noti} alt="notification" />
              <span className="blank-seat-notification__text">
                {blankSeatNoti}
              </span>
            </div>
            <div className="blank-seat-notification__footer">
              <button onClick={() => setModal(false)}>Close</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}
