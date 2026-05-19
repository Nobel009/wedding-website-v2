import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { SectionWrapper } from './SectionWrapper'

export function Venue({ venues }) {
  return (
    <SectionWrapper id="venue" className="venue-section">
      <SectionHeading eyebrow="The Venues" title="The Venues">
        Two beautiful places for one unforgettable celebration.
      </SectionHeading>

      <div className="venue-card-list">
        {venues.map((venue, index) => (
          <article className="venue-card" key={venue.id}>
            <div className="venue-card-image">
              <img src={venue.image} alt={`${venue.title} venue`} />
            </div>
            <div className="venue-card-copy">
              <div className="venue-card-icon">
                <Icon name={venue.icon} />
              </div>
              <p className="eyebrow">{venue.type}</p>
              <h3>{venue.title}</h3>
              <p>{venue.description}</p>
              <address>{venue.address}</address>
              <a className="secondary-button" href={venue.mapUrl} target="_blank" rel="noreferrer">
                <Icon name="map" />
                {venue.id === 'church' ? 'Open Church Map' : 'Open Reception Map'}
              </a>
            </div>
            {index < venues.length - 1 ? <div className="venue-card-divider" aria-hidden="true" /> : null}
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
