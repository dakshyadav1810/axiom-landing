import { Clock, AlertTriangle, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import './Problem.css'

const problems = [
  {
    icon: Clock,
    title: "Manual testing doesn't scale",
    description: "As you ship faster, manual QA becomes a bottleneck. You can't click through every flow before every deploy."
  },
  {
    icon: AlertTriangle,
    title: 'Traditional QA slows teams down',
    description: 'Test scripts break constantly. Maintaining them takes more time than writing features.'
  },
  {
    icon: Users,
    title: 'Most teams ship without confidence',
    description: 'Bugs get discovered by users, not teams. You find out something broke from a support ticket.'
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
}

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
          <span className="section-header__label">The Problem</span>
          <h2 className="section-header__title">
            Teams ship fast but test late
          </h2>
          <p className="section-header__description">
            Modern development moves quickly. Traditional QA can't keep up—and 
            most teams don't have the time or expertise to do it right.
          </p>
        </motion.div>

        <motion.div 
          className="problem__grid grid grid--3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index} 
              className="problem__card card"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="problem__icon">
                <problem.icon size={24} />
              </div>
              <h3 className="problem__title">{problem.title}</h3>
              <p className="problem__description">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
