import { forwardRef, useState } from 'react'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export const RSVP = forwardRef(function RSVP(_, ref) {
  const [showSuccess, setShowSuccess] = useState(false)
  const [form, setForm] = useState({
    name: '',
    attending: 'Yes',
    guest: 'No',
    message: '',
  })

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSuccess(true)
    event.currentTarget.reset()
    setForm({ name: '', attending: 'Yes', guest: 'No', message: '' })
  }

  return (
    <Reveal ref={ref} className="section rsvp-section">
      <SectionHeading eyebrow="Kindly Reply" title="RSVP">
        Please respond by November 12, 2026.
      </SectionHeading>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={updateField}
            placeholder="Your full name"
            required
          />
        </label>

        <label>
          Will you attend?
          <select name="attending" value={form.attending} onChange={updateField}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>

        <label>
          Bringing a guest?
          <select name="guest" value={form.guest} onChange={updateField}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder="Leave a note for the couple"
            rows="4"
          />
        </label>

        <button className="primary-button" type="submit">
          Send RSVP
        </button>
      </form>

      {showSuccess ? (
        <div className="modal-backdrop" role="presentation">
          <div className="success-modal" role="dialog" aria-modal="true" aria-labelledby="rsvp-success-title">
            <div className="registry-mark">
              <Icon name="heart" />
            </div>
            <p className="eyebrow">Response Received</p>
            <h2 id="rsvp-success-title">Thank you, beautifully noted.</h2>
            <p>Emma and Lucas are grateful for your reply.</p>
            <button className="secondary-button" type="button" onClick={() => setShowSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </Reveal>
  )
})
