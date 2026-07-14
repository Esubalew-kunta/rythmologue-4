import { motion, useReducedMotion } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────────
// « Le Champ » — the signature motif.
// Concentric hairline "signal-field" rings radiating from a single source-point,
// the way a rythmologue maps the heart's electrical activation. Calm rings
// (order, resolved rhythm) — the deliberate ANTI-ECG. Never a drawn waveform.
// ─────────────────────────────────────────────────────────────────────────────

// Large field for hero / section backgrounds. Bleeds; place inside overflow-hidden.
export function SignalField({
  count = 9,
  cx = 300,
  cy = 300,
  baseR = 26,
  gap = 34,
  color = '#1F6B54',
  warmBloom = false,
  animate = true,
  className = '',
}) {
  const reduce = useReducedMotion()
  const on = animate && !reduce
  const rings = Array.from({ length: count })

  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {warmBloom && (
        <>
          <defs>
            <radialGradient id="champ-warm" cx="50%" cy="50%" r="50%" gradientUnits="userSpaceOnUse"
              gradientTransform={`translate(${cx} ${cy})`}>
              <stop offset="0%" stopColor="#EAD9C4" stopOpacity="0.55" />
              <stop offset="55%" stopColor="#EAD9C4" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#EAD9C4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={cx} cy={cy} r={baseR + gap * count} fill="url(#champ-warm)" />
        </>
      )}
      {rings.map((_, i) => {
        const r = baseR + i * gap
        const opacity = Math.max(0.05, 0.5 - i * (0.42 / count))
        const common = {
          cx,
          cy,
          r,
          stroke: color,
          strokeWidth: 1,
          strokeOpacity: opacity,
        }
        if (!on) return <circle key={i} {...common} />
        return (
          <motion.circle
            key={i}
            {...common}
            initial={{ scale: 0.955, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.09 }}
          />
        )
      })}
      <circle cx={cx} cy={cy} r={4} fill={color} />
    </svg>
  )
}

// Small source-glyph icon — ring count encodes the condition/treatment identity.
export function SourceGlyph({ rings = 3, size = 46, color = '#1F6B54', className = '' }) {
  const c = size / 2
  const gap = (size / 2 - 4) / (rings + 0.5)
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" className={className} aria-hidden="true">
      {Array.from({ length: rings }).map((_, i) => (
        <circle
          key={i}
          cx={c}
          cy={c}
          r={gap * (i + 1)}
          stroke={color}
          strokeWidth="1.1"
          strokeOpacity={0.9 - i * (0.6 / rings)}
        />
      ))}
      <circle cx={c} cy={c} r={2.4} fill={color} />
    </svg>
  )
}

// Quarter-arc registration mark for panel corners.
export function CornerMark({ size = 22, color = '#1F6B54', className = '', corner = 'tl' }) {
  const rot = { tl: 0, tr: 90, br: 180, bl: 270 }[corner] || 0
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" className={className} aria-hidden="true" style={{ transform: `rotate(${rot}deg)` }}>
      <path d="M3 19 A16 16 0 0 1 19 3" stroke={color} strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="3" cy="19" r="1.4" fill={color} />
    </svg>
  )
}

// A calm horizontal "cartographie" band — faint concentric arcs bleeding from a
// corner source, for full-width section dividers/decor.
export function FieldBand({ className = '', color = '#1F6B54' }) {
  return (
    <svg viewBox="0 0 1200 220" className={className} fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={i} cx="120" cy="110" r={40 + i * 58} stroke={color} strokeWidth="1" strokeOpacity={Math.max(0.04, 0.3 - i * 0.024)} />
      ))}
      <circle cx="120" cy="110" r="4" fill={color} />
    </svg>
  )
}
