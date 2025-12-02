
import { useParams } from 'react-router-dom'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()

  const bannerImage = id === 'datalead-africa' 
    ? '/datalead-africa/screen.svg'
    : '/poster.jpg'

  return (
    <div className="project-detail">
      <div className="project-banner">
        <img src={bannerImage} alt="" />
      </div>
      <div className="project-content container">
        <div className="project-info">
          <div className="info-col">
            <h3>Role</h3>
            <p>Strategy and Website Design</p>
          </div>
          <div className="info-col">
            <h3>Year</h3>
            <p>2025</p>
          </div>
          <div className="info-col">
            <h3>Client</h3>
            <p>DataLead Africa</p>
          </div>
        </div>
        <div className="project-description">
          <h3>About the Project</h3>
          <p>
            Data-Lead Africa stands at the forefront of data consulting and training in the region. 
            The goal of this project was to translate their complex technical expertise into an accessible, 
            user-friendly digital experience. The new design focuses on establishing authority while ensuring 
            intuitive navigation for businesses seeking consultancy and individuals seeking training.
          </p>
        </div>
      </div>

      {id === 'datalead-africa' && (
        <div className="container">
          <div className="project-gallery">
            <img src="/datalead-africa/screen_2.svg" alt="DataLead Africa Screen 2" />
            <div className="gallery-row">
              <img src="/datalead-africa/screen_3.svg" alt="DataLead Africa Screen 3" />
              <img src="/datalead-africa/screen_4.svg" alt="DataLead Africa Screen 4" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
