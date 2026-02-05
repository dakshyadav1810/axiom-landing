import { Check, Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './Pricing.css'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Try Axiom on a side project. No credit card required.',
    features: [
      '3 recorded tests',
      '50 test runs / month',
      'Basic reports',
      'Community support'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For indie hackers and small teams shipping regularly.',
    features: [
      'Unlimited tests',
      'Unlimited runs',
      'Chaos testing profiles',
      'Scheduled runs',
      'AI fix suggestions',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Team',
    price: '$99',
    period: 'per month',
    description: 'For growing teams that need collaboration.',
    features: [
      'Everything in Pro',
      '5 team members',
      'Shared test library',
      'CI/CD integration',
      'Custom domains',
      'SLA guarantee'
    ],
    cta: 'Start Free Trial',
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
            Start free, scale when ready
          </h2>
          <p className="section-header__description">
            No credit card required. Upgrade as your testing needs grow.
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
                  <Sparkles size={12} />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="pricing__header">
                <h3 className="pricing__name">{plan.name}</h3>
                <div className="pricing__price-row">
                  <span className="pricing__price">{plan.price}</span>
                  <span className="pricing__period">/{plan.period}</span>
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
        <motion.p 
          className="pricing__trust"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          14-day free trial on all paid plans • Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}
