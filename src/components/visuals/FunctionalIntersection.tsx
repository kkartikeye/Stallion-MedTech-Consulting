/**
 * FIG. 01 — Functional intersection.
 *
 * The site's central argument as a drawing: eight MedTech functions arranged
 * on a ring, with the chords between them emphasised rather than the boxes.
 * The dense centre is the point — the hardest problems are not inside any
 * one function, they are in the overlaps.
 *
 * Deliberately not a Venn diagram of tidy circles and not a glowing network:
 * it is drawn as a drafting figure, with datum ring, chord lines, and
 * labelled nodes.
 *
 * Accessible as an image with a text alternative; the function list is also
 * rendered visibly beneath it by the calling section, so no information is
 * carried by the graphic alone.
 */

const FUNCTIONS = [
  "Engineering",
  "Quality",
  "Regulatory",
  "Clinical",
  "Operations",
  "Supply Chain",
  "Commercial",
  "Program",
] as const;

const CX = 200;
const CY = 200;
const R = 132;

function nodeAt(index: number, total: number, radius = R) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CX + Math.cos(angle) * radius,
    y: CY + Math.sin(angle) * radius,
    angle,
  };
}

export function FunctionalIntersection({ className = "" }: { className?: string }) {
  const points = FUNCTIONS.map((_, i) => nodeAt(i, FUNCTIONS.length));

  // Every chord except immediate neighbours — neighbours already read as
  // adjacent on the ring, so drawing them adds weight without meaning.
  const chords: [number, number][] = [];
  for (let a = 0; a < FUNCTIONS.length; a += 1) {
    for (let b = a + 2; b < FUNCTIONS.length; b += 1) {
      if (a === 0 && b === FUNCTIONS.length - 1) continue;
      chords.push([a, b]);
    }
  }

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-labelledby="fig01-title fig01-desc"
    >
      <title id="fig01-title">
        Functional intersection in medical technology programs
      </title>
      <desc id="fig01-desc">
        Eight functions — engineering, quality, regulatory, clinical, operations, supply chain,
        commercial, and program leadership — arranged on a ring, with lines connecting every
        non-adjacent pair. The dense overlapping centre represents where cross-functional MedTech
        problems actually sit.
      </desc>

      <g fill="none" vectorEffect="non-scaling-stroke">
        {/* Datum ring */}
        <circle cx={CX} cy={CY} r={R} stroke="currentColor" strokeOpacity="0.14" />
        <circle
          cx={CX}
          cy={CY}
          r={R - 34}
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeDasharray="3 5"
        />

        {/* Chords — the substance of the figure */}
        {chords.map(([a, b]) => (
          <line
            key={`c-${a}-${b}`}
            x1={points[a].x}
            y1={points[a].y}
            x2={points[b].x}
            y2={points[b].y}
            stroke="currentColor"
            strokeOpacity="0.16"
          />
        ))}

        {/* Emphasised paths: the intersections Stallion is most often called
            into — engineering↔quality↔operations, and regulatory↔clinical. */}
        <line
          x1={points[0].x}
          y1={points[0].y}
          x2={points[4].x}
          y2={points[4].y}
          stroke="var(--color-accent-400)"
          strokeOpacity="0.85"
          strokeWidth="1.5"
        />
        <line
          x1={points[1].x}
          y1={points[1].y}
          x2={points[5].x}
          y2={points[5].y}
          stroke="var(--color-accent-400)"
          strokeOpacity="0.6"
          strokeWidth="1.25"
        />
        <line
          x1={points[2].x}
          y1={points[2].y}
          x2={points[6].x}
          y2={points[6].y}
          stroke="var(--color-accent-400)"
          strokeOpacity="0.45"
          strokeWidth="1.25"
        />

        {/* Centre marker — where the problem lives */}
        <circle cx={CX} cy={CY} r="21" stroke="var(--color-accent-400)" strokeOpacity="0.5" />
        <circle
          cx={CX}
          cy={CY}
          r="4"
          fill="var(--color-accent-400)"
          stroke="none"
          fillOpacity="0.9"
        />
        <line
          x1={CX - 32}
          y1={CY}
          x2={CX - 24}
          y2={CY}
          stroke="currentColor"
          strokeOpacity="0.4"
        />
        <line
          x1={CX + 24}
          y1={CY}
          x2={CX + 32}
          y2={CY}
          stroke="currentColor"
          strokeOpacity="0.4"
        />

        {/* Nodes */}
        {points.map((p, i) => (
          <circle
            key={`n-${i}`}
            cx={p.x}
            cy={p.y}
            r="5.5"
            fill="var(--color-ink-950)"
            stroke="currentColor"
            strokeOpacity="0.9"
          />
        ))}
      </g>

      {/* Labels, placed outside the ring and aligned by hemisphere */}
      {points.map((p, i) => {
        const outward = nodeAt(i, FUNCTIONS.length, R + 22);
        const cos = Math.cos(p.angle);
        const anchor = Math.abs(cos) < 0.25 ? "middle" : cos > 0 ? "start" : "end";
        return (
          <text
            key={`l-${i}`}
            x={outward.x}
            y={outward.y}
            textAnchor={anchor}
            dominantBaseline="middle"
            className="annotation-sm"
            fill="currentColor"
            fillOpacity="0.75"
            style={{ fontSize: "10px", letterSpacing: "0.08em" }}
          >
            {FUNCTIONS[i].toUpperCase()}
          </text>
        );
      })}
    </svg>
  );
}

export const functionalIntersectionFunctions = FUNCTIONS;
