import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useI18n } from '../i18n/i18n'
import { Container, Section, SectionHead } from '../components/ui/layout'
import { Aurora } from '../components/fx/backdrop'
import { EcgOfLight } from '../components/fx/Ecg'
import { Reveal, Parallax, CountUp } from '../components/fx/motion'
import { GlowCard, BeamButton, Arrow } from '../components/fx/cards'
import Hero from '../components/hero/Hero'
import { site } from '../data/site'

export default function Home() {
  const { t } = useI18n()

  const conditions = [
    { slug: '/arythmie/fibrillation-atriale', n: '01', name: t('Fibrillation atriale', 'Atrial fibrillation'), symptom: t('Cœur emballé, irrégulier', 'Racing, irregular heart'), blurb: t("L'arythmie la plus fréquente au monde, et la plus traitable aujourd'hui.", 'The most common arrhythmia in the world, and today the most treatable.'), flag: t("Risque d'AVC ×4,8", 'Stroke risk ×4.8') },
    { slug: '/arythmie/generalites', n: '02', name: t('Palpitations', 'Palpitations'), symptom: t("Le cœur qui s'emballe", 'A heart that races'), blurb: t('Plus de 50 % des arythmies sont silencieuses. Savoir, c’est déjà se protéger.', 'Over 50% of arrhythmias are silent. Knowing is already protecting yourself.') },
    { slug: '/arythmie/types', n: '03', name: t('Tachycardies', 'Tachycardias'), symptom: t('Rythme trop rapide', 'Rhythm too fast'), blurb: t("Comprendre le type exact d'arythmie pour choisir le bon traitement.", 'Understand the exact type to choose the right treatment.') },
    { slug: '/arythmie/holter-implantable', n: '04', name: t('Malaises & syncopes', 'Blackouts & syncope'), symptom: t('Pertes de connaissance', 'Loss of consciousness'), blurb: t('Le Holter implantable détecte ce que les examens courts ne voient pas.', 'The implantable Holter catches what short tests miss.') },
  ]

  const treatments = [
    { slug: '/traitements/ablation-catheter', name: t('Ablation par cathéter', 'Catheter ablation'), lead: t('Le traitement de référence', 'The reference treatment'), blurb: t('Neutraliser précisément la zone responsable, par voie mini-invasive.', 'Precisely neutralise the source, through a minimally invasive route.') },
    { slug: '/traitements/pacemaker', name: t('Pacemaker', 'Pacemaker'), lead: t('Stimulateur cardiaque', 'Cardiac stimulator'), blurb: t('Relancer le cœur quand il bat trop lentement, en toute sécurité.', 'Restart the heart when it beats too slowly, safely.') },
    { slug: '/traitements/defibrillateur', name: t('Défibrillateur (DAI)', 'Defibrillator (ICD)'), lead: t('Protection continue', 'Continuous protection'), blurb: t('Surveiller et corriger les arythmies graves, jour et nuit.', 'Monitor and correct dangerous arrhythmias, day and night.') },
  ]

  return (
    <>
      <Helmet>
        <title>Dr Sana Amraoui · {t('Rythmologue interventionnelle · Paris', 'Interventional electrophysiologist · Paris')}</title>
      </Helmet>

      <Hero />

      {/* ═══════════════ 01 · ARYTHMIE ═══════════════ */}
      <Section className="bg-abyss">
        <Container>
          <Reveal blur><SectionHead index={t('01 · Arythmie', '01 · Arrhythmia')} title={t('Reconnaître ce que vous ressentez', 'Recognise what you feel')} lede={t('Palpitations, essoufflement, malaises. Chaque trouble du rythme a ses signes. Commencez par ce qui vous ressemble.', 'Palpitations, breathlessness, blackouts. Every rhythm disorder has its signs. Start with what feels familiar.')} /></Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08} blur>
                <Link to={c.slug} className="block h-full">
                  <GlowCard className="h-full p-6">
                    <div className="flex items-center justify-between">
                      <span className="eyebrow text-mist">{c.n}</span>
                      {c.flag && <span className="rounded-md bg-signal/12 px-2 py-0.5 text-2xs font-semibold text-signal-deep">{c.flag}</span>}
                    </div>
                    <h3 className="mt-5 font-display text-xl font-medium text-pearl">{c.name}</h3>
                    <p className="mt-1 text-sm font-medium text-signal-deep">{c.symptom}</p>
                    <p className="mt-3 text-sm text-mist">{c.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-pearl">{t('En savoir plus', 'Learn more')} <Arrow /></span>
                  </GlowCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════ 02 · TRAITEMENTS ═══════════════ */}
      <Section className="relative overflow-hidden">
        <Parallax offset={40} className="pointer-events-none absolute inset-0"><Aurora intensity={0.5} /></Parallax>
        <Container className="relative">
          <Reveal blur><SectionHead index={t('02 · Traitements', '02 · Treatments')} title={t('Des solutions concrètes, expliquées simplement', 'Real solutions, explained simply')} lede={t("De l'ablation mini-invasive aux dispositifs implantables, chaque option vous est présentée avec ses bénéfices et son déroulé.", 'From minimally invasive ablation to implantable devices, each option is shown with its benefits and how it works.')} /></Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {treatments.map((tr, i) => (
              <Reveal key={tr.slug} delay={i * 0.08} blur>
                <Link to={tr.slug} className="block h-full">
                  <GlowCard className="h-full p-7">
                    <span className="eyebrow text-signal-deep">{`0${i + 1}`}</span>
                    <p className="mt-5 text-sm font-medium text-signal-deep">{tr.lead}</p>
                    <h3 className="mt-1 font-display text-xl font-medium text-pearl">{tr.name}</h3>
                    <p className="mt-3 text-sm text-mist">{tr.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-pearl">{t('Découvrir', 'Discover')} <Arrow /></span>
                  </GlowCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="relative overflow-hidden bg-obsidian-deep py-24 text-center sm:py-32">
        <Aurora />
        <Parallax offset={30} className="pointer-events-none absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 opacity-50">
          <EcgOfLight className="h-full w-full" />
        </Parallax>
        <Container className="relative">
          <Reveal blur>
            <p className="eyebrow mb-6">{t('Prendre soin de votre cœur', 'Care for your heart')}</p>
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium tracking-tightish text-pearl sm:text-5xl">
              {t('Remettons votre cœur à son ', 'Let us bring your heart back to its ')}
              <span className="italic text-signal glow-text">{t('juste rythme.', 'true rhythm.')}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-mist">
              {t("Une question, un symptôme, un avis à confirmer ? Prenez rendez-vous, nous sommes là pour vous.", 'A question, a symptom, a second opinion? Book an appointment, we are here for you.')}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <BeamButton href={site.doctolib} size="lg">{t('Prendre rendez-vous', 'Book an appointment')}<Arrow /></BeamButton>
              <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="font-mono text-lg font-medium text-pearl">{site.phones[0]}</a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
