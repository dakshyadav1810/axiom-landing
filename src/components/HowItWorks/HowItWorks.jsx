import { Link, MousePointer, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: Link,
    title: 'Connect your app',
    description: 'Point Axiom at any deployed URL. No SDKs, no code changes, no infrastructure to manage.'
  },
  {
    number: '02',
    icon: MousePointer,
    title: 'Record the flow',
    description: 'Walk through the user journey once. Axiom captures every interaction and builds a replayable test.'
  },
  {
    number: '03',
    icon: Play,
    title: 'Run and review',
    description: 'Execute tests on demand or on a schedule. Get clear pass/fail results with actionable fixes.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
}

export default function HowItWorks() {
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
          <span className="section-header__label">How It Works</span>
          <h2 className="section-header__title">
            Three steps to confidence
          </h2>
          <p className="section-header__description">
            No complex setup. No test code to maintain. Just record, run, and ship.
          </p>
        </motion.div>

        <motion.div 
          className="how-it-works__steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="how-it-works__step"
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(48, 221, 190, 0.15)',
                transition: { duration: 0.3 } 
              }}
            >
              <div className="how-it-works__step-number">{step.number}</div>
              <div className="how-it-works__step-icon">
                <step.icon size={28} />
              </div>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="how-it-works__connector">
                  <svg viewBox="0 0 60 12" fill="none">
                    <path d="M0 6h50M50 6l-6-5M50 6l-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
