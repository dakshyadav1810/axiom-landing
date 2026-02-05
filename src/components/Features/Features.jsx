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
    title: 'Point and click recording',
    description: 'Record tests by using your app. No code. No weird configuration files. Just click around like you normally would.'
  },
  {
    SVG: ElementResolutionSVG,
    title: 'Tests that actually survive',
    description: 'Your UI changes. Class names change. IDs change. Our tests adapt. They find the button even when you rename it.'
  },
  {
    SVG: ChaosTestingSVG,
    title: 'Chaos testing profiles',
    description: 'Slow 3G? Tiny mobile screen? Flaky API? Test all of that automatically without writing a single line of code.'
  },
  {
    SVG: TestReportsSVG,
    title: 'Reports you can actually use',
    description: 'When something fails, you get screenshots, timings, and exactly what went wrong. Not a cryptic stack trace.'
  },
  {
    SVG: FixSuggestionsSVG,
    title: 'Fix suggestions that work',
    description: 'We don\'t just tell you it broke. We tell you why and how to fix it. Copy, paste, deploy.'
  },
  {
    SVG: ScheduledRunsSVG,
    title: 'Run on autopilot',
    description: 'Set it and forget it. Tests run on a schedule or trigger from your CI. You only hear from us when something breaks.'
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
            The stuff that makes this actually useful
          </h2>
          <p className="section-header__description">
            We built Axiom because existing tools either require a PhD in testing frameworks or break every time you push. Here's what we got right.
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
