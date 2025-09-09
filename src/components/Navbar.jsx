// import { Link } from 'react-router-dom'

// export default function Navbar(){
//   return (
//     <div className="navbar">
//       <div className="navbar-inner container">

//         <Link className="button" to="/"><i class="fa-solid fa-house"></i></Link>
//         <Link to="/" className="brand">Anonime</Link>
//         <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/list">List anime</Link>
//           <Link to="/login">Account</Link>
//         </div>
//         <div className="search">
//           <input placeholder="Search anime or movie" />
//         </div>
//       </div>
//     </div>
//   )
// }

import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <div className="navbar-inner container">

        <Link className="button" to="/"><i className="fa-solid fa-house"></i></Link>
        <Link to="/" className="brand">Anonime</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/list">List anime</Link>

        </div>

        <div className="search">
          <input placeholder="Search anime or movie" />

        </div>
        <div>
          {loggedInUser ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}><i class="fa-solid fa-user" style={{ fontSize: '25px' }}></i>{loggedInUser.username}</div>
                <button onClick={handleLogout} style={{ marginLeft: '10px', borderColor: '#112A46', color: '#112A46', backgroundColor: 'white', padding: '10px 14px', borderRadius: '8px', cursor: 'pointer' }}>
                  Đăng xuất
                </button>
              </div>
            </>
          ) : (
            <Link to="/account"><i class="fa-solid fa-user" style={{ fontSize: '25px' }}></i></Link>
          )}
        </div>
      </div>
    </div>
  )
}
