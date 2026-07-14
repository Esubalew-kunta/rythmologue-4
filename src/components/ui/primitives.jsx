import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

// ── Layout ──────────────────────────────────────────────────────────────────
export function Container({ className = '', children }) {
  return <div className={`container-edge ${className}`}>{children}</div>
}

export function Section({ id, className = '', tone = 'porcelaine', children }) {
  const tones = {
    porcelaine: 'bg-porcelaine',
    blanc: 'bg-blanc',
    eucalyptus: 'bg-eucalyptus',
    graphite: 'bg-graphite text-porcelaine',
  }
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-32 ${tones[tone]} ${className}`}>
      {children}
    </section>
  )
}

// Tracked-uppercase instrument label
export function Label({ children, className = '', as: As = 'p' }) {
  return <As className={`label ${className}`}>{children}</As>
}

// Section index rule: "01 — ARYTHMIE" over a hairline
export function IndexRule({ index, children, tone = 'light' }) {
  const color = tone === 'dark' ? 'border-white/15' : 'border-filet'
  const text = tone === 'dark' ? 'text-porcelaine/70' : 'text-ardoise'
  return (
    <div className={`flex items-center gap-4 border-t ${color} pt-4`}>
      <span className={`label ${text}`} style={{ letterSpacing: '0.16em' }}>
        {index}
      </span>
      <span className={`label ${text}`}>{children}</span>
    </div>
  )
}

// ── Reveal — the single calm settle (fade + 12px rise), fires once ───────────
export function Reveal({ children, delay = 0, y = 12, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div
  if (reduce) return <div className={className}>{children}</div>
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  )
}

// Stagger container for grids of Reveals
export function Stagger({ children, className = '' }) {
  return <div className={className}>{children}</div>
}

// ── Button ──────────────────────────────────────────────────────────────────
export function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const base =
    'inline-flex items-center justify-center gap-2 font-display font-semibold rounded-panel transition-all duration-300 ease-calm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const sizes = {
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-7 py-3.5 text-lg min-h-[52px]',
    sm: 'px-4 py-2 text-sm min-h-[40px]',
  }
  const variants = {
    primary:
      'bg-vert text-white shadow-[0_10px_28px_-14px_rgba(31,107,84,0.6)] hover:bg-vert-deep hover:-translate-y-0.5 focus-visible:outline-vert',
    ghost:
      'border border-vert/35 text-vert hover:border-vert hover:bg-vert/5 focus-visible:outline-vert',
    dark:
      'bg-white text-graphite hover:bg-white/90 hover:-translate-y-0.5 focus-visible:outline-white',
    quiet:
      'text-vert hover:text-vert-deep link-underline focus-visible:outline-vert px-0 min-h-0 rounded-none',
  }
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}

// Arrow glyph for links/buttons
export function Arrow({ className = '' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      <path d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
