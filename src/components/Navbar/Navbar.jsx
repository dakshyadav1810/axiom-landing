import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container navbar__container">
        <a href="/" className="navbar__logo">
          <img src="/logo.avif" alt="Axiom" className="navbar__logo-img" />
        </a>

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="navbar__actions">
          <a href="#login" className="btn btn--ghost">Log in</a>
          <motion.a
            href="#signup"
            className="btn btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.nav>
  )
}
