import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Prose, CardGrid, InfoCard, FinalCta } from '../components/ui/kit'
import { MediaPlaceholder } from '../components/ui/Placeholder'
import { Reveal } from '../components/ui/primitives'

const includes = [
  { t: 'Un bilan personnalisé', rings: 3, d: 'Une évaluation complète de vos facteurs de risque cardiovasculaire, adaptée à votre histoire.' },
  { t: 'Une médecine proactive', rings: 2, d: 'Agir tôt, avant les symptômes, plutôt que de subir. La prévention comme priorité.' },
  { t: 'Un accompagnement clair', rings: 1, d: 'Des explications simples et des recommandations concrètes pour prendre soin de votre cœur.' },
]

export default function CardioCheckup() {
  return (
    <>
      <Seo title="Cardio Check-Up" description="Cardio Check-Up, centre de prévention cardiovasculaire fondé par le Dr Sana Amraoui : bilans personnalisés et médecine proactive pour prendre soin de son cœur avant qu’il n’alerte." />
      <PageHero
        eyebrow="Prévention · Ma clinique"
        title="Cardio Check-Up"
        lede="Prendre soin de son cœur avant qu’il n’alerte. J’ai fondé Cardio Check-Up pour rendre la prévention cardiovasculaire accessible, personnalisée et proactive."
        breadcrumb={[{ label: 'Cardio Check-Up' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead index="La démarche" title="Une vision entrepreneuriale de la prévention" />
              <Prose className="mt-6">
                <p>
                  En parallèle de mon activité hospitalière, j’ai créé Cardio Check-Up, un centre dédié à la prévention
                  cardiovasculaire et aux bilans personnalisés. Ma double formation médicale et en économie de la santé
                  (London School of Economics) nourrit une conviction simple : la meilleure médecine est celle qui anticipe.
                </p>
              </Prose>
            </div>
            <Reveal><MediaPlaceholder label="Cardio Check-Up · centre de prévention" ratio="3/2" /></Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <SectionHead title="Ce que propose Cardio Check-Up" align="center" />
          <CardGrid cols={3} className="mt-14">
            {includes.map((it) => (
              <InfoCard key={it.t} title={it.t} rings={it.rings}>{it.d}</InfoCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <FinalCta title="Faire le point sur votre cœur, sereinement." lede="Prenez rendez-vous pour un bilan de prévention personnalisé." />
    </>
  )
}
