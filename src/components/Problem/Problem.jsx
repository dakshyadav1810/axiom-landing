import { Clock, AlertTriangle, Users } from 'lucide-react'
import './Problem.css'

const problems = [
  {
    icon: Clock,
    title: "Manual testing doesn't scale",
    description: "As you ship faster, manual QA becomes a bottleneck. You can't click through every flow before every deploy."
  },
  {
    icon: AlertTriangle,
    title: 'Traditional QA slows teams down',
    description: 'Test scripts break constantly. Maintaining them takes more time than writing features.'
  },
  {
    icon: Users,
    title: 'Most teams ship without confidence',
    description: 'Bugs get discovered by users, not teams. You find out something broke from a support ticket.'
  }
]

export default function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <div className="section-header">
          <span className="section-header__label">The Problem</span>
          <h2 className="section-header__title">
            Teams ship fast but test late
          </h2>
          <p className="section-header__description">
            Modern development moves quickly. Traditional QA can't keep up—and 
            most teams don't have the time or expertise to do it right.
          </p>
        </div>

        <div className="problem__grid grid grid--3">
          {problems.map((problem, index) => (
            <div key={index} className="problem__card card">
              <div className="problem__icon">
                <problem.icon size={24} />
              </div>
              <h3 className="problem__title">{problem.title}</h3>
              <p className="problem__description">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
