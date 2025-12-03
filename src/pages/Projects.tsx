
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-grid-full">
        
        <ProjectCard 
          title="DataLead Africa" 
          description="Research and consulting firm providing world-class data analytics and strategic consulting services." 
          image="/datalead-africa/screen_1.svg"
        />

        <ProjectCard 
          title="3ter Organic Farm" 
          description="A poultry farm specializing in the rearing and production of chickens and turkeys for fresh, high-quality meat." 
          image="/3ter/screen_1.svg"
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
