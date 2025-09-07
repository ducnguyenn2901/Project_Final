import { Link } from "react-router-dom";

export default function MovieCard({ movie, onClick }){
  return (
    <Link to={`/details/${movie.id}`} className="card" onClick={() => onClick?.(movie)}>
      <img className="thumb" src={movie.image} alt={movie.movieName} />
      <div className="ep">Episode {movie.episode}</div>
      <div className="title">{movie.movieName}</div>
    </Link>
  )
}
