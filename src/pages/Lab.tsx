
import { useState } from 'react'
import './Lab.css'

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
        alt={`Lab item ${index + 1}`} 
        loading="lazy" 
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}

export default function Lab() {
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
