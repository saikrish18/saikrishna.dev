import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import BackToTop from './components/layout/BackToTop'
import { useScrollToHashOnLoad } from './hooks/useScrollToHashOnLoad'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import About from './components/sections/About'
import CoreExpertise from './components/sections/CoreExpertise'
import Experience from './components/sections/Experience'
import EngineeringFocus from './components/sections/EngineeringFocus'
import AISection from './components/sections/AISection'
import TechStack from './components/sections/TechStack'
import Contact from './components/sections/Contact'

const Projects = lazy(() => import('./components/sections/Projects'))
const EngineeringLab = lazy(() => import('./components/sections/EngineeringLab'))

function SectionFallback() {
  return (
    <div className="flex min-h-[420px] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]" />
    </div>
  )
}

export default function App() {
  useScrollToHashOnLoad()

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <ScrollProgress />
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
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Experience />
        <EngineeringFocus />
        <AISection />
        <Suspense fallback={<SectionFallback />}>
          <EngineeringLab />
        </Suspense>
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
