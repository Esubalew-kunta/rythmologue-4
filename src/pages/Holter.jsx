import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Prose, CardGrid, InfoCard, Callout, PullQuote, FinalCta } from '../components/ui/kit'
import { MediaPlaceholder } from '../components/ui/Placeholder'
import { Reveal } from '../components/ui/primitives'

const reasons = [
  { t: 'Malaises inexpliqués', d: 'Des syncopes ou pertes de connaissance dont la cause n’a pas été retrouvée par les examens courts.' },
  { t: 'Palpitations rares', d: 'Des épisodes trop espacés pour être captés par un Holter classique de 24 heures.' },
  { t: 'Après un AVC', d: 'Rechercher une fibrillation atriale silencieuse qui expliquerait l’accident.' },
]

export default function Holter() {
  return (
    <>
      <Seo title="Holter implantable" description="Le Holter implantable (moniteur cardiaque) enregistre le rythme du cœur sur plusieurs mois à années pour détecter les arythmies rares, malaises et syncopes inexpliqués." />
      <PageHero
        eyebrow="Arythmie · Surveillance"
        title="Le Holter implantable"
        lede="Un moniteur miniature, glissé sous la peau, qui veille sur votre rythme pendant des mois, voire des années. Il détecte ce que les examens courts ne peuvent pas voir."
        breadcrumb={[{ label: 'Arythmie', href: '/arythmie' }, { label: 'Holter implantable' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead index="Comprendre" title="Une surveillance longue durée, discrète" />
              <Prose className="mt-6">
                <p>
                  Certains troubles du rythme sont si rares qu’ils échappent à un ECG ou à un Holter de 24 heures. Le Holter
                  implantable, aussi appelé moniteur cardiaque, résout ce problème : il enregistre votre rythme en continu,
                  automatiquement, sur une très longue période.
                </p>
                <p>
                  Il est <strong>invisible</strong> sous les vêtements et permet un <strong>télésuivi</strong> : les données
                  parviennent à votre rythmologue entre les consultations.
                </p>
              </Prose>
            </div>
            <Reveal>
              <MediaPlaceholder label="Schéma · Holter implantable" ratio="5/4" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <SectionHead title="Dans quels cas ?" lede="Le moniteur implantable est proposé quand il faut capturer un événement rare, sur la durée." />
          <CardGrid cols={3} className="mt-14">
            {reasons.map((r, i) => (
              <InfoCard key={r.t} title={r.t} rings={i + 1}>{r.d}</InfoCard>
            ))}
          </CardGrid>
          <div className="mt-10 mx-auto max-w-3xl">
            <Callout title="La pose, en pratique">
              La mise en place est un geste simple, sous anesthésie locale, qui ne dure que quelques minutes. Le dispositif
              est de la taille d’une petite clé USB fine.
            </Callout>
          </div>
        </Container>
      </Section>

      <FinalCta title="Élucider un malaise ou des palpitations rares" />
    </>
  )
}
