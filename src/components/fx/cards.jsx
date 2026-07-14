import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { EcgMini } from './Ecg'

// Glass card with a cursor-following aqua spotlight + subtle lift.
export function GlowCard({ children, className = '' }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-panel glass transition-all duration-300 ease-calm hover:-translate-y-1 hover:shadow-glow ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(340px circle at var(--mx,50%) var(--my,0%), rgba(62,158,130,0.10), transparent 60%)' }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

// Cardiac-monitor stat tile. `viz`: 'bar' | 'dots' | 'ecg' | none.
export function MonitorStat({ children, label, viz, dotsTotal = 4, dotsLit = 1, className = '' }) {
  return (
    <GlowCard className={className}>
      <div className="absolute inset-0 bg-monitor opacity-40" aria-hidden="true" />
      <div className="absolute right-3 top-3 opacity-60">
        <EcgMini className="h-4 w-14" />
      </div>
      <div className="relative p-5 sm:p-6">
        <div className="font-mono text-3xl font-medium text-signal glow-text sm:text-4xl">{children}</div>
        {viz === 'bar' && (
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-pearl/10">
            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-aurora to-signal shadow-glow-sm" />
          </div>
        )}
        {viz === 'dots' && (
          <div className="mt-3 flex gap-1.5" aria-hidden="true">
            {Array.from({ length: dotsTotal }).map((_, i) => (
              <span key={i} className={`h-2.5 w-2.5 rounded-full ${i < dotsLit ? 'bg-signal shadow-glow-sm' : 'bg-pearl/12'}`} />
            ))}
          </div>
        )}
        <p className="mt-3 text-sm leading-snug text-mist">{label}</p>
      </div>
    </GlowCard>
  )
}

// Primary CTA with a sweeping shine + aqua glow. Renders <a>, <Link> or <button>.
export function BeamButton({ href, to, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const sizes = { md: 'px-6 py-3 text-base min-h-[50px]', lg: 'px-7 py-3.5 text-lg min-h-[54px]', sm: 'px-4 py-2.5 text-sm min-h-[42px]' }
  const variants = {
    primary: 'bg-signal text-white font-semibold shadow-glow hover:bg-signal-deep hover:shadow-[0_12px_30px_-16px_rgba(62,158,130,0.45)]',
    ghost: 'border border-signal/40 text-signal-deep hover:border-signal hover:bg-signal/10',
  }
  const cls = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-panel font-sans transition-all duration-300 ease-calm hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal ${sizes[size]} ${variants[variant]} ${className}`
  const inner = (
    <>
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </>
  )
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>{inner}</a>
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  return <button className={cls} {...rest}>{inner}</button>
}

export function Arrow({ className = '' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      <path d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
