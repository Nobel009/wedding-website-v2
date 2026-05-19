import { useEffect, useState } from 'react'
import { Icon } from './Icon'

const navItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'story', label: 'Story', icon: 'heart' },
  { id: 'dress-code', label: 'Dress', icon: 'heart' },
  { id: 'photos', label: 'Photos', icon: 'camera' },
  { id: 'rsvp', label: 'RSVP', icon: 'rings' },
]

export function FloatingNav() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (activeEntry) {
          setActiveId(activeEntry.target.id)
        }
      },
      { threshold: [0.24, 0.42, 0.62], rootMargin: '-18% 0px -58%' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="floating-nav" aria-label="Wedding invitation sections">
      {navItems.map((item) => (
        <a className={activeId === item.id ? 'is-active' : ''} href={`#${item.id}`} key={item.id}>
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}
