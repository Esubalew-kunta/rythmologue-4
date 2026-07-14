import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Prose, CardGrid, InfoCard, Callout, PullQuote, StepList, FinalCta, Button, Arrow } from '../components/ui/kit'
import { VideoPlaceholder } from '../components/ui/Placeholder'
import { Reveal } from '../components/ui/primitives'
import { energies } from '../data/content'

const steps = [
  { t: 'Avant', d: 'Un bilan complet et une consultation valident l’indication et répondent à toutes vos questions.' },
  { t: 'Pendant', d: 'Sous anesthésie locale et sédation, les cathéters sont guidés jusqu’au cœur, qui est cartographié puis traité. Une à trois heures.' },
  { t: 'Après', d: 'Quelques heures à une nuit de surveillance, puis une reprise rapide des activités avec de simples précautions.' },
  { t: 'Suivi', d: 'Un contrôle rythmologique dans les semaines qui suivent vérifie le résultat.' },
]

export default function Ablation() {
  return (
    <>
      <Seo title="Ablation par cathéter" description="L’ablation par cathéter, traitement de référence des arythmies : principe, les trois énergies (radiofréquence, cryoablation, électroporation), déroulé et sécurité. Dr Sana Amraoui." />
      <PageHero
        eyebrow="Traitements · Référence"
        title="L’ablation par cathéter"
        lede="Aujourd’hui le traitement de référence de nombreuses arythmies. Une intervention mini-invasive qui corrige le trouble à sa source, sans chirurgie à cœur ouvert."
        breadcrumb={[{ label: 'Traitements', href: '/traitements' }, { label: 'Ablation par cathéter' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead index="Le principe" title="Neutraliser la zone responsable" />
              <Prose className="mt-6">
                <p>
                  Certaines arythmies naissent d’un petit foyer de cellules ou d’un circuit électrique anormal. L’ablation
                  neutralise très précisément cette zone à l’aide d’un cathéter, un fin tuyau souple introduit jusqu’au cœur
                  par une veine, le plus souvent au pli de l’aine.
                </p>
                <p>
                  L’intervention est réalisée dans des structures accréditées, comme l’<strong>Hôpital Américain de Paris</strong>.
                </p>
              </Prose>
            </div>
            <div className="flex flex-col justify-center">
              <Callout title="Une technique éprouvée">
                Les premières ablations ont été développées au CHU de Bordeaux dès 1992. La méthode bénéficie aujourd’hui
                d’un très haut niveau de sécurité et de décennies de recul.
              </Callout>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <SectionHead title="Les trois énergies en rythmologie interventionnelle" lede="Le choix de l’énergie dépend du type d’arythmie et de votre profil." />
          <CardGrid cols={3} className="mt-14">
            {energies.map((e) => (
              <InfoCard key={e.name} title={e.name} rings={3} tag={e.by} badge={e.badge}>{e.desc}</InfoCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section tone="porcelaine">
        <Container>
          <SectionHead index="Le déroulé" title="Comment se passe l’intervention ?" lede="Rien n’est laissé au hasard. Voici les étapes, du bilan au suivi." />
          <div className="mt-14">
            <StepList steps={steps} cols={4} />
          </div>
          <div className="mt-10">
            <PullQuote cite="Dr Sana Amraoui">
              Traiter l’arythmie à sa source, plutôt que d’en masquer les symptômes au long cours : c’est tout le sens de la rythmologie interventionnelle.
            </PullQuote>
          </div>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <VideoPlaceholder title="Comprendre l’ablation par cathéter" ratio="16/9" />
            </Reveal>
            <div>
              <h3 className="text-2xl font-bold tracking-tightish text-graphite">Un geste très encadré</h3>
              <p className="mt-4 text-lg text-ardoise">
                Comme tout geste médical, l’ablation comporte des risques, rares, qui vous sont expliqués en détail lors de la
                consultation préalable. Chaque situation est unique : seule une consultation permet de dire si l’ablation est
                la meilleure option pour vous.
              </p>
              <div className="mt-7">
                <Button to="/contact" variant="ghost">Demander un avis <Arrow /></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta title="Un retour possible à une vie normale." />
    </>
  )
}
