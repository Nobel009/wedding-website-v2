export function Hero({ data }) {
  const weddingDate = new Date(data.wedding.isoDate)
  const month = weddingDate.toLocaleString('en', { month: 'long' })
  const weekday = weddingDate.toLocaleString('en', { weekday: 'long' })
  const day = weddingDate.getDate()
  const year = weddingDate.getFullYear()

  return (
    <section id="hero" className="hero-section" aria-label="Wedding invitation">
      <img className="hero-image" src={data.hero.image} alt="" />
      <div className="hero-overlay" />
      <div className="hero-floral" />

      <div className="hero-content">
        <p className="script hero-kicker">{data.hero.eyebrow}</p>
        <div className="hero-name-block">
          <div className="hero-name-ornament" aria-hidden="true">
            <span />
            <span />
          </div>
          <h1>{data.couple.names}</h1>
          <div className="hero-name-ornament" aria-hidden="true">
            <span />
            <span />
          </div>
        </div>
        <p className="hero-invite">{data.hero.invitation}</p>

        <div className="hero-meta">
          <div className="hero-date-lockup" aria-label={`${data.wedding.displayDate} at ${data.wedding.time}`}>
            <div className="hero-date-side">
              <span>{weekday}</span>
            </div>
            <div className="hero-date-stack" aria-label={data.wedding.displayDate}>
              <span>{month}</span>
              <strong>{day}</strong>
              <span>{year}</span>
            </div>
            <div className="hero-date-side">
              <span>At {data.wedding.time}</span>
            </div>
          </div>
          <div className="hero-date-flourish" aria-hidden="true">
            <span />
            <span />
          </div>
          <span className="hero-location">{data.wedding.location}</span>
        </div>
      </div>
    </section>
  )
}
