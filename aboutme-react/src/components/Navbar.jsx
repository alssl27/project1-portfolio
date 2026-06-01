import React, {useState} from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black py-3 z-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-pink navbar-brand-glow" href="/">&lt; / &gt;</a>
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open? 'show': ''}`} id="siteNavbar">
          <ul className="navbar-nav justify-content-center align-items-center gap-2 gap-lg-4 mt-3 mt-lg-0 text-center">
            <li className="nav-item"><a className="nav-link active" href="/">HOME</a></li>
            <li className="nav-item"><a className="nav-link" href="/aboutme.html">ABOUT ME</a></li>
            <li className="nav-item"><a className="nav-link" href="/projects.html">PROJECTS</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact.html">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
