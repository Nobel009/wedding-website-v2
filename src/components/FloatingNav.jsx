import { useEffect, useMemo, useState } from 'react'
import { Icon } from './Icon'

const observedSections = [
  'hero',
  'song',
  'save-date',
  'love-story',
  'timeline',
  'venues',
  'dress-code',
  'photos',
  'rsvp',
]

const mobileItems = [
  { id: 'hero', label: 'Home', icon: 'home', activeIds: ['hero', 'song'] },
  { id: 'save-date', label: 'Date', icon: 'calendar', activeIds: ['save-date'] },
  { id: 'love-story', label: 'Story', icon: 'heart', activeIds: ['love-story', 'timeline', 'venues', 'dress-code'] },
  { id: 'photos', label: 'Photos', icon: 'camera', activeIds: ['photos'] },
  { id: 'rsvp', label: 'RSVP', icon: 'rings', activeIds: ['rsvp'] },
]

const desktopItems = [
  { id: 'hero', label: 'Home', icon: 'home' },
  { id: 'song', label: 'Song', icon: 'music' },
  { id: 'save-date', label: 'Date', icon: 'calendar' },
  { id: 'love-story', label: 'Story', icon: 'heart' },
  { id: 'timeline', label: 'Timeline', icon: 'info' },
  { id: 'venues', label: 'Venues', icon: 'map' },
  { id: 'dress-code', label: 'Dress', icon: 'heart' },
  { id: 'photos', label: 'Photos', icon: 'camera' },
  { id: 'rsvp', label: 'RSVP', icon: 'rings' },
]

function NavLink({ item, activeId }) {
  const activeIds = item.activeIds || [item.id]
  const isActive = activeIds.includes(activeId)

  const handleClick = (event) => {
    event.preventDefault()
    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <a className={isActive ? 'is-active' : ''} href={`#${item.id}`} onClick={handleClick}>
      <Icon name={item.icon} />
      <span>{item.label}</span>
    </a>
  )
}

export function FloatingNav() {
  const [activeId, setActiveId] = useState('hero')
  const [isHidden, setIsHidden] = useState(false)
  const sectionIds = useMemo(() => observedSections, [])

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      { threshold: [0.18, 0.32, 0.5, 0.68], rootMargin: '-20% 0px -48%' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  useEffect(() => {
    let scrollTimer

    const handleScroll = () => {
      setIsHidden(true)
      window.clearTimeout(scrollTimer)
      scrollTimer = window.setTimeout(() => setIsHidden(false), 700)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.clearTimeout(scrollTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`floating-nav ${isHidden ? 'nav-hidden' : ''}`} aria-label="Wedding invitation sections">
      <div className="floating-nav-mobile">
        {mobileItems.map((item) => (
          <NavLink item={item} activeId={activeId} key={item.id} />
        ))}
      </div>
      <div className="floating-nav-desktop">
        {desktopItems.map((item) => (
          <NavLink item={item} activeId={activeId} key={item.id} />
        ))}
      </div>
    </nav>
  )
}
