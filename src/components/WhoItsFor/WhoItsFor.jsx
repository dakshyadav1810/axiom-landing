import { Rocket, Users, Briefcase, Zap, Shield, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import './WhoItsFor.css'

const audiences = [
  {
    icon: Rocket,
    title: 'Solo founders',
    description: 'Shipping alone doesn\'t mean shipping blind.',
    highlight: 'Most popular',
    size: 'large'
  },
  {
    icon: Users,
    title: 'Small dev teams',
    description: 'Validate before deploy without blocking the sprint.',
    size: 'small'
  },
  {
    icon: Briefcase,
    title: 'Freelancers and agencies',
    description: 'Show clients it works before you hand it off.',
    size: 'small'
  },
  {
    icon: TrendingUp,
    title: 'Early startups',
    description: 'You\'re moving fast. Axiom keeps up.',
    size: 'medium'
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
            Small teams. Fast shipping. No QA.
          </h2>
          <p className="section-header__description">
            You don't have dedicated QA. You still want to know things work.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="who-its-for__bento"
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
              {audience.highlight && (
                <span className="who-its-for__highlight">{audience.highlight}</span>
              )}

              <div className="who-its-for__cell-icon">
                <audience.icon size={audience.size === 'large' ? 32 : 24} />
              </div>

              <h3 className="who-its-for__cell-title">{audience.title}</h3>
              <p className="who-its-for__cell-description">{audience.description}</p>

              {audience.size === 'large' && (
                <div className="who-its-for__cta">
                  <span>That's you →</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof hint */}
        <motion.p
          className="who-its-for__proof"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          500+ teams on the waitlist
        </motion.p>
      </div>
    </section>
  )
}
