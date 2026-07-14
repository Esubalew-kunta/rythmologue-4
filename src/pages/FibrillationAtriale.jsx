import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Prose, CardGrid, InfoCard, KeyStat, Callout, PullQuote, FinalCta, Button, Arrow } from '../components/ui/kit'
import { VideoPlaceholder } from '../components/ui/Placeholder'
import { SignalField } from '../components/brand/Champ'
import { Reveal } from '../components/ui/primitives'
import { faForms, faOptions, stats } from '../data/content'

export default function FibrillationAtriale() {
  return (
    <>
      <Seo title="Fibrillation atriale" description="La fibrillation atriale (FA), l’arythmie la plus fréquente au monde : symptômes, formes, risque d’AVC, et traitements : médicaments, cardioversion, ablation. Par le Dr Sana Amraoui." />
      <PageHero
        eyebrow="Arythmie · La plus fréquente"
        title="La fibrillation atriale"
        lede="L’arythmie la plus fréquente au monde, et aujourd’hui l’une des plus traitables. Détectée à temps, elle se prend en charge efficacement."
        breadcrumb={[{ label: 'Arythmie', href: '/arythmie' }, { label: 'Fibrillation atriale' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead index="Comprendre" title="Qu’est-ce que la fibrillation atriale ?" />
              <Prose className="mt-6">
                <p>
                  Normalement, les impulsions électriques venant du nœud sinusal maintiennent un rythme régulier. Dans la FA,
                  des circuits électriques anormaux venant des veines pulmonaires provoquent des contractions anarchiques et
                  irrégulières des oreillettes.
                </p>
                <p>
                  Cliniquement, cela se traduit souvent par des <strong>palpitations</strong>, de la <strong>fatigue</strong> et
                  un <strong>essoufflement</strong>, qui peuvent se majorer à l’effort.
                </p>
              </Prose>
            </div>
            <div className="grid grid-cols-2 gap-4 self-center">
              {stats.map((s) => (
                <KeyStat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Risk band */}
      <section className="relative overflow-hidden bg-graphite py-16 text-porcelaine sm:py-20">
        <SignalField count={12} cx={140} cy={220} baseR={30} gap={44} animate={false} color="#2C8368" className="pointer-events-none absolute -left-16 top-0 h-[500px] w-[500px] opacity-25" />
        <Container className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="label mb-4 text-vert-sauge">Pourquoi la traiter</p>
            <h2 className="text-2xl font-bold tracking-tightish text-porcelaine sm:text-3xl">
              La FA multiplie par <span className="text-vert-sauge">4,8</span> le risque d’AVC ischémique.
            </h2>
            <p className="mt-4 max-w-xl text-porcelaine/70">
              Non traitée, elle peut aussi favoriser l’insuffisance cardiaque. C’est précisément ce que la prise en charge
              prévient, et le traitement précoce offre les meilleurs résultats.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Button href="#traitements" variant="dark">Voir les traitements <Arrow /></Button>
          </div>
        </Container>
      </section>

      <Section tone="blanc">
        <Container>
          <SectionHead title="Les trois formes de fibrillation atriale" lede="La FA évolue dans le temps. En parler tôt, c’est se donner les meilleures chances." />
          <CardGrid cols={3} className="mt-14">
            {faForms.map((f, i) => (
              <InfoCard key={f.name} title={f.name} rings={i + 1}>{f.desc}</InfoCard>
            ))}
          </CardGrid>
          <div className="mt-8">
            <PullQuote cite="Dr Sana Amraoui">
              La fibrillation atriale est une maladie récurrente et évolutive. Le traitement précoce est associé à un meilleur taux de succès.
            </PullQuote>
          </div>
        </Container>
      </Section>

      <Section id="traitements" tone="porcelaine">
        <Container>
          <SectionHead index="Traitements" title="Trois façons d’agir" lede="Du médicament à l’ablation curative, chaque option a sa place selon votre situation." />
          <CardGrid cols={3} className="mt-14">
            {faOptions.map((o, i) => (
              <InfoCard key={o.name} title={o.name} rings={i + 2} badge={i === 2 ? 'Curatif' : undefined}>{o.desc}</InfoCard>
            ))}
          </CardGrid>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <VideoPlaceholder title="Comprendre l’ablation de la fibrillation atriale" ratio="16/9" />
            </Reveal>
            <div>
              <h3 className="text-2xl font-bold tracking-tightish text-graphite">L’ablation, aujourd’hui la plus efficace</h3>
              <p className="mt-4 text-lg text-ardoise">
                Intervention mini-invasive, l’ablation isole les zones responsables de l’arythmie et offre une possibilité de
                guérison complète. Elle s’appuie sur une cartographie du cœur en trois dimensions.
              </p>
              <div className="mt-7">
                <Button to="/traitements/ablation-catheter" variant="ghost">Découvrir l’ablation par cathéter <Arrow /></Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta title="Prenons votre fibrillation atriale de vitesse." />
    </>
  )
}
