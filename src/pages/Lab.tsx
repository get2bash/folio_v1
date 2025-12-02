
import './Lab.css'
import paymentCard from '../assets/lab/payment_card.svg'
import pricingCard from '../assets/lab/pricing_card.svg'

const photos = [
  paymentCard,
  pricingCard,
]

function PhotoItem({ src, index }: { src: string, index: number }) {
  return (
    <div className="photo-item">
      <img 
        src={src} 
        alt={`Lab item ${index + 1}`} 
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
