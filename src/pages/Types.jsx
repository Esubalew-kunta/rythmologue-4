import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, CardGrid, InfoCard, Callout, FinalCta } from '../components/ui/kit'

const types = [
  { name: 'Tachycardie', rings: 3, tag: 'Rythme trop rapide', desc: 'Le cœur bat au-delà de 100 battements par minute. Certaines tachycardies sont bénignes, d’autres méritent un bilan.' },
  { name: 'Extrasystoles', rings: 1, tag: 'Battements prématurés', desc: 'Des battements « en avance » qui donnent l’impression d’un raté ou d’un soubresaut. Le plus souvent sans gravité.' },
  { name: 'Flutter atrial', rings: 2, tag: 'Circuit organisé', desc: 'Un circuit électrique rapide et régulier dans l’oreillette. Il répond très bien à l’ablation par cathéter.' },
  { name: 'Tachycardie de Bouveret', rings: 2, tag: 'Accès soudains', desc: 'Des accès de tachycardie régulière qui débutent et s’arrêtent brutalement. Souvent curable définitivement.' },
  { name: 'Bradycardie', rings: 1, tag: 'Rythme trop lent', desc: 'Un cœur qui bat trop lentement peut entraîner fatigue ou malaises. Un pacemaker est parfois indiqué.' },
  { name: 'Tachycardie ventriculaire', rings: 4, tag: 'À évaluer sans délai', desc: 'Plus rare, elle nécessite une évaluation spécialisée rapide et une prise en charge adaptée.' },
]

export default function Types() {
  return (
    <>
      <Seo title="Types d’arythmie" description="Tachycardies, extrasystoles, flutter atrial, maladie de Bouveret, bradycardie, tachycardie ventriculaire : comprendre les différents troubles du rythme cardiaque." />
      <PageHero
        eyebrow="Arythmie"
        title="Les différents types d’arythmie"
        lede="Toutes les arythmies ne se ressemblent pas. Identifier le type exact est la clé pour choisir le traitement le plus adapté, et le plus efficace."
        breadcrumb={[{ label: 'Arythmie', href: '/arythmie' }, { label: 'Types' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <CardGrid cols={3}>
            {types.map((t) => (
              <InfoCard key={t.name} title={t.name} rings={t.rings} tag={t.tag}>{t.desc}</InfoCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Callout title="Le bon diagnostic avant le bon traitement">
              Chaque type d’arythmie a son mécanisme et sa stratégie. Un ECG, un Holter ou d’autres examens permettent de
              préciser lequel vous concerne, pour vous proposer la prise en charge la plus juste.
            </Callout>
          </div>
        </Container>
      </Section>

      <FinalCta title="Comprendre votre type d’arythmie" />
    </>
  )
}
