import { Video, Layers, CheckCircle } from 'lucide-react'
import './Solution.css'

const solutions = [
  {
    icon: Video,
    title: 'Record real user flows',
    description: 'Capture the journeys that matter—signup, checkout, onboarding—without writing a single line of test code.'
  },
  {
    icon: Layers,
    title: 'Run under real conditions',
    description: 'Test against slow networks, different viewports, and edge cases. See how your app actually behaves.'
  },
  {
    icon: CheckCircle,
    title: 'Get clear outcomes',
    description: 'Pass or fail. No flaky tests, no ambiguous results. Just actionable feedback you can ship on.'
  }
]

export default function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <div className="section-header">
          <span className="section-header__label">The Solution</span>
          <h2 className="section-header__title">
            Testing without the overhead
          </h2>
          <p className="section-header__description">
            Axiom lets you validate what matters—without deep QA expertise, 
            brittle scripts, or complex tooling.
          </p>
        </div>

        <div className="solution__grid grid grid--3">
          {solutions.map((solution, index) => (
            <div key={index} className="solution__card card">
              <div className="solution__icon">
                <solution.icon size={24} />
              </div>
              <h3 className="solution__title">{solution.title}</h3>
              <p className="solution__description">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="solution__highlights">
          <div className="solution__highlight">
            <CheckCircle size={16} />
            <span>No test writing</span>
          </div>
          <div className="solution__highlight">
            <CheckCircle size={16} />
            <span>No brittle scripts</span>
          </div>
          <div className="solution__highlight">
            <CheckCircle size={16} />
            <span>No QA expertise required</span>
          </div>
        </div>
      </div>
    </section>
  )
}
