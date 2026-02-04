import { 
  Video, 
  Target, 
  Zap, 
  FileText, 
  Lightbulb,
  Repeat
} from 'lucide-react'
import { motion } from 'framer-motion'
import './Features.css'

const features = [
  {
    icon: Video,
    title: 'Manual flow recording',
    description: 'Record user journeys by clicking through your app. No code, no selectors, no configuration.'
  },
  {
    icon: Target,
    title: 'Smart element resolution',
    description: 'Axiom finds elements intelligently, even when IDs change or DOM structure shifts.'
  },
  {
    icon: Zap,
    title: 'Chaos testing profiles',
    description: 'Simulate slow networks, mobile viewports, and edge conditions automatically.'
  },
  {
    icon: FileText,
    title: 'Clear test reports',
    description: 'Every run produces a detailed report with screenshots, timings, and failure context.'
  },
  {
    icon: Lightbulb,
    title: 'Actionable fix suggestions',
    description: 'When tests fail, get specific, copyable suggestions to resolve the issue.'
  },
  {
    icon: Repeat,
    title: 'Scheduled test runs',
    description: 'Run tests on a schedule or trigger them from CI. Always know your app is working.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="features__glow" />
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">Features</span>
          <h2 className="section-header__title">
            Built for how you actually work
          </h2>
          <p className="section-header__description">
            Everything you need to test with confidence—nothing you don't.
          </p>
        </motion.div>

        <motion.div 
          className="features__grid grid grid--3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="features__card card"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                borderColor: 'rgba(48, 221, 190, 0.3)',
                transition: { duration: 0.3 } 
              }}
            >
              <div className="features__icon">
                <feature.icon size={22} />
              </div>
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
