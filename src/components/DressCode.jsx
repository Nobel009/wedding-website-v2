import { SectionWrapper } from './SectionWrapper'

export function DressCode({ dressCode }) {
  return (
    <SectionWrapper id="dress-code" className="dress-code-section" wide>
      <div className="dress-code-artwork">
        <img
          src={dressCode.image}
          alt="Dress Code: Dusty Rose, Sage Green, Champagne, and Dusty Blue attire inspiration. Please avoid white, ivory, and black."
        />
      </div>
    </SectionWrapper>
  )
}
