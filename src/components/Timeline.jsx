import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Timeline({ items }) {
  return (
    <Reveal className="section timeline-section">
      <SectionHeading eyebrow="Wedding Day" title="Timeline" />
      <div className="timeline">
        {items.map((item, index) => (
          <article className="timeline-item" key={`${item.time}-${item.title}`}>
            <div className="timeline-icon">
              <Icon name={item.icon} />
            </div>
            <div>
              <time>{item.time}</time>
              <h3>{item.title}</h3>
            </div>
            <span className="timeline-number">{String(index + 1).padStart(2, '0')}</span>
          </article>
        ))}
      </div>
    </Reveal>
  )
}
