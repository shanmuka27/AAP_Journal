import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="nav-wrapper">
      <div className="container">
        <nav>
          <Link to="/" className="nav-brand">
            <img src="/logo.png" alt="Audi Alteram Partem Logo" className="nav-logo" />
            <span>Audi Alteram Partem</span>
          </Link>
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/publications" 
                className={isActive('/publications') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Publications
              </Link>
            </li>
            <li>
              <Link 
                to="/podcast" 
                className={isActive('/podcast') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Podcast
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className={isActive('/events') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                to="/authors" 
                className={isActive('/authors') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                For Authors
              </Link>
            </li>
            <li>
              <Link 
                to="/board" 
                className={isActive('/board') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Editorial Board
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
