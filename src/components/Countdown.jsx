import { useEffect, useState } from 'react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function getTimeLeft(targetDate) {
  const difference = Math.max(new Date(targetDate).getTime() - Date.now(), 0)

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)

    return () => window.clearInterval(interval)
  }, [targetDate])

  const units = [
    ['Days', timeLeft.days],
    ['Hours', timeLeft.hours],
    ['Minutes', timeLeft.minutes],
    ['Seconds', timeLeft.seconds],
  ]

  return (
    <Reveal className="section countdown-section">
      <SectionHeading eyebrow="Save the Date" title="The Countdown to Forever Has Begun" />
      <div className="countdown-grid" aria-live="polite">
        {units.map(([label, value]) => (
          <div className="countdown-tile" key={label}>
            <strong>{String(value).padStart(2, '0')}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
