import { ArrowRight, Check } from 'lucide-react'
import './Pricing.css'

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-header__label">Pricing</span>
          <h2 className="section-header__title">
            Simple, honest pricing
          </h2>
          <p className="section-header__description">
            Pay for what you use. No long-term contracts, no hidden fees.
          </p>
        </div>

        <div className="pricing__cards">
          <div className="pricing__card">
            <div className="pricing__card-header">
              <h3>Starter</h3>
              <p>For indie developers and side projects</p>
            </div>
            <div className="pricing__price">
              <span className="pricing__price-value">$0</span>
              <span className="pricing__price-period">/month</span>
            </div>
            <ul className="pricing__features">
              <li><Check size={16} /> 50 test runs/month</li>
              <li><Check size={16} /> 3 recorded flows</li>
              <li><Check size={16} /> Basic reports</li>
              <li><Check size={16} /> Community support</li>
            </ul>
            <a href="#start" className="btn btn--secondary pricing__cta">
              Start free
            </a>
          </div>

          <div className="pricing__card pricing__card--featured">
            <div className="pricing__card-badge">Most popular</div>
            <div className="pricing__card-header">
              <h3>Pro</h3>
              <p>For growing teams shipping regularly</p>
            </div>
            <div className="pricing__price">
              <span className="pricing__price-value">$49</span>
              <span className="pricing__price-period">/month</span>
            </div>
            <ul className="pricing__features">
              <li><Check size={16} /> 500 test runs/month</li>
              <li><Check size={16} /> Unlimited flows</li>
              <li><Check size={16} /> Chaos testing profiles</li>
              <li><Check size={16} /> Priority support</li>
              <li><Check size={16} /> CI/CD integration</li>
            </ul>
            <a href="#start" className="btn btn--primary pricing__cta">
              Start testing
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="pricing__card">
            <div className="pricing__card-header">
              <h3>Team</h3>
              <p>For teams with high-volume testing needs</p>
            </div>
            <div className="pricing__price">
              <span className="pricing__price-value">$149</span>
              <span className="pricing__price-period">/month</span>
            </div>
            <ul className="pricing__features">
              <li><Check size={16} /> 2000 test runs/month</li>
              <li><Check size={16} /> Unlimited flows</li>
              <li><Check size={16} /> Team collaboration</li>
              <li><Check size={16} /> Scheduled runs</li>
              <li><Check size={16} /> Slack integration</li>
            </ul>
            <a href="#contact" className="btn btn--secondary pricing__cta">
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
