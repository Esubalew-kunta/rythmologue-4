import { motion, useReducedMotion } from 'framer-motion'

// Soft mint→teal aurora that breathes behind the hero and feature bands.
export function Aurora({ className = '', intensity = 1 }) {
  const reduce = useReducedMotion()
  const drift = reduce ? '' : 'animate-aurora-drift'
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true" style={{ opacity: intensity }}>
      <div className={`absolute -top-1/4 left-[12%] h-[62vh] w-[62vh] rounded-full bg-signal/15 blur-[130px] ${drift}`} />
      <div className={`absolute top-[8%] -right-[12%] h-[58vh] w-[58vh] rounded-full bg-aurora/18 blur-[140px] ${drift}`} style={{ animationDelay: '-9s' }} />
      <div className={`absolute -bottom-[12%] left-[28%] h-[50vh] w-[50vh] rounded-full bg-signal/12 blur-[130px] ${drift}`} style={{ animationDelay: '-17s' }} />
    </div>
  )
}

// Soft spotlight that fades in on load to lift the hero.
export function Spotlight({ className = '', at = '70% 18%' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      initial={reduce ? { opacity: 0.6 } : { opacity: 0, scale: 1.1 }}
      animate={{ opacity: 0.7, scale: 1 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: `radial-gradient(720px 480px at ${at}, rgba(62,158,130,0.10), transparent 70%)` }}
    />
  )
}

export function Stars({ className = '' }) {
  return <div className={`pointer-events-none absolute inset-0 bg-stars opacity-50 ${className}`} aria-hidden="true" />
}

export function Horizon({ className = '' }) {
  return <div className={`hairline-aqua h-px w-full ${className}`} aria-hidden="true" />
}
