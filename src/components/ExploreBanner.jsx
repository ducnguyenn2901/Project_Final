export default function ExploreBanner({ movie }){
  if(!movie) return null
  return (
    <div className="banner">
      <img src={movie.image} alt={movie.movieName}/>
      <div className="banner-content">
        <span style={{color:'#94a3b8', fontSize:12}}>Explore</span>
        <h2>{movie.movieName}</h2>
        <p>{movie.description}</p>
      </div>
    </div>
  )
}
