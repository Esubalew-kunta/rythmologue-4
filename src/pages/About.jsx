import Seo, { physicianSchema } from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Prose, CardGrid, InfoCard, PullQuote, FinalCta } from '../components/ui/kit'
import { MediaPlaceholder } from '../components/ui/Placeholder'
import { SourceGlyph } from '../components/brand/Champ'
import { Reveal } from '../components/ui/primitives'
import { parcours, credentials, authoritySignals } from '../data/content'

export default function About() {
  return (
    <>
      <Seo
        title="À propos"
        description="Le Dr Sana Amraoui, cardiologue rythmologue, cheffe d’unité à l’Hôpital Américain de Paris et fondatrice de Cardio Check-Up. Formée à Bordeaux, Londres, New York et à la LSE."
        jsonLd={physicianSchema}
      />
      <PageHero
        eyebrow="À propos"
        title="Dr Sana Amraoui"
        lede="Une expertise de pointe en rythmologie interventionnelle, au service d’un accompagnement simple et rassurant."
        breadcrumb={[{ label: 'À propos' }]}
      />

      {/* Bio split */}
      <Section tone="porcelaine">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative">
                  <MediaPlaceholder label="Portrait Dr Amraoui" ratio="4/5" warmBloom labelPos="top" />
                  <div className="panel absolute -bottom-5 -left-4 flex items-center gap-3 px-4 py-3">
                    <SourceGlyph rings={3} size={30} />
                    <div>
                      <p className="text-sm font-semibold leading-tight text-graphite">Cheffe d’unité</p>
                      <p className="text-xs text-ardoise">Hôpital Américain de Paris</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <SectionHead index="Parcours" title="Une médecine de très haut niveau, au service de l’humain" />
              <Prose className="mt-6">
                <p>
                  Cardiologue rythmologue reconnue, je dirige l’unité de cardiologie et d’arythmie de l’<strong>Hôpital
                  Américain de Paris</strong>, où je développe des approches innovantes en rythmologie interventionnelle.
                </p>
                <p>
                  En parallèle, je suis fondatrice et CEO de <strong>Cardio Check-Up</strong>, un centre dédié à la prévention
                  cardiovasculaire, un engagement pour une médecine proactive et accessible.
                </p>
                <p>
                  Mon parcours conjugue une double expertise, médicale et économique : diplômée en économie de la santé de la
                  <strong> London School of Economics</strong>, j’intègre les enjeux d’efficience et d’innovation dans ma pratique
                  clinique comme entrepreneuriale.
                </p>
              </Prose>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section tone="blanc">
        <Container>
          <SectionHead index="Formation & carrière" title="Un itinéraire, de Bordeaux à Paris" />
          <ol className="mt-12 max-w-3xl border-l border-filet">
            {parcours.map((p, i) => (
              <Reveal key={i} delay={i * 0.04} as="li">
                <li className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-vert bg-porcelaine" />
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="label text-vert">{p.year}</span>
                    {p.kind && <span className="rounded bg-eucalyptus px-2 py-0.5 text-2xs font-semibold text-vert-deep">{p.kind}</span>}
                  </div>
                  <p className="mt-1.5 font-display text-lg font-bold text-graphite">{p.title}</p>
                  <p className="text-sm text-ardoise">{p.org}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Woman leader pillar */}
      <Section tone="porcelaine">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <PullQuote cite="Une conviction">
              Faire progresser la rythmologie interventionnelle, un domaine encore très masculin, et montrer aux jeunes
              médecins qu’une femme peut y exceller autant qu’y innover.
            </PullQuote>
          </div>
        </Container>
      </Section>

      {/* Credentials + authority */}
      <Section tone="blanc">
        <Container>
          <SectionHead title="Titres & reconnaissance" />
          <CardGrid cols={3} className="mt-12">
            {credentials.map((c) => (
              <div key={c.label + c.org} className="rounded-xl2 border border-filet bg-blanc p-6">
                <p className="font-display font-bold text-graphite">{c.label}</p>
                <p className="mt-1 text-sm text-ardoise">{c.org}</p>
              </div>
            ))}
          </CardGrid>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {authoritySignals.map((a) => (
              <div key={a.title} className="rounded-xl2 border border-filet bg-porcelaine p-6">
                <p className="label text-vert">{a.kind}</p>
                <p className="mt-3 font-display font-bold text-graphite">{a.title}</p>
                <p className="mt-2 text-sm text-ardoise">{a.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta title="Consulter le Dr Sana Amraoui" />
    </>
  )
}
