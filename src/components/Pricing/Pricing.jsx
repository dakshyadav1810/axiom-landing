import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './Pricing.css'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'For small projects.',
    features: [
      '3 runs per month',
      'Up to 3 flows',
      'Basic variation testing',
      'Single parallel run'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Standard',
    price: '$50',
    period: 'month',
    description: 'For teams shipping regularly.',
    features: [
      '10 runs per month',
      'Unlimited flows',
      'Parallel execution',
      'Failure classification',
      'Flake detection',
      'Selector healing'
    ],
    cta: 'Start Free',
    popular: true
  },
  {
    name: 'Team',
    price: 'Custom',
    period: '',
    description: 'For agencies and scaling teams.',
    features: [
      'Self-hosted runners',
      'SSO & Audit logs',
      'Dedicated support',
      'Custom integrations'
    ],
    cta: 'Contact Us',
    popular: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">Pricing</span>
          <h2 className="section-header__title">
            Start free. Upgrade when needed.
          </h2>
          <p className="section-header__description">
            No contracts. No setup fees.
          </p>
        </motion.div>

        <motion.div
          className="pricing__grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing__card ${plan.popular ? 'pricing__card--popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <div className="pricing__header">
                <h3 className="pricing__name">{plan.name}</h3>
                <div className="pricing__price-row">
                  <span className="pricing__price">{plan.price}</span>
                  {plan.period && <span className="pricing__period">/{plan.period}</span>}
                </div>
                <p className="pricing__description">{plan.description}</p>
              </div>

              <ul className="pricing__features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`pricing__cta ${plan.popular ? 'pricing__cta--primary' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicator */}

      </div>
    </section>
  )
}
