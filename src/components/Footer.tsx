
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="socials-wrap">
        <div className='socials' aria-hidden={false}>
          <a href="https://github.com/get2bash" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <span className="social-icon iconify" data-icon="mdi:github" data-inline="false" />
          </a>
          <a href="https://www.linkedin.com/in/bashir-isah/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <span className="social-icon iconify" data-icon="mdi:linkedin" data-inline="false" />
          </a>
          <a href="https://www.behance.net/bashirisah/" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <span className="social-icon iconify" data-icon="mdi:behance" data-inline="false" />
          </a>
          <a href="https://dev.to/get2bash" target="_blank" rel="noopener noreferrer" aria-label="Dev Community">
            <span className="social-icon iconify" data-icon="mdi:dev-to" data-inline="false" />
          </a>
        </div>
      </div>
      <p>&copy; 2025 My folio. All rights reserved.</p>
    </footer>
  )
}
