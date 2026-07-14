import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Prose, CardGrid, InfoCard, Callout, StepList, FinalCta } from '../components/ui/kit'
import { VideoPlaceholder } from '../components/ui/Placeholder'
import { Reveal } from '../components/ui/primitives'

const life = [
  { t: 'Un suivi simple', d: 'Des contrôles réguliers, souvent à distance grâce au télésuivi, vérifient le bon fonctionnement du dispositif.' },
  { t: 'Une vie normale', d: 'La grande majorité des activités quotidiennes, y compris le sport, restent possibles.' },
  { t: 'Autonomie longue', d: 'La pile dure de nombreuses années avant un remplacement, geste simple et programmé.' },
]

const steps = [
  { t: 'L’indication', d: 'Elle est posée quand le cœur bat trop lentement et provoque fatigue, malaises ou essoufflement.' },
  { t: 'La pose', d: 'Un geste court, sous anesthésie locale : le boîtier est placé sous la peau, sous la clavicule.' },
  { t: 'Le réglage', d: 'Le stimulateur est programmé sur mesure pour votre cœur, puis vérifié.' },
]

export default function Pacemaker() {
  return (
    <>
      <Seo title="Pacemaker" description="Le pacemaker (stimulateur cardiaque) relance le cœur lorsqu’il bat trop lentement. Indication, pose, réglage et vie quotidienne, expliqués par le Dr Sana Amraoui." />
      <PageHero
        eyebrow="Traitements · Stimulateur"
        title="Le pacemaker"
        lede="Quand le cœur bat trop lentement, le stimulateur cardiaque prend doucement le relais, pour retrouver de l’énergie, en toute sécurité."
        breadcrumb={[{ label: 'Traitements', href: '/traitements' }, { label: 'Pacemaker' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead index="Comprendre" title="Un métronome pour le cœur" />
              <Prose className="mt-6">
                <p>
                  Le pacemaker est un petit dispositif qui surveille votre rythme et envoie de très légères impulsions
                  électriques lorsque le cœur ralentit trop. Vous ne les sentez pas : elles rétablissent simplement une cadence
                  suffisante.
                </p>
                <p>
                  Il redonne de l’énergie aux personnes fatiguées ou sujettes aux malaises à cause d’un rythme trop lent.
                </p>
              </Prose>
            </div>
            <div className="flex flex-col justify-center">
              <Callout title="Rassurant au quotidien">
                Les pacemakers actuels sont miniaturisés, fiables et compatibles avec la plupart des examens (dont l’IRM,
                sous conditions). Votre rythmologue vous remet toutes les informations pratiques.
              </Callout>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <SectionHead title="De l’indication à la vie quotidienne" />
          <div className="mt-14"><StepList steps={steps} cols={3} /></div>
        </Container>
      </Section>

      <Section tone="porcelaine">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal><VideoPlaceholder title="Vivre avec un pacemaker" ratio="16/9" /></Reveal>
            <div>
              <SectionHead index="Après la pose" title="Vivre avec un pacemaker" />
              <div className="mt-6 space-y-4">
                {life.map((l) => (
                  <div key={l.t} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vert" />
                    <div>
                      <p className="font-semibold text-graphite">{l.t}</p>
                      <p className="text-sm text-ardoise">{l.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta title="Retrouver de l’énergie, en sécurité." />
    </>
  )
}
