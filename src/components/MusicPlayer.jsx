import { Icon } from './Icon'
import { SectionWrapper } from './SectionWrapper'

export function MusicPlayer({ music, isPlaying, onToggle }) {
  return (
    <SectionWrapper id="music" className="music-section" showDivider={false}>
      <div className="music-card">
        <button
          className="round-button"
          type="button"
          onClick={onToggle}
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
    </SectionWrapper>
  )
}
