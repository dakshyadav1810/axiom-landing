import { ArrowRight } from 'lucide-react'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__glow" />
      <div className="container">
        <div className="final-cta__content">
          <h2 className="final-cta__title">
            Know before you ship
          </h2>
          <p className="final-cta__description">
            Stop finding bugs in production. Test your app today and ship with confidence.
          </p>
          <div className="final-cta__actions">
            <a href="#start" className="btn btn--primary btn--large">
              Test your app
              <ArrowRight size={18} />
            </a>
            <a href="#demo" className="btn btn--ghost">
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
