
import { useState } from 'react'
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

function PhotoItem({ src, index }: { src: string, index: number }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`photo-item ${!isLoaded ? 'loading' : ''}`}>
      <img 
        src={src} 
        alt={`Photo ${index + 1}`} 
        loading="lazy" 
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}

export default function Photos() {
  return (
    <div className="photos-page">
      <div className="photos-grid">
        {photos.map((src, index) => (
          <PhotoItem key={index} src={src} index={index} />
        ))}
      </div>
    </div>
  )
}
