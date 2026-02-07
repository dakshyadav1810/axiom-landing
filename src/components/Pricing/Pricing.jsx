import { Check, Tag, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './Pricing.css'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Try the interface. See if it fits how you work.',
    features: [
      '1 verification test',
      '1 basic flow (10 steps max)',
      '1 browser session',
      'Community support'
    ],
    cta: 'Join Waitlist',
    popular: false
  },
  {
    name: 'Standard',
    price: '$29',
    originalPrice: '$50',
    period: '',
    description: 'Real testing power. Find bugs before your users do.',
    features: [
      '3 full test runs',
      'Unlimited steps per flow',
      'Scale across many browser sessions',
      'Priority support'
    ],
    cta: 'Join Waitlist',
    popular: true
  },
  {
    name: 'Team',
    price: 'Custom',
    period: '',
    description: 'For teams that need security, control, and support.',
    features: [
      'Self-hosted runners',
      'SSO & Audit logs',
      'Custom integrations',
      'Dedicated support channel'
    ],
    cta: 'Join Waitlist',
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
            Simple pricing. Early access.
          </h2>
          <p className="section-header__description">
            We're still early. Pricing reflects that.
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
              {plan.popular && (
                <div className="pricing__badge">
                  <Tag size={12} />
                  <span>Early bird pricing</span>
                </div>
              )}

              <div className="pricing__header">
                <h3 className="pricing__name">{plan.name}</h3>
                <div className="pricing__price-row">
                  {plan.originalPrice && (
                    <span className="pricing__original-price">{plan.originalPrice}</span>
                  )}
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
