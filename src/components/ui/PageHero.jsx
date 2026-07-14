import { Link } from 'react-router-dom'
import { SignalField } from '../brand/Champ'
import { Container, Label } from './primitives'

// Consistent interior-page hero on porcelaine, with a faint corner Champ field.
export default function PageHero({ eyebrow, title, lede, breadcrumb, rings = 3, children }) {
  return (
    <header className="relative overflow-hidden border-b border-filet bg-porcelaine pt-[74px]">
      <SignalField
        count={11}
        cx={70}
        cy={90}
        baseR={20}
        gap={40}
        animate={false}
        className="pointer-events-none absolute -left-24 -top-24 h-[520px] w-[520px] opacity-[0.6]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        {breadcrumb && (
          <nav className="mb-6 flex items-center gap-2 text-xs text-ardoise" aria-label="Fil d'ariane">
            <Link to="/" className="hover:text-vert">Accueil</Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-filet">/</span>
                {b.href ? <Link to={b.href} className="hover:text-vert">{b.label}</Link> : <span className="text-graphite">{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <Label className="mb-5 text-vert">{eyebrow}</Label>}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tightish text-graphite sm:text-5xl">{title}</h1>
          {lede && <p className="mt-6 max-w-reading text-lg text-ardoise">{lede}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </header>
  )
}
