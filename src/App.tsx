import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Lab from './pages/Lab'
import ProjectDetail from './pages/ProjectDetail'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [progress, setProgress] = useState<number>(1)
  const [showPreloader, setShowPreloader] = useState<boolean>(true)
  const [fadeOut, setFadeOut] = useState<boolean>(false)
  const [appVisible, setAppVisible] = useState<boolean>(false)

  useEffect(() => {
    const DURATION = 5000
    let rafId: number | null = null
    let start: number | null = null
    let loaded = false
    let minElapsed = false

    const onLoad = () => {
      loaded = true
      // only finish if we've also reached the minimum duration
      if (minElapsed) finish()
    }

    const finish = () => {
      // ensure progress shows 100% before fade
      setProgress(100)
      // make the app content visible so it can animate in while preloader fades
      setAppVisible(true)
      setTimeout(() => setFadeOut(true), 250)
      setTimeout(() => setShowPreloader(false), 800)
      document.documentElement.style.overflow = ''
    }

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const clamped = Math.min(elapsed, DURATION)
      
      // Piecewise: 0-70% in 2s, 70-100% in 3s (total 5s)
      let rawPct = 0
      if (clamped < 2000) {
        rawPct = (clamped / 2000) * 70
      } else {
        rawPct = 70 + ((clamped - 2000) / 3000) * 30
      }
      
      const pct = Math.min(100, Math.max(1, Math.round(rawPct)))
      setProgress(pct)

      if (elapsed < DURATION) {
        rafId = requestAnimationFrame(step)
      } else {
        minElapsed = true
        // if window already loaded, finish now
        if (document.readyState === 'complete' || loaded) {
          finish()
        }
      }
    }

    // block scrolling while preloader is shown
    document.documentElement.style.overflow = 'hidden'

    // start animation
    rafId = requestAnimationFrame(step)

    // finish when window load occurs (but only after duration)
    if (document.readyState === 'complete') {
      loaded = true
    } else {
      window.addEventListener('load', onLoad, { once: true })
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      document.documentElement.style.overflow = ''
      window.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <>
      {showPreloader && (
        <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`} aria-hidden={!showPreloader}>
          <div className="preloader-inner">
            <div className="progress-text progress-center">{Math.round(progress)}%</div>
          </div>
        </div>
      )}

      <div className={`app-content ${showPreloader ? 'hidden-behind' : ''} ${appVisible ? 'ease-in' : ''}`}>
        <div className='container'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/lab" element={<Lab />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
