import StarField from './components/StarField'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import QuickStart from './components/QuickStart'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import SixGates from './components/SixGates'
import Flywheel from './components/Flywheel'
import Commands from './components/Commands'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Background effects */}
      <StarField count={80} />

      {/* Main content */}
      <main>
        <Hero />
        <VideoSection />
        <QuickStart />
        <Problem />
        <HowItWorks />
        <SixGates />
        <Flywheel />
        <Commands />
      </main>

      <Footer />
    </>
  )
}

export default App
