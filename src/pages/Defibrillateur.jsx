import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Prose, CardGrid, InfoCard, Callout, FinalCta } from '../components/ui/kit'
import { VideoPlaceholder } from '../components/ui/Placeholder'
import { Reveal } from '../components/ui/primitives'

const roles = [
  { t: 'Il surveille', rings: 1, d: 'En continu, jour et nuit, le défibrillateur analyse chaque battement de votre cœur.' },
  { t: 'Il corrige', rings: 2, d: 'En cas d’arythmie grave, il délivre automatiquement une stimulation ou un choc pour rétablir le rythme.' },
  { t: 'Il protège', rings: 3, d: 'Il agit en quelques secondes contre le risque de mort subite, sans que vous ayez rien à faire.' },
]

export default function Defibrillateur() {
  return (
    <>
      <Seo title="Défibrillateur automatique (DAI)" description="Le défibrillateur automatique implantable (DAI) surveille le cœur en continu et corrige les arythmies graves pour prévenir la mort subite. Explications du Dr Sana Amraoui." />
      <PageHero
        eyebrow="Traitements · Protection"
        title="Le défibrillateur automatique"
        lede="Un dispositif implantable qui veille en continu et corrige les arythmies dangereuses, une protection discrète contre la mort subite, jour et nuit."
        breadcrumb={[{ label: 'Traitements', href: '/traitements' }, { label: 'Défibrillateur automatique' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <SectionHead title="Un gardien qui ne dort jamais" lede="Le défibrillateur automatique implantable (DAI) remplit trois missions, en permanence." />
          <CardGrid cols={3} className="mt-14">
            {roles.map((r) => (
              <InfoCard key={r.t} title={r.t} rings={r.rings}>{r.d}</InfoCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead index="Pour qui" title="À qui s’adresse-t-il ?" />
              <Prose className="mt-6">
                <p>
                  Le DAI est proposé aux personnes exposées à un risque élevé d’arythmie ventriculaire grave : après certains
                  accidents cardiaques, en cas d’insuffisance cardiaque, ou dans certaines maladies héréditaires du rythme.
                </p>
                <p>
                  L’indication est toujours posée au cas par cas, après un bilan spécialisé et une discussion approfondie avec vous.
                </p>
              </Prose>
            </div>
            <div className="flex flex-col justify-center">
              <Callout title="Vivre avec un DAI">
                La pose est comparable à celle d’un pacemaker. Un suivi régulier, souvent à distance, vérifie le dispositif.
                Votre équipe vous accompagne pour reprendre une vie active et sereine.
              </Callout>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="porcelaine">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal><VideoPlaceholder title="Vivre avec un défibrillateur implantable" ratio="16/9" /></Reveal>
          </div>
        </Container>
      </Section>

      <FinalCta title="Être protégé, sans y penser." />
    </>
  )
}
