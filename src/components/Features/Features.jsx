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
    title: 'Flow Recording',
    description: 'Turn real user journeys into reusable test flows.'
  },
  {
    SVG: ElementResolutionSVG,
    title: 'Resilient Detection',
    description: 'Handles common UI changes like renamed buttons or layout shifts.'
  },
  {
    SVG: ChaosTestingSVG,
    title: 'Real-World Conditions',
    description: 'Run flows on slow networks, different screens, and stress scenarios.'
  },
  {
    SVG: TestReportsSVG,
    title: 'Clear Evidence on Failure',
    description: 'See exactly what happened at every step.'
  },
  {
    SVG: FixSuggestionsSVG,
    title: 'Actionable Insights',
    description: 'See why it failed, not just that it failed.'
  },
  {
    SVG: ScheduledRunsSVG,
    title: 'On-Demand and Scheduled Runs',
    description: 'Run before deploy or whenever you need certainty.'
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
          <span className="section-header__label">What You Get</span>
          <h2 className="section-header__title">
            Everything you need to test with confidence.
          </h2>
          <p className="section-header__description">
            Without enterprise complexity.
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
