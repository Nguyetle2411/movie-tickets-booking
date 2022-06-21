import React from 'react'
import Banner from 'components/Banner'
import QuickBooking from 'components/QuickBooking'
import MovieList from 'components/MovieList'
import Showtime from 'components/Showtime'
import AppAd from 'components/AppAd'

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <QuickBooking />
      <MovieList />
      <Showtime />
      <AppAd />
    </div>
  )
}
