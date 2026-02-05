// Custom animated SVG illustrations for each feature

// 1. Flow Recording - Browser with cursor path
export function FlowRecordingSVG() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="feature-svg">
      {/* Browser window frame */}
      <rect x="20" y="10" width="240" height="140" rx="8" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="rgba(48, 221, 190, 0.02)" />
      <line x1="20" y1="30" x2="260" y2="30" stroke="rgba(48, 221, 190, 0.2)" strokeWidth="1" />
      
      {/* Browser dots */}
      <circle cx="35" cy="20" r="4" fill="rgba(255, 95, 87, 0.6)" />
      <circle cx="50" cy="20" r="4" fill="rgba(254, 188, 46, 0.6)" />
      <circle cx="65" cy="20" r="4" fill="rgba(40, 200, 64, 0.6)" />
      
      {/* Clickable elements */}
      <rect x="40" y="50" width="60" height="24" rx="4" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.05)" className="feature-svg__element feature-svg__element--1" />
      <rect x="140" y="70" width="80" height="30" rx="4" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.05)" className="feature-svg__element feature-svg__element--2" />
      <rect x="80" y="115" width="100" height="24" rx="4" stroke="rgba(48, 221, 190, 0.6)" strokeWidth="1.5" fill="rgba(48, 221, 190, 0.1)" className="feature-svg__element feature-svg__element--3" />
      
      {/* Cursor path */}
      <path 
        d="M70 62 Q105 50 180 85 Q200 100 130 127" 
        stroke="rgba(48, 221, 190, 0.3)" 
        strokeWidth="1.5" 
        strokeDasharray="4 4"
        fill="none"
        className="feature-svg__path"
      />
      
      {/* Path dots */}
      <circle cx="70" cy="62" r="4" fill="rgba(48, 221, 190, 0.6)" className="feature-svg__dot feature-svg__dot--1" />
      <circle cx="180" cy="85" r="4" fill="rgba(48, 221, 190, 0.6)" className="feature-svg__dot feature-svg__dot--2" />
      <circle cx="130" cy="127" r="4" fill="rgba(48, 221, 190, 0.8)" className="feature-svg__dot feature-svg__dot--3" />
      
      {/* Animated cursor */}
      <g className="feature-svg__cursor">
        <path d="M70 55 L70 72 L77 67 L82 75 L85 73 L80 65 L88 65 Z" fill="rgba(48, 221, 190, 0.9)" />
      </g>
    </svg>
  )
}

// 2. Smart Element Resolution - DOM tree with targeting
export function ElementResolutionSVG() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="feature-svg">
      {/* DOM tree structure */}
      <rect x="110" y="15" width="60" height="24" rx="3" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="rgba(48, 221, 190, 0.03)" />
      
      {/* Tree lines */}
      <path d="M140 39 L140 50 L80 50 L80 60" stroke="rgba(48, 221, 190, 0.2)" strokeWidth="1" />
      <path d="M140 39 L140 50 L200 50 L200 60" stroke="rgba(48, 221, 190, 0.2)" strokeWidth="1" />
      
      {/* Second level */}
      <rect x="50" y="60" width="60" height="20" rx="3" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="rgba(48, 221, 190, 0.03)" />
      <rect x="170" y="60" width="60" height="20" rx="3" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="rgba(48, 221, 190, 0.03)" />
      
      {/* Third level lines */}
      <path d="M80 80 L80 90 L50 90 L50 100" stroke="rgba(48, 221, 190, 0.2)" strokeWidth="1" />
      <path d="M80 80 L80 90 L110 90 L110 100" stroke="rgba(48, 221, 190, 0.2)" strokeWidth="1" />
      <path d="M200 80 L200 90 L170 90 L170 100" stroke="rgba(48, 221, 190, 0.2)" strokeWidth="1" />
      <path d="M200 80 L200 90 L230 90 L230 100" stroke="rgba(48, 221, 190, 0.2)" strokeWidth="1" />
      
      {/* Third level nodes */}
      <rect x="30" y="100" width="40" height="18" rx="3" stroke="rgba(48, 221, 190, 0.25)" strokeWidth="1" fill="rgba(48, 221, 190, 0.02)" />
      <rect x="90" y="100" width="40" height="18" rx="3" stroke="rgba(48, 221, 190, 0.25)" strokeWidth="1" fill="rgba(48, 221, 190, 0.02)" />
      <rect x="150" y="100" width="40" height="18" rx="3" stroke="rgba(48, 221, 190, 0.25)" strokeWidth="1" fill="rgba(48, 221, 190, 0.02)" />
      
      {/* Target node - highlighted */}
      <rect x="210" y="100" width="40" height="18" rx="3" stroke="rgba(48, 221, 190, 0.8)" strokeWidth="1.5" fill="rgba(48, 221, 190, 0.15)" className="feature-svg__target-node" />
      
      {/* Targeting crosshair */}
      <g className="feature-svg__crosshair">
        <circle cx="230" cy="109" r="20" stroke="rgba(48, 221, 190, 0.6)" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
        <circle cx="230" cy="109" r="12" stroke="rgba(48, 221, 190, 0.8)" strokeWidth="1" fill="none" />
        <line x1="230" y1="89" x2="230" y2="97" stroke="rgba(48, 221, 190, 0.8)" strokeWidth="1.5" />
        <line x1="230" y1="121" x2="230" y2="129" stroke="rgba(48, 221, 190, 0.8)" strokeWidth="1.5" />
        <line x1="210" y1="109" x2="218" y2="109" stroke="rgba(48, 221, 190, 0.8)" strokeWidth="1.5" />
        <line x1="242" y1="109" x2="250" y2="109" stroke="rgba(48, 221, 190, 0.8)" strokeWidth="1.5" />
      </g>
      
      {/* Found indicator */}
      <circle cx="230" cy="109" r="4" fill="rgba(48, 221, 190, 0.9)" className="feature-svg__found-pulse" />
    </svg>
  )
}

// 3. Chaos Testing - Multi-device with interference
export function ChaosTestingSVG() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="feature-svg">
      {/* Desktop */}
      <rect x="20" y="30" width="80" height="55" rx="4" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.03)" />
      <rect x="45" y="85" width="30" height="4" rx="2" fill="rgba(48, 221, 190, 0.3)" />
      <rect x="35" y="89" width="50" height="8" rx="2" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="none" />
      
      {/* Tablet */}
      <rect x="115" y="35" width="50" height="70" rx="4" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.03)" />
      <circle cx="140" cy="98" r="3" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="none" />
      
      {/* Mobile */}
      <rect x="180" y="45" width="32" height="58" rx="4" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.03)" />
      <rect x="190" y="48" width="12" height="3" rx="1" fill="rgba(48, 221, 190, 0.2)" />
      <circle cx="196" cy="96" r="3" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="none" />
      
      {/* Signal waves - interference pattern */}
      <g className="feature-svg__waves">
        <path d="M230 50 Q240 45 250 50 Q260 55 270 50" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1.5" fill="none" className="feature-svg__wave feature-svg__wave--1" />
        <path d="M230 65 Q240 60 250 65 Q260 70 270 65" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1.5" fill="none" className="feature-svg__wave feature-svg__wave--2" />
        <path d="M230 80 Q240 75 250 80 Q260 85 270 80" stroke="rgba(48, 221, 190, 0.2)" strokeWidth="1.5" fill="none" className="feature-svg__wave feature-svg__wave--3" />
      </g>
      
      {/* Signal bars */}
      <g className="feature-svg__signal-bars">
        <rect x="235" y="105" width="6" height="12" rx="1" fill="rgba(48, 221, 190, 0.6)" className="feature-svg__bar feature-svg__bar--1" />
        <rect x="245" y="100" width="6" height="17" rx="1" fill="rgba(48, 221, 190, 0.5)" className="feature-svg__bar feature-svg__bar--2" />
        <rect x="255" y="95" width="6" height="22" rx="1" fill="rgba(48, 221, 190, 0.4)" className="feature-svg__bar feature-svg__bar--3" />
        <rect x="265" y="90" width="6" height="27" rx="1" fill="rgba(48, 221, 190, 0.3)" className="feature-svg__bar feature-svg__bar--4" />
      </g>
      
      {/* Chaos indicator */}
      <text x="232" y="140" fill="rgba(48, 221, 190, 0.5)" fontSize="10" fontFamily="monospace">3G</text>
    </svg>
  )
}

// 4. Test Reports - Document with checkmarks
export function TestReportsSVG() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="feature-svg">
      {/* Main document */}
      <rect x="70" y="10" width="140" height="140" rx="6" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="rgba(48, 221, 190, 0.02)" />
      
      {/* Document header */}
      <rect x="85" y="25" width="80" height="8" rx="2" fill="rgba(48, 221, 190, 0.15)" />
      <rect x="85" y="38" width="50" height="4" rx="1" fill="rgba(48, 221, 190, 0.08)" />
      
      {/* Divider */}
      <line x1="85" y1="52" x2="195" y2="52" stroke="rgba(48, 221, 190, 0.1)" strokeWidth="1" />
      
      {/* Test items with checkmarks */}
      <g className="feature-svg__check-item feature-svg__check-item--1">
        <rect x="85" y="62" width="12" height="12" rx="2" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.05)" />
        <path d="M88 68 L91 71 L95 65" stroke="rgba(48, 221, 190, 0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feature-svg__checkmark" />
        <rect x="105" y="65" width="85" height="6" rx="2" fill="rgba(48, 221, 190, 0.1)" />
      </g>
      
      <g className="feature-svg__check-item feature-svg__check-item--2">
        <rect x="85" y="82" width="12" height="12" rx="2" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.05)" />
        <path d="M88 88 L91 91 L95 85" stroke="rgba(48, 221, 190, 0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feature-svg__checkmark" />
        <rect x="105" y="85" width="70" height="6" rx="2" fill="rgba(48, 221, 190, 0.1)" />
      </g>
      
      <g className="feature-svg__check-item feature-svg__check-item--3">
        <rect x="85" y="102" width="12" height="12" rx="2" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.05)" />
        <path d="M88 108 L91 111 L95 105" stroke="rgba(48, 221, 190, 0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feature-svg__checkmark" />
        <rect x="105" y="105" width="60" height="6" rx="2" fill="rgba(48, 221, 190, 0.1)" />
      </g>
      
      {/* Progress bar */}
      <rect x="85" y="125" width="110" height="8" rx="4" stroke="rgba(48, 221, 190, 0.2)" strokeWidth="1" fill="rgba(48, 221, 190, 0.03)" />
      <rect x="86" y="126" width="0" height="6" rx="3" fill="rgba(48, 221, 190, 0.6)" className="feature-svg__progress-fill" />
      
      {/* Percentage */}
      <text x="175" y="145" fill="rgba(48, 221, 190, 0.6)" fontSize="10" fontFamily="monospace" className="feature-svg__percentage">100%</text>
    </svg>
  )
}

// 5. Fix Suggestions - Code block with highlight
export function FixSuggestionsSVG() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="feature-svg">
      {/* Code editor frame */}
      <rect x="30" y="15" width="220" height="130" rx="6" stroke="rgba(48, 221, 190, 0.3)" strokeWidth="1" fill="rgba(48, 221, 190, 0.02)" />
      
      {/* Editor header */}
      <rect x="30" y="15" width="220" height="24" rx="6" fill="rgba(48, 221, 190, 0.05)" />
      <circle cx="45" cy="27" r="4" fill="rgba(255, 95, 87, 0.5)" />
      <circle cx="58" cy="27" r="4" fill="rgba(254, 188, 46, 0.5)" />
      <circle cx="71" cy="27" r="4" fill="rgba(40, 200, 64, 0.5)" />
      
      {/* Line numbers */}
      <text x="40" y="55" fill="rgba(48, 221, 190, 0.3)" fontSize="9" fontFamily="monospace">1</text>
      <text x="40" y="70" fill="rgba(48, 221, 190, 0.3)" fontSize="9" fontFamily="monospace">2</text>
      <text x="40" y="85" fill="rgba(48, 221, 190, 0.3)" fontSize="9" fontFamily="monospace">3</text>
      <text x="40" y="100" fill="rgba(48, 221, 190, 0.3)" fontSize="9" fontFamily="monospace">4</text>
      <text x="40" y="115" fill="rgba(48, 221, 190, 0.3)" fontSize="9" fontFamily="monospace">5</text>
      <text x="40" y="130" fill="rgba(48, 221, 190, 0.3)" fontSize="9" fontFamily="monospace">6</text>
      
      {/* Code lines */}
      <rect x="55" y="48" width="80" height="6" rx="1" fill="rgba(48, 221, 190, 0.1)" />
      <rect x="55" y="63" width="120" height="6" rx="1" fill="rgba(48, 221, 190, 0.1)" />
      
      {/* Highlighted error line */}
      <rect x="52" y="75" width="190" height="14" rx="2" fill="rgba(255, 107, 107, 0.1)" className="feature-svg__error-line" />
      <rect x="55" y="78" width="100" height="6" rx="1" fill="rgba(255, 107, 107, 0.3)" />
      
      <rect x="55" y="93" width="90" height="6" rx="1" fill="rgba(48, 221, 190, 0.1)" />
      <rect x="55" y="108" width="70" height="6" rx="1" fill="rgba(48, 221, 190, 0.1)" />
      <rect x="55" y="123" width="40" height="6" rx="1" fill="rgba(48, 221, 190, 0.1)" />
      
      {/* Fix suggestion popup */}
      <g className="feature-svg__suggestion-popup">
        <rect x="160" y="68" width="85" height="40" rx="4" stroke="rgba(48, 221, 190, 0.5)" strokeWidth="1" fill="rgba(10, 12, 16, 0.95)" />
        <text x="170" y="82" fill="rgba(48, 221, 190, 0.7)" fontSize="8" fontFamily="monospace">💡 Fix:</text>
        <rect x="170" y="88" width="65" height="12" rx="2" fill="rgba(48, 221, 190, 0.15)" />
        <path d="M200 94 L205 94 L202.5 99 Z" fill="rgba(48, 221, 190, 0.5)" className="feature-svg__arrow" />
      </g>
    </svg>
  )
}

// 6. Scheduled Runs - Clock with test markers
export function ScheduledRunsSVG() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="feature-svg">
      {/* Outer clock ring */}
      <circle cx="140" cy="80" r="60" stroke="rgba(48, 221, 190, 0.2)" strokeWidth="1" fill="none" />
      <circle cx="140" cy="80" r="50" stroke="rgba(48, 221, 190, 0.15)" strokeWidth="1" fill="rgba(48, 221, 190, 0.02)" />
      
      {/* Hour markers */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <line 
          key={i}
          x1={140 + 45 * Math.cos((angle - 90) * Math.PI / 180)}
          y1={80 + 45 * Math.sin((angle - 90) * Math.PI / 180)}
          x2={140 + 50 * Math.cos((angle - 90) * Math.PI / 180)}
          y2={80 + 50 * Math.sin((angle - 90) * Math.PI / 180)}
          stroke="rgba(48, 221, 190, 0.3)"
          strokeWidth="2"
        />
      ))}
      
      {/* Test schedule markers - pulsing */}
      <circle cx={140 + 55 * Math.cos(-60 * Math.PI / 180)} cy={80 + 55 * Math.sin(-60 * Math.PI / 180)} r="6" fill="rgba(48, 221, 190, 0.3)" stroke="rgba(48, 221, 190, 0.6)" strokeWidth="1" className="feature-svg__schedule-marker feature-svg__schedule-marker--1" />
      <circle cx={140 + 55 * Math.cos(30 * Math.PI / 180)} cy={80 + 55 * Math.sin(30 * Math.PI / 180)} r="6" fill="rgba(48, 221, 190, 0.3)" stroke="rgba(48, 221, 190, 0.6)" strokeWidth="1" className="feature-svg__schedule-marker feature-svg__schedule-marker--2" />
      <circle cx={140 + 55 * Math.cos(150 * Math.PI / 180)} cy={80 + 55 * Math.sin(150 * Math.PI / 180)} r="6" fill="rgba(48, 221, 190, 0.3)" stroke="rgba(48, 221, 190, 0.6)" strokeWidth="1" className="feature-svg__schedule-marker feature-svg__schedule-marker--3" />
      
      {/* Clock hands */}
      <line x1="140" y1="80" x2="140" y2="45" stroke="rgba(48, 221, 190, 0.6)" strokeWidth="2" strokeLinecap="round" className="feature-svg__minute-hand" />
      <line x1="140" y1="80" x2="165" y2="95" stroke="rgba(48, 221, 190, 0.8)" strokeWidth="2.5" strokeLinecap="round" className="feature-svg__hour-hand" />
      
      {/* Center dot */}
      <circle cx="140" cy="80" r="4" fill="rgba(48, 221, 190, 0.8)" />
      
      {/* CI/CD badge */}
      <rect x="195" y="100" width="50" height="20" rx="4" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1" fill="rgba(48, 221, 190, 0.05)" />
      <text x="207" y="114" fill="rgba(48, 221, 190, 0.7)" fontSize="9" fontFamily="monospace">CI/CD</text>
      
      {/* Recurring arrow */}
      <path d="M210 70 A25 25 0 0 1 235 80" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1.5" fill="none" className="feature-svg__recurring" />
      <path d="M232 75 L237 80 L232 85" stroke="rgba(48, 221, 190, 0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
