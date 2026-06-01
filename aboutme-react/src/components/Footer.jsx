import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-black text-light py-4 z-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <p className="mb-0 text-center text-md-start">© 2026 Sarah Collins. All rights reserved.</p>
        <div className="d-flex gap-4 fs-4">
          <a className="text-pink" href="https://github.com/alssl27" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a className="text-pink" href="https://www.linkedin.com/in/sarah-collins-b6741021a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a className="text-pink" href="https://discord.com/users/alsslc220702" target="_blank" rel="noopener noreferrer" aria-label="Discord"><i className="fa-brands fa-discord"></i></a>
          <a className="text-pink" href="https://www.facebook.com/bdens69/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>
    </footer>
  )
}
