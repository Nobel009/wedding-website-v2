import { Reveal } from './Reveal'

export function DressCode({ dressCode }) {
  return (
    <Reveal className="section dress-code-section">
      <div className="dress-code-artwork">
        <img
          src={dressCode.image}
          alt="Dress Code: Dusty Rose, Sage Green, Champagne, and Dusty Blue attire inspiration. Please avoid white, ivory, and black."
        />
      </div>
    </Reveal>
  )
}
