
import './Photos.css'

const photos = [
  '/IMG_0720.jpeg',
  '/IMG_0819.jpeg',
  '/IMG_0914.jpeg',
  '/IMG_1160.jpeg',
  '/IMG_1161.jpeg',
  '/IMG_1162.jpeg',
  '/IMG_1163.jpeg',
  '/IMG_1164.jpeg',
  '/IMG_1165.jpeg',
]

export default function Photos() {
  return (
    <div className="photos-page">
      <div className="photos-grid">
        {photos.map((src, index) => (
          <div key={index} className="photo-item">
            <img src={src} alt={`Photo ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
