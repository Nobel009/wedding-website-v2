import { useRef } from 'react'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function MusicPlayer({ music, isPlaying, onToggle }) {
  const audioRef = useRef(null)

  const handleToggle = () => {
    if (music.audioSrc && audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }

    onToggle()
  }

  return (
    <Reveal className="section music-section">
      <div className="music-card">
        <button
          className="round-button"
          type="button"
          onClick={handleToggle}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          <Icon name={isPlaying ? 'pause' : 'play'} />
        </button>

        <div className="music-copy">
          <p className="eyebrow">Wedding Playlist</p>
          <h2>{music.title}</h2>
          <p>{music.artist}</p>
        </div>

        <div className={`equalizer ${isPlaying ? 'is-playing' : ''}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
      {music.audioSrc ? <audio ref={audioRef} src={music.audioSrc} loop /> : null}
    </Reveal>
  )
}
