import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useI18n } from '../../i18n/i18n'
import { Container } from '../ui/layout'
import { Aurora, Spotlight, Stars, Horizon } from '../fx/backdrop'
import { EcgOfLight, EcgMini } from '../fx/Ecg'
import { Reveal, TextGenerate, CountUp, Parallax, motion } from '../fx/motion'
import { BeamButton, Arrow, MonitorStat } from '../fx/cards'
import { MediaPlaceholder } from '../ui/Media'
import { SignalField, SourceGlyph } from '../brand/Champ'
import { site } from '../../data/site'

const OPTIONS = [1, 2, 3, 4, 5, 6]
const NAMES = {
  1: ['Split', 'Split'],
  2: ['Centré', 'Centered'],
  3: ['Éditorial', 'Editorial'],
  4: ['Bento', 'Bento'],
  5: ['Typographique', 'Typographic'],
  6: ['Clinique Lumière', 'Clinique Lumière'],
}

export default function Hero() {
  const { t } = useI18n()
  const [v, setV] = useState(1)

  // ── shared content ────────────────────────────────────────────────────────
  const eyebrow = t('Rythmologue interventionnelle · Paris', 'Interventional electrophysiologist · Paris')
  const sub = t(
    "Spécialiste des troubles du rythme cardiaque, j'accompagne chaque patient avec des explications claires et une prise en charge de pointe. Vous êtes entre de bonnes mains.",
    'A heart-rhythm specialist, I guide every patient with clear explanations and leading-edge care. You are in good hands.'
  )
  const credentials = ['Hôpital Américain de Paris', "St Thomas' · London", 'Columbia · NYC', 'LSE']

  const Eyebrow = ({ center }) => (
    <p className={`eyebrow flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
      <span className="inline-block h-1.5 w-1.5 animate-pulse-glow rounded-full bg-signal" />
      {eyebrow}
    </p>
  )

  const Headline = ({ className = '' }) => (
    <h1 className={`font-display font-medium leading-[1.02] tracking-tightish text-pearl ${className}`}>
      <TextGenerate text={t('Votre cœur,', 'Your heart,')} className="block" />
      <span className="block">
        <TextGenerate text={t('remis en', 'back in')} delay={0.2} />{' '}
        <motion.span className="font-display italic text-signal glow-text"
          initial={{ opacity: 0, filter: 'blur(14px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          {t('rythme.', 'rhythm.')}
        </motion.span>
      </span>
    </h1>
  )

  const Ctas = ({ center }) => (
    <div className={`flex flex-wrap items-center gap-4 ${center ? 'justify-center' : ''}`}>
      <BeamButton href={site.doctolib} size="lg">{t('Prendre rendez-vous', 'Book an appointment')}<Arrow /></BeamButton>
      <Link to="/dr-sana-amraoui" className="group inline-flex items-center gap-2 font-medium text-pearl transition-colors hover:text-signal-deep">
        {t('Découvrir mon approche', 'Discover my approach')}<Arrow className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  )

  const Credentials = ({ center }) => (
    <div className={`flex flex-wrap gap-2 ${center ? 'justify-center' : ''}`}>
      {credentials.map((c) => (
        <span key={c} className="glass-soft inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-pearl/80">
          <svg width="12" height="12" viewBox="0 0 12 12" className="text-signal" aria-hidden="true"><path d="M2.5 6.2 5 8.7l4.5-5" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          {c}
        </span>
      ))}
    </div>
  )

  const Stats = () => (
    <div className="grid gap-4 sm:grid-cols-3">
      <MonitorStat viz="dots" dotsTotal={4} dotsLit={1} label={t('adultes de +40 ans concernés au cours de la vie', 'adults over 40 affected in their lifetime')}>
        1 <span className="text-xl text-mist">/ 4</span>
      </MonitorStat>
      <MonitorStat viz="bar" label={t("risque d'AVC en FA non traitée", 'stroke risk, untreated AF')}>×<CountUp to={4.8} decimals={1} /></MonitorStat>
      <MonitorStat viz="ecg" label={t('tachycardie repérée par une montre, puis guérie', 'tachycardia caught by a watch, then cured')}><CountUp to={190} suffix=" bpm" /></MonitorStat>
    </div>
  )

  const EcgBand = ({ className = '' }) => (
    <div className={className}>
      <div className="mb-2 flex items-center justify-between">
        <span className="eyebrow text-mist">{t('fibrillation', 'fibrillation')}</span>
        <span className="eyebrow text-signal-deep">{t('rythme rétabli · ~60 bpm', 'rhythm restored · ~60 bpm')}</span>
      </div>
      <EcgOfLight className="h-20 w-full sm:h-28" />
      <Horizon className="mt-2" />
    </div>
  )

  const Portrait = ({ floats = true, ratio = '4/5', className = '' }) => (
    <div className={`relative mx-auto max-w-sm ${className}`}>
      <MediaPlaceholder label={t('Portrait Dr Amraoui', 'Portrait Dr Amraoui')} ratio={ratio} />
      {floats && (
        <>
          <div className="glass absolute -right-4 top-8 flex items-center gap-3 rounded-panel px-4 py-3">
            <EcgMini className="h-5 w-12" />
            <div className="leading-none">
              <p className="text-lg font-semibold text-signal-deep">72<span className="ml-1 text-xs font-normal text-mist">bpm</span></p>
              <p className="mt-1.5 text-2xs text-mist">{t('rythme sinusal', 'sinus rhythm')}</p>
            </div>
          </div>
          <div className="glass absolute -bottom-4 -left-4 flex items-center gap-3 rounded-panel px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/12 text-signal-deep">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h3l1.5-4 3 8 1.5-4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight text-pearl">{t("Cheffe d'unité", 'Head of unit')}</p>
              <p className="text-xs text-mist">{t('Hôpital Américain de Paris', 'American Hospital of Paris')}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )

  // ── layouts ───────────────────────────────────────────────────────────────
  const layouts = {
    // 1 - Split
    1: (
      <div>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow /></Reveal>
            <Headline className="mt-6 text-[2.8rem] sm:text-6xl xl:text-7xl" />
            <Reveal delay={0.35}><p className="mt-7 max-w-xl text-lg text-mist">{sub}</p></Reveal>
            <Reveal delay={0.45}><div className="mt-9"><Ctas /></div></Reveal>
            <Reveal delay={0.55}><div className="mt-9"><Credentials /></div></Reveal>
          </div>
          <div className="lg:col-span-5"><Reveal delay={0.2}><Portrait /></Reveal></div>
        </div>
        <Reveal delay={0.2}><Parallax offset={26} className="relative"><EcgBand className="mt-6" /></Parallax></Reveal>
        <div className="mt-12"><Stats /></div>
      </div>
    ),
    // 2 - Centered
    2: (
      <div className="py-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow center /></Reveal>
          <Headline className="mx-auto mt-6 text-[2.9rem] sm:text-6xl xl:text-7xl" />
          <Reveal delay={0.35}><p className="mx-auto mt-7 max-w-xl text-lg text-mist">{sub}</p></Reveal>
          <Reveal delay={0.45}><div className="mt-9"><Ctas center /></div></Reveal>
          <Reveal delay={0.55}><div className="mt-8"><Credentials center /></div></Reveal>
        </div>
        <Reveal delay={0.2}><Parallax offset={24} className="relative mx-auto max-w-5xl"><EcgBand className="mt-12" /></Parallax></Reveal>
        <div className="mx-auto mt-12 max-w-5xl"><Stats /></div>
      </div>
    ),
    // 3 - Editorial (image-forward, stats as list)
    3: (
      <div className="grid items-stretch gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><Portrait floats={false} ratio="4/5" /></Reveal>
        </div>
        <div className="lg:col-span-7 lg:pl-4">
          <Reveal><Eyebrow /></Reveal>
          <Headline className="mt-6 text-[2.6rem] sm:text-5xl xl:text-6xl" />
          <Reveal delay={0.35}><p className="mt-6 max-w-xl text-lg text-mist">{sub}</p></Reveal>
          <Reveal delay={0.45}><div className="mt-8"><Ctas /></div></Reveal>
          <Reveal delay={0.5}>
            <dl className="mt-9 divide-y divide-abyss-line border-y border-abyss-line">
              {[
                ['1 / 4', t('adultes de +40 ans concernés par la FA', 'adults over 40 affected by AF')],
                ['×4,8', t("risque d'AVC en FA non traitée", 'stroke risk, untreated AF')],
                ['190 bpm', t('tachycardie repérée par une montre, puis guérie', 'caught by a watch, then cured')],
              ].map(([val, label]) => (
                <div key={val} className="flex items-baseline gap-5 py-4">
                  <dt className="w-24 shrink-0 font-mono text-2xl font-medium text-signal-deep">{val}</dt>
                  <dd className="text-sm text-mist">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    ),
    // 4 - Bento (glass tiles / dashboard)
    4: (
      <div className="grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-7" delay={0}>
          <div className="glass h-full rounded-xl2 p-8 sm:p-10">
            <Eyebrow />
            <Headline className="mt-5 text-[2.4rem] sm:text-5xl" />
            <p className="mt-6 max-w-lg text-lg text-mist">{sub}</p>
            <div className="mt-8"><Ctas /></div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5" delay={0.1}>
          <div className="glass h-full overflow-hidden rounded-xl2 p-2">
            <MediaPlaceholder label={t('Portrait Dr Amraoui', 'Portrait Dr Amraoui')} ratio="5/4" glow className="h-full" />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4" delay={0.14}><MonitorStat viz="dots" dotsTotal={4} dotsLit={1} label={t('adultes de +40 ans (FA)', 'adults over 40 (AF)')}>1 <span className="text-xl text-mist">/ 4</span></MonitorStat></Reveal>
        <Reveal className="lg:col-span-4" delay={0.2}><MonitorStat viz="bar" label={t("risque d'AVC en FA non traitée", 'stroke risk, untreated AF')}>×<CountUp to={4.8} decimals={1} /></MonitorStat></Reveal>
        <Reveal className="lg:col-span-4" delay={0.26}><MonitorStat viz="ecg" label={t('repérée par une montre, puis guérie', 'caught by a watch, then cured')}><CountUp to={190} suffix=" bpm" /></MonitorStat></Reveal>
        <Reveal className="lg:col-span-12" delay={0.16}>
          <div className="glass rounded-xl2 p-6"><EcgBand /></div>
        </Reveal>
      </div>
    ),
    // 5 - Typographic minimal (ECG threads behind giant type)
    5: (
      <div className="relative py-8 text-center">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-60" aria-hidden="true">
          <EcgOfLight className="h-40 w-full sm:h-56" />
        </div>
        <div className="relative">
          <Reveal><Eyebrow center /></Reveal>
          <Headline className="mx-auto mt-6 text-[3rem] leading-[0.98] sm:text-7xl xl:text-8xl" />
          <Reveal delay={0.35}><p className="mx-auto mt-8 max-w-lg text-lg text-mist">{sub}</p></Reveal>
          <Reveal delay={0.45}>
            <div className="mt-9 flex flex-col items-center gap-5">
              <BeamButton href={site.doctolib} size="lg">{t('Prendre rendez-vous', 'Book an appointment')}<Arrow /></BeamButton>
              <Credentials center />
            </div>
          </Reveal>
        </div>
      </div>
    ),
    // 6 - Clinique Lumière (ported from rythmologue3)
    6: (
      <div>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-['Schibsted_Grotesk'] text-xs font-semibold uppercase tracking-[0.16em] text-[#1F6B54]">
                Cardiologue · Rythmologue · Hôpital Américain de Paris
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-['Schibsted_Grotesk'] text-[2.6rem] font-bold leading-[1.03] tracking-[-0.02em] text-[#14181A] sm:text-5xl xl:text-6xl">
                Comprendre votre rythme,<br />
                <span className="text-[#1F6B54]">retrouver votre sérénité.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl font-['Source_Sans_3'] text-lg leading-relaxed text-[#4C565B]">
                {t(
                  "Spécialiste des troubles du rythme cardiaque, j'accompagne chaque patient avec des explications claires et une prise en charge de pointe, de la fibrillation atriale à l'ablation. Vous êtes entre de bonnes mains.",
                  'A heart-rhythm specialist, I guide every patient with clear explanations and leading-edge care, from atrial fibrillation to ablation. You are in good hands.'
                )}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href={site.doctolib} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-[10px] bg-[#1F6B54] px-7 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-[#174F3F]">
                  {t('Prendre rendez-vous', 'Book an appointment')}<Arrow />
                </a>
                <Link to="/dr-sana-amraoui" className="font-['Schibsted_Grotesk'] text-base font-semibold text-[#1F6B54] hover:text-[#174F3F]">
                  {t('Découvrir mon approche', 'Discover my approach')}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 inline-flex items-center gap-2 font-['Source_Sans_3'] text-sm text-[#6E7A80]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1F6B54]" />
                {t('Sur rendez-vous · Doctolib · réponse rapide', 'By appointment · Doctolib · quick reply')}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[420px]">
              <SignalField count={10} cx={300} cy={300} baseR={40} gap={30} warmBloom className="pointer-events-none absolute -inset-[26%] h-[152%] w-[152%]" />
              <Reveal delay={0.1} className="relative">
                <div className="overflow-hidden rounded-[22px]">
                  <MediaPlaceholder label={t('Portrait Dr Amraoui', 'Portrait Dr Amraoui')} ratio="4/5" />
                </div>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-[14px] border border-[#DCE2E4] bg-white px-4 py-3 shadow-[0_16px_36px_-30px_rgba(15,42,34,0.25)]">
                  <SourceGlyph rings={3} size={30} />
                  <div>
                    <p className="text-sm font-semibold text-[#14181A]">{t("Cheffe d'unité", 'Head of unit')}</p>
                    <p className="text-xs text-[#4C565B]">Hôpital Américain de Paris</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#DCE2E4] pt-6">
            <span className="font-['Schibsted_Grotesk'] text-xs font-semibold uppercase tracking-[0.16em] text-[#6E7A80]">{t('Formée & reconnue par', 'Trained & recognised by')}</span>
            {['Hôpital Américain de Paris', "St Thomas' · Londres", 'Columbia · New York', 'LSE', 'Université de Bordeaux'].map((inst) => (
              <span key={inst} className="font-['Source_Sans_3'] text-sm font-medium text-[#4C565B]">{inst}</span>
            ))}
          </div>
        </Reveal>
      </div>
    ),
  }

  return (
    <section className="relative overflow-hidden bg-obsidian pt-[76px]">
      {v === 6 ? (
        <div className="absolute inset-0 bg-[#F2F5F6]" aria-hidden="true" />
      ) : (
        <>
          <Aurora />
          <Spotlight />
          <Stars />
        </>
      )}

      <Container className="relative">
        {/* selector */}
        <div className="flex flex-wrap items-center gap-2 pt-6">
          <span className="eyebrow mr-1 text-mist">{t('Aperçu · mise en page', 'Preview · layout')}</span>
          {OPTIONS.map((o) => (
            <button
              key={o}
              onClick={() => setV(o)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                v === o ? 'bg-signal text-white' : 'glass-soft text-pearl/80 hover:text-signal-deep'
              }`}
              aria-pressed={v === o}
            >
              Option {o}
              <span className="ml-1.5 hidden text-2xs opacity-70 sm:inline">{t(NAMES[o][0], NAMES[o][1])}</span>
            </button>
          ))}
        </div>

        <div className="py-12 lg:py-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={v}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {layouts[v]}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
