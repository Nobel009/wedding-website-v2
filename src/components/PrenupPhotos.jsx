import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function PrenupPhotos({ photos }) {
  const featuredPhoto = photos.find((photo) => photo.featured)
  const supportingPhotos = photos.filter((photo) => !photo.featured)

  return (
    <Reveal className="section prenup-section">
      <div className="prenup-frame">
        <div className="prenup-icon">
          <Icon name="camera" />
        </div>

        <SectionHeading eyebrow="Moments Before Forever" title="Prenup Photos" />
        <div className="prenup-divider" aria-hidden="true" />

        {featuredPhoto ? (
          <figure className="prenup-photo prenup-photo-featured">
            <img src={featuredPhoto.src} alt={featuredPhoto.alt} />
          </figure>
        ) : null}

        <div className="prenup-gallery">
          {supportingPhotos.map((photo) => (
            <figure className="prenup-photo" key={photo.id}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
