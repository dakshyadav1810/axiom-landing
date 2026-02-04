import { Video, Layers, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import './Solution.css'

const solutions = [
  {
    icon: Video,
    title: 'Record real user flows',
    description: 'Capture the journeys that matter—signup, checkout, onboarding—without writing a single line of test code.'
  },
  {
    icon: Layers,
    title: 'Run under real conditions',
    description: 'Test against slow networks, different viewports, and edge cases. See how your app actually behaves.'
  },
  {
    icon: CheckCircle,
    title: 'Get clear outcomes',
    description: 'Pass or fail. No flaky tests, no ambiguous results. Just actionable feedback you can ship on.'
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
            Testing without the overhead
          </h2>
          <p className="section-header__description">
            Axiom lets you validate what matters—without deep QA expertise, 
            brittle scripts, or complex tooling.
          </p>
        </motion.div>

        <motion.div 
          className="solution__grid grid grid--3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              className="solution__card card"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="solution__icon">
                <solution.icon size={24} />
              </div>
              <h3 className="solution__title">{solution.title}</h3>
              <p className="solution__description">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="solution__highlights"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="solution__highlight">
            <CheckCircle size={16} />
            <span>No test writing</span>
          </div>
          <div className="solution__highlight">
            <CheckCircle size={16} />
            <span>No brittle scripts</span>
          </div>
          <div className="solution__highlight">
            <CheckCircle size={16} />
            <span>No QA expertise required</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
