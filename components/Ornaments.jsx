/* Hand-drawn botanical and gold ornaments as inline SVG. */

export function LeafSprig({ className = "", tone = "green", style }) {
  const leaf = tone === "gold" ? "#c99a48" : "#2f5a33";
  const leaf2 = tone === "gold" ? "#e6cb86" : "#5f8a4f";
  const stem = tone === "gold" ? "#b8893b" : "#3f5e3a";
  const leaves = [
    { x: 40, y: 200, r: -48, s: 1 },
    { x: 60, y: 168, r: 40, s: 0.95 },
    { x: 66, y: 134, r: -52, s: 0.9 },
    { x: 86, y: 104, r: 34, s: 0.85 },
    { x: 92, y: 74, r: -58, s: 0.75 },
    { x: 110, y: 50, r: 26, s: 0.65 },
    { x: 118, y: 28, r: -40, s: 0.55 },
  ];
  return (
    <svg
      viewBox="0 0 180 260"
      className={className}
      style={style}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M20 258 C 40 200, 70 150, 90 100 S 120 30, 130 8"
        stroke={stem}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}>
          <path
            d="M0 0 C 14 -10, 40 -10, 54 0 C 40 10, 14 10, 0 0 Z"
            fill={i % 2 ? leaf2 : leaf}
            opacity="0.92"
          />
          <path d="M2 0 L 50 0" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  );
}

export function Flourish({ className = "", width = 180 }) {
  return (
    <svg
      viewBox="0 0 240 24"
      width={width}
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path d="M0 12 H 96" stroke="#b8893b" strokeOpacity="0.8" strokeWidth="1" />
      <path d="M144 12 H 240" stroke="#b8893b" strokeOpacity="0.8" strokeWidth="1" />
      <path
        d="M98 12 C 104 4, 112 4, 114 10 M 142 12 C 136 4, 128 4, 126 10 M98 12 C 104 20, 112 20, 114 14 M142 12 C 136 20, 128 20, 126 14"
        stroke="#b8893b"
        strokeWidth="1"
      />
      <path d="M120 5 L 126 12 L 120 19 L 114 12 Z" fill="#b8893b" />
      <circle cx="120" cy="12" r="1.6" fill="#fbf6ec" />
    </svg>
  );
}

export function Corner({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <path d="M2 40 V 2 H 40" stroke="#b8893b" strokeWidth="1.1" />
      <path d="M8 30 V 8 H 30" stroke="#b8893b" strokeWidth="0.7" opacity="0.7" />
      <path
        d="M8 8 C 18 10, 22 14, 24 24 C 14 22, 10 18, 8 8 Z"
        fill="#b8893b"
        opacity="0.85"
      />
      <circle cx="40" cy="2" r="1.8" fill="#b8893b" />
      <circle cx="2" cy="40" r="1.8" fill="#b8893b" />
    </svg>
  );
}

export function Lotus({ className = "" }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true" fill="none">
      <path d="M30 4 C 36 12, 36 20, 30 28 C 24 20, 24 12, 30 4 Z" fill="#b8893b" />
      <path d="M30 28 C 22 26, 14 20, 12 10 C 22 12, 28 18, 30 28 Z" fill="#c99a48" opacity="0.85" />
      <path d="M30 28 C 38 26, 46 20, 48 10 C 38 12, 32 18, 30 28 Z" fill="#c99a48" opacity="0.85" />
      <path d="M30 28 C 20 29, 8 26, 2 20 C 12 18, 22 22, 30 28 Z" fill="#e6cb86" opacity="0.8" />
      <path d="M30 28 C 40 29, 52 26, 58 20 C 48 18, 38 22, 30 28 Z" fill="#e6cb86" opacity="0.8" />
    </svg>
  );
}
