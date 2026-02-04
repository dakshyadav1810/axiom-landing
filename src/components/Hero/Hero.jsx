import { ArrowRight, Play } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="container hero__container">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Now in public beta
        </div>
        
        <h1 className="hero__title">
          Ship with <span className="hero__title-accent">confidence</span>
        </h1>
        
        <p className="hero__subtitle">
          Axiom tests real user flows under real-world conditions—without 
          the overhead of traditional QA.
        </p>
        
        <div className="hero__actions">
          <a href="#start" className="btn btn--primary">
            Run your first test
            <ArrowRight size={18} />
          </a>
          <a href="#demo" className="btn btn--secondary">
            <Play size={16} />
            See how it works
          </a>
        </div>

        <div className="hero__preview">
          <div className="hero__preview-window">
            <div className="hero__preview-header">
              <div className="hero__preview-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="hero__preview-url">app.axiom.dev/dashboard</span>
            </div>
            <div className="hero__preview-content">
              <div className="hero__preview-sidebar">
                <div className="hero__preview-nav-item active">Dashboard</div>
                <div className="hero__preview-nav-item">Test Flows</div>
                <div className="hero__preview-nav-item">Reports</div>
                <div className="hero__preview-nav-item">Settings</div>
              </div>
              <div className="hero__preview-main">
                <div className="hero__preview-card hero__preview-card--score">
                  <span className="hero__preview-label">Quality Score</span>
                  <span className="hero__preview-score">94</span>
                  <span className="hero__preview-badge hero__preview-badge--success">Ready to ship</span>
                </div>
                <div className="hero__preview-card">
                  <span className="hero__preview-label">Tests Run</span>
                  <span className="hero__preview-value">24</span>
                </div>
                <div className="hero__preview-card">
                  <span className="hero__preview-label">Passed</span>
                  <span className="hero__preview-value hero__preview-value--success">22</span>
                </div>
                <div className="hero__preview-card">
                  <span className="hero__preview-label">Failed</span>
                  <span className="hero__preview-value hero__preview-value--error">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
