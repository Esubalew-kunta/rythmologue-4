import { Link } from 'react-router-dom'

// Clean card: subtle hover lift + border accent. No cursor gimmick, no glass.
export function GlowCard({ children, className = '' }) {
  return (
    <div className={`group rounded-panel border border-abyss-line bg-abyss transition-all duration-300 ease-calm hover:-translate-y-1 hover:border-signal/40 hover:shadow-card ${className}`}>
      {children}
    </div>
  )
}

// Editorial stat: a figure with a hairline rule and an optional small viz.
export function MonitorStat({ children, label, viz, dotsTotal = 4, dotsLit = 1, className = '' }) {
  return (
    <div className={`border-t border-abyss-line pt-5 ${className}`}>
      <div className="font-display text-4xl font-medium leading-none text-pearl sm:text-[2.75rem]">{children}</div>
      {viz === 'bar' && (
        <div className="mt-4 h-1 w-full max-w-[180px] overflow-hidden rounded-full bg-abyss-line" aria-hidden="true">
          <div className="h-full w-[78%] rounded-full bg-signal" />
        </div>
      )}
      {viz === 'dots' && (
        <div className="mt-4 flex gap-1.5" aria-hidden="true">
          {Array.from({ length: dotsTotal }).map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i < dotsLit ? 'bg-signal' : 'bg-abyss-line'}`} />
          ))}
        </div>
      )}
      <p className="mt-3 max-w-[28ch] text-sm leading-snug text-mist">{label}</p>
    </div>
  )
}

// Primary / ghost button. Restrained hover, no decorative sweep.
export function BeamButton({ href, to, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const sizes = { md: 'px-6 py-3 text-base min-h-[50px]', lg: 'px-7 py-3.5 text-lg min-h-[54px]', sm: 'px-4 py-2.5 text-sm min-h-[42px]' }
  const variants = {
    primary: 'bg-signal text-white font-semibold hover:bg-signal-deep shadow-[0_10px_24px_-16px_rgba(62,158,130,0.5)]',
    ghost: 'border border-signal/40 text-signal-deep hover:border-signal hover:bg-signal/[0.06]',
  }
  const cls = `inline-flex items-center justify-center gap-2 rounded-panel font-sans transition-all duration-300 ease-calm hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal ${sizes[size]} ${variants[variant]} ${className}`
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>{children}</a>
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  return <button className={cls} {...rest}>{children}</button>
}

export function Arrow({ className = '' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      <path d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
