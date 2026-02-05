import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      {/* Fog layers - uncertainty clearing */}
      <div className="final-cta__fog" aria-hidden="true">
        <div className="final-cta__fog-layer final-cta__fog-layer--1" />
        <div className="final-cta__fog-layer final-cta__fog-layer--2" />
        <div className="final-cta__fog-layer final-cta__fog-layer--3" />
      </div>

      {/* Noise grain overlay */}
      <div className="final-cta__noise" aria-hidden="true" />

      {/* Central glow - clarity emerging */}
      <div className="final-cta__glow" />

      {/* Neon light rays */}
      <div className="final-cta__rays" aria-hidden="true">
        <div className="final-cta__ray" />
        <div className="final-cta__ray" />
        <div className="final-cta__ray" />
      </div>

      <div className="container">
        <motion.div
          className="final-cta__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="final-cta__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stop reading. Start testing.
          </motion.h2>
          <motion.p
            className="final-cta__description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Paste your URL, record a test, run it. Takes about 90 seconds. No credit card, no install, no "book a demo" nonsense.
          </motion.p>
          <motion.div
            className="final-cta__actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.a
              href="#"
              className="final-cta__neon-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="final-cta__neon-btn-text">
                Try Axiom Free
                <ArrowRight size={18} />
              </span>
              <span className="final-cta__neon-btn-glow" />
            </motion.a>
          </motion.div>
          <motion.p
            className="final-cta__note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Free forever on small projects. Upgrade whenever. Or don't. We're not your mom.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
