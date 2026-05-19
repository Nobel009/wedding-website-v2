import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Details({ details }) {
  return (
    <Reveal className="section details-section">
      <SectionHeading eyebrow="The Details" title="A Celebration in Ivory and Gold" />
      <div className="details-grid">
        {details.map((detail) => (
          <article className="detail-card" key={detail.label}>
            <p>{detail.label}</p>
            <h3>{detail.value}</h3>
            <span>{detail.note}</span>
          </article>
        ))}
      </div>
    </Reveal>
  )
}
