import { motion, useReducedMotion } from 'framer-motion'

// Build the trace: irregular fibrillation-chaos on the left that RESOLVES into a
// steady, even sinus rhythm on the right. The whole brand idea in one line.
function buildPath() {
  const mid = 110
  let d = `M0,${mid}`
  const chaos = [
    [26, 110], [40, 92], [55, 118], [70, 98], [86, 122], [100, 86], [116, 108], [134, 100],
    [150, 90], [166, 120], [182, 96], [198, 112], [214, 84], [230, 122], [246, 100], [262, 104],
    [286, 100], [300, 90], [316, 118], [332, 96], [348, 108], [366, 100], [384, 100],
  ]
  chaos.forEach(([x, y]) => { d += ` L${x},${y}` })
  const beatW = 150
  let x = 400
  for (let i = 0; i < 4; i++) {
    d += ` L${x + 18},${mid}`         // baseline
    d += ` L${x + 27},${mid - 10}`    // P wave up
    d += ` L${x + 36},${mid}`         // P down
    d += ` L${x + 54},${mid}`         // PR segment
    d += ` L${x + 60},${mid + 12}`    // Q dip
    d += ` L${x + 66},${mid - 66}`    // R spike
    d += ` L${x + 72},${mid + 26}`    // S dip
    d += ` L${x + 80},${mid}`         // back to baseline
    d += ` L${x + 100},${mid - 12}`   // T wave up
    d += ` L${x + 124},${mid}`        // T down
    d += ` L${x + beatW},${mid}`      // baseline to next beat
    x += beatW
  }
  d += ` L1000,${mid}`
  return d
}

const D = buildPath()

export function EcgOfLight({ className = '' }) {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 1000 220" className={className} fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="ecg-grad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6FBEB0" />
          <stop offset="42%" stopColor="#3E9E82" />
          <stop offset="100%" stopColor="#2C7A64" />
        </linearGradient>
        <filter id="ecg-glow" x="-10%" y="-80%" width="120%" height="260%">
          <feGaussianBlur stdDeviation="3.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* faint ghost trace so the line reads even before/behind the draw */}
      <path d={D} stroke="#CFE7DD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

      {/* the glowing, self-drawing signal */}
      <motion.path
        id="ecg-signal"
        d={D}
        stroke="url(#ecg-grad)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#ecg-glow)"
        initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.9 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* comet pulse dot riding the trace (scales perfectly with the SVG) */}
      {!reduce && (
        <circle r="4.6" fill="#2C7A64" filter="url(#ecg-glow)">
          <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" calcMode="linear">
            <mpath href="#ecg-signal" />
          </animateMotion>
        </circle>
      )}
    </svg>
  )
}

// Compact inline heartbeat for cards / footers (static, low-key).
export function EcgMini({ className = '', color = '#3E9E82' }) {
  return (
    <svg viewBox="0 0 120 32" className={className} fill="none" aria-hidden="true">
      <path d="M0,16 L28,16 L34,16 L38,7 L44,25 L50,16 L62,16 L66,10 L72,22 L78,16 L120,16"
        stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  )
}
