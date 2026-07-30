/* ==========================================================================
   OINP - Employer Job Offer streams, points estimate.
   Pure logic ported from the verified vanilla build. No DOM.
   ========================================================================== */

import OCCUPATIONS from '@/data/oinp-occupations';

export const PATHWAYS = [
  { v: 'skilled',   t: 'Employer Job Offer: Foreign Worker' },
  { v: 'essential', t: 'Employer Job Offer: In-Demand Skills' },
  { v: 'physician', t: 'Employer Job Offer: International Student, or a physician' },
];

/** Which factor cards each pathway asks for, in order. */
export const FLOW = {
  skilled:   ['occ', 'wage', 'expjob', 'expont', 'earn', 'status', 'edu', 'cancred', 'clb', 'lang2', 'region'],
  essential: ['occ', 'wage', 'expjob', 'expont', 'earn', 'status', 'edu', 'cancred', 'clb', 'lang2', 'region'],
  // Physician NOCs are TEER 1, so TEER still scores, but there is no wage factor: 130 - 15 = 115.
  physician: ['occ', 'expphys', 'earn', 'status', 'edu', 'cancred', 'clb', 'lang2', 'region'],
};

export const LABELS = {
  teer:    ['TEER level', 9],
  cat:     ['Occupation category', 10],
  wage:    ['Compensation', 15],
  exp:     ['Work experience', 18],
  earn:    ['Tax history', 8],
  status:  ['Status in Canada', 10],
  edu:     ['Highest credential', 10],
  cancred: ['Canadian credentials', 10],
  clb:     ['Language level', 15],
  lang2:   ['Official languages', 10],
  region:  ['Work location', 15],
};

export const ORDER = ['teer', 'cat', 'wage', 'exp', 'earn', 'status', 'edu', 'cancred', 'clb', 'lang2', 'region'];

export const TEER_PTS = { 0: 9, 1: 9, 2: 6, 3: 6, 4: 0, 5: 0 };
export const TEER_LABEL = { 0: 'TEER 0', 1: 'TEER 1', 2: 'TEER 2', 3: 'TEER 3', 4: 'TEER 4', 5: 'TEER 5' };

/** Occupational category points and names, keyed by the first digit of the NOC code. */
export const CATEGORY_PTS = {
  "0": 4,
  "1": 4,
  "2": 6,
  "3": 10,
  "4": 4,
  "5": 2,
  "6": 2,
  "7": 8,
  "8": 4,
  "9": 4
};

export const CATEGORY_NAMES = {
  "0": "Legislative and senior management",
  "1": "Business, finance and administration",
  "2": "Natural and applied sciences",
  "3": "Health",
  "4": "Education, law, social, community and government services",
  "5": "Art, culture, recreation and sport",
  "6": "Sales and service",
  "7": "Trades, transport and equipment operators",
  "8": "Natural resources, agriculture and related production",
  "9": "Manufacturing and utilities"
};

export const maxScore = (pathway) => (pathway === 'physician' ? 115 : 130);

export const activeFactors = (pathway) =>
  !pathway ? [] : ORDER.filter((k) => (pathway === 'physician' ? k !== 'wage' : true));

/** Experience takes the better of the two job/Ontario answers, or the physician one. */
export function expPoints(state, pathway) {
  if (pathway === 'physician') return state.expphys || 0;
  return Math.max(state.expjob || 0, state.expont || 0);
}

export function expAnswered(state, pathway) {
  if (pathway === 'physician') return 'expphys' in state;
  return 'expjob' in state || 'expont' in state;
}

const pointsFor = (state, pathway, k) => (k === 'exp' ? expPoints(state, pathway) : state[k] || 0);
const answered  = (state, pathway, k) => (k === 'exp' ? expAnswered(state, pathway) : k in state);

export function computeOinp(state) {
  const pathway = state.pathway || null;
  const factors = activeFactors(pathway);
  const max = maxScore(pathway);

  const rows = factors.map((k) => ({
    key: k,
    label: LABELS[k][0],
    outOf: LABELS[k][1],
    points: pointsFor(state, pathway, k),
    done: answered(state, pathway, k),
  }));

  const total = rows.reduce((a, r) => a + r.points, 0);
  const done = rows.filter((r) => r.done).length;

  let verdict;
  if (!pathway) verdict = 'Choose a pathway to start scoring.';
  else if (done < rows.length)
    verdict = `Answered ${done} of ${rows.length}. Complete every factor for an accurate estimate.`;
  else
    verdict = `Estimated ${total} of ${max}. The OINP has no fixed pass mark. Draw scores change with every round and differ by stream.`;

  return { pathway, total, max, rows, done, complete: pathway && done === rows.length, verdict };
}

/* ------------------------------------------------------------------ search */

const INDEX = OCCUPATIONS.map((o) => ({
  code: o.code,
  title: o.title,
  alias: (o.keywords || '').toLowerCase(),
  teer: o.code.charAt(1),
  cat: o.code.charAt(0),
}));

/** Ranking ported from the original: exact alias, alias prefix, word start, substring. */
function scoreEntry(e, q) {
  const aliases = e.alias ? e.alias.split('|') : [];
  const t = e.title.toLowerCase();
  let best = 0;

  for (const a of aliases) {
    if (a === q) return 1000;
    if (a.indexOf(q) === 0) best = Math.max(best, 700 - a.length);
    else if (a.indexOf(' ' + q) > -1) best = Math.max(best, 500 - a.length);
    else if (a.indexOf(q) > -1) best = Math.max(best, 300 - a.length);
  }
  if (t === q) return 950;
  if (t.indexOf(q) === 0) best = Math.max(best, 650 - t.length * 0.2);
  else if (t.indexOf(' ' + q) > -1) best = Math.max(best, 460 - t.length * 0.2);
  else if (t.indexOf(q) > -1) best = Math.max(best, 260 - t.length * 0.2);
  if (e.code.indexOf(q) === 0) best = Math.max(best, 900);

  return best;
}

export function searchOccupations(query, limit = 12) {
  const q = (query || '').trim().toLowerCase();
  if (q.length < 2) return [];
  return INDEX
    .map((e) => ({ e, s: scoreEntry(e, q) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.e.title.length - b.e.title.length)
    .slice(0, limit)
    .map((x) => x.e);
}

export const OCCUPATION_COUNT = INDEX.length;
