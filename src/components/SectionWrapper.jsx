import { forwardRef } from 'react'
import { GoldDivider } from './GoldDivider'
import { Reveal } from './Reveal'

export const SectionWrapper = forwardRef(function SectionWrapper(
  { id, className = '', children, showDivider = true, wide = false },
  ref,
) {
  return (
    <Reveal ref={ref} id={id} className={`section section-story ${className}`}>
      <div className="section-glow" aria-hidden="true" />
      <div className={`section-inner ${wide ? 'section-inner-wide' : ''}`}>
        {showDivider ? <GoldDivider className="section-top-divider" /> : null}
        {children}
      </div>
    </Reveal>
  )
})
