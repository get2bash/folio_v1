
import { useParams } from 'react-router-dom'
import './ProjectDetail.css'

const projects: Record<string, {
  banner: string;
  role: string;
  year: string;
  client: string;
  description: string;
  gallery?: string[];
}> = {
  'datalead-africa': {
    banner: '/datalead-africa/screen.jpg',
    role: 'Strategy and Website Design',
    year: '2025',
    client: 'DataLead Africa',
    description: 'Data-Lead Africa stands at the forefront of data consulting and training in the region. The goal of this project was to translate their complex technical expertise into an accessible, user-friendly digital experience. The new design focuses on establishing authority while ensuring intuitive navigation for businesses seeking consultancy and individuals seeking training.',
    gallery: [
      '/datalead-africa/screen_2.svg',
      '/datalead-africa/screen_3.svg',
      '/datalead-africa/screen_4.svg'
    ]
  },
  '3ter-organic-farm': {
    banner: '/3ter/screen_2.jpg',
    role: 'Brand Identity and Web Design',
    year: '2025',
    client: '3ter Organic Farm',
    description: '3ter Organic Farm is a sustainable agriculture initiative focused on bringing fresh, organic produce directly to consumers. The digital platform was designed to showcase their farming practices, connect with the community, and facilitate direct-to-consumer sales through an intuitive and earthy interface. As a poultry farm specializing in both chicken and turkey, the challenge was to create a cohesive mark that represented both birds while maintaining a clean, modern, and professional aesthetic suitable for packaging and uniforms.',
  }
}

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
            {project.gallery[0] && <img src={project.gallery[0]} alt="Gallery 1" />}
            <div className="gallery-row">
              {project.gallery.slice(1).map((img, i) => (
                <img key={i} src={img} alt={`Gallery ${i + 2}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
