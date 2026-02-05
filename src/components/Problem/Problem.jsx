import { motion } from 'framer-motion'
import './Problem.css'

const problems = [
  {
    number: '01',
    title: "You ship and pray",
    description: <>No tests. No safety net. Just a deploy button and a <strong>moment of silence</strong>. You refresh the page, hold your breath, and hope nothing exploded.</>,
    isQuote: false
  },
  {
    number: '02',
    title: '"We\'ll add tests later"',
    description: <>Later never comes. You've said it for months. There's always a feature to ship, a bug to fix, a launch to hit. Testing stays on the backlog <strong>forever</strong>.</>,
    isQuote: true
  },
  {
    number: '03',
    title: 'Your users are your QA team',
    description: <>You find out checkout is broken from an <strong>angry tweet</strong>. Your first bug report is a refund request. That's not a process—that's a liability.</>,
    isQuote: false
  }
]

export default function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">Be honest</span>
          <h2 className="section-header__title">
            You don't test. We know.
          </h2>
          <p className="section-header__description">
            You're not lazy—you're stretched thin. But every deploy without tests
            is a gamble with your users' trust.
          </p>
        </motion.div>

        {/* Cascading Dominoes Layout */}
        <div className="problem__dominoes">
          {/* Connecting fall line */}
          <div className="problem__fall-line" aria-hidden="true">
            <svg viewBox="0 0 40 400" preserveAspectRatio="none" className="problem__fall-svg">
              <path
                d="M20 0 L20 400"
                stroke="url(#problemGradient)"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
              />
              <defs>
                <linearGradient id="problemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 107, 107, 0.1)" />
                  <stop offset="50%" stopColor="rgba(255, 107, 107, 0.5)" />
                  <stop offset="100%" stopColor="rgba(255, 107, 107, 0.1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="problem__domino"
              initial={{ opacity: 0, x: -30, rotate: -5 }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Impact indicator */}
              <div className="problem__impact" aria-hidden="true">
                <span className="problem__number">{problem.number}</span>
                <div className="problem__pulse" />
              </div>

              {/* Content */}
              <div className="problem__content">
                <h3 className={`problem__title ${problem.isQuote ? 'problem__title--quote' : ''}`}>
                  {problem.title}
                </h3>
                <p className="problem__description">{problem.description}</p>
              </div>

              {/* Domino falling indicator
              {index < problems.length - 1 && (
                <div className="problem__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
              )} */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
