import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, FinalCta } from '../components/ui/kit'
import { MediaPlaceholder } from '../components/ui/Placeholder'
import { Reveal } from '../components/ui/primitives'
import { articles, blogCategories, categoryLabel } from '../data/content'

export default function Blog() {
  const [cat, setCat] = useState('all')
  const list = cat === 'all' ? articles : articles.filter((a) => a.category === cat)

  return (
    <>
      <Seo title="Blog" description="Le blog du Dr Sana Amraoui : guides clairs sur les examens, les traitements et la prévention en cardiologie et rythmologie. Comprendre son cœur, en quelques minutes." />
      <PageHero
        eyebrow="Blog"
        title="Comprendre, en quelques minutes"
        lede="Des guides clairs, écrits pour être lus sans jargon : examens, traitements, prévention. Parce qu’un examen bien compris est toujours mieux vécu."
        breadcrumb={[{ label: 'Blog' }]}
      />

      <Section tone="porcelaine">
        <Container>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <FilterChip active={cat === 'all'} onClick={() => setCat('all')}>Tous</FilterChip>
            {blogCategories.map((c) => (
              <FilterChip key={c.key} active={cat === c.key} onClick={() => setCat(c.key)}>{c.label}</FilterChip>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {list.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <Link to={`/blog/${a.slug}`} className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-filet bg-blanc transition-all duration-300 ease-calm hover:-translate-y-1 hover:shadow-lift">
                  <MediaPlaceholder label={`Illustration · ${a.title}`} ratio="3/2" className="rounded-none border-0 border-b border-filet" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded bg-eucalyptus px-2 py-0.5 text-2xs font-semibold uppercase tracking-wide text-vert-deep">{a.kind}</span>
                      <span className="text-xs text-ardoise">{categoryLabel(a.category)} · {a.read}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-snug text-graphite transition-colors group-hover:text-vert">{a.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-ardoise">{a.excerpt}</p>
                    <span className="mt-4 text-xs text-ardoise-soft">{a.date}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta title="Une question que le blog n’a pas résolue ?" />
    </>
  )
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active ? 'border-vert bg-vert text-white' : 'border-filet bg-blanc text-ardoise hover:border-vert/40 hover:text-vert'
      }`}
    >
      {children}
    </button>
  )
}
