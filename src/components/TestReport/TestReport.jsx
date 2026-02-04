import { CheckCircle2, XCircle, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './TestReport.css'

const testSteps = [
  { status: 'pass', action: 'Navigate to login page', time: '0.3s' },
  { status: 'pass', action: 'Enter email "test@example.com"', time: '0.1s' },
  { status: 'pass', action: 'Enter password', time: '0.1s' },
  { status: 'pass', action: 'Click "Sign In" button', time: '0.2s' },
  { status: 'fail', action: 'Wait for dashboard to load', time: '5.0s' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  }
}

export default function TestReport() {
  return (
    <section className="test-report">
      <div className="test-report__glow" />
      <div className="container">
        <div className="test-report__layout">
          <motion.div 
            className="test-report__content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-header__label">Test Reports</span>
            <h2 className="section-header__title" style={{ textAlign: 'left' }}>
              Clarity when it matters most
            </h2>
            <p className="test-report__description">
              Every test run produces a complete, readable report. No guesswork. 
              See exactly what happened, where it failed, and how to fix it.
            </p>
            <ul className="test-report__benefits">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <CheckCircle2 size={18} />
                Step-by-step execution trace
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <CheckCircle2 size={18} />
                Screenshots at each step
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <CheckCircle2 size={18} />
                AI-powered fix suggestions
              </motion.li>
            </ul>
          </motion.div>

          <motion.div 
            className="test-report__demo"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="test-report__card">
              <div className="test-report__header">
                <div className="test-report__dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="test-report__title-bar">
                  <span className="test-report__icon">
                    <XCircle size={16} />
                  </span>
                  Login Flow Test
                </div>
                <div className="test-report__time">
                  <Clock size={14} />
                  5.7s
                </div>
              </div>
              <motion.div 
                className="test-report__steps"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {testSteps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className={`test-report__step ${step.status}`}
                    variants={stepVariants}
                  >
                    <span className="test-report__step-icon">
                      {step.status === 'pass' ? (
                        <CheckCircle2 size={16} />
                      ) : (
                        <XCircle size={16} />
                      )}
                    </span>
                    <span className="test-report__step-action">{step.action}</span>
                    <span className="test-report__step-time">{step.time}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div 
                className="test-report__suggestion"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="test-report__suggestion-header">
                  <span className="test-report__suggestion-icon">💡</span>
                  Suggested Fix
                </div>
                <p>Dashboard API returned 502. Check your /api/dashboard endpoint for timeout issues.</p>
                <button className="test-report__suggestion-link">
                  View full trace <ArrowRight size={14} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
