
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>All Projects</h1>
        <p>A collection of my work in design and development.</p>
      </header>
      
      <div className="projects-grid-full">
        <ProjectCard 
          title="Project One" 
          description="A creative project solving real problems with design." 
          image="/poster.jpg"
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
        <ProjectCard 
          title="Project Five" 
          description="Mobile-first e-commerce platform design." 
          image="/poster.jpg"
        />
        <ProjectCard 
          title="Project Six" 
          description="Data visualization dashboard for analytics." 
          image="/poster.jpg"
        />
      </div>
    </div>
  )
}
