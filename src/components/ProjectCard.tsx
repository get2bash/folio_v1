
import './ProjectCard.css'

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
