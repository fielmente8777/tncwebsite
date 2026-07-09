import Link from "next/link";

export const metadata = {
  title: "Post-ITA to PR Approval Support | TNC Immigration",
  description:
    "You have 60 days after your ITA. TNC Immigration's licensed RCICs prepare and submit your complete Express Entry PR application so it is accurate, complete, and approval ready.",
  alternates: { canonical: "https://tncimmigration.com/post-ita-support/" },
  openGraph: {
    title: "Post-ITA to PR Approval Support | TNC Immigration",
    description:
      "Licensed RCICs handle your full Post-ITA application within the 60-day window. Dedicated case manager, personalized checklist, client portal, and final RCIC review.",
    url: "https://tncimmigration.com/post-ita-support/",
    siteName: "TNC Immigration",
    type: "website",
  },
};

const BOOKING_URL = "https://calendly.com/tncbooking/consultation60";
const CONTACT_URL = "https://tncimmigration.com/contact-us/";
const PHONE = "+1 (647) 932 0060";
const PHONE_TEL = "+16479320060";
const EMAIL = "info@tncimmigration.com";

const steps = [
  {
    title: "A dedicated case manager",
    body: "Your dedicated PR journey companion who handles your application process from start to finish, so you always know your status and what comes next.",
  },
  {
    title: "A personalized document checklist",
    body: "A checklist built around your specific situation, so nothing is missed and every form and supporting document is accounted for.",
  },
  {
    title: "Your own client portal",
    body: "A secure space for document uploads, progress tracking, and direct communication with our team throughout your application.",
  },
  {
    title: "Done-for-you application prep and submission",
    body: "You kick back and relax while our team prepares and submits your complete Post-ITA application without missing anything.",
  },
  {
    title: "Final RCIC review",
    body: "Our RCICs run a final thorough review of your forms, NOC code, and documents to ensure the file is error-free before it goes in.",
  },
  {
    title: "Continued support",
    body: "Our team stays with you until IRCC issues a final decision. If there is a request or concern from IRCC, we handle it for you.",
  },
];

export default function PostITASupportPage() {
  return (
    <main className="pita">
      {/* Hero */}
      <section className="pita-hero">
        <div className="pita-wrap">
          <span className="pita-eyebrow">Post-ITA Support &middot; Licensed RCICs</span>
          <h1 className="pita-title">
            From ITA to <span className="pita-title-accent">PR Approval</span>
          </h1>
          <p className="pita-lede">
            You have 60 days. Our licensed RCICs take the burden off your
            shoulders and handle everything for you, so your application is
            accurate, complete, and approval ready.
          </p>

          <div className="pita-clock" aria-hidden="true">
            <span className="pita-clock-num">60</span>
            <span className="pita-clock-label">
              days from your Invitation to Apply
            </span>
          </div>

          <div className="pita-cta-row">
            <a className="pita-btn pita-btn-primary" href={BOOKING_URL}>
              Book a consultation
            </a>
            <Link className="pita-btn pita-btn-ghost" href={CONTACT_URL}>
              Contact us
            </Link>
          </div>
          <p className="pita-limited">Accepting limited applications</p>
        </div>
      </section>

      {/* What you get */}
      <section className="pita-steps">
        <div className="pita-wrap">
          <p className="pita-section-eyebrow">Here&apos;s how we do it</p>
          <h2 className="pita-section-title">What you get when you work with us</h2>

          <ol className="pita-grid">
            {steps.map((step, i) => (
              <li className="pita-card" key={step.title}>
                <span className="pita-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="pita-card-title">{step.title}</h3>
                <p className="pita-card-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA band */}
      <section className="pita-band">
        <div className="pita-wrap pita-band-inner">
          <div>
            <h2 className="pita-band-title">
              Contact us today to get our Post-ITA support
            </h2>
            <p className="pita-band-sub">
              The 60-day window moves fast. Talk to a licensed RCIC before the
              clock runs down.
            </p>
          </div>
          <div className="pita-band-actions">
            <Link className="pita-btn pita-btn-light" href={BOOKING_URL}>
              Book now
            </Link>
            <div className="pita-band-contact">
              <Link href={`tel:${PHONE_TEL}`}>{PHONE}</Link>
              <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{css}</style>
    </main>
  );
}

const css = `
.pita {
  --red: #b3121f;
  --red-deep: #7d0c16;
  --ink: #14181f;
  --muted: #5a6270;
  --cream: #f5efe8;
  --cream-2: #efe6dc;
  --line: #e2d6c8;
  --white: #ffffff;
  color: var(--ink);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.pita * { box-sizing: border-box; }
.pita-wrap { width: 100%; max-width: 1120px; margin: 0 auto; padding: 0 24px; }

/* Hero */
.pita-hero {
  background:
    radial-gradient(1200px 500px at 80% -10%, rgba(179,18,31,0.08), transparent 60%),
    linear-gradient(180deg, var(--cream) 0%, var(--cream-2) 100%);
  padding: 96px 0 80px;
  border-bottom: 4px solid var(--red);
}
.pita-eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 20px;
}
.pita-title {
  font-size: clamp(44px, 8vw, 92px);
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 24px;
  text-transform: uppercase;
}
.pita-title-accent { color: var(--red); display: block; }
.pita-lede {
  font-size: clamp(18px, 2.4vw, 22px);
  line-height: 1.5;
  font-weight: 500;
  max-width: 640px;
  margin: 0 0 40px;
  color: var(--ink);
}
.pita-clock {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  background: var(--white);
  border: 1px solid var(--line);
  border-left: 6px solid var(--red);
  padding: 20px 28px;
  margin-bottom: 40px;
}
.pita-clock-num {
  font-size: 64px;
  font-weight: 800;
  line-height: 1;
  color: var(--red);
  letter-spacing: -0.03em;
}
.pita-clock-label {
  font-size: 15px;
  font-weight: 600;
  color: var(--muted);
  max-width: 180px;
  line-height: 1.35;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.pita-cta-row { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 18px; }
.pita-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  border-radius: 2px;
  transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease;
}
.pita-btn:hover { transform: translateY(-2px); }
.pita-btn-primary { background: var(--red); color: #fff; }
.pita-btn-primary:hover { background: var(--red-deep); }
.pita-btn-ghost { background: transparent; color: var(--ink); border: 1.5px solid var(--ink); }
.pita-btn-ghost:hover { background: var(--ink); color: #fff; }
.pita-limited {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0;
}

/* Steps */
.pita-steps { background: var(--white); padding: 80px 0; }
.pita-section-eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--red);
  margin: 0 0 10px;
}
.pita-section-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 0 0 48px;
  text-transform: uppercase;
}
.pita-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}
.pita-card {
  background: var(--white);
  padding: 36px 28px;
  position: relative;
  transition: background 0.2s ease;
}
.pita-card:hover { background: var(--cream); }
.pita-card-num {
  display: block;
  font-size: 14px;
  font-weight: 800;
  color: var(--red);
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}
.pita-card-title {
  font-size: 19px;
  font-weight: 700;
  margin: 0 0 12px;
  line-height: 1.25;
}
.pita-card-body {
  font-size: 15px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

/* CTA band */
.pita-band { background: var(--red); color: #fff; padding: 64px 0;   margin-bottom: 100px; }
.pita-band-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}
.pita-band-title {
  font-size: clamp(24px, 3.4vw, 34px);
  font-weight: 800;
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  max-width: 560px;
}
.pita-band-sub { margin: 0; font-size: 16px; line-height: 1.5; color: rgba(255,255,255,0.88); max-width: 520px; }
.pita-band-actions { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
.pita-btn-light { background: #fff; color: var(--red); }
.pita-btn-light:hover { background: var(--ink); color: #fff; }
.pita-band-contact { display: flex; flex-direction: column; gap: 4px; }
.pita-band-contact a { color: #fff; font-size: 15px; font-weight: 600; text-decoration: none; }
.pita-band-contact a:hover { text-decoration: underline; }

/* Focus */
.pita a:focus-visible, .pita .pita-btn:focus-visible {
  outline: 3px solid #14181f;
  outline-offset: 3px;
}

/* Responsive */
@media (max-width: 900px) {
  .pita-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 620px) {
  .pita-hero { padding: 64px 0 56px; }
  .pita-steps { padding: 56px 0; }
  .pita-grid { grid-template-columns: 1fr; }
  .pita-clock-num { font-size: 48px; }
  .pita-band-inner { flex-direction: column; align-items: flex-start; }
}
@media (prefers-reduced-motion: reduce) {
  .pita-btn, .pita-card { transition: none; }
  .pita-btn:hover { transform: none; }
}
`;
