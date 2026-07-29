'use client';

/**
 * Shared UI primitives for the tools.
 * Reconstructed for the preview app to match the class names in styles/tools.css.
 * The onChange handlers here emit the *value*, not the event, because the
 * calculators wire them up as set('key') where set = (k) => (v) => ...
 */

export function Card({ title, max, maxMuted, sub, children }) {
  return (
    <div className="tnc-card">
      <div className="tnc-card-title">
        <h2>{title}</h2>
        {max && <span className={`tnc-max${maxMuted ? ' tnc-zero' : ''}`}>{max}</span>}
      </div>
      {sub && <p className="tnc-card-sub">{sub}</p>}
      {children}
    </div>
  );
}

export function SelectField({ id, label, value, onChange, options }) {
  return (
    <div className="tnc-field">
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.v} value={o.v}>{o.t}</option>
        ))}
      </select>
    </div>
  );
}

export function NumberField({ id, label, value, onChange, min, max, step, placeholder, badge, badgeTone }) {
  const toneClass =
    badgeTone === 'empty' ? ' tnc-clb-empty' : badgeTone === 'low' ? ' tnc-clb-low' : '';
  return (
    <div className="tnc-field">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type="number" id={id} value={value} placeholder={placeholder}
        min={min} max={max} step={step}
        onChange={(e) => onChange(e.target.value)}
      />
      {badge && <span className={`tnc-clb${toneClass}`}>{badge}</span>}
    </div>
  );
}

export function CheckRow({ id, checked, onChange, points, disabled, children }) {
  return (
    <label className={`tnc-check${checked ? ' tnc-on' : ''}${disabled ? ' tnc-disabled' : ''}`} htmlFor={id}>
      <input
        type="checkbox" id={id} checked={checked} disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="tnc-check-text">{children}</span>
      {points != null && <span className="tnc-check-pts">{points}</span>}
    </label>
  );
}

export function ScorePanel({
  label, total, outOf, outOfNote, barPct, pass, mark, markLabel,
  verdict, verdictTone, rows = [], onReset,
}) {
  return (
      <div className="tnc-score">
        <div className="tnc-score-label">{label}</div>
        <div className="tnc-score-num">{total}</div>
        <div className="tnc-score-of">
          out of {outOf}{outOfNote ? ` · ${outOfNote}` : ''}
        </div>

        <div className="tnc-bar">
          <div
            className={`tnc-bar-fill${pass ? ' tnc-pass' : ''}`}
            style={{ width: `${barPct}%` }}
          />
          {mark != null && <div className="tnc-bar-mark" style={{ left: `${mark}%` }} />}
        </div>
        <div className="tnc-bar-caption">
          <span>0</span>
          {markLabel && <span>cut-off {markLabel}</span>}
          <span>{outOf}</span>
        </div>

        {verdict && (
          <div className={`tnc-verdict${verdictTone ? ` tnc-${verdictTone}` : ''}`}>{verdict}</div>
        )}

        {rows.length > 0 && (
          <div className="tnc-breakdown">
            {rows.map((row, i) => (
              <div key={i} className={`tnc-brow${row.sub ? ' tnc-sub' : ''}`}>
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
        )}

        {onReset && (
          <button type="button" className="tnc-reset" onClick={onReset}>Reset all answers</button>
        )}
      </div>
  );
}

export function MobileDock({ total, label }) {
  return (
    <div className="tnc-dock">
      <div>
        <div className="tnc-dock-label">{label}</div>
        <div className="tnc-dock-num">{total}</div>
      </div>
    </div>
  );
}
