/**
 * Page frame for a single tool: heading, two-column grid (form + score panel),
 * and a disclaimer. Reconstructed for the preview app to match styles/tools.css.
 *
 * @param {string[]} title  two words, first is coloured, e.g. ['CRS', 'Calculator']
 * @param {string}   intro  lead paragraph under the heading
 * @param {node}     panel  the sticky right-hand column (score, levers, CTA)
 * @param {boolean}  hasDock adds bottom padding so the mobile dock never overlaps
 */
export default function ToolShell({ title, intro, panel, hasDock, children }) {
  const [first, ...rest] = Array.isArray(title) ? title : [title];
  return (
    <div className={`tnc-wrap${hasDock ? ' tnc-has-dock' : ''}`}>
      <div className="tnc-inner">
        <div className="tnc-head">
          <h1>
            <span>{first}</span>{rest.length ? ` ${rest.join(' ')}` : ''}
          </h1>
          <div className="tnc-rule" />
          {intro && <p>{intro}</p>}
        </div>

        <div className={`tnc-grid${panel ? '' : ' tnc-solo'}`}>
          <div>{children}</div>
          {panel && <div className="tnc-panel">{panel}</div>}
        </div>

        <div className="tnc-disclaimer">
          <p>
            <strong>Preview build.</strong> This is an unofficial estimate for planning only,
            not immigration advice. Final scoring is determined by IRCC.
          </p>
        </div>
      </div>
    </div>
  );
}
