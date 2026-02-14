import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import WaitlistForm from '../WaitlistForm/WaitlistForm'
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
          <motion.span
            className="section-header__label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Final Step
          </motion.span>
          <motion.h2
            className="final-cta__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            See if it works for you.
          </motion.h2>
          <motion.p
            className="final-cta__description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Start testing in under a minute.
            No credit card. No install.
          </motion.p>
          <motion.div
            className="final-cta__actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <WaitlistForm buttonText="Start Free" showNote={false} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
