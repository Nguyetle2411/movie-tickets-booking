import React from 'react'
import Movie from './Movie'

export default function Movies({ movies }) {
  return (
    <>
      {movies.map(movie => (
        <Movie key={movie.movieId} movie={movie} />
      ))}
    </>
  )
}
