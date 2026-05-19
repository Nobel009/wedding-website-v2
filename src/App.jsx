import { useMemo, useRef, useState } from 'react'
import { weddingData } from './data/weddingData'
import { Countdown } from './components/Countdown'
import { DressCode } from './components/DressCode'
import { FloatingMusic } from './components/FloatingMusic'
import { FloatingNav } from './components/FloatingNav'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LoveStorySection } from './components/LoveStorySection'
import { MusicPlayer } from './components/MusicPlayer'
import { PrenupPhotos } from './components/PrenupPhotos'
import { RSVP } from './components/RSVP'
import { Timeline } from './components/Timeline'
import { Venue } from './components/Venue'
import './styles/wedding.css'

function App() {
  const content = useMemo(() => weddingData, [])
  const audioRef = useRef(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [hasStartedMusic, setHasStartedMusic] = useState(false)

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play()
        setHasStartedMusic(true)
        setIsAudioPlaying(true)
      } catch {
        setIsAudioPlaying(false)
      }
    } else {
      audioRef.current.pause()
      setIsAudioPlaying(false)
    }
  }

  return (
    <main className="site-frame">
      <div className="invitation-shell">
        <Hero
          data={content}
        />
        <MusicPlayer
          music={content.music}
          isPlaying={isAudioPlaying}
          onToggle={toggleMusic}
        />
        <Countdown targetDate={content.wedding.isoDate} />
        <LoveStorySection stories={content.loveStory} />
        <Timeline items={content.timeline} />
        <Venue venues={content.venues} />
        <DressCode dressCode={content.dressCode} />
        <PrenupPhotos photos={content.prenupPhotos} />
        <RSVP rsvp={content.rsvp} couple={content.couple} />
        <Footer wedding={content.wedding} couple={content.couple} />
        {content.music.audioSrc ? (
          <audio ref={audioRef} src={content.music.audioSrc} loop onPause={() => setIsAudioPlaying(false)} />
        ) : null}
        <FloatingMusic
          music={content.music}
          isPlaying={isAudioPlaying}
          isVisible={hasStartedMusic && isAudioPlaying}
          onToggle={toggleMusic}
          onClose={() => {
            audioRef.current?.pause()
            setIsAudioPlaying(false)
          }}
        />
        <FloatingNav />
      </div>
    </main>
  )
}

export default App
