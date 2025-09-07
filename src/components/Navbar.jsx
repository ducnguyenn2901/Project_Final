import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <div className="navbar">
      <div className="navbar-inner container">
        
        <Link className="button" to="/"><i class="fa-solid fa-house"></i></Link>
        <Link to="/" className="brand">Anonime</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/list">List anime</Link>
        </div>
        <div className="search">
          <input placeholder="Search anime or movie" />
        </div>
      </div>
    </div>
  )
}
