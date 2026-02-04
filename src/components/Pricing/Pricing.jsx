import { Check, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import './Pricing.css'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying Axiom on a personal project.',
    features: [
      '3 recorded tests',
      '50 runs / month',
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
    description: 'For teams shipping regularly and needing more coverage.',
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
    description: 'For growing teams that need collaboration and scale.',
    features: [
      'Everything in Pro',
      '5 team members',
      'Shared test library',
      'CI/CD integration',
      'Custom domains',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
}

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
            Simple pricing, no surprises
          </h2>
          <p className="section-header__description">
            Start free. Upgrade when you need more power.
          </p>
        </motion.div>

        <motion.div 
          className="pricing__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`pricing__card ${plan.popular ? 'popular' : ''}`}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 } 
              }}
            >
              {plan.popular && (
                <div className="pricing__badge">
                  <Sparkles size={14} />
                  Most Popular
                </div>
              )}
              <div className="pricing__header">
                <h3 className="pricing__name">{plan.name}</h3>
                <div className="pricing__price">
                  {plan.price}
                  <span>/{plan.period}</span>
                </div>
                <p className="pricing__description">{plan.description}</p>
              </div>
              <ul className="pricing__features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button 
                className={`pricing__cta ${plan.popular ? 'btn btn--primary' : 'btn btn--secondary'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
