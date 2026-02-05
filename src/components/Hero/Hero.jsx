import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Grainy atmospheric depth layers */}
      <div className="hero__noise-layer" aria-hidden="true" />
      <div className="hero__particles" aria-hidden="true" />

      {/* Underwater caustic light effect */}
      <div className="hero__caustics">
        <div className="hero__light-cone" />
        <div className="hero__caustic-layer hero__caustic-layer--1" />
        <div className="hero__caustic-layer hero__caustic-layer--2" />
      </div>

      <div className="hero__glow-orb" />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="container hero__container">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="hero__badge-dot" />
          Now in public beta
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Ship with <span className="hero__title-accent">Confidence</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Axiom tests real user flows under real-world conditions, without
          the overhead of traditional QA.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.a
            href="#start"
            className="btn btn--primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Run your first test
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#demo"
            className="btn btn--secondary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Play size={16} />
            See how it works
          </motion.a>
        </motion.div>

        <motion.div
          className="hero__preview"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__preview-window">
            <div className="hero__preview-header">
              <div className="hero__preview-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="hero__preview-url">app.testwithaxiom.com/dashboard</span>
            </div>
            <div className="hero__preview-content">
              <div className="hero__preview-sidebar">
                <div className="hero__preview-logo">
                  <img src="/logo.avif" alt="Axiom" />
                </div>
                <div className="hero__preview-nav-item active">Dashboard</div>
                <div className="hero__preview-nav-item">Test Flows</div>
                <div className="hero__preview-nav-item">Reports</div>
                <div className="hero__preview-nav-item">Settings</div>
              </div>
              <div className="hero__preview-main">
                <motion.div
                  className="hero__preview-card hero__preview-card--score"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="hero__preview-score-ring">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" className="hero__preview-ring-bg" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="hero__preview-ring-fill"
                        initial={{ strokeDashoffset: 264 }}
                        animate={{ strokeDashoffset: 264 * (1 - 0.94) }}
                        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="hero__preview-score-value">94</span>
                  </div>
                  <div className="hero__preview-score-info">
                    <span className="hero__preview-label">Quality Score</span>
                    <span className="hero__preview-badge hero__preview-badge--success">Ready to ship</span>
                  </div>
                </motion.div>
                <motion.div
                  className="hero__preview-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                >
                  <span className="hero__preview-label">Tests Run</span>
                  <span className="hero__preview-value">24</span>
                </motion.div>
                <motion.div
                  className="hero__preview-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.4 }}
                >
                  <span className="hero__preview-label">Passed</span>
                  <span className="hero__preview-value hero__preview-value--success">22</span>
                </motion.div>
                <motion.div
                  className="hero__preview-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.4 }}
                >
                  <span className="hero__preview-label">Failed</span>
                  <span className="hero__preview-value hero__preview-value--error">2</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
