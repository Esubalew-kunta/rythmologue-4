import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, CardGrid, InfoCard, Callout, FinalCta } from '../components/ui/kit'
import { VideoPlaceholder } from '../components/ui/Placeholder'
import { Reveal } from '../components/ui/primitives'
import { SignalField } from '../components/brand/Champ'
import { montresPoints } from '../data/content'

export default function Montres() {
  return (
    <>
      <Seo title="Montres connectées" description="Montres connectées et rythme cardiaque : ce que l’ECG d’une montre détecte vraiment, ses limites, et le télésuivi. Un cas clinique de tachycardie à 190 bpm diagnostiquée puis guérie." />
      <PageHero
        eyebrow="Technologies & suivi"
        title="Montres connectées & rythme cardiaque"
        lede="Votre montre a repéré quelque chose ? C’est un signal d’alerte précieux. Voici ce qu’elle détecte vraiment, ses limites, et comment nous nous en servons utilement."
        breadcrumb={[{ label: 'Montres connectées' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <CardGrid cols={3}>
            {montresPoints.map((p, i) => (
              <InfoCard key={p.title} title={p.title} rings={i + 1}>{p.desc}</InfoCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* Case study band */}
      <section className="relative overflow-hidden bg-graphite py-16 text-porcelaine sm:py-20">
        <SignalField count={11} cx={1080} cy={150} baseR={26} gap={40} animate={false} color="#2C8368" className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-25" />
        <Container className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="label mb-4 text-vert-sauge">Cas clinique</p>
            <h2 className="text-2xl font-bold tracking-tightish text-porcelaine sm:text-3xl">
              Une tachycardie à <span className="text-vert-sauge">190 bpm</span>, repérée par une montre.
            </h2>
            <p className="mt-4 max-w-xl text-porcelaine/70">
              L’ECG d’une montre a documenté l’épisode d’un patient au moment précis où il survenait. Le tracé a permis de poser
              le diagnostic, puis de guérir l’arythmie par une intervention. La technologie a servi de déclic ; l’expertise a fait le reste.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-xl2 border border-white/10 bg-white/[0.03] p-6">
              <p className="font-display text-5xl font-bold text-porcelaine">190 <span className="text-2xl text-porcelaine/60">bpm</span></p>
              <p className="mt-2 text-sm text-porcelaine/65">documentés par un ECG de montre, puis traités avec succès</p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="blanc">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal><VideoPlaceholder title="Montres connectées : bien suivre son rythme" ratio="16/9" /></Reveal>
            <div className="flex flex-col justify-center">
              <Callout title="Le bon réflexe">
                Si votre montre signale une anomalie ou si vous ressentez des palpitations, notez le moment et consultez.
                Apportez l’enregistrement : il aide votre rythmologue à relier une sensation à un tracé précis.
              </Callout>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta title="Un signal de votre montre à faire vérifier ?" />
    </>
  )
}
