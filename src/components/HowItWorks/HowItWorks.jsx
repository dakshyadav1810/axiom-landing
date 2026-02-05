import { useState } from 'react'
import { Link, MousePointer, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: Link,
    title: 'Paste your URL',
    description: 'That\'s literally it. No SDK, no code snippet, no 47-step integration guide. Just your URL.',
    detail: 'React, Vue, Next.js, plain HTML. We don\'t care what you\'re running. If it\'s on the web, we can test it.'
  },
  {
    number: '02',
    icon: MousePointer,
    title: 'Click through it once',
    description: 'You already do this manually before every deploy. This time, we\'re watching.',
    detail: 'Walk through signup, checkout, whatever matters. We record every click, every input, every step.'
  },
  {
    number: '03',
    icon: Play,
    title: 'Never do it again',
    description: 'That flow you just recorded? It runs automatically now. Before every deploy. Forever.',
    detail: 'Something breaks? You\'ll know immediately. With screenshots, context, and suggestions for what went wrong.'
  }
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works__glow" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">How it works</span>
          <h2 className="section-header__title">
            Three steps. Five minutes. Done.
          </h2>
          <p className="section-header__description">
            If you can click through your app, you can use Axiom. There's no learning curve because there's nothing to learn.
          </p>
        </motion.div>

        {/* Stepper Navigation */}
        <motion.div
          className="how-it-works__stepper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Progress bar */}
          <div className="how-it-works__progress">
            <div
              className="how-it-works__progress-fill"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Step tabs */}
          <div className="how-it-works__tabs">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`how-it-works__tab ${activeStep === index ? 'how-it-works__tab--active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span className="how-it-works__tab-number">{step.number}</span>
                <span className="how-it-works__tab-title">{step.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Step Content */}
        <div className="how-it-works__content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="how-it-works__panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="how-it-works__icon">
                {(() => {
                  const IconComponent = steps[activeStep].icon
                  return <IconComponent size={32} />
                })()}
              </div>

              {/* Text */}
              <div className="how-it-works__text">
                <h3 className="how-it-works__panel-title">
                  {steps[activeStep].title}
                </h3>
                <p className="how-it-works__panel-description">
                  {steps[activeStep].description}
                </p>
                <p className="how-it-works__panel-detail">
                  {steps[activeStep].detail}
                </p>
              </div>

              {/* Visual illustration */}
              <div className="how-it-works__visual">
                {activeStep === 0 && <ConnectVisual />}
                {activeStep === 1 && <RecordVisual />}
                {activeStep === 2 && <RunVisual />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <div className="how-it-works__nav">
          <button
            className="how-it-works__nav-btn"
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
          >
            ← Previous
          </button>
          <button
            className="how-it-works__nav-btn how-it-works__nav-btn--primary"
            onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}

// Simple SVG visuals for each step
function ConnectVisual() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="how-it-works__svg">
      <rect x="20" y="20" width="160" height="80" rx="6" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.03)" />
      <rect x="20" y="20" width="160" height="20" rx="6" fill="rgba(48, 221, 190, 0.05)" />
      <circle cx="34" cy="30" r="4" fill="rgba(255, 95, 87, 0.6)" />
      <circle cx="48" cy="30" r="4" fill="rgba(254, 188, 46, 0.6)" />
      <circle cx="62" cy="30" r="4" fill="rgba(40, 200, 64, 0.6)" />
      <rect x="80" y="26" width="90" height="8" rx="4" fill="rgba(48, 221, 190, 0.1)" />
      <text x="85" y="33" fill="rgba(48, 221, 190, 0.8)" fontSize="6" fontFamily="monospace">yourapp.com</text>
      <motion.path
        d="M100 70 L100 100 L140 100"
        stroke="rgba(48, 221, 190, 0.5)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.circle
        cx="145" cy="100" r="6"
        fill="rgba(48, 221, 190, 0.2)"
        stroke="rgba(48, 221, 190, 0.8)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      />
    </svg>
  )
}

function RecordVisual() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="how-it-works__svg">
      <rect x="30" y="25" width="140" height="70" rx="4" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="rgba(48, 221, 190, 0.02)" />
      <rect x="45" y="40" width="50" height="20" rx="3" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.05)" />
      <rect x="105" y="45" width="50" height="12" rx="2" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.05)" />
      <rect x="60" y="70" width="80" height="16" rx="3" stroke="rgba(48, 221, 190, 0.6)" strokeWidth="1" fill="rgba(48, 221, 190, 0.1)" />
      <motion.g
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, 60, 60, 30], y: [0, 10, 30, 30] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
      >
        <path d="M55 38 L55 52 L62 47 L67 55 L70 53 L65 45 L72 45 Z" fill="rgba(48, 221, 190, 0.9)" />
      </motion.g>
      <motion.circle
        cx="170" cy="30" r="8"
        fill="rgba(255, 107, 107, 0.8)"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </svg>
  )
}

function RunVisual() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="how-it-works__svg">
      <rect x="30" y="20" width="140" height="80" rx="4" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="rgba(48, 221, 190, 0.02)" />
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <rect x="45" y="35" width="12" height="12" rx="2" fill="rgba(48, 221, 190, 0.3)" />
        <motion.path d="M48 41 L51 43 L56 38" stroke="rgba(48, 221, 190, 0.9)" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 0.5 }} />
        <rect x="65" y="38" width="90" height="6" rx="2" fill="rgba(48, 221, 190, 0.1)" />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <rect x="45" y="55" width="12" height="12" rx="2" fill="rgba(48, 221, 190, 0.3)" />
        <motion.path d="M48 61 L51 63 L56 58" stroke="rgba(48, 221, 190, 0.9)" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 0.9 }} />
        <rect x="65" y="58" width="70" height="6" rx="2" fill="rgba(48, 221, 190, 0.1)" />
      </motion.g>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <rect x="45" y="75" width="12" height="12" rx="2" fill="rgba(48, 221, 190, 0.3)" />
        <motion.path d="M48 81 L51 83 L56 78" stroke="rgba(48, 221, 190, 0.9)" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 1.3 }} />
        <rect x="65" y="78" width="80" height="6" rx="2" fill="rgba(48, 221, 190, 0.1)" />
      </motion.g>
    </svg>
  )
}
