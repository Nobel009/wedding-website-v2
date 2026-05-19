import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Venue({ venue }) {
  return (
    <Reveal className="section venue-section">
      <SectionHeading eyebrow="The Venue" title={venue.name}>
        An elegant garden setting for vows, dinner, and a night beneath the lights.
      </SectionHeading>

      <img className="venue-image" src={venue.image} alt="Elegant wedding venue courtyard" />
      <address>{venue.address}</address>

      <a className="secondary-button" href={venue.mapsUrl} target="_blank" rel="noreferrer">
        <Icon name="map" />
        Open Google Maps
      </a>
    </Reveal>
  )
}
