import { Check, X } from 'lucide-react'
import './WhoItsFor.css'

const forItems = [
  'Teams shipping fast',
  'Founders without dedicated QA',
  'Products under active development',
  'Developers using AI-assisted tools',
  'Agencies delivering client projects'
]

const notForItems = [
  'Heavy enterprise QA pipelines',
  'Compliance-grade audit requirements',
  'Teams with full-time QA engineers',
  'Legacy systems with no active development'
]

export default function WhoItsFor() {
  return (
    <section className="who-its-for">
      <div className="container">
        <div className="section-header">
          <span className="section-header__label">Who It's For</span>
          <h2 className="section-header__title">
            Built for speed, not bureaucracy
          </h2>
          <p className="section-header__description">
            Axiom is designed for teams that move fast and need confidence, 
            not checkbox compliance.
          </p>
        </div>

        <div className="who-its-for__grid">
          <div className="who-its-for__card who-its-for__card--for">
            <h3 className="who-its-for__card-title">
              <Check size={20} />
              Perfect for
            </h3>
            <ul className="who-its-for__list">
              {forItems.map((item, index) => (
                <li key={index}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="who-its-for__card who-its-for__card--not-for">
            <h3 className="who-its-for__card-title">
              <X size={20} />
              Not designed for
            </h3>
            <ul className="who-its-for__list">
              {notForItems.map((item, index) => (
                <li key={index}>
                  <X size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
