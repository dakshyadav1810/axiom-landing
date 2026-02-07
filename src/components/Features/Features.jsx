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
    title: 'Flow recording',
    description: 'Recorded flows you can rerun on demand to validate behavior.'
  },
  {
    SVG: ElementResolutionSVG,
    title: 'Change-tolerant detection',
    description: 'Designed to stay stable through common UI changes like renaming buttons or adjusting layout.'
  },
  {
    SVG: ChaosTestingSVG,
    title: 'Real-world conditions',
    description: 'Run flows under controlled conditions like slow networks and different screen sizes.'
  },
  {
    SVG: TestReportsSVG,
    title: 'Clear evidence on failure',
    description: 'Screenshots, recordings, and context when something fails.'
  },
  {
    SVG: FixSuggestionsSVG,
    title: 'Actionable suggestions',
    description: 'Clear suggestions based on where and how the flow failed.'
  },
  {
    SVG: ScheduledRunsSVG,
    title: 'On-demand runs',
    description: 'Scale runs across many browser sessions when needed.'
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
            Everything you need. Nothing you don't.
          </h2>
          <p className="section-header__description">
            Practical tools for real testing. No enterprise overhead.
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
