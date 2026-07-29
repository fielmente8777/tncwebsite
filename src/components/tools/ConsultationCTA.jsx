'use client';

import { useState } from 'react';
import { submitLead } from '@/lib/tools/submitLead';
import { BOOKING_URL, ASSESSMENT_URL, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/tools/config';

/**
 * The callback form. Every calculator renders this one component, so the
 * copy, validation, styling and submission all live in a single file.
 *
 * Each tool passes its own result and answers down as props rather than the
 * form reading them back out of the DOM.
 *
 * @param {string} source   tool name for the subject line, e.g. "CRS Calculator"
 * @param {string} result   headline result, e.g. "CRS score 469"
 * @param {Array}  answers  [{ label, value }] every question the person answered
 * @param {string} heading  optional override
 * @param {string} body     optional override
 * @param {string} note     optional override for the line under the button
 * @param {boolean} wide    two-column layout, for pages with no score column
 */
export default function ConsultationCTA({
  source,
  result = '',
  answers = [],
  heading = 'Get a plan for these points',
  body = 'Professionals at TNC will review your profile, confirm your NOC and ECA, and map the fastest route to a score that gets invited.',
  note = 'A TNC representative will call you back with your score, your full point breakdown and the gaps we can close.',
  wide = false,
}) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [message, setMessage] = useState('');

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit() {
    const name = form.name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();

    if (!name || !phone) {
      setStatus('error');
      setMessage('Add your name and phone number so a TNC representative can call you back.');
      return;
    }

    setStatus('sending');
    setMessage('');
    try {
      await submitLead({ source, result, answers, name, email, phone });
      setStatus('sent');
      setMessage('Requested. A TNC representative will call you back and walk through your result.');
    } catch (err) {
      setStatus('error');
      setMessage(
        `That did not go through. Email ${CONTACT_EMAIL} or call ${CONTACT_PHONE} and we will take it from there.`
      );
    }
  }

  const buttonLabel =
    status === 'sending' ? 'Requesting\u2026' : status === 'sent' ? 'Callback requested' : 'Request a callback';

  const copy = (
    <div className="tnc-cta-copy">
      <h3>{heading}</h3>
      <p>{body}</p>
      <a className="tnc-btn" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
        Book a consultation
      </a>
      <a className="tnc-btn tnc-btn-ghost" href={ASSESSMENT_URL}>
        Start a free assessment
      </a>
    </div>
  );

  const lead = (
    <div className="tnc-lead">
      <div className="tnc-lead-field">
        <label htmlFor="tnc-lead-name">Name</label>
        <input
          type="text" id="tnc-lead-name" autoComplete="name" placeholder="Your full name"
          value={form.name} onChange={set('name')}
        />
      </div>
      <div className="tnc-lead-field">
        <label htmlFor="tnc-lead-email">Email</label>
        <input
          type="email" id="tnc-lead-email" autoComplete="email" placeholder="you@example.com"
          value={form.email} onChange={set('email')}
        />
      </div>
      <div className="tnc-lead-field">
        <label htmlFor="tnc-lead-phone">Phone</label>
        <input
          type="tel" id="tnc-lead-phone" autoComplete="tel" placeholder="+1"
          value={form.phone} onChange={set('phone')}
        />
      </div>
      <button
        type="button"
        className="tnc-btn tnc-btn-ghost"
        style={{ marginTop: 4 }}
        onClick={handleSubmit}
        disabled={status === 'sending' || status === 'sent'}
      >
        {buttonLabel}
      </button>
      <p className="tnc-lead-note">{note}</p>
      {message && (
        <p className={`tnc-lead-msg ${status === 'sent' ? 'tnc-ok' : 'tnc-err'}`} role="status">
          {message}
        </p>
      )}
    </div>
  );

  return (
    <div className={`tnc-cta${wide ? ' tnc-cta-wide' : ''}`}>
      {copy}
      {lead}
    </div>
  );
}
