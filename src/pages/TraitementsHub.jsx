import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, CardGrid, InfoCard, FinalCta, Arrow } from '../components/ui/kit'
import { SourceGlyph, CornerMark } from '../components/brand/Champ'
import { Reveal } from '../components/ui/primitives'
import { treatments, energies } from '../data/content'

export default function TraitementsHub() {
  return (
    <>
      <Seo title="Traitements" description="Les traitements des troubles du rythme cardiaque : ablation par cathéter, pacemaker (stimulateur), défibrillateur automatique. Expliqués simplement par le Dr Sana Amraoui." />
      <PageHero
        eyebrow="02 · Traitements"
        title="Des solutions concrètes, expliquées simplement"
        lede="De l’ablation mini-invasive aux dispositifs implantables, chaque traitement vous est présenté avec ses bénéfices, son déroulé et ses limites, pour décider en confiance."
        breadcrumb={[{ label: 'Traitements' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {treatments.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.06}>
                <Link to={t.slug} className="panel group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-300 ease-calm hover:-translate-y-1 hover:shadow-lift">
                  <CornerMark corner="tr" className="absolute right-3 top-3 opacity-50" />
                  <SourceGlyph rings={t.rings} size={48} />
                  <p className="mt-6 text-sm font-medium text-vert">{t.lead}</p>
                  <h3 className="mt-1 text-xl font-bold text-graphite">{t.name}</h3>
                  <p className="mt-3 flex-1 text-sm text-ardoise">{t.blurb}</p>
                  <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-graphite transition-colors group-hover:text-vert">
                    Découvrir <Arrow className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <SectionHead title="Les trois énergies de l’ablation" lede="Quand une ablation est indiquée, plusieurs énergies existent. Le choix dépend de votre arythmie." />
          <CardGrid cols={3} className="mt-14">
            {energies.map((e) => (
              <InfoCard key={e.name} title={e.name} rings={3} tag={e.by} badge={e.badge}>{e.desc}</InfoCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <FinalCta title="Discutons du traitement le plus adapté" />
    </>
  )
}
