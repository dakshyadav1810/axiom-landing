import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <a href="/" className="navbar__logo">
          <svg viewBox="0 0 32 32" fill="none" className="navbar__logo-icon">
            <rect width="32" height="32" rx="8" fill="#7C3AED"/>
            <path d="M16 6L24 24H8L16 6Z" fill="white"/>
            <circle cx="16" cy="20" r="2" fill="#7C3AED"/>
          </svg>
          <span>Axiom</span>
        </a>

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs" className="navbar__link--muted">Docs</a>
        </div>

        <div className="navbar__actions">
          <a href="#login" className="btn btn--ghost">Log in</a>
          <a href="#signup" className="btn btn--primary">Start testing</a>
        </div>

        <button 
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}
