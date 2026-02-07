import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Problem.css'

const riskFactors = [
  {
    threshold: 0.2,
    label: "No test coverage",
    description: "You click around, looks fine. Ship it.",
    severity: "LOW"
  },
  {
    threshold: 0.5,
    label: "Tests are always 'later'",
    description: "\"We'll write tests after launch\" was 6 months ago.",
    severity: "MEDIUM"
  },
  {
    threshold: 0.8,
    label: "Bugs in production",
    description: "You find out something's broken from a support ticket.",
    severity: "HIGH"
  }
]

export default function Problem() {
  const containerRef = useRef(null)
  const [activeFactors, setActiveFactors] = useState([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform scroll progress to risk level (100 → 0, starts high, decreases)
  const riskLevel = useTransform(scrollYProgress, [0.1, 0.7], [100, 0])
  const [currentRisk, setCurrentRisk] = useState(100)

  useEffect(() => {
    const unsubscribe = riskLevel.on("change", (value) => {
      setCurrentRisk(Math.round(Math.max(0, Math.min(100, value))))

      // Update active factors - show when risk passes their threshold (descending)
      const normalizedRisk = value / 100
      const active = riskFactors.filter(f => normalizedRisk >= (1 - f.threshold))
      setActiveFactors(active.map(f => f.label))
    })
    return () => unsubscribe()
  }, [riskLevel])

  // Calculate gauge rotation (from 90deg to -90deg, starts full)
  const gaugeRotation = useTransform(scrollYProgress, [0.1, 0.7], [90, -90])

  // Risk status text - muted colors (reversed: high at start)
  const getRiskStatus = () => {
    if (currentRisk > 75) return { text: "EXTREME", color: "rgba(255, 130, 130, 0.95)" }
    if (currentRisk > 50) return { text: "HIGH", color: "rgba(255, 160, 140, 0.9)" }
    if (currentRisk > 25) return { text: "MODERATE", color: "var(--text-secondary)" }
    return { text: "LOW", color: "var(--accent)" }
  }

  const status = getRiskStatus()

  return (
    <section className="problem" ref={containerRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">The Reality</span>
          <h2 className="section-header__title">
            You ship fast. Testing doesn't keep up.
          </h2>
          <p className="section-header__description">
            And users find the bugs for you.
          </p>
        </motion.div>

        {/* Risk Meter Visualization */}
        <div className="problem__meter-container">
          {/* Central Gauge */}
          <div className="problem__gauge">
            {/* Gauge background arc */}
            <svg viewBox="0 0 200 120" className="problem__gauge-svg">
              {/* Background arc */}
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Gradient arc segments */}
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(48, 221, 190, 0.7)" />
                  <stop offset="50%" stopColor="rgba(180, 180, 180, 0.4)" />
                  <stop offset="100%" stopColor="rgba(200, 130, 130, 0.6)" />
                </linearGradient>
              </defs>
              {/* Progress arc */}
              <motion.path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{ pathLength: 1 }}
                style={{ pathLength: useTransform(scrollYProgress, [0.1, 0.7], [1, 0]) }}
              />
              {/* Tick marks */}
              {[0, 25, 50, 75, 100].map((tick, i) => {
                const angle = -90 + (tick / 100) * 180
                const rad = (angle * Math.PI) / 180
                const x1 = 100 + 65 * Math.cos(rad)
                const y1 = 100 + 65 * Math.sin(rad)
                const x2 = 100 + 75 * Math.cos(rad)
                const y2 = 100 + 75 * Math.sin(rad)
                return (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                  />
                )
              })}
            </svg>

            {/* Needle */}
            <motion.div
              className="problem__needle"
              style={{ rotate: gaugeRotation }}
            />

            {/* Needle pivot */}
            <div className="problem__needle-pivot" />
          </div>

          {/* Value display - below gauge */}
          <div className="problem__gauge-display">
            <span className="problem__gauge-value">{currentRisk}</span>
            <span className="problem__gauge-status" style={{ color: status.color }}>
              {status.text} RISK
            </span>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="problem__factors">
          {riskFactors.map((factor, index) => (
            <motion.div
              key={index}
              className={`problem__factor ${activeFactors.includes(factor.label) ? 'problem__factor--active' : ''}`}
              initial={{ opacity: 0.3, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="problem__factor-indicator">
                <span className={`problem__factor-dot problem__factor-dot--${factor.severity.toLowerCase()}`} />
              </div>
              <div className="problem__factor-content">
                <h4 className="problem__factor-label">{factor.label}</h4>
                <p className="problem__factor-desc">{factor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
