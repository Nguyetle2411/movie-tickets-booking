import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import showtimeListByCinemaSystem from 'constants/showtimeListByCinemaSystem'
import movies from 'constants/movies'
import cinemaSystemList from 'constants/cinemaSystemList'
import cinemaListByCinemaSystem from 'constants/cinemaListByCinemaSystem'
import seatList from 'constants/seatList'

const mock = new MockAdapter(axios)

mock.onGet(/\/getShowtimeByMovie\/.+/).reply(config => {
  const movieId = config.url.replace('/getShowtimeByMovie/', '')

  let showtimeByMovie = showtimeListByCinemaSystem.reduce((acc, cur) => {
    const { cinemaList, ...cinemaSystem } = cur
    let matchCinemaList = []

    for (let i = 0; i < cinemaList.length; i++) {
      const cinema = cinemaList[i]
      const { movieList, ...cinemaInfo } = cinema
      for (let j = 0; j < movieList.length; j++) {
        const movie = movieList[j]
        if (movie.movieId + '' === movieId) {
          matchCinemaList.push({
            ...cinemaInfo,
            showtime: movie.showtime
          })
        }
      }
    }

    if (matchCinemaList.length) {
      acc.push({
        ...cinemaSystem,
        cinemaList: matchCinemaList
      })
    }

    return acc
  }, [])

  return [200, showtimeByMovie]
})

mock.onGet(/\/getShowtimeByCinemaSystem\/.+/).reply(config => {
  const cinemaSystemId = config.url.replace('/getShowtimeByCinemaSystem/', '')
  const showtimeByCinemaSystem = showtimeListByCinemaSystem.find(
    el => el.cinemaSystemId === cinemaSystemId
  )?.cinemaList
  return [200, showtimeByCinemaSystem]
})

mock.onGet(/\/getCinemaListByCinemaSystem\/.+/).reply(config => {
  const cinemaSystemId = config.url.replace('/getCinemaListByCinemaSystem/', '')
  const cinemaList = cinemaListByCinemaSystem.find(
    el => el.cinemaSystemId === cinemaSystemId
  )?.cinemaList
  return [200, cinemaList]
})

mock.onGet(/\/getMovieDetails\/.+/).reply(config => {
  const movieId = config.url.replace('/getMovieDetails/', '')
  const movieDetails = movies.find(el => el.movieId + '' === movieId)
  return [200, movieDetails]
})

mock.onGet(/\/getShowtimeDetails\/.+/).reply(config => {
  const showtimeId = config.url.replace('/getShowtimeDetails/', '')
  const showtimeDetails = {
    cinemaInfo: null,
    movieInfo: null,
    showtimeInfo: null
  }

  showtimeListByCinemaSystem.forEach(cinemaSystem => {
    const cinema = cinemaSystem.cinemaList.find(cinema => {
      const movie = cinema.movieList.find(movie => {
        const showtime = movie.showtime.find(
          showtime => showtime.showtimeId + '' === showtimeId
        )
        if (showtime) {
          showtimeDetails.showtimeInfo = { ...showtime, seatList: seatList }
        }
        return !!showtime
      })
      if (movie) {
        const { showtime, ...rest } = movie
        showtimeDetails.movieInfo = { ...rest }
      }
      return !!movie
    })
    if (cinema) {
      const { movieList, ...rest } = cinema
      showtimeDetails.cinemaInfo = { ...rest }
    }
  })
  return [200, showtimeDetails]
})

mock.onGet('/getMovieList').reply(200, movies)

mock.onGet('/getCinemaSystemList').reply(200, cinemaSystemList)

mock.onPost('/login').reply(config => {
  return [200, {}, {}]
})
