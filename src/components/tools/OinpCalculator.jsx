'use client';

import { useMemo, useState } from 'react';
import ToolShell from './ToolShell';
import ConsultationCTA from './ConsultationCTA';
import { Card, SelectField, RadioGroup, ScorePanel, MobileDock } from './ui';
import { OINP_CARDS, OINP_PATHWAY_OPTIONS } from '@/lib/tools/oinp.config';
import {
  FLOW, LABELS, TEER_PTS, TEER_LABEL, CATEGORY_PTS, CATEGORY_NAMES,
  computeOinp, searchOccupations, OCCUPATION_COUNT,
} from '@/lib/tools/oinp';

const CARD = Object.fromEntries(OINP_CARDS.map((c) => [c.id, c]));

export default function OinpCalculator() {
  const [state, setState] = useState({});
  const [occQuery, setOccQuery] = useState('');
  const [occOpen, setOccOpen] = useState(false);
  const [occ, setOcc] = useState(null);
  const [manual, setManual] = useState(false);

  const pathway = state.pathway || null;
  const r = useMemo(() => computeOinp(state), [state]);
  const hits = useMemo(() => (occOpen ? searchOccupations(occQuery) : []), [occQuery, occOpen]);

  const drop = (obj, ...keys) => {
    const out = { ...obj };
    keys.forEach((k) => delete out[k]);
    return out;
  };

  /** An empty value clears the factor so it counts as unanswered. */
  const setFactor = (key) => (v) =>
    setState((p) => (v === '' ? drop(p, key) : { ...p, [key]: Number(v) }));

  function choosePathway(v) {
    setState(v ? { pathway: v } : {});
    setOcc(null); setOccQuery(''); setManual(false);
  }

  function pickOccupation(o) {
    setOcc(o); setOccQuery(''); setOccOpen(false); setManual(false);
    setState((p) => ({
      ...p,
      teer: TEER_PTS[o.teer] ?? 0,
      cat: CATEGORY_PTS[o.cat] ?? 0,
    }));
  }

  function clearOccupation() {
    setOcc(null);
    setState((p) => drop(p, 'teer', 'cat'));
  }

  const flow = pathway ? FLOW[pathway] : [];
  const occCard = CARD.occ;

  const optLabel = (card, key) => {
    const v = state[key];
    if (v == null) return 'not answered';
    return card.options?.find((o) => Number(o.v) === v)?.t ?? String(v);
  };

  const answers = [
    { label: 'Pathway', value: OINP_PATHWAY_OPTIONS.find((p) => p.v === pathway)?.t ?? 'not chosen' },
    ...(occ
      ? [{ label: 'Occupation', value: `${occ.code} ${occ.title} (${TEER_LABEL[occ.teer]}, ${CATEGORY_NAMES[occ.cat]})` }]
      : []),
    ...flow.filter((id) => id !== 'occ' && CARD[id]).map((id) => ({
      label: CARD[id].title, value: optLabel(CARD[id], id),
    })),
    ...r.rows.map((row) => ({
      label: `${row.label} points`,
      value: row.done ? `${row.points} of ${row.outOf}` : 'not answered',
    })),
  ];

  const rows = r.rows.map((row) => ({
    label: row.label,
    value: row.done ? `${row.points} / ${row.outOf}` : `\u2014 / ${row.outOf}`,
  }));

  const panel = (
    <>
      <ScorePanel
        label="Your OINP score"
        total={r.total}
        outOf={r.max}
        barPct={r.max ? (r.total / r.max) * 100 : 0}
        pass={r.complete}
        verdict={r.verdict}
        verdictTone={!pathway ? null : r.complete ? 'pass' : null}
        rows={pathway ? rows : []}
        onReset={() => { setState({}); setOcc(null); setOccQuery(''); setManual(false); }}
      />
      <ConsultationCTA
        source="OINP Calculator"
        result={`OINP estimated total ${r.total} / ${r.max}`}
        answers={answers}
        body="Professionals at TNC will check your profile against the Employer Job Offer requirements, confirm your NOC, and tell you whether this score is worth acting on."
      />
    </>
  );

  return (
    <>
      <ToolShell
        title={['OINP', 'Calculator']}
        intro="The Ontario Immigrant Nominee Program ranks Employer Job Offer profiles out of 130, or 115 for physicians, who have no compensation factor. There is no fixed pass mark. Each round invites down to whatever score fills it."
        panel={panel}
        hasDock
      >
        <Card title="Pathway" max="Sets which factors apply"
              sub="Your stream decides which factors are scored and what the total is out of.">
          <RadioGroup name="pathway" options={OINP_PATHWAY_OPTIONS}
                      value={pathway ?? ''} onChange={choosePathway} />
        </Card>

        {pathway && occCard && (
          <Card title={occCard.title} max={occCard.max} sub={occCard.sub}>
            {!occ && (
              <div className="tnc-field tnc-combo">
                <label htmlFor="occ-search">
                  Search your occupation or NOC code, {OCCUPATION_COUNT} listed
                </label>
                <input
                  type="search" id="occ-search" autoComplete="off"
                  placeholder="registered nurse, welder, truck driver&hellip;"
                  value={occQuery}
                  onChange={(e) => { setOccQuery(e.target.value); setOccOpen(true); }}
                  onFocus={() => setOccOpen(true)}
                  onBlur={() => setTimeout(() => setOccOpen(false), 150)}
                  role="combobox" aria-expanded={occOpen && hits.length > 0} aria-controls="occ-list"
                />
                {occOpen && hits.length > 0 && (
                  <div className="tnc-combo-list" id="occ-list" role="listbox">
                    {hits.map((o) => (
                      <div key={o.code} role="option" aria-selected="false" className="tnc-combo-item"
                           onMouseDown={(e) => { e.preventDefault(); pickOccupation(o); }}>
                        <b>{o.code}</b> {o.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {occ && (
              <div className="tnc-picked">
                <span>
                  <strong>{occ.code}</strong> {occ.title}
                  <br />
                  {TEER_LABEL[occ.teer]} ({state.teer ?? 0} points) &middot;{' '}
                  {CATEGORY_NAMES[occ.cat]} ({state.cat ?? 0} points)
                </span>
                <button type="button" onClick={clearOccupation} aria-label="Clear occupation">&times;</button>
              </div>
            )}

            <button type="button" className="tnc-chip" style={{ marginTop: 12 }}
                    onClick={() => { const next = !manual; setManual(next); if (next) clearOccupation(); }}>
              {manual ? 'Search instead' : 'Not listed? Set TEER and category yourself'}
            </button>

            {manual && (
              <div style={{ marginTop: 14 }}>
                <SelectField id="mTeer" label="TEER level, the second digit of your NOC code"
                             value={state.teer != null ? String(state.teer) : ''}
                             onChange={setFactor('teer')} options={occCard.manualTeer} />
                <SelectField id="mCat" label="Occupational category, the first digit of your NOC code"
                             value={state.cat != null ? String(state.cat) : ''}
                             onChange={setFactor('cat')} options={occCard.manualCategory} />
              </div>
            )}
          </Card>
        )}

        {flow.filter((id) => id !== 'occ').map((id) => {
          const card = CARD[id];
          if (!card) return null;
          return (
            <Card key={id} title={card.title} max={card.max} sub={card.sub}>
              {card.kind === 'radio' ? (
                <RadioGroup name={id} options={card.options}
                            value={state[id] != null ? String(state[id]) : ''}
                            onChange={setFactor(id)} />
              ) : (
                <SelectField id={id} label={card.title}
                             value={state[id] != null ? String(state[id]) : ''}
                             onChange={setFactor(id)} options={card.options} />
              )}
              {(id === 'expjob' || id === 'expont') && (
                <p className="tnc-note-soft">
                  Only the better of your experience in the offered position and your experience
                  anywhere in Ontario counts, up to {LABELS.exp[1]} points. They do not add together.
                </p>
              )}
            </Card>
          );
        })}

        {!pathway && (
          <div className="tnc-card">
            <p className="tnc-card-sub" style={{ marginBottom: 0 }}>
              Choose a pathway above and the factors that apply to it will appear here.
            </p>
          </div>
        )}
      </ToolShell>
      <MobileDock total={r.total} label="OINP score" />
    </>
  );
}
