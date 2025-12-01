
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-grid-full">
        
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
