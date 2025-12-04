
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = id ? projects[id] : null

  if (!project) {
    return <div className="container" style={{paddingTop: '100px'}}>Project not found</div>
  }

  return (
    <div className="project-detail">
      <div className="project-banner">
        <img src={project.banner} alt="" />
      </div>
      <div className="project-content container">
        <div className="project-info">
          <div className="info-col">
            <h3>Role</h3>
            <p>{project.role}</p>
          </div>
          <div className="info-col">
            <h3>Year</h3>
            <p>{project.year}</p>
          </div>
          <div className="info-col">
            <h3>Client</h3>
            <p>{project.client}</p>
          </div>
        </div>
        <div className="project-description">
          <h3>About the Project</h3>
          <p>{project.description}</p>
        </div>
      </div>

      {project.gallery && (
        <div className="container">
          <div className="project-gallery">
            {/* Screen 2 - Full Width */}
            {project.gallery[0] && <img src={project.gallery[0]} alt="Gallery 1" />}
            
            {/* Screen 3 & 4 - Side by Side */}
            <div className="gallery-row">
              {project.gallery[1] && <img src={project.gallery[1]} alt="Gallery 2" />}
              {project.gallery[2] && <img src={project.gallery[2]} alt="Gallery 3" />}
            </div>

            {/* Screen 5 - Full Width */}
            {project.gallery[3] && <img src={project.gallery[3]} alt="Gallery 4" />}

            {/* Screen 6 & 7 - Side by Side */}
            <div className="gallery-row">
              {project.gallery[4] && <img src={project.gallery[4]} alt="Gallery 5" />}
              {project.gallery[5] && <img src={project.gallery[5]} alt="Gallery 6" />}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
