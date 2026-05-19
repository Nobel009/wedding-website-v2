import { forwardRef, useState } from 'react'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { SectionWrapper } from './SectionWrapper'

export const RSVP = forwardRef(function RSVP({ rsvp, couple }, ref) {
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    fullName: '',
    attending: 'Yes',
    guests: '1',
    meal: '',
    message: '',
  })

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.fullName.trim()) {
      setError('Please enter your full name.')
      return
    }
    if (Number(form.guests) < 0 || Number(form.guests) > rsvp.guestLimit) {
      setError('Please enter a valid number of guests.')
      return
    }
    if (!form.meal) {
      setError('Please choose a meal preference.')
      return
    }

    const savedResponses = JSON.parse(localStorage.getItem('weddingRsvps') || '[]')
    localStorage.setItem(
      'weddingRsvps',
      JSON.stringify([...savedResponses, { ...form, submittedAt: new Date().toISOString() }]),
    )
    setError('')
    setShowSuccess(true)
    event.currentTarget.reset()
    setForm({ fullName: '', attending: 'Yes', guests: '1', meal: '', message: '' })
  }

  return (
    <SectionWrapper ref={ref} id="rsvp" className="rsvp-section">
      <SectionHeading eyebrow="Kindly Reply" title="RSVP">
        Please respond by {rsvp.deadline}.
      </SectionHeading>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={updateField}
            placeholder="Your full name"
            required
          />
        </label>

        <label>
          Attendance
          <select name="attending" value={form.attending} onChange={updateField}>
            {rsvp.attendanceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Number of guests
          <input
            name="guests"
            type="number"
            min="0"
            max={rsvp.guestLimit}
            value={form.guests}
            onChange={updateField}
            required
          />
        </label>

        <label>
          Meal preference
          <select name="meal" value={form.meal} onChange={updateField} required>
            <option value="">Select one</option>
            {rsvp.mealOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          Message for couple
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder="Leave a note for the couple"
            rows="4"
          />
        </label>

        {error ? <p className="form-error">{error}</p> : null}

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
            <h2 id="rsvp-success-title">Thank you for your response</h2>
            <p>{couple.names} are grateful for your reply.</p>
            <button className="secondary-button" type="button" onClick={() => setShowSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </SectionWrapper>
  )
})
