import { Rocket, Users, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import './WhoItsFor.css'

const audiences = [
  {
    icon: Rocket,
    title: 'Agencies',
    description: 'Protect launches. Validate before handoff.',
    size: 'large'
  },
  {
    icon: Users,
    title: 'Small SaaS Teams',
    description: 'Catch regressions before users do.',
    size: 'small'
  },
  {
    icon: Briefcase,
    title: 'Early-Stage Startups',
    description: 'Move fast without silent breakage.',
    size: 'small'
  }
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="who-its-for">
      <div className="who-its-for__glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">Built For</span>
          <h2 className="section-header__title">
            Built for teams that move fast
          </h2>
          <p className="section-header__description">
            No QA department. Still quality focused.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className={`who-its-for__bento ${audiences.length === 3 ? 'who-its-for__bento--three' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className={`who-its-for__cell who-its-for__cell--${audience.size}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="who-its-for__cell-icon">
                <audience.icon size={audience.size === 'large' ? 32 : 24} />
              </div>

              <h3 className="who-its-for__cell-title">{audience.title}</h3>
              <p className="who-its-for__cell-description">{audience.description}</p>

              {audience.size === 'large' && (
                <div className="who-its-for__cta">
                  <span>Built for your team →</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
