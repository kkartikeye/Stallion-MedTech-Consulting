/**
 * Technical plates.
 *
 * Custom drafting linework used wherever a photograph is specified but not
 * yet licensed. These are deliberately NOT abstract decoration: each plate
 * depicts the kind of subject its slot calls for (electronics, a machined
 * assembly, a forming operation, a distribution network), so a page reads
 * as art-directed rather than as a broken image.
 *
 * They are drawn, not generated — no fantastical AI imagery, nothing that
 * misrepresents a real product. When a licensed photograph arrives, the
 * Figure component swaps it in and the plate disappears.
 *
 * All plates are decorative within a <figure> that carries its own caption,
 * so they are aria-hidden; the surrounding figure supplies the text.
 */

export type PlateVariant = "electronics" | "assembly" | "fabrication" | "network";

const STROKE = "currentColor";

function Electronics() {
  // PCB detail: ground pour boundary, routed traces, pads, IC outline,
  // edge connector fingers.
  return (
    <g fill="none" stroke={STROKE} strokeWidth="1" vectorEffect="non-scaling-stroke">
      <rect x="24" y="20" width="352" height="200" strokeOpacity="0.5" />
      <rect x="40" y="34" width="320" height="172" strokeOpacity="0.18" strokeDasharray="3 4" />

      {/* IC package with pin ranks */}
      <rect x="150" y="82" width="96" height="66" strokeOpacity="0.85" />
      <circle cx="162" cy="94" r="4" strokeOpacity="0.85" />
      {Array.from({ length: 7 }, (_, i) => (
        <g key={`ic-${i}`} strokeOpacity="0.7">
          <path d={`M${158 + i * 13} 82 V70`} />
          <path d={`M${158 + i * 13} 148 V160`} />
        </g>
      ))}

      {/* Routed traces leaving the package */}
      <path d="M150 96 H104 L88 112 H52" strokeOpacity="0.55" />
      <path d="M150 112 H112 L98 126 H52" strokeOpacity="0.55" />
      <path d="M150 128 H120 L106 142 H52" strokeOpacity="0.35" />
      <path d="M246 96 H292 L308 80 H352" strokeOpacity="0.55" />
      <path d="M246 118 H300 L316 134 H352" strokeOpacity="0.55" />
      <path d="M246 134 H288" strokeOpacity="0.35" />

      {/* Vias */}
      {[
        [88, 112],
        [98, 126],
        [308, 80],
        [316, 134],
        [288, 134],
      ].map(([cx, cy]) => (
        <circle key={`via-${cx}-${cy}`} cx={cx} cy={cy} r="3.5" strokeOpacity="0.8" />
      ))}

      {/* Passive components */}
      {[
        [64, 60],
        [84, 60],
        [104, 60],
      ].map(([x, y]) => (
        <rect key={`r-${x}`} x={x} y={y} width="14" height="7" strokeOpacity="0.6" />
      ))}

      {/* Edge connector fingers */}
      {Array.from({ length: 12 }, (_, i) => (
        <rect
          key={`f-${i}`}
          x={132 + i * 11}
          y="196"
          width="7"
          height="24"
          strokeOpacity={i % 3 === 0 ? "0.75" : "0.4"}
        />
      ))}

      {/* Datum + dimension */}
      <path d="M24 236 H376" strokeOpacity="0.3" />
      <path d="M24 231 V241 M376 231 V241" strokeOpacity="0.3" />
    </g>
  );
}

function Assembly() {
  // Mechanical section: bolt circle, bore, section hatching, dimensions.
  return (
    <g fill="none" stroke={STROKE} strokeWidth="1" vectorEffect="non-scaling-stroke">
      {/* Centre lines */}
      <path d="M200 12 V228" strokeOpacity="0.3" strokeDasharray="14 4 3 4" />
      <path d="M60 120 H340" strokeOpacity="0.3" strokeDasharray="14 4 3 4" />

      {/* Concentric bodies */}
      <circle cx="200" cy="120" r="96" strokeOpacity="0.75" />
      <circle cx="200" cy="120" r="78" strokeOpacity="0.35" />
      <circle cx="200" cy="120" r="42" strokeOpacity="0.8" />
      <circle cx="200" cy="120" r="30" strokeOpacity="0.5" />

      {/* Bolt circle */}
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const cx = 200 + Math.cos(a) * 60;
        const cy = 120 + Math.sin(a) * 60;
        return (
          <g key={`bolt-${i}`}>
            <circle cx={cx} cy={cy} r="7" strokeOpacity="0.7" />
            <path
              d={`M${cx - 10} ${cy} H${cx + 10} M${cx} ${cy - 10} V${cy + 10}`}
              strokeOpacity="0.25"
            />
          </g>
        );
      })}
      <circle cx="200" cy="120" r="60" strokeOpacity="0.22" strokeDasharray="9 5" />

      {/* Section hatching in the left annulus */}
      {Array.from({ length: 9 }, (_, i) => (
        <path
          key={`hatch-${i}`}
          d={`M${96 + i * 7} ${72 + i * 3} l26 26`}
          strokeOpacity="0.28"
        />
      ))}

      {/* Leader + dimension to the right */}
      <path d="M296 120 H352" strokeOpacity="0.4" />
      <path d="M352 108 V132" strokeOpacity="0.4" />
      <path d="M242 96 L300 62 H340" strokeOpacity="0.35" />
      <circle cx="242" cy="96" r="2.5" fill={STROKE} stroke="none" fillOpacity="0.5" />
    </g>
  );
}

function Fabrication() {
  // Forming / sheet-metal: flat pattern, bend lines, formed profile, tool.
  return (
    <g fill="none" stroke={STROKE} strokeWidth="1" vectorEffect="non-scaling-stroke">
      {/* Flat pattern with bend allowances */}
      <path d="M36 44 H228 V150 H36 Z" strokeOpacity="0.75" />
      <path d="M72 44 V150 M192 44 V150" strokeOpacity="0.4" strokeDasharray="10 5" />
      <path d="M36 76 H228" strokeOpacity="0.4" strokeDasharray="10 5" />
      {/* Relief cutouts */}
      {[
        [90, 96],
        [124, 96],
        [158, 96],
      ].map(([x, y]) => (
        <rect key={`slot-${x}`} x={x} y={y} width="20" height="34" rx="3" strokeOpacity="0.6" />
      ))}
      <circle cx="54" cy="60" r="6" strokeOpacity="0.6" />
      <circle cx="210" cy="60" r="6" strokeOpacity="0.6" />

      {/* Formed profile (side view) */}
      <path
        d="M268 150 V92 a14 14 0 0 1 14-14 H340 a14 14 0 0 1 14 14 V150"
        strokeOpacity="0.85"
      />
      <path
        d="M280 150 V98 a6 6 0 0 1 6-6 H336 a6 6 0 0 1 6 6 V150"
        strokeOpacity="0.35"
      />

      {/* Press tool above */}
      <path d="M286 34 H336 V62 H286 Z" strokeOpacity="0.5" />
      <path d="M311 62 V76" strokeOpacity="0.5" strokeDasharray="4 4" />
      <path d="M305 76 l6 8 l6 -8 Z" strokeOpacity="0.7" />

      {/* Bed line + datum */}
      <path d="M252 150 H372" strokeOpacity="0.5" />
      {Array.from({ length: 10 }, (_, i) => (
        <path key={`bed-${i}`} d={`M${254 + i * 12} 150 l-7 8`} strokeOpacity="0.25" />
      ))}

      {/* Dimension run under the flat pattern */}
      <path d="M36 178 H228" strokeOpacity="0.35" />
      <path d="M36 173 V183 M228 173 V183 M72 173 V183 M192 173 V183" strokeOpacity="0.35" />
    </g>
  );
}

function Network() {
  // Distribution / global execution: nodes, routes, no glowing globe.
  const nodes: [number, number, number][] = [
    [62, 86, 5],
    [128, 58, 4],
    [150, 132, 7],
    [214, 96, 4],
    [268, 62, 5],
    [292, 148, 8],
    [344, 108, 4],
    [96, 168, 4],
    [226, 178, 5],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 7],
    [3, 4],
    [3, 5],
    [4, 6],
    [5, 6],
    [5, 8],
    [2, 8],
  ];

  return (
    <g fill="none" stroke={STROKE} strokeWidth="1" vectorEffect="non-scaling-stroke">
      {/* Graticule — restrained, suggests geography without drawing a globe */}
      {Array.from({ length: 5 }, (_, i) => (
        <path
          key={`lat-${i}`}
          d={`M28 ${52 + i * 34} Q200 ${40 + i * 34} 372 ${52 + i * 34}`}
          strokeOpacity="0.12"
        />
      ))}
      {Array.from({ length: 7 }, (_, i) => (
        <path
          key={`lon-${i}`}
          d={`M${44 + i * 52} 40 Q${52 + i * 52} 120 ${44 + i * 52} 200`}
          strokeOpacity="0.1"
        />
      ))}

      {edges.map(([a, b]) => (
        <path
          key={`e-${a}-${b}`}
          d={`M${nodes[a][0]} ${nodes[a][1]} L${nodes[b][0]} ${nodes[b][1]}`}
          strokeOpacity="0.4"
        />
      ))}

      {nodes.map(([cx, cy, r], i) => (
        <g key={`n-${i}`}>
          <circle cx={cx} cy={cy} r={r} strokeOpacity="0.85" />
          {r >= 7 ? <circle cx={cx} cy={cy} r={r + 7} strokeOpacity="0.25" /> : null}
        </g>
      ))}

      {/* Two emphasised corridors */}
      <path
        d={`M${nodes[2][0]} ${nodes[2][1]} L${nodes[5][0]} ${nodes[5][1]}`}
        strokeOpacity="0.9"
        strokeWidth="1.5"
      />
      <path d="M28 210 H372" strokeOpacity="0.25" />
    </g>
  );
}

const PLATES: Record<PlateVariant, { render: () => React.ReactElement; viewBox: string }> = {
  electronics: { render: Electronics, viewBox: "0 0 400 252" },
  assembly: { render: Assembly, viewBox: "0 0 400 240" },
  fabrication: { render: Fabrication, viewBox: "0 0 400 200" },
  network: { render: Network, viewBox: "0 0 400 224" },
};

export function TechnicalPlate({
  variant,
  className = "",
  fit = "meet",
}: {
  variant: PlateVariant;
  className?: string;
  /**
   * "meet" letterboxes the whole drawing; "slice" crops it to fill, which
   * is what the aggressive framing in hero and full-bleed slots calls for.
   */
  fit?: "meet" | "slice";
}) {
  const plate = PLATES[variant];
  const Render = plate.render;

  return (
    <svg
      viewBox={plate.viewBox}
      className={className}
      preserveAspectRatio={fit === "slice" ? "xMidYMid slice" : "xMidYMid meet"}
      aria-hidden="true"
      focusable="false"
    >
      <Render />
    </svg>
  );
}
