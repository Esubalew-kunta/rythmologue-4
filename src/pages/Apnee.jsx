import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Prose, CardGrid, InfoCard, Callout, PullQuote, KeyStat, FinalCta } from '../components/ui/kit'
import { apneaTypes, apneaConsequences } from '../data/content'

const nightSymptoms = ['Ronflements bruyants et irréguliers', 'Pauses respiratoires constatées par l’entourage', 'Réveils en sursaut, sensation d’étouffement']
const daySymptoms = ['Fatigue chronique et somnolence', 'Troubles de la mémoire et de la concentration', 'Irritabilité, maux de tête au réveil']

export default function Apnee() {
  return (
    <>
      <Seo title="Apnée du Sommeil" description="L’apnée du sommeil et le cœur : SAHOS, types d’apnées, lien avec la fibrillation atriale, l’hypertension et l’AVC, symptômes, dépistage et traitement. Dr Sana Amraoui." />
      <PageHero
        eyebrow="Sommeil & cœur"
        title="L’apnée du sommeil et votre cœur"
        lede="Comprendre pour mieux traiter. En France, près de 2 millions de personnes souffrent d’apnée du sommeil modérée à sévère : la majorité sans le savoir."
        breadcrumb={[{ label: 'Apnée du Sommeil' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead index="Comprendre" title="Qu’est-ce que le SAHOS ?" />
              <Prose className="mt-6">
                <p>
                  Le Syndrome d’Apnées-Hypopnées Obstructives du Sommeil se caractérise par des interruptions répétées de la
                  respiration pendant le sommeil. Les muscles de l’arrière-gorge se relâchent et bloquent le passage de l’air :
                  le taux d’oxygène chute, et le cerveau provoque des micro-réveils.
                </p>
              </Prose>
            </div>
            <div className="self-center">
              <KeyStat value="~2 M" label="de personnes concernées en France par une apnée modérée à sévère, souvent non diagnostiquée" />
            </div>
          </div>
          <CardGrid cols={3} className="mt-14">
            {apneaTypes.map((t, i) => (
              <InfoCard key={t.name} title={t.name} rings={i + 1} badge={t.tag}>{t.desc}</InfoCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <SectionHead title="Le lien avec le cœur" lede="À chaque pause respiratoire, le cœur subit un stress intense : manque d’oxygène et poussée d’adrénaline. Répété nuit après nuit, cela use le cœur." />
          <CardGrid cols={3} className="mt-14">
            {apneaConsequences.map((c, i) => (
              <InfoCard key={c.title} title={c.title} rings={i + 1}>{c.desc}</InfoCard>
            ))}
          </CardGrid>
          <div className="mt-8">
            <PullQuote cite="Dr Sana Amraoui">
              Si nous traitons votre trouble du rythme sans traiter votre apnée du sommeil, le risque de récidive est beaucoup plus élevé.
            </PullQuote>
          </div>
        </Container>
      </Section>

      <Section tone="porcelaine">
        <Container>
          <SectionHead title="Reconnaître les symptômes" lede="Ils se manifestent la nuit comme le jour." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[{ title: 'La nuit', items: nightSymptoms }, { title: 'Le jour', items: daySymptoms }].map((col) => (
              <div key={col.title} className="panel p-7">
                <p className="label text-vert">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-3 text-ardoise">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vert" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 mx-auto max-w-3xl">
            <Callout title="Dépistage et traitement">
              Le dépistage est simple et indolore : polygraphie ventilatoire ou polysomnographie. Selon les cas, le traitement
              repose sur la PPC (pression positive continue) ou une orthèse d’avancée mandibulaire.
            </Callout>
          </div>
        </Container>
      </Section>

      <FinalCta title="Mieux dormir, pour protéger votre cœur." />
    </>
  )
}
