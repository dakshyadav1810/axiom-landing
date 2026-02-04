import { Twitter, Github, Linkedin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <svg viewBox="0 0 32 32" fill="none" className="footer__logo-icon">
                <rect width="32" height="32" rx="8" fill="#7C3AED"/>
                <path d="M16 6L24 24H8L16 6Z" fill="white"/>
                <circle cx="16" cy="20" r="2" fill="#7C3AED"/>
              </svg>
              <span>Axiom</span>
            </a>
            <p className="footer__tagline">
              Testing for teams that ship fast.
            </p>
            <div className="footer__social">
              <a href="#twitter" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#github" aria-label="GitHub"><Github size={18} /></a>
              <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="footer__links">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#changelog">Changelog</a>
            <a href="#roadmap">Roadmap</a>
          </div>

          <div className="footer__links">
            <h4>Resources</h4>
            <a href="#docs">Documentation</a>
            <a href="#guides">Guides</a>
            <a href="#api">API Reference</a>
            <a href="#status">Status</a>
          </div>

          <div className="footer__links">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__links">
            <h4>Legal</h4>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#security">Security</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Axiom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
