import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, FinalCta } from '../components/ui/kit'
import { faqCategories, faqItems } from '../data/content'

export default function Faq() {
  const [cat, setCat] = useState('Tous')
  const [open, setOpen] = useState(0)
  const cats = ['Tous', ...faqCategories]
  const list = cat === 'Tous' ? faqItems : faqItems.filter((f) => f.cat === cat)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <Seo title="FAQ" description="Questions fréquentes en rythmologie : différence cardiologue / rythmologue, quand consulter, palpitations, ablation, montres connectées, sport. Réponses du Dr Sana Amraoui." jsonLd={jsonLd} />
      <PageHero
        eyebrow="FAQ"
        title="Le cœur a ses raisons, que nous vous expliquons ici"
        lede="Les questions que l’on nous pose le plus souvent, avec des réponses claires. En avoir le cœur net, simplement."
        breadcrumb={[{ label: 'FAQ' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => { setCat(c); setOpen(0) }}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  cat === c ? 'border-vert bg-vert text-white' : 'border-filet bg-blanc text-ardoise hover:border-vert/40 hover:text-vert'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl divide-y divide-filet overflow-hidden rounded-xl2 border border-filet bg-blanc">
            {list.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-display text-lg font-semibold text-graphite">{f.q}</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" className={`shrink-0 text-vert transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} aria-hidden="true">
                    <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-ardoise">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta title="Votre question n’est pas là ? Écrivez-nous." lede="Le secrétariat vous répond rapidement, ou prenez directement rendez-vous." />
    </>
  )
}
