import axios from 'axios'

const getMovieList = () => axios.get('/getMovieList')
const getCinemaSystemList = () => axios.get('/getCinemaSystemList')

const getShowtimeByMovie = movieId =>
  axios.get(`/getShowtimeByMovie/${movieId}`)

const getShowtimeByCinemaSystem = cinemaSystemId =>
  axios.get(`/getShowtimeByCinemaSystem/${cinemaSystemId}`)

const getCinemaListByCinemaSystem = cinemaSystemId =>
  axios.get(`/getCinemaListByCinemaSystem/${cinemaSystemId}`)

const getMovieDetails = movieId => axios.get(`/getMovieDetails/${movieId}`)

const getShowtimeDetails = showtimeId =>
  axios.get(`/getShowtimeDetails/${showtimeId}`)

const login = payload => axios.post('/login', payload)

const api = {
  getMovieList,
  getCinemaSystemList,
  getShowtimeByMovie,
  getShowtimeByCinemaSystem,
  getCinemaListByCinemaSystem,
  getMovieDetails,
  getShowtimeDetails,
  login
}

export default api
