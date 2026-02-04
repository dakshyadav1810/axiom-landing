import { 
  Video, 
  Target, 
  Zap, 
  FileText, 
  Lightbulb,
  Repeat
} from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: Video,
    title: 'Manual flow recording',
    description: 'Record user journeys by clicking through your app. No code, no selectors, no configuration.'
  },
  {
    icon: Target,
    title: 'Smart element resolution',
    description: 'Axiom finds elements intelligently, even when IDs change or DOM structure shifts.'
  },
  {
    icon: Zap,
    title: 'Chaos testing profiles',
    description: 'Simulate slow networks, mobile viewports, and edge conditions automatically.'
  },
  {
    icon: FileText,
    title: 'Clear test reports',
    description: 'Every run produces a detailed report with screenshots, timings, and failure context.'
  },
  {
    icon: Lightbulb,
    title: 'Actionable fix suggestions',
    description: 'When tests fail, get specific, copyable suggestions to resolve the issue.'
  },
  {
    icon: Repeat,
    title: 'Scheduled test runs',
    description: 'Run tests on a schedule or trigger them from CI. Always know your app is working.'
  }
]

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <span className="section-header__label">Features</span>
          <h2 className="section-header__title">
            Built for how you actually work
          </h2>
          <p className="section-header__description">
            Everything you need to test with confidence—nothing you don't.
          </p>
        </div>

        <div className="features__grid grid grid--3">
          {features.map((feature, index) => (
            <div key={index} className="features__card card">
              <div className="features__icon">
                <feature.icon size={22} />
              </div>
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
