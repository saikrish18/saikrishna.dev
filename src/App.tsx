import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import About from './components/sections/About'
import CoreExpertise from './components/sections/CoreExpertise'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import EngineeringFocus from './components/sections/EngineeringFocus'
import AISection from './components/sections/AISection'
import TechStack from './components/sections/TechStack'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <CoreExpertise />
        <Projects />
        <Experience />
        <EngineeringFocus />
        <AISection />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
