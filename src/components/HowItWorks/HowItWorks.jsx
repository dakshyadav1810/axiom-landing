import { Link, MousePointer, Play } from 'lucide-react'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: Link,
    title: 'Connect your app',
    description: 'Point Axiom at any deployed URL. No SDKs, no code changes, no infrastructure to manage.'
  },
  {
    number: '02',
    icon: MousePointer,
    title: 'Record the flow',
    description: 'Walk through the user journey once. Axiom captures every interaction and builds a replayable test.'
  },
  {
    number: '03',
    icon: Play,
    title: 'Run and review',
    description: 'Execute tests on demand or on a schedule. Get clear pass/fail results with actionable fixes.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-header__label">How It Works</span>
          <h2 className="section-header__title">
            Three steps to confidence
          </h2>
          <p className="section-header__description">
            No complex setup. No test code to maintain. Just record, run, and ship.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={index} className="how-it-works__step">
              <div className="how-it-works__step-number">{step.number}</div>
              <div className="how-it-works__step-icon">
                <step.icon size={28} />
              </div>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="how-it-works__connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
