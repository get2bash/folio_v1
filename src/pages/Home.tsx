
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { useEffect, useRef } from 'react'

export default function Home() {
  const videoRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!videoRef.current || !containerRef.current) {
        ticking = false;
        return
      }

      // Disable transition on mobile and let CSS handle full width
      if (window.innerWidth <= 768) {
        videoRef.current.style.transform = ''
        videoRef.current.style.borderRadius = ''
        ticking = false;
        return
      }

      const scrollY = window.scrollY
      const maxScroll = 300 // Scroll distance to reach full width
      const progress = Math.min(scrollY / maxScroll, 1)
      
      const containerWidth = containerRef.current.offsetWidth
      const windowWidth = window.innerWidth
      
      // Calculate scale to fill screen width
      const maxScale = windowWidth / containerWidth
      const scale = 1 + (maxScale - 1) * progress
      
      videoRef.current.style.transform = `scale(${scale})`
      videoRef.current.style.borderRadius = `${8 * (1 - progress)}px`
      ticking = false;
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    
    // Initial calculation
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <>
      <main className='hero'>
        <h1>Brand & Product Designer</h1>
        <p>Transforming brand visions into high-impact digital experiences. 
          I focus on building functional, user-centric web designs that 
          elevate brand identity and drive engagement.
        </p>
      </main>
      <section className="showcase" aria-labelledby="showcase-heading">
        <div className="showcase-inner" ref={containerRef}>
          <div className="video-wrap" ref={videoRef} style={{ willChange: 'transform' }}>
            <img
              className="showcase-video"
              src="/showcase.gif"
              alt="Showcase of work"
            />
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h3>Featured projects</h3>
        <div className="projects-grid">
          <ProjectCard 
            title="DataLead Africa" 
            description="Research and consulting firm providing world-class data analytics and strategic consulting services." 
            image="/datalead-africa/screen_2.jpg"
          />
          <ProjectCard 
            title="3ter Organic Farm" 
            description="A poultry farm specializing in the rearing and production of chickens and turkeys for fresh, high-quality meat." 
            image="/3ter/project_card.jpg"
          />
          <ProjectCard 
            title="Outpost" 
            description="Coming Soon" 
            image="/outpost/project_card.jpg"
          />
          <ProjectCard 
            title="Nexusflow" 
            description="Coming Soon" 
            image="/nexusflow/project_card.jpg"
          />
        </div>
        <Link to="/projects" className="all-projects-btn">All projects</Link>
      </section>

      <section className="about-section">
        <h3>About Me</h3>
        <div className="about-content">
          <div className="about-image">
            <img src="/profile.JPG" alt="Isah Bashir" />
          </div>
          <div className="about-text">
            <p>
            I’m Isah Bashir, a designer who believes that great design 
            should be as functional as it is beautiful. With a career 
            spanning from Graphics Designer at Crosshatch ML to my current 
            role as a Web Designer at Data-Lead Africa, I’ve dedicated 
            myself to building digital products that convert.
            </p>
            <p>
            While my background is rooted in graphic design and brand 
            identity, my curiosity has naturally pulled me deeper into 
            the technical layer of the web. I am currently expanding my 
            expertise into backend development, driven by a desire to 
            understand the logic and systems that power the interfaces 
            I design. This allows me to approach every project with a 
            holistic view of both user experience and technical functionality.
            </p>
          </div>
        </div>
      </section>

      <section className="design-stack-section">
        <h3>Design Stack</h3>
        <div className="stack-grid">
          <div className="stack-item">
            <span className="stack-icon iconify" data-icon="simple-icons:figma"></span>
            <span>Figma</span>
          </div>
          <div className="stack-item">
            <span className="stack-icon iconify" data-icon="simple-icons:adobeillustrator"></span>
            <span>Illustrator</span>
          </div>
          <div className="stack-item">
            <span className="stack-icon iconify" data-icon="simple-icons:adobephotoshop"></span>
            <span>Photoshop</span>
          </div>
          <div className="stack-item">
            <span className="stack-icon iconify" data-icon="simple-icons:framer"></span>
            <span>Framer</span>
          </div>
          <div className="stack-item">
            <span className="stack-icon iconify" data-icon="simple-icons:wordpress"></span>
            <span>WordPress</span>
          </div>
        </div>
      </section>
    </>
  )
}
