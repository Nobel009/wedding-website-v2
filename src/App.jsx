import { useMemo, useRef, useState } from 'react'
import { weddingData } from './data/weddingData'
import { Countdown } from './components/Countdown'
import { Details } from './components/Details'
import { DressCode } from './components/DressCode'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MusicPlayer } from './components/MusicPlayer'
import { PrenupPhotos } from './components/PrenupPhotos'
import { RSVP } from './components/RSVP'
import { Timeline } from './components/Timeline'
import { Venue } from './components/Venue'
import './styles/wedding.css'

function App() {
  const content = useMemo(() => weddingData, [])
  const rsvpRef = useRef(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const scrollToRsvp = () => {
    rsvpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="site-frame">
      <div className="invitation-shell">
        <Hero data={content} onRsvpClick={scrollToRsvp} />
        <MusicPlayer
          music={content.music}
          isPlaying={isAudioPlaying}
          onToggle={() => setIsAudioPlaying((value) => !value)}
        />
        <Countdown targetDate={content.wedding.isoDate} />
        <Details details={content.details} />
        <Timeline items={content.timeline} />
        <Venue venue={content.venue} />
        <DressCode dressCode={content.dressCode} />
        <PrenupPhotos photos={content.prenupPhotos} />
        <RSVP ref={rsvpRef} />
        <Footer wedding={content.wedding} couple={content.couple} />
      </div>
    </main>
  )
}

export default App
