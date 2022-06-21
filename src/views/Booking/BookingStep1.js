import React, { useEffect } from 'react'
import ArrowLeft from 'assets/images/arrow-left.png'
import { useNavigate } from 'react-router-dom'
import { movieImgMapping } from 'constants/images'

export default function BookingStep1({ showtimeDetails, nextStep }) {
  const { showtimeInfo, movieInfo, cinemaInfo } = showtimeDetails || {}
  const navigate = useNavigate()

  const typeSeat = [
    ...new Set(showtimeInfo?.seatList.map(item => item.loaiGhe))
  ]

  const initialSeat = []

  typeSeat.forEach(function (element, index) {
    if (element === 'Thuong') {
      initialSeat.push({
        type: element,
        num: 2,
        price: showtimeInfo.seatList.find(item1 => item1.loaiGhe === element)
          .giaVe
      })
    } else {
      initialSeat.push({
        type: element,
        num: 0,
        price: showtimeInfo.seatList.find(item1 => item1.loaiGhe === element)
          .giaVe
      })
    }
  })

  const [numOfSeats, setNumOfSeats] = React.useState(initialSeat)

  let totalCost = numOfSeats.reduce(
    (totalCost, seat) => totalCost + seat.price * seat.num,
    0
  )

  const returnDetailMoviePage = () => {
    navigate(-1)
  }

  const changeNumTicket = (key, plus) => {
    let tempNumOfSeats = [...numOfSeats]
    if (
      (plus && tempNumOfSeats[key].num > 7) ||
      (!plus && tempNumOfSeats[key].num === 0)
    ) {
      return
    }
    plus ? tempNumOfSeats[key].num++ : tempNumOfSeats[key].num--
    setNumOfSeats(tempNumOfSeats)
  }

  const renderTicket = () => {
    let ticketArray = []
    for (const key in numOfSeats) {
      ticketArray.push(
        <div key={key} className="ticket flex m-0 items-center justify-between">
          <div className="ticket__type col-7 w-4/12 p-0">
            <span>
              Vé{' '}
              {numOfSeats[key].type === 'Thuong'
                ? 'Thường'
                : numOfSeats[key].type}
            </span>
          </div>
          <div className="ticket__price w-4/12 p-0 text-center">
            <span>{`${numOfSeats[key].price.toLocaleString()} đ`}</span>
          </div>
          <div className="ticket__num w-4/12 col-5 p-0">
            <button onClick={() => changeNumTicket(key, false)}>-</button>
            <span>{numOfSeats[key].num}</span>
            <button onClick={() => changeNumTicket(key, true)}>+</button>
          </div>
        </div>
      )
    }
    return ticketArray
  }

  let tenRap = cinemaInfo?.tenCumRap?.startsWith('BHD Star')
    ? [cinemaInfo?.tenCumRap?.slice(0, 18), cinemaInfo?.tenCumRap?.slice(20)]
    : cinemaInfo?.tenCumRap?.split(' - ')

  useEffect(() => {
    setNumOfSeats(initialSeat)
  }, [typeSeat.join('')])

  if (!movieInfo) {
    return null
  }

  return (
    <>
      <div className="booking-content-1 flex m-0 p-0">
        <div
          className="booking__left w-3/12 p-0 relative"
          style={{
            background: `url(${
              movieImgMapping[movieInfo?.hinhAnh]
            }) no-repeat center`,
            backgroundSize: 'cover'
          }}
        >
          <div className="booking__left__overlay">
            <div className="back" onClick={returnDetailMoviePage}>
              <img src={ArrowLeft} alt="back-arrow" />
            </div>
            <div className="detail-movie__info">
              <p className="ngay-chieu">{movieInfo?.ngayChieu}</p>
              <p className="ten-phim">
                <span className="age-type">C13</span>
                {movieInfo?.tenPhim}
              </p>
              <p className="time">120 phút - 8.7 IMDb - 2D/Digital</p>
            </div>
          </div>
        </div>
        <div className="booking__right flex-grow">
          <div className="cinema">
            <div className="cinema__logo"></div>
            <div className="cinema__info">
              <p className="cinema__name">
                <span className="cinema__name__group">
                  {tenRap && tenRap[0]}
                </span>{' '}
                - {tenRap && tenRap[1]}
              </p>
              <p className="cinema__time">
                {showtimeInfo?.ngayChieuGioChieu} - {showtimeInfo?.tenRap}
              </p>
            </div>
          </div>
          <div className="tickets">{renderTicket()}</div>
          <div className="chosen-ticket flex justify-between items-center">
            <div className="total-cost">
              <p>TỔNG TIỀN</p>
              <p>{totalCost.toLocaleString()} đ</p>
            </div>
            {numOfSeats.reduce((countSeat, seat) => countSeat + seat.num, 0) ? (
              <div
                onClick={() => nextStep(2, numOfSeats)}
                className="chosen-button"
              >
                CHỌN GHẾ
              </div>
            ) : (
              <div
                className="chosen-button"
                style={{
                  backgroundColor: '#afafaf',
                  cursor: 'auto',
                  backgroundImage: 'none'
                }}
              >
                CHỌN GHẾ
              </div>
            )}
          </div>
          <div className="contact">
            <p>
              Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã
              mua.
            </p>
            <div className="hotline">
              <div>
                <span className="hotline__title">HOTLINE</span>
                <span className="hotline__cost">Phí cuộc gọi 1000VND/phút</span>
              </div>
              <div>
                <span className="hotline__phone">1900 545 436</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
