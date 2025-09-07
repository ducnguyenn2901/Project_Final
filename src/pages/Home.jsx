import { useState } from 'react'
import ExploreBanner from '../components/ExploreBanner'
import MovieCard from '../components/MovieCard'
import { movies } from '../data/movies'
import { Link } from 'react-router-dom'

export default function Home(){
  const [selected, setSelected] = useState(movies[0])

  return (
    <div className="container">
      <ExploreBanner movie={selected} />

      <h3 className="section-title">New Release</h3>
      <div className="grid">
        {movies.map(m => (
          <MovieCard key={m.id} movie={m} onClick={setSelected} />
        ))}
      </div>
    </div>
  )
}
