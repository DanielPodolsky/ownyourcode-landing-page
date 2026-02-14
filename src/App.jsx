import StarField from './components/StarField'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Problem from './components/Problem'
import Profiles from './components/Profiles'
import HowItWorks from './components/HowItWorks'
import SixGates from './components/SixGates'
import CustomProfiles from './components/CustomProfiles'
import Flywheel from './components/Flywheel'
import Commands from './components/Commands'
import QuickStart from './components/QuickStart'
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
        <Problem />
        <Profiles />
        <HowItWorks />
        <SixGates />
        <CustomProfiles />
        <Flywheel />
        <Commands />
        <QuickStart />
      </main>

      <Footer />
    </>
  )
}

export default App
