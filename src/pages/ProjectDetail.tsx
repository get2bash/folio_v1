
import { useParams } from 'react-router-dom'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()

  const bannerImage = id === 'datalead-africa' 
    ? '/Free Clean desk with Dell display mockup (Mockuuups Studio).jpg'
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}
