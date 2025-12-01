
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <>
      <main className='hero'>
        <p>Hello! I'm Isah Bashir — a random guy doing things with computer that seem fun at any given time.
I'm currently working as a Web Designer at Data-lead Africa. Before that I worked at Crosshatch ML, designing graphics.
Occasionally I like to learn and write about cloud computing and AWS services as a community builder. Lately I've been learning about creative designing using tools like Three.js and WebGL.</p>
      </main>
      <section className="showcase" aria-labelledby="showcase-heading">
        <div className="showcase-inner">
          <div className="video-wrap">
            <video
              className="showcase-video"
              src="/demo.mp4"
              poster="/poster.jpg"
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag. You can view the video <a href="/demo.mp4">here</a>.
            </video>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h3>Featured projects</h3>
        <div className="projects-grid">
          <ProjectCard 
            title="DataLead Africa" 
            description="Research and consulting firm providing world-class data analytics and strategic consulting services." 
            image="/screen_1.jpg"
          />
          <ProjectCard 
            title="Project Two" 
            description="Innovative solution for modern web applications." 
            image="/poster.jpg"
          />
          <ProjectCard 
            title="Project Three" 
            description="Interactive experience built with WebGL and Three.js." 
            image="/poster.jpg"
          />
          <ProjectCard 
            title="Project Four" 
            description="Cloud infrastructure design and implementation." 
            image="/poster.jpg"
          />
        </div>
        <Link to="/projects" className="all-projects-btn">All projects</Link>
      </section>
    </>
  )
}
