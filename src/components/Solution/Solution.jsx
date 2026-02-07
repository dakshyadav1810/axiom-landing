import { ArrowRight, X, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import './Solution.css'

const beforeItems = [
  { text: 'Clicking through every flow manually' },
  { text: 'Test scripts that break when UI changes' },
  { text: 'Finding out from users' }
]

const afterItems = [
  { text: 'Recorded flows you can rerun on demand' },
  { text: 'Flows that remain reliable as your UI evolves' },
  { text: 'A clear signal on whether flows are ready' }
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
          <span className="section-header__label">A Different Approach</span>
          <h2 className="section-header__title">
            Test like a user. Ship with proof.
          </h2>
          <p className="section-header__description">
            Axiom validates your app the way users experience it. Less brittle than traditional scripted tests.
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
          Record once. Run anytime. Know it works.
        </motion.p>
      </div>
    </section>
  )
}
