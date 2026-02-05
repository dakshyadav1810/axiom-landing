import { Rocket, Users, Briefcase, Zap, Shield, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import './WhoItsFor.css'

const audiences = [
  {
    icon: Rocket,
    title: 'Solo Founders',
    description: 'You\'re building alone, which means you\'re also testing alone. Or more likely, not testing at all. We get it.',
    highlight: 'Most popular',
    size: 'large'
  },
  {
    icon: Users,
    title: 'Small Teams',
    description: 'You have two devs and zero QA budget. Axiom is your QA budget.',
    size: 'small'
  },
  {
    icon: Briefcase,
    title: 'Agencies',
    description: 'Client says "it\'s broken." You say "works on my machine." Axiom settles the argument.',
    size: 'small'
  },
  {
    icon: TrendingUp,
    title: 'Startups Scaling Up',
    description: 'You\'re growing faster than you can hire QA. Axiom scales with you without the headcount.',
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
          <span className="section-header__label">Who uses this</span>
          <h2 className="section-header__title">
            You don't have a QA team. That's fine.
          </h2>
          <p className="section-header__description">
            Most of our users are shipping solo or in small teams. They don't have time to learn Selenium or write Playwright scripts. They just want to know their app works.
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
                  <span>Perfect for you →</span>
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
          Thousands of deploys. Zero "oops" emails to users.
        </motion.p>
      </div>
    </section>
  )
}
