import { CONTACT_EMAIL } from './config';

/**
 * One place for the callback submission, shared by every tool.
 *
 * Web3Forms delivers to whichever address the access key was created with,
 * so the destination is fixed by the key rather than by anything sent here.
 * Generate the key at web3forms.com using info@tncimmigration.com and put it
 * in .env.local as NEXT_PUBLIC_WEB3FORMS_KEY.
 *
 * @param {object}   lead
 * @param {string}   lead.source   tool name, e.g. "CRS Calculator"
 * @param {string}   lead.result   headline result, e.g. "CRS score 469"
 * @param {Array}    lead.answers  [{ label, value }] every question answered
 * @param {string}   lead.name
 * @param {string}   lead.email    optional
 * @param {string}   lead.phone
 */
export async function submitLead({ source, result, answers = [], name, email, phone }) {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!key) {
    throw new Error('NEXT_PUBLIC_WEB3FORMS_KEY is not set. Add it to .env.local.');
  }

  const answerText = answers
    .filter((a) => a && a.label && a.value !== '' && a.value != null)
    .map((a) => `${a.label}: ${a.value}`)
    .join('\n');

  const payload = {
    access_key: key,
    subject: `${source} callback request \u2014 ${result}`,
    from_name: `TNC ${source}`,
    name,
    email,
    phone,
    source,
    result,
    answers: answerText,
    to_display: CONTACT_EMAIL,
    message:
      `Tool: ${source}\nResult: ${result}\n\n` +
      `CONTACT\nName: ${name}\nEmail: ${email || 'not given'}\nPhone: ${phone}\n\n` +
      `ANSWERS\n${answerText}`,
  };
  if (email) payload.replyto = email;

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!data.success) throw new Error(data.message || 'Submission failed');
  return data;
}
