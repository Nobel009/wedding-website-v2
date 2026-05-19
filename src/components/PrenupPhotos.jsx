import { useCallback, useEffect, useState } from 'react'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { SectionWrapper } from './SectionWrapper'

export function PrenupPhotos({ photos }) {
  const featuredPhoto = photos.find((photo) => photo.featured)
  const supportingPhotos = photos.filter((photo) => !photo.featured)
  const orderedPhotos = featuredPhoto ? [featuredPhoto, ...supportingPhotos] : supportingPhotos
  const [activeIndex, setActiveIndex] = useState(null)

  const activePhoto = activeIndex === null ? null : orderedPhotos[activeIndex]

  const openPhoto = (photo) => {
    setActiveIndex(orderedPhotos.findIndex((item) => item.id === photo.id))
  }

  const closePhoto = useCallback(() => setActiveIndex(null), [])
  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current - 1 + orderedPhotos.length) % orderedPhotos.length))
  }, [orderedPhotos.length])
  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % orderedPhotos.length))
  }, [orderedPhotos.length])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (activeIndex === null) return
      if (event.key === 'Escape') closePhoto()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, closePhoto, showNext, showPrevious])

  return (
    <SectionWrapper id="photos" className="prenup-section">
      <div className="prenup-frame">
        <div className="prenup-icon">
          <Icon name="camera" />
        </div>

        <SectionHeading eyebrow="Moments Before Forever" title="Prenup Photos" />
        <div className="prenup-divider" aria-hidden="true" />

        {featuredPhoto ? (
          <button className="prenup-photo prenup-photo-featured" type="button" onClick={() => openPhoto(featuredPhoto)}>
            <img src={featuredPhoto.src} alt={featuredPhoto.alt} />
          </button>
        ) : null}

        <div className="prenup-gallery">
          {supportingPhotos.map((photo) => (
            <button className="prenup-photo" type="button" onClick={() => openPhoto(photo)} key={photo.id}>
              <img src={photo.src} alt={photo.alt} />
            </button>
          ))}
        </div>
      </div>

      {activePhoto ? (
        <div className="lightbox-backdrop" role="presentation" onClick={closePhoto}>
          <div className="lightbox" role="dialog" aria-modal="true" aria-label={activePhoto.alt} onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={closePhoto} aria-label="Close photo">
              Close
            </button>
            <button className="lightbox-control is-prev" type="button" onClick={showPrevious} aria-label="Previous photo">
              Prev
            </button>
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <button className="lightbox-control is-next" type="button" onClick={showNext} aria-label="Next photo">
              Next
            </button>
          </div>
        </div>
      ) : null}
    </SectionWrapper>
  )
}
