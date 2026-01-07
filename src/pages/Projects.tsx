
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
          image="/nexusflow/projects_card.jpg"
        />
      </div>
    </div>
  )
}
