/**
 * The single source of truth for the tool list.
 * Order here drives the nav bar and the index page everywhere at once.
 */
export const TOOLS = [
  { slug: 'oinp-calculator',  nav: 'OINP Calculator',  title: ['OINP', 'Calculator'],
    blurb: 'Ontario Immigrant Nominee Program, Employer Job Offer points' },
  { slug: 'bcpnp-calculator', nav: 'BCPNP Calculator', title: ['BCPNP', 'Calculator'],
    blurb: 'British Columbia Skills Immigration registration score' },
  { slug: 'fsw-calculator',   nav: 'FSW Calculator',   title: ['FSW', 'Calculator'],
    blurb: 'Federal Skilled Worker six selection factors and the 67-point pass mark' },
  { slug: 'crs-calculator',   nav: 'CRS Calculator',   title: ['CRS', 'Calculator'],
    blurb: 'Express Entry Comprehensive Ranking System score out of 1200' },
  { slug: 'noc-finder',       nav: 'NOC Finder',       title: ['NOC', 'Finder'],
    blurb: 'Look up your NOC 2021 code and TEER category by job title' },
];

/** Where the tools live. Change once if the routes ever move. */
export const TOOLS_BASE = '/tools';

export const toolHref = (slug) => `${TOOLS_BASE}/${slug}`;

/** Booking and contact, referenced by the shared CTA. */
export const BOOKING_URL    = 'https://tncimmigration.com/book-appointment/';
export const ASSESSMENT_URL = 'https://tncimmigration.com/start-assessment/';
export const CONTACT_EMAIL  = 'info@tncimmigration.com';
export const CONTACT_PHONE  = '+1 236 818 5558';
