import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Problem from './components/Problem/Problem'
import Solution from './components/Solution/Solution'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Features from './components/Features/Features'
import TestReport from './components/TestReport/TestReport'
import WhoItsFor from './components/WhoItsFor/WhoItsFor'
import Pricing from './components/Pricing/Pricing'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'
import { applyAnimatedGrain } from './utils/noiseGenerator'

export default function App() {
  // Apply high-quality canvas-based grain on mount
  useEffect(() => {
    // opacity: 0.05, fps: 6, grainScale: 0.12 (very fine grain)
    applyAnimatedGrain(0.05, 6, 0.12);
  }, []);

  return (
    <>
      {/* SVG Noise Filter Definition (kept for component-level use) */}
      <svg className="noise-filter-svg" aria-hidden="true">
        <filter id="noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      {/* Underwater background effects */}
      <div className="bg-underwater" />
      <div className="bg-rays" />
      <div className="bg-glow" />

      <Navbar />

      {/* Global architectural margin lines */}
      <div className="page-margin-lines" aria-hidden="true" />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <TestReport />
        <WhoItsFor />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
