import { SectionWrapper } from './SectionWrapper'

function SectionHeader() {
  return (
    <header className="love-story-header">
      <div className="love-story-ornament" aria-hidden="true">
        <span />
        <strong>♡</strong>
        <span />
      </div>
      <p>Emma & Lucas</p>
      <h2>Our Love Story</h2>
      <p className="love-story-subtitle">
        Every chapter has carried us gently here, to a day made for forever.
      </p>
      <div className="love-story-filigree" aria-hidden="true">
        <span />
        <strong>♥</strong>
        <span />
      </div>
    </header>
  )
}

function TimelineItem({ story, index }) {
  return (
    <article className={`story-card ${index % 2 ? 'is-reversed' : ''}`} style={{ '--story-delay': `${index * 90}ms` }}>
      <div className="story-marker">
        <img src={story.image} alt="" />
      </div>
      <div className="story-copy">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <h3>{story.title}</h3>
        <p>{story.text}</p>
      </div>
    </article>
  )
}

export function LoveStorySection({ stories }) {
  return (
    <SectionWrapper id="story" className="love-story-section">
      <div className="love-story-border" aria-hidden="true" />
      <div className="love-story-sparkles" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <SectionHeader />

      <div className="love-story-flow">
        {stories.map((story, index) => (
          <TimelineItem story={story} index={index} key={story.title} />
        ))}
      </div>
    </SectionWrapper>
  )
}
