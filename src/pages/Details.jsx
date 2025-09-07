import { useParams, Link } from 'react-router-dom'
import { movies } from '../data/movies'
import MovieCard from '../components/MovieCard'

export default function Details(){
  const { id } = useParams()
  const movie = movies.find(m => m.id === id) || movies[0]
  const popular = movies.filter(m => m.id !== movie.id)

  return (
    <div className="container layout">
      <div>
        <h2 style={{marginTop:0}}>{movie.movieName} - Episode {movie.episode}</h2>
        <div className="player">Video</div>

        <div style={{display:'grid', gridTemplateColumns:'200px 1fr', gap:'16px', marginTop:16}}>
          <img src={movie.image} alt={movie.movieName} style={{width:200, borderRadius:12}}/>
          <div className="info-panel">
            <span>Type :</span><span>Tv</span>
            <span>Status :</span><span>Ongoing</span>
            <span>Studios :</span><span>Toei Animation</span>
            <span>Duration :</span><span>24 Min.</span>
            <span>Genres :</span><span>Action, Adventure, Fantasy</span>
          </div>
        </div>

        <div className="synopsis">
          <strong>Synopsis :</strong><br/>
          {movie.description}
        </div>

      </div>

      <div className="side">
        <h3 style={{margin:'0 0 -4px'}}>Popular Anime</h3>
        <div className="popular-grid">
          {popular.map(m => (
            <MovieCard key={m.id} movie={m} onClick={()=>{}} />
          ))}
        </div>
      </div>
    </div>
  )
}
