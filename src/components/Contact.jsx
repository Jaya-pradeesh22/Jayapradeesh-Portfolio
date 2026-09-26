import { useState } from 'react'
import { profile } from '../data'

const FORM_ENDPOINT = 'https://formspree.io/f/xwvbzgdq'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="section-head">
        <span className="section-index">05 · Contact</span>
        <h2 className="section-title">Get in touch</h2>
      </div>

      <div className="panel contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope" />
            <span>{profile.email}</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone" />
            <span>{profile.phone}</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt" />
            <span>{profile.location}</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Type your message here" required />
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            <span>
              {status === 'sending' && 'Sending…'}
              {status === 'sent' && 'Message sent'}
              {status === 'error' && 'Try again'}
              {status === 'idle' && 'Send message'}
            </span>
            <i className="fa-solid fa-paper-plane" />
          </button>
        </form>
      </div>
    </section>
  )
}
