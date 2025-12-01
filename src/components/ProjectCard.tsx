
import { Link } from 'react-router-dom'
import './ProjectCard.css'

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  const isVideo = image.match(/\.(mp4|webm|ogg)$/i);
  // Create a slug from the title for the URL
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link to={`/projects/${slug}`} className="project-card">
      <div className="card-media">
        {isVideo ? (
          <video src={image} autoPlay loop muted playsInline />
        ) : (
          <img src={image} alt={title} />
        )}
      </div>
      <div className="card-overlay">
        <div className="card-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}
