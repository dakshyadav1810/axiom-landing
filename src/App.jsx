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

export default function App() {
  return (
    <>
      {/* Underwater background effects */}
      <div className="bg-underwater" />
      <div className="bg-rays" />
      <div className="bg-glow" />
      
      <Navbar />
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
