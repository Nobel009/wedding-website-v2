import { Icon } from './Icon'

export function FloatingMusic({ music, isPlaying, isVisible, onToggle, onClose }) {
  return (
    <div className={`floating-music ${isPlaying ? 'is-playing' : ''} ${isVisible ? 'is-visible' : ''}`}>
      <button
        className="floating-music-toggle"
        type="button"
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        <span className="floating-music-icon">
          <Icon name={isPlaying ? 'pause' : 'play'} />
        </span>
      </button>
      <span>
        <small>Now Playing</small>
        <strong>{music.title}</strong>
      </span>
      <span className="floating-equalizer" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <button className="floating-music-close" type="button" onClick={onClose} aria-label="Hide music player">
        x
      </button>
    </div>
  )
}
