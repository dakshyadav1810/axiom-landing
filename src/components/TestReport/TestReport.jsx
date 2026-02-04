import { AlertTriangle, CheckCircle, XCircle, Copy, Clock } from 'lucide-react'
import './TestReport.css'

export default function TestReport() {
  return (
    <section className="test-report">
      <div className="container">
        <div className="section-header">
          <span className="section-header__label">Test Reports</span>
          <h2 className="section-header__title">
            Results you can act on
          </h2>
          <p className="section-header__description">
            Every test run produces a clear, actionable report—not just pass/fail, 
            but exactly what went wrong and how to fix it.
          </p>
        </div>

        <div className="test-report__preview">
          <div className="test-report__window">
            <div className="test-report__header">
              <div className="test-report__header-left">
                <span className="test-report__title">Test Report</span>
                <span className="test-report__meta">
                  <Clock size={14} />
                  Run completed 2 min ago
                </span>
              </div>
              <div className="test-report__score">
                <span className="test-report__score-label">Quality Score</span>
                <span className="test-report__score-value test-report__score-value--warning">72</span>
              </div>
            </div>

            <div className="test-report__warning">
              <AlertTriangle size={18} />
              <div>
                <strong>Do not ship</strong>
                <span>2 critical flows are failing. Review and fix before deploying.</span>
              </div>
            </div>

            <div className="test-report__flows">
              <div className="test-report__flow test-report__flow--passed">
                <CheckCircle size={18} />
                <div className="test-report__flow-info">
                  <span className="test-report__flow-name">User signup flow</span>
                  <span className="test-report__flow-time">1.2s</span>
                </div>
              </div>

              <div className="test-report__flow test-report__flow--passed">
                <CheckCircle size={18} />
                <div className="test-report__flow-info">
                  <span className="test-report__flow-name">Dashboard navigation</span>
                  <span className="test-report__flow-time">0.8s</span>
                </div>
              </div>

              <div className="test-report__flow test-report__flow--failed">
                <XCircle size={18} />
                <div className="test-report__flow-info">
                  <span className="test-report__flow-name">Checkout flow</span>
                  <span className="test-report__flow-time">Failed at step 3</span>
                </div>
              </div>

              <div className="test-report__failure">
                <div className="test-report__failure-header">
                  <span>Payment button not clickable</span>
                </div>
                <p className="test-report__failure-description">
                  The "Complete Purchase" button was obscured by an overlay element. 
                  This may be a z-index issue or the button may be disabled.
                </p>
                <div className="test-report__fix">
                  <div className="test-report__fix-header">
                    <Lightbulb size={14} />
                    <span>Suggested fix</span>
                    <button className="test-report__copy">
                      <Copy size={12} />
                      Copy
                    </button>
                  </div>
                  <code className="test-report__fix-code">
                    .payment-overlay {"{"} z-index: 10; {"}"}<br/>
                    .checkout-button {"{"} z-index: 20; position: relative; {"}"}
                  </code>
                </div>
              </div>

              <div className="test-report__flow test-report__flow--failed">
                <XCircle size={18} />
                <div className="test-report__flow-info">
                  <span className="test-report__flow-name">Password reset</span>
                  <span className="test-report__flow-time">Timeout after 30s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Lightbulb({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  )
}
