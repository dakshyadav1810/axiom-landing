import { ArrowRight, X, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import './Solution.css'

const beforeItems = [
  { text: 'Manual testing before every deploy' },
  { text: 'Brittle scripts that break constantly' },
  { text: 'Bugs discovered by users' }
]

const afterItems = [
  { text: 'Recorded flows run automatically' },
  { text: 'Self-healing tests that adapt' },
  { text: 'Issues caught before shipping' }
]

export default function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">The Solution</span>
          <h2 className="section-header__title">
            From chaos to confidence
          </h2>
          <p className="section-header__description">
            Axiom eliminates the friction of testing so you can ship faster, 
            with fewer surprises.
          </p>
        </motion.div>

        {/* Before → After Split Panel */}
        <motion.div 
          className="solution__split"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Before Side */}
          <div className="solution__side solution__side--before">
            <div className="solution__side-noise" aria-hidden="true" />
            <div className="solution__side-header">
              <span className="solution__side-label solution__side-label--before">Before</span>
              <span className="solution__side-tag">Without Axiom</span>
            </div>
            <ul className="solution__list">
              {beforeItems.map((item, index) => (
                <motion.li 
                  key={index}
                  className="solution__item solution__item--before"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="solution__item-icon solution__item-icon--before">
                    <X size={14} />
                  </span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Center Divider */}
          <div className="solution__divider">
            <div className="solution__divider-line" />
            <div className="solution__divider-icon">
              <ArrowRight size={20} />
            </div>
            <div className="solution__divider-line" />
          </div>

          {/* After Side */}
          <div className="solution__side solution__side--after">
            <div className="solution__side-header">
              <span className="solution__side-label solution__side-label--after">After</span>
              <span className="solution__side-tag solution__side-tag--active">With Axiom</span>
            </div>
            <ul className="solution__list">
              {afterItems.map((item, index) => (
                <motion.li 
                  key={index}
                  className="solution__item solution__item--after"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="solution__item-icon solution__item-icon--after">
                    <Check size={14} />
                  </span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom summary */}
        <motion.p 
          className="solution__summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          No test scripts. No QA expertise. Just record, run, and ship.
        </motion.p>
      </div>
    </section>
  )
}
