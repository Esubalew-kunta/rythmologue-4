import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Prose, CardGrid, InfoCard, Callout, FinalCta } from '../components/ui/kit'

const symptoms = [
  { t: 'Palpitations', d: 'La sensation que le cœur s’emballe, cogne, ou saute un battement.' },
  { t: 'Malaises', d: 'Vertiges, tête qui tourne, parfois une perte de connaissance.' },
  { t: 'Fatigue inexpliquée', d: 'Une lassitude inhabituelle, sans cause évidente.' },
  { t: 'Essoufflement', d: 'Un souffle court à l’effort, parfois au repos.' },
]

export default function Generalites() {
  return (
    <>
      <Seo title="Arythmie · Généralités" description="Qu’est-ce qu’une arythmie ? Symptômes (palpitations, malaises, fatigue, essoufflement), dépistage, diagnostic et traitements médicamenteux expliqués simplement." />
      <PageHero
        eyebrow="Arythmie"
        title="Comprendre les troubles du rythme"
        lede="L’arythmie est une perturbation du système de conduction électrique du cœur. Le rythme peut devenir trop lent, trop rapide, ou irrégulier."
        breadcrumb={[{ label: 'Arythmie', href: '/arythmie' }, { label: 'Généralités' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <SectionHead title="Les signes qui doivent alerter" lede="Plus de 50 % des accès d’arythmie sont asymptomatiques. Lorsqu’ils se manifestent, voici les signes les plus fréquents." />
          <CardGrid cols={4} className="mt-14">
            {symptoms.map((s) => (
              <InfoCard key={s.t} title={s.t} rings={1}>{s.d}</InfoCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead index="Diagnostic" title="Établir un diagnostic précis" />
              <Prose className="mt-6">
                <p>
                  Devant des symptômes évocateurs, le rythmologue établit un diagnostic, évalue les risques associés,
                  et définit une stratégie adaptée : des règles hygiéno-diététiques et un suivi, un traitement médicamenteux,
                  et/ou une intervention mini-invasive comme l’ablation.
                </p>
                <p>
                  Certaines montres connectées enregistrent un électrocardiogramme à une dérivation, utile pour documenter
                  un épisode au moment où il survient.
                </p>
              </Prose>
            </div>
            <div className="flex flex-col justify-center">
              <Callout title="Un point de vigilance">
                Certaines arythmies, comme la fibrillation atriale, sont associées à un risque accru d’accident vasculaire
                cérébral. C’est précisément ce que la prise en charge permet de prévenir.
              </Callout>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="porcelaine">
        <Container>
          <SectionHead title="Les traitements médicamenteux" lede="Selon le type d’arythmie et le profil de chacun, deux grandes familles de médicaments peuvent être proposées." />
          <CardGrid cols={2} className="mt-14">
            <InfoCard title="Anticoagulants" rings={2} tag="Prévenir l’AVC">
              Chez les patients à risque de caillots, ils fluidifient le sang et préviennent la formation de caillots,
              réduisant ainsi le risque d’AVC ischémique.
            </InfoCard>
            <InfoCard title="Anti-arythmiques" rings={3} tag="Réguler le rythme">
              Ils modifient les propriétés électriques du cœur pour rétablir un rythme normal. Leur efficacité peut diminuer
              avec le temps ; l’ablation est alors parfois proposée en première intention.
            </InfoCard>
          </CardGrid>
        </Container>
      </Section>

      <FinalCta title="Des symptômes à évaluer ? Prenons rendez-vous." />
    </>
  )
}
