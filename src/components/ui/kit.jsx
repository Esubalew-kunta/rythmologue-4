import { Container, Section, Label, Reveal, Button, Arrow } from './primitives'
import { SignalField, SourceGlyph, CornerMark } from '../brand/Champ'
import { site } from '../../data/site'

// Section heading block: index label + title + lede.
export function SectionHead({ index, kicker, title, lede, tone = 'light', align = 'left', className = '' }) {
  const dark = tone === 'dark'
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {(index || kicker) && (
        <div className={`mb-6 flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
          {index && <span className={`label ${dark ? 'text-vert-sauge' : 'text-vert'}`}>{index}</span>}
          {kicker && <span className={`label ${dark ? 'text-porcelaine/50' : 'text-ardoise'}`}>{kicker}</span>}
        </div>
      )}
      <h2 className={`text-3xl font-bold tracking-tightish sm:text-4xl ${dark ? 'text-porcelaine' : 'text-graphite'}`}>{title}</h2>
      {lede && <p className={`mt-5 text-lg ${dark ? 'text-porcelaine/70' : 'text-ardoise'} ${align === 'center' ? 'mx-auto max-w-reading' : 'max-w-reading'}`}>{lede}</p>}
    </div>
  )
}

// Large intro paragraph under a page hero.
export function Lead({ children, className = '' }) {
  return <p className={`max-w-reading text-xl leading-relaxed text-graphite-soft ${className}`}>{children}</p>
}

// Styled long-form prose (for definitions / explanations).
export function Prose({ children, className = '' }) {
  return (
    <div className={`max-w-reading space-y-5 text-lg leading-relaxed text-ardoise [&_a]:font-medium [&_a]:text-vert [&_a]:underline [&_a]:decoration-vert/30 [&_a:hover]:decoration-vert [&_h3]:pt-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-graphite [&_strong]:font-semibold [&_strong]:text-graphite ${className}`}>
      {children}
    </div>
  )
}

// Grid of cards.
export function CardGrid({ children, cols = 3, className = '' }) {
  const map = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }
  return <div className={`grid gap-5 ${map[cols]} ${className}`}>{children}</div>
}

// Info panel card with optional ring glyph + badge.
export function InfoCard({ title, rings, badge, tag, children, className = '' }) {
  return (
    <div className={`panel relative flex h-full flex-col p-6 ${className}`}>
      <CornerMark corner="tr" className="absolute right-3 top-3 opacity-50" />
      {rings != null && <SourceGlyph rings={rings} size={40} className="mb-5" />}
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-bold text-graphite">{title}</h3>
        {badge && <span className="rounded bg-vert/10 px-2 py-0.5 text-2xs font-semibold uppercase tracking-wide text-vert">{badge}</span>}
      </div>
      {tag && <p className="mt-1 text-sm font-medium text-vert">{tag}</p>}
      <div className="mt-3 flex-1 text-sm text-ardoise">{children}</div>
    </div>
  )
}

// Big stat.
export function KeyStat({ value, label, tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <div className={`rounded-xl2 border p-6 ${dark ? 'border-white/10 bg-white/[0.03]' : 'border-filet bg-blanc'}`}>
      <p className={`font-display text-4xl font-bold ${dark ? 'text-porcelaine' : 'text-graphite'}`}>{value}</p>
      <p className={`mt-2 text-sm ${dark ? 'text-porcelaine/65' : 'text-ardoise'}`}>{label}</p>
    </div>
  )
}

// Callout / tip box (info or urgent).
export function Callout({ title, tone = 'info', children }) {
  const urgent = tone === 'urgent'
  return (
    <div className={`rounded-xl2 border-l-4 p-5 ${urgent ? 'border-l-red-500 bg-red-50/60' : 'border-l-vert bg-eucalyptus'}`}>
      {title && <p className={`font-display font-bold ${urgent ? 'text-red-700' : 'text-vert-deep'}`}>{title}</p>}
      <div className={`mt-1 text-sm ${urgent ? 'text-red-900/80' : 'text-graphite-soft'}`}>{children}</div>
    </div>
  )
}

// Pull-quote in the doctor's voice.
export function PullQuote({ children, cite }) {
  return (
    <figure className="relative my-8 rounded-xl2 border border-filet bg-blanc p-7 sm:p-9">
      <SignalField count={6} cx={520} cy={70} baseR={20} gap={26} animate={false} className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-40" />
      <blockquote className="relative font-display text-xl font-medium leading-snug text-graphite sm:text-2xl">
        « {children} »
      </blockquote>
      {cite && <figcaption className="relative mt-4 text-sm font-semibold text-vert">{cite}</figcaption>}
    </figure>
  )
}

// Numbered steps.
export function StepList({ steps, cols = 4 }) {
  const map = { 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }
  return (
    <div className={`grid gap-5 ${map[cols]}`}>
      {steps.map((s, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div className="h-full rounded-xl2 border border-filet bg-blanc p-6">
            <span className="label text-vert">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 text-lg font-bold text-graphite">{s.t}</h3>
            <p className="mt-2 text-sm text-ardoise">{s.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

// Reusable dark final CTA.
export function FinalCta({ title = 'Remettons votre cœur à son juste rythme.', lede = 'Une question, un symptôme, un avis à confirmer ? Prenez rendez-vous, nous sommes là pour vous.' }) {
  return (
    <section className="relative overflow-hidden bg-graphite py-20 text-center text-porcelaine sm:py-28">
      <SignalField count={14} cx={300} cy={300} baseR={30} gap={40} animate={false} color="#2C8368" className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <Container className="relative">
        <Label className="mb-6 text-vert-sauge" as="div">Prendre soin de votre cœur</Label>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tightish text-porcelaine sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-porcelaine/70">{lede}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={site.doctolib} variant="dark" size="lg">
            Prendre rendez-vous
            <Arrow />
          </Button>
          <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="font-display text-lg font-semibold text-porcelaine">
            {site.phones[0]}
          </a>
        </div>
        <p className="mt-6 text-sm text-porcelaine/50">{site.sector}</p>
      </Container>
    </section>
  )
}

export { Container, Section, Label, Reveal, Button, Arrow }
