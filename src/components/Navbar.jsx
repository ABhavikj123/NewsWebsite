import React, {useState} from 'react'
import { useNavigate,Link } from 'react-router-dom' 

function Navbar() {
  const [found,setFound]=useState("")
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(found.trim()!==""){
        navigate('/category',{state:{found:found}})
        }
      };
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid bg-black">
          <div className="navbar-brand" style={{ color: "white" }} to="/">Daily News</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-Link active text-decoration-none link-light mx-2" aria-current="page" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-decoration-none link-light mx-2" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-decoration-none link-light mx-2" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-decoration-none link-light mx-2" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-decoration-none link-light mx-2" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-decoration-none link-light mx-2" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-decoration-none link-light mx-2" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
              <input
          type="text"
          name="search"
          placeholder="search News"
          value={found}
          onChange={(e)=>setFound(e.target.value)}
        />
       <button onClick={handleSubmit}>Search</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

