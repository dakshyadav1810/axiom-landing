import { useRef, useEffect, useState } from 'react'
import { Link, MousePointer, Play } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: Link,
    title: 'Point to your app',
    description: 'Paste any deployed URL. Axiom works with any web app, no SDK needed.',
    detail: 'React, Next.js, Vue, or plain HTML. If it runs in a browser, it works.'
  },
  {
    number: '02',
    icon: MousePointer,
    title: 'Show it the flow',
    description: 'Click through signup, checkout, or any critical path. Axiom watches and remembers.',
    detail: 'No selectors to write. No assertions to configure. Just use your app.'
  },
  {
    number: '03',
    icon: Play,
    title: 'Get the result',
    description: 'A clear signal on whether your critical flows are ready before you ship.',
    detail: 'Screenshots, recordings, and context so you know what happened.'
  }
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Update active step based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      // Divide scroll into 3 equal sections
      const stepIndex = Math.min(
        Math.floor(value * steps.length),
        steps.length - 1
      )
      setActiveStep(stepIndex)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Progress through each step
  const stepProgress = useTransform(scrollYProgress, [0, 1], [0, steps.length])

  return (
    <section id="how-it-works" className="how-it-works" ref={containerRef}>
      {/* Sticky container */}
      <div className="how-it-works__sticky">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <span className="section-header__label">How It Works</span>
            <h2 className="section-header__title">
              Three simple steps
            </h2>
          </div>

          {/* Main content area */}
          <div className="how-it-works__main">
            {/* Left: Step indicators */}
            <div className="how-it-works__steps">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`how-it-works__step ${activeStep === index ? 'how-it-works__step--active' : ''} ${activeStep > index ? 'how-it-works__step--complete' : ''}`}
                >
                  <div className="how-it-works__step-indicator">
                    <span className="how-it-works__step-number">{step.number}</span>
                    <motion.div
                      className="how-it-works__step-progress"
                      style={{
                        scaleY: activeStep > index ? 1 :
                          activeStep === index ? useTransform(scrollYProgress,
                            [index / steps.length, (index + 1) / steps.length],
                            [0, 1]
                          ) : 0
                      }}
                    />
                  </div>
                  <div className="how-it-works__step-label">
                    <span className="how-it-works__step-title">{step.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Center: Content panel */}
            <div className="how-it-works__content">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="how-it-works__panel"
                  initial={false}
                  animate={{
                    opacity: activeStep === index ? 1 : 0,
                    y: activeStep === index ? 0 : 20,
                    pointerEvents: activeStep === index ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Icon */}
                  <div className="how-it-works__icon">
                    <step.icon size={28} />
                  </div>

                  {/* Text */}
                  <h3 className="how-it-works__panel-title">{step.title}</h3>
                  <p className="how-it-works__panel-description">{step.description}</p>
                  <p className="how-it-works__panel-detail">{step.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Right: Large Visual illustration */}
            <div className="how-it-works__visual">
              {activeStep === 0 && <ConnectVisual active={true} />}
              {activeStep === 1 && <RecordVisual active={true} />}
              {activeStep === 2 && <RunVisual active={true} />}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="how-it-works__scroll-hint">
            <span>Scroll to explore</span>
            <motion.div
              className="how-it-works__scroll-arrow"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Visual components
function ConnectVisual({ active }) {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="how-it-works__svg">
      <rect x="30" y="30" width="220" height="100" rx="6" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="rgba(48, 221, 190, 0.02)" />
      <rect x="30" y="30" width="220" height="24" rx="6" fill="rgba(48, 221, 190, 0.04)" />
      <circle cx="48" cy="42" r="4" fill="rgba(255, 95, 87, 0.5)" />
      <circle cx="62" cy="42" r="4" fill="rgba(254, 188, 46, 0.5)" />
      <circle cx="76" cy="42" r="4" fill="rgba(40, 200, 64, 0.5)" />
      <rect x="100" y="38" width="140" height="8" rx="4" fill="rgba(48, 221, 190, 0.08)" />
      <text x="108" y="45" fill="rgba(48, 221, 190, 0.6)" fontSize="7" fontFamily="monospace">https://yourapp.com</text>
      {active && (
        <motion.path
          d="M140 90 L140 130 L200 130"
          stroke="rgba(48, 221, 190, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      )}
    </svg>
  )
}

function RecordVisual({ active }) {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="how-it-works__svg">
      <rect x="30" y="30" width="220" height="100" rx="4" stroke="rgba(48, 221, 190, 0.25)" strokeWidth="1" fill="rgba(48, 221, 190, 0.01)" />
      <rect x="50" y="55" width="70" height="28" rx="4" stroke="rgba(48, 221, 190, 0.3)" fill="rgba(48, 221, 190, 0.03)" />
      <rect x="140" y="60" width="90" height="18" rx="3" stroke="rgba(48, 221, 190, 0.3)" fill="rgba(48, 221, 190, 0.03)" />
      <rect x="80" y="95" width="120" height="24" rx="4" stroke="rgba(48, 221, 190, 0.4)" fill="rgba(48, 221, 190, 0.06)" />
      {active && (
        <>
          <motion.g
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, 90, 90, 30], y: [0, 15, 50, 50] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
          >
            <path d="M55 48 L55 62 L62 57 L67 65 L70 63 L65 55 L72 55 Z" fill="rgba(48, 221, 190, 0.8)" />
          </motion.g>
          <motion.circle
            cx="235" cy="42" r="6"
            fill="rgba(255, 100, 100, 0.7)"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </>
      )}
    </svg>
  )
}

function RunVisual({ active }) {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="how-it-works__svg">
      <rect x="30" y="25" width="220" height="110" rx="4" stroke="rgba(48, 221, 190, 0.25)" strokeWidth="1" fill="rgba(48, 221, 190, 0.01)" />
      {[0, 1, 2].map((i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0.3 }}
          transition={{ delay: active ? 0.2 + i * 0.3 : 0 }}
        >
          <rect x="50" y={45 + i * 28} width="14" height="14" rx="3" fill="rgba(48, 221, 190, 0.2)" />
          {active && (
            <motion.path
              d={`M53 ${52 + i * 28} L56 ${55 + i * 28} L62 ${49 + i * 28}`}
              stroke="rgba(48, 221, 190, 0.8)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.3 }}
            />
          )}
          <rect x="75" y={49 + i * 28} width={100 - i * 15} height="6" rx="3" fill="rgba(48, 221, 190, 0.08)" />
        </motion.g>
      ))}
    </svg>
  )
}
