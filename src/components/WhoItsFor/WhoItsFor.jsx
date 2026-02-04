import { Rocket, Users, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import './WhoItsFor.css'

const audiences = [
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Ship faster without sacrificing quality. No QA team required—just record, run, and go.',
    features: ['Quick setup', 'No overhead', 'Scale as you grow']
  },
  {
    icon: Users,
    title: 'Product Teams',
    description: 'Validate features without waiting for engineering. Keep your release cycle tight.',
    features: ['No code required', 'PM-friendly', 'Fast feedback loops']
  },
  {
    icon: Briefcase,
    title: 'Agencies',
    description: 'Deliver client work with confidence. Prove that everything works before handoff.',
    features: ['Client-ready reports', 'Multi-project support', 'White-label ready']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}

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
          <span className="section-header__label">Who It's For</span>
          <h2 className="section-header__title">
            Built for teams that move fast
          </h2>
          <p className="section-header__description">
            Whether you're a solo founder or a growing product team, 
            Axiom fits into the way you already work.
          </p>
        </motion.div>

        <motion.div 
          className="who-its-for__grid grid grid--3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {audiences.map((audience, index) => (
            <motion.div 
              key={index} 
              className="who-its-for__card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(48, 221, 190, 0.1)',
                transition: { duration: 0.3 } 
              }}
            >
              <div className="who-its-for__icon">
                <audience.icon size={28} />
              </div>
              <h3 className="who-its-for__title">{audience.title}</h3>
              <p className="who-its-for__description">{audience.description}</p>
              <ul className="who-its-for__features">
                {audience.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
