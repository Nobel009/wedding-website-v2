import { Icon } from './Icon'
import { SectionWrapper } from './SectionWrapper'

export function Timeline({ items }) {
  return (
    <SectionWrapper id="timeline" className="timeline-section">
      <header className="timeline-header">
        <div className="timeline-flourish" aria-hidden="true">
          <span />
          <strong>✦</strong>
          <span />
        </div>
        <p>Wedding Day</p>
        <h2>Timeline</h2>
        <div className="timeline-header-divider" aria-hidden="true" />
      </header>

      <div className="timeline-sparkles" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="timeline">
        {items.map((item, index) => (
          <article className="timeline-item" style={{ '--timeline-delay': `${index * 90}ms` }} key={`${item.time}-${item.title}`}>
            <div className="timeline-icon" aria-hidden="true">
              <Icon name={item.icon} />
            </div>
            <div className="timeline-card">
              <span className="timeline-number">{String(index + 1).padStart(2, '0')}</span>
              <time>{item.time}</time>
              <h3>
                <Icon name={item.icon} />
                {item.title}
              </h3>
              <p>{item.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
