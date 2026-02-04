import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__glow" />
      <div className="final-cta__rays">
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
            Start testing in 60 seconds.
          </motion.h2>
          <motion.p 
            className="final-cta__description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            No credit card. No install. Just paste your URL and go.
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
              className="btn btn--primary btn--lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Try Axiom Free
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
          <motion.p 
            className="final-cta__note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Free forever for small projects. Upgrade when you're ready.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
