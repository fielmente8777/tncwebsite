'use client';

import { useMemo, useState } from 'react';
import ToolShell from './ToolShell';
import ConsultationCTA from './ConsultationCTA';
import { Card, SelectField, NumberField, ScorePanel, MobileDock } from './ui';
import {
  LANG, ABILITIES, toCLB, rangeFor, stepFor, secondLanguageTests,
  computeCRS, levers, CEC_CUT, PNP_CUT, CRS_MAX,
} from "@/lib/tools/crs";

const MARITAL = [
  { v: 'single', t: 'Never married / single' },
  { v: 'married', t: 'Married' },
  { v: 'common-law', t: 'Common-law' },
  { v: 'divorced', t: 'Divorced / separated' },
  { v: 'legally-separated', t: 'Legally separated' },
  { v: 'annulled', t: 'Annulled marriage' },
  { v: 'widowed', t: 'Widowed' },
];

const EDUCATION = [
  { v: 'phd', t: 'Doctoral (PhD) level degree' },
  { v: 'masters', t: "Master's, or professional degree for a licensed profession" },
  { v: 'twoOrMore', t: 'Two or more credentials, at least one from a 3+ year program' },
  { v: 'bachelor', t: "Bachelor's degree or 3+ year program" },
  { v: 'twoYear', t: 'Two-year degree, diploma or certificate' },
  { v: 'oneYear', t: 'One-year degree, diploma or certificate' },
  { v: 'secondary', t: 'Secondary school (high school)' },
  { v: 'none', t: 'Less than secondary school' },
];

const CAN_EDU = [
  { v: 'none', t: 'No Canadian credential' },
  { v: 'secondary', t: 'Secondary (high school) or less' },
  { v: 'short', t: 'One- or two-year credential' },
  { v: 'long', t: "Three years or longer, or a master's, professional or doctoral degree" },
];

const YEARS_10 = [
  { v: '0', t: 'None or under a year' }, { v: '1', t: '1 year' }, { v: '2', t: '2 years' },
  { v: '3', t: '3 years' }, { v: '4', t: '4 years' }, { v: '5', t: '5 years or more' },
];
const YEARS_3 = [
  { v: '0', t: 'None or under a year' }, { v: '1', t: '1 year' },
  { v: '2', t: '2 years' }, { v: '3', t: '3 years or more' },
];
const YES_NO = [{ v: 'no', t: 'No' }, { v: 'yes', t: 'Yes' }];

const TEF_CHARTS = [
  { v: 'old', t: 'Équivalence ancien score (what IRCC asks for)' },
  { v: 'new', t: 'Test taken after 10 Dec 2023 (score / 699)' },
  { v: 'mid', t: 'Test taken 1 Oct 2019 to 10 Dec 2023' },
];

const TEST_OPTIONS = Object.entries(LANG).map(([k, d]) => ({ v: k, t: d.label }));

const AGES = [
  { v: '17', t: 'Under 18' },
  ...Array.from({ length: 27 }, (_, i) => ({ v: String(i + 18), t: `${i + 18} years` })),
  { v: '45', t: '45 years or older' },
];

const DEFAULTS = {
  marital: 'single', spousePR: 'no', spouseComing: 'yes',
  age: '29', education: 'bachelor', canEdu: 'none',
  test1: 'ielts', chart1: 'old', a1: { S: '', L: '', R: '', W: '' },
  test2: 'none', chart2: 'old', a2: { S: '', L: '', R: '', W: '' },
  canWork: '0', forWork: '0', cert: 'no',
  pnp: 'no', sibling: 'no', jobOffer: 'no',
  spEdu: 'none', spWork: '0', spTest: 'none', chartSp: 'old', asx: { S: '', L: '', R: '', W: '' },
};

/** Raw scores for one test into CLB levels plus badge text. */
function readAbilities(test, chart, vals) {
  const unit = LANG[test].lang === 'fr' ? 'NCLC' : 'CLB';
  let any = false;
  const clb = [];
  const badges = {};
  for (const [code] of ABILITIES) {
    const raw = vals[code] === '' ? null : Number(vals[code]);
    if (raw !== null) any = true;
    const level = toCLB(test, chart, code, raw);
    clb.push(level === null ? 0 : level);
    badges[code] =
      level === null ? { text: 'Enter a score', tone: 'empty' }
      : level === 0 ? { text: `Below ${unit} 4`, tone: 'low' }
      : { text: `${unit} ${level}${level === 10 ? ' or higher' : ''}`, tone: null };
  }
  return { clb: any ? clb : null, badges, unit };
}

export default function CrsCalculator() {
  const [s, setS] = useState(DEFAULTS);
  const set = (k) => (v) => setS((p) => ({ ...p, [k]: v }));
  const setAbility = (group, code) => (v) =>
    setS((p) => ({ ...p, [group]: { ...p[group], [code]: v } }));

  const partnered = s.marital === 'married' || s.marital === 'common-law';
  const hasSpouse = partnered && s.spousePR === 'no' && s.spouseComing === 'yes';

  const first = readAbilities(s.test1, s.chart1, s.a1);
  const second = s.test2 !== 'none' ? readAbilities(s.test2, s.chart2, s.a2) : null;
  const spouse = s.spTest !== 'none' ? readAbilities(s.spTest, s.chartSp, s.asx) : null;

  const firstIsFrench = LANG[s.test1].lang === 'fr';
  let englishCLB = null, frenchCLB = null;
  if (firstIsFrench) frenchCLB = first.clb; else englishCLB = first.clb;
  if (second?.clb) {
    if (LANG[s.test2].lang === 'en') englishCLB = second.clb; else frenchCLB = second.clb;
  }

  const input = useMemo(() => ({
    hasSpouse,
    age: Number(s.age),
    education: s.education,
    canEdu: s.canEdu,
    first: first.clb || [0, 0, 0, 0],
    second: second?.clb || null,
    englishCLB, frenchCLB, firstIsFrench,
    canWork: Number(s.canWork),
    forWork: Number(s.forWork),
    cert: s.cert === 'yes',
    pnp: s.pnp === 'yes',
    sibling: s.sibling === 'yes',
    spEdu: s.spEdu,
    spWork: Number(s.spWork),
    spLang: spouse?.clb || null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [JSON.stringify(s), hasSpouse]);

  const r = useMemo(() => computeCRS(input), [input]);
  const lv = useMemo(() => levers(input, r.total), [input, r.total]);

  const secondTests = useMemo(() => secondLanguageTests(s.test1), [s.test1]);
  const label = (list, v) => list.find((o) => o.v === v)?.t ?? v;

  const answers = [
    { label: 'Marital status', value: label(MARITAL, s.marital) },
    ...(partnered ? [
      { label: 'Partner is a Canadian citizen or PR', value: s.spousePR },
      { label: 'Partner is coming to Canada', value: s.spouseComing },
    ] : []),
    { label: 'Age', value: label(AGES, s.age) },
    { label: 'Highest level of education', value: label(EDUCATION, s.education) },
    { label: 'Canadian post-secondary education', value: label(CAN_EDU, s.canEdu) },
    { label: 'First official language test', value: LANG[s.test1].label },
    { label: 'First language CLB (S/L/R/W)', value: (first.clb || [0, 0, 0, 0]).join(' / ') },
    { label: 'Second official language test', value: s.test2 === 'none' ? 'none' : LANG[s.test2].label },
    ...(second?.clb ? [{ label: 'Second language CLB (S/L/R/W)', value: second.clb.join(' / ') }] : []),
    { label: 'Canadian skilled work experience', value: label(YEARS_10, s.canWork) },
    { label: 'Foreign skilled work experience', value: label(YEARS_3, s.forWork) },
    { label: 'Certificate of qualification', value: s.cert },
    { label: 'Provincial nomination', value: s.pnp },
    { label: 'Sibling in Canada', value: s.sibling },
    { label: 'Valid job offer (scores 0 since 2025)', value: s.jobOffer },
    ...(hasSpouse ? [
      { label: "Partner's education", value: label(EDUCATION, s.spEdu) },
      { label: "Partner's Canadian work experience", value: label(YEARS_10, s.spWork) },
      { label: "Partner's language CLB (S/L/R/W)", value: spouse?.clb ? spouse.clb.join(' / ') : 'no test' },
    ] : []),
  ];

  const rows = [
    { label: 'Core human capital', value: r.core },
    { label: 'Age', value: r.age, sub: true },
    { label: 'Education', value: r.education, sub: true },
    { label: 'First official language', value: r.firstLang, sub: true },
    ...(r.secondLang ? [{ label: 'Second official language', value: r.secondLang, sub: true }] : []),
    ...(r.canWork ? [{ label: 'Canadian work experience', value: r.canWork, sub: true }] : []),
    ...(hasSpouse ? [
      { label: 'Partner factors', value: r.spouse },
      { label: 'Partner education', value: r.spEdu, sub: true },
      { label: 'Partner language', value: r.spLang, sub: true },
      { label: 'Partner Canadian work', value: r.spWork, sub: true },
    ] : []),
    { label: 'Skill transferability', value: r.transfer },
    ...(r.stEducation ? [{ label: 'Education combinations', value: r.stEducation, sub: true }] : []),
    ...(r.stForeign ? [{ label: 'Foreign work combinations', value: r.stForeign, sub: true }] : []),
    ...(r.stCert ? [{ label: 'Certificate of qualification', value: r.stCert, sub: true }] : []),
    { label: 'Additional points', value: r.additional },
    ...(r.pnp ? [{ label: 'Provincial nomination', value: r.pnp, sub: true }] : []),
    ...(r.french ? [{ label: 'French language bonus', value: r.french, sub: true }] : []),
    ...(r.canEdu ? [{ label: 'Canadian study', value: r.canEdu, sub: true }] : []),
    ...(r.sibling ? [{ label: 'Sibling in Canada', value: r.sibling, sub: true }] : []),
    ...(s.jobOffer === 'yes' ? [{ label: 'Job offer (removed 2025)', value: 0, sub: true }] : []),
  ];

  const gap = CEC_CUT - r.total;
  const verdict =
    r.total === 0 ? 'Fill in your details to see your score build.'
    : r.total >= CEC_CUT ? `You are above the latest Canadian Experience Class cut-off of ${CEC_CUT}.`
    : `You are ${gap} point${gap === 1 ? '' : 's'} below the latest Canadian Experience Class cut-off of ${CEC_CUT}.`;

  const AbilityGrid = ({ test, chart, group, vals, read }) => (
    <div className="tnc-quad">
      {ABILITIES.map(([code, name]) => {
        const [min, max] = rangeFor(test, chart, code);
        return (
          <NumberField
            key={code} id={`${group}-${code}`} label={name}
            value={vals[code]} onChange={setAbility(group, code)}
            min={min} max={max} step={stepFor(test)}
            placeholder={`${min} \u2013 ${max}`}
            badge={read.badges[code].text} badgeTone={read.badges[code].tone}
          />
        );
      })}
    </div>
  );

  const panel = (
    <>
      <ScorePanel
        label="Your CRS score"
        total={r.total}
        outOf={CRS_MAX}
        outOfNote={`latest CEC cut-off ${CEC_CUT}`}
        barPct={Math.min(100, (r.total / CRS_MAX) * 100)}
        pass={r.total >= CEC_CUT}
        mark={(CEC_CUT / CRS_MAX) * 100}
        markLabel={String(CEC_CUT)}
        verdict={verdict}
        verdictTone={r.total === 0 ? null : r.total >= CEC_CUT ? 'pass' : 'fail'}
        rows={rows}
        onReset={() => setS(DEFAULTS)}
      />

      <div className="tnc-side">
        <h3>What Moves Your Score</h3>
        <p className="tnc-side-sub">Real point gains, recalculated from your own answers.</p>
        {s.pnp !== 'yes' && (
          <div className="tnc-lever tnc-key">
            <span className="tnc-lever-pts">+600</span>
            <span>
              A provincial or territorial nomination. It outweighs everything else, and PNP rounds
              in 2026 have been drawing at {PNP_CUT}.
            </span>
          </div>
        )}
        {lv.map((l, i) => (
          <div className="tnc-lever" key={i}>
            <span className="tnc-lever-pts">+{l.pts}</span>
            <span>{l.text}</span>
          </div>
        ))}
        {s.pnp === 'yes' && lv.length === 0 && (
          <div className="tnc-lever"><span>Your profile is already at the top of every scored factor.</span></div>
        )}
      </div>

      <ConsultationCTA
        source="CRS Calculator"
        result={`CRS score ${r.total} / ${CRS_MAX}`}
        answers={answers}
      />
    </>
  );

  return (
    <>
      <ToolShell
        title={['CRS', 'Calculator']}
        intro="Work out your Comprehensive Ranking System score for Express Entry, see it against the cut-offs IRCC has actually drawn at in 2026, and find out which changes move it the most."
        panel={panel}
        hasDock
      >
        <Card title="Marital Status" max={hasSpouse ? 'Scored with a partner' : 'Scored as single'}
              sub="You are scored as a single applicant if your partner is not coming with you, or is already a Canadian citizen or permanent resident.">
          <SelectField id="marital" label="Your status" value={s.marital}
                       onChange={set('marital')} options={MARITAL} />
          {partnered && (
            <div className="tnc-two">
              <SelectField id="spousePR" label="Is your partner a Canadian citizen or PR?"
                           value={s.spousePR} onChange={set('spousePR')} options={YES_NO} />
              <SelectField id="spouseComing" label="Will your partner come with you to Canada?"
                           value={s.spouseComing} onChange={set('spouseComing')}
                           options={[{ v: 'yes', t: 'Yes' }, { v: 'no', t: 'No' }]} />
            </div>
          )}
        </Card>

        <Card title="Age" max={`Max ${hasSpouse ? 100 : 110} points`}
              sub="If you have been invited to apply, use your age on the date of the invitation. Otherwise use your age today.">
          <SelectField id="age" label="Your age" value={s.age} onChange={set('age')} options={AGES} />
        </Card>

        <Card title="Education" max={`Max ${hasSpouse ? 140 : 150} points`}
              sub="Use a Canadian credential, or a foreign credential with an Educational Credential Assessment from an approved agency issued in the last five years.">
          <SelectField id="education" label="Highest level of education" value={s.education}
                       onChange={set('education')} options={EDUCATION} />
        </Card>

        <Card title="First Official Language" max={`Max ${hasSpouse ? 128 : 136} points`}
              sub="Enter your raw test scores. This tool converts them to CLB or NCLC using the official IRCC equivalency charts. Results must be less than two years old, even if English or French is your first language.">
          <SelectField id="test1" label="Which test did you take?" value={s.test1}
                       onChange={(v) => setS((p) => ({ ...p, test1: v, a1: { S: '', L: '', R: '', W: '' }, test2: 'none' }))}
                       options={TEST_OPTIONS} />
          {LANG[s.test1].charts && (
            <SelectField id="chart1" label="Which TEF chart applies?" value={s.chart1}
                         onChange={set('chart1')} options={TEF_CHARTS} />
          )}
          <AbilityGrid test={s.test1} chart={s.chart1} group="a1" vals={s.a1} read={first} />
          {LANG[s.test1].charts && (
            <p className="tnc-note-soft">
              IRCC instructs applicants to enter scores from the <strong>Équivalence ancien score</strong>{' '}
              column of your attestation, whatever date you sat the test. Entering the / 699 column
              produces the wrong NCLC level.
            </p>
          )}
        </Card>

        <Card title="Second Official Language" max={`Max ${hasSpouse ? 22 : 24} points`}
              sub="Your second language must be the other official language. Scoring NCLC 7 in French also unlocks a separate bonus of up to 50 points.">
          <SelectField id="test2" label="Which test did you take?" value={s.test2}
                       onChange={(v) => setS((p) => ({ ...p, test2: v, a2: { S: '', L: '', R: '', W: '' } }))}
                       options={[{ v: 'none', t: 'No second language test' }, ...secondTests]} />
          {s.test2 !== 'none' && (
            <>
              {LANG[s.test2].charts && (
                <SelectField id="chart2" label="Which TEF chart applies?" value={s.chart2}
                             onChange={set('chart2')} options={TEF_CHARTS} />
              )}
              <AbilityGrid test={s.test2} chart={s.chart2} group="a2" vals={s.a2} read={second} />
            </>
          )}
        </Card>

        <Card title="Skilled Work Experience" max={`Max ${hasSpouse ? 70 : 80} points`}
              sub="Paid, full-time or equivalent part-time work in a NOC TEER 0, 1, 2 or 3 occupation. Canadian experience must be for a Canadian employer while you were physically in Canada. Remote work from inside Canada counts.">
          <div className="tnc-two">
            <SelectField id="canWork" label="Canadian experience in the last 10 years"
                         value={s.canWork} onChange={set('canWork')} options={YEARS_10} />
            <SelectField id="forWork" label="Foreign experience in the last 10 years"
                         value={s.forWork} onChange={set('forWork')} options={YEARS_3} />
          </div>
          <SelectField id="cert" label="Certificate of qualification in a skilled trade"
                       value={s.cert} onChange={set('cert')} options={YES_NO} />
          <p className="tnc-note-soft">
            Foreign experience and a trade certificate score nothing on their own. They pay out
            through <strong>skill transferability</strong>, worth up to 100 points, when combined
            with strong language results or Canadian experience.
          </p>
        </Card>

        <Card title="Arranged Employment in Canada" max="0 points since 2025" maxMuted
              sub="Since 25 March 2025, IRCC no longer awards 50 or 200 CRS points for a job offer. Calculators that still add those points will overstate your score.">
          <SelectField id="jobOffer" label="Do you have a valid job offer supported by an LMIA, or LMIA-exempt?"
                       value={s.jobOffer} onChange={set('jobOffer')}
                       options={[{ v: 'no', t: 'No valid job offer' }, { v: 'yes', t: 'Yes, I have a valid job offer' }]} />
          {s.jobOffer === 'yes' && (
            <p className="tnc-note-inline">
              Keep this in your Express Entry profile. It scores zero on the CRS, but it can still
              be part of your eligibility for the Federal Skilled Trades Program, the Federal
              Skilled Worker Program and some provincial nominee streams.
            </p>
          )}
        </Card>

        <Card title="Additional Points" max="Max 600 points"
              sub="A provincial nomination is worth 600 on its own, which is why nomination-backed rounds draw so far above the rest.">
          <div className="tnc-two">
            <SelectField id="pnp" label="Provincial or territorial nomination"
                         value={s.pnp} onChange={set('pnp')} options={YES_NO} />
            <SelectField id="sibling" label="Sibling in Canada who is a citizen or PR"
                         value={s.sibling} onChange={set('sibling')} options={YES_NO} />
          </div>
          <SelectField id="canEdu" label="Post-secondary education in Canada"
                       value={s.canEdu} onChange={set('canEdu')} options={CAN_EDU} />
          <p className="tnc-note-soft">
            The sibling must be 18 or older and share a parent with you or your partner, by blood,
            marriage, common-law partnership or adoption. Canadian study counts only if you were
            enrolled and physically present for at least eight months and English or French as a
            second language was not more than half your program.
          </p>
        </Card>

        {hasSpouse && (
          <Card title="Your Partner" max="Max 40 points"
                sub="These points apply only because your partner is coming with you and is not already a Canadian citizen or permanent resident.">
            <SelectField id="spEdu" label="Partner's highest level of education"
                         value={s.spEdu} onChange={set('spEdu')} options={EDUCATION} />
            <SelectField id="spWork" label="Partner's Canadian experience in the last 10 years"
                         value={s.spWork} onChange={set('spWork')} options={YEARS_10} />
            <SelectField id="spTest" label="Partner's language test" value={s.spTest}
                         onChange={(v) => setS((p) => ({ ...p, spTest: v, asx: { S: '', L: '', R: '', W: '' } }))}
                         options={[{ v: 'none', t: 'No test taken' }, ...TEST_OPTIONS]} />
            {s.spTest !== 'none' && (
              <>
                {LANG[s.spTest].charts && (
                  <SelectField id="chartSp" label="Which TEF chart applies?" value={s.chartSp}
                               onChange={set('chartSp')} options={TEF_CHARTS} />
                )}
                <AbilityGrid test={s.spTest} chart={s.chartSp} group="asx" vals={s.asx} read={spouse} />
              </>
            )}
          </Card>
        )}
      </ToolShell>
      <MobileDock total={r.total} label="CRS score" />
    </>
  );
}
