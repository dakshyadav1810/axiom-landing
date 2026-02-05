import { motion } from 'framer-motion'
import {
  FlowRecordingSVG,
  ElementResolutionSVG,
  ChaosTestingSVG,
  TestReportsSVG,
  FixSuggestionsSVG,
  ScheduledRunsSVG
} from './FeatureSVGs'
import './Features.css'

const features = [
  {
    SVG: FlowRecordingSVG,
    title: 'Manual flow recording',
    description: 'Record user journeys by clicking through your app. No code, no selectors, no configuration.'
  },
  {
    SVG: ElementResolutionSVG,
    title: 'Smart element resolution',
    description: 'Axiom finds elements intelligently, even when IDs change or DOM structure shifts.'
  },
  {
    SVG: ChaosTestingSVG,
    title: 'Chaos testing profiles',
    description: 'Simulate slow networks, mobile viewports, and edge conditions automatically.'
  },
  {
    SVG: TestReportsSVG,
    title: 'Clear test reports',
    description: 'Every run produces a detailed report with screenshots, timings, and failure context.'
  },
  {
    SVG: FixSuggestionsSVG,
    title: 'Actionable fix suggestions',
    description: 'When tests fail, get specific, copyable suggestions to resolve the issue.'
  },
  {
    SVG: ScheduledRunsSVG,
    title: 'Scheduled test runs',
    description: 'Run tests on a schedule or trigger them from CI. Always know your app is working.'
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
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
}

export default function Features() {
  return (
    <section id="features" className="features">
      {/* Background effects */}
      <div className="features__bg" aria-hidden="true">
        <div className="features__grid-lines" />
      </div>
      
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
          className="features__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="features__card"
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3 } 
              }}
            >
              {/* SVG Visual */}
              <div className="features__visual">
                <feature.SVG />
              </div>
              
              {/* Content */}
              <div className="features__content">
                <h3 className="features__title">{feature.title}</h3>
                <p className="features__description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
