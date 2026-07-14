import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../../data/site'
import { useI18n } from '../../i18n/i18n'
import { BeamButton, Arrow } from '../fx/cards'
import { EcgMini } from '../fx/Ecg'
import MobileDrawer from './MobileDrawer'

export function getNav(t) {
  return [
    {
      label: t('Arythmie', 'Arrhythmia'),
      href: '/arythmie',
      children: [
        { label: t('Généralités', 'Overview'), href: '/arythmie/generalites' },
        { label: t('Types', 'Types'), href: '/arythmie/types' },
        { label: t('Fibrillation atriale', 'Atrial fibrillation'), href: '/arythmie/fibrillation-atriale' },
        { label: t('Holter Implantable', 'Implantable Holter'), href: '/arythmie/holter-implantable' },
      ],
    },
    {
      label: t('Traitements', 'Treatments'),
      href: '/traitements',
      children: [
        { label: t('Ablation par cathéter', 'Catheter ablation'), href: '/traitements/ablation-catheter' },
        { label: t('Pacemaker', 'Pacemaker'), href: '/traitements/pacemaker' },
        { label: t('Défibrillateur automatique', 'Defibrillator'), href: '/traitements/defibrillateur' },
      ],
    },
    { label: t('Montres connectées', 'Smartwatches'), href: '/montres-connectees' },
    { label: t('Blog', 'Blog'), href: '/blog' },
    { label: t('FAQ', 'FAQ'), href: '/faq' },
    { label: t('Contacts', 'Contact'), href: '/contact' },
  ]
}

function LangToggle({ className = '' }) {
  const { lang, setLang } = useI18n()
  return (
    <div className={`flex items-center rounded-full border border-pearl/15 p-0.5 text-2xs font-medium ${className}`}>
      {['fr', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${lang === l ? 'bg-signal text-obsidian' : 'text-mist hover:text-pearl'}`}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export { LangToggle }

export default function Navbar() {
  const { t } = useI18n()
  const nav = getNav(t)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(null); setDrawer(false) }, [location.pathname])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-calm ${scrolled ? 'glass-soft shadow-panel' : 'bg-transparent'}`}>
        <nav className="container-edge flex h-[76px] items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name}, ${t('accueil', 'home')}`}>
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-signal/30 bg-signal/5">
              <EcgMini className="h-4 w-6" />
              <span className="absolute inset-0 rounded-full shadow-glow-sm" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="whitespace-nowrap font-display text-[1.1rem] font-medium text-pearl">Dr Sana Amraoui</span>
              <span className="eyebrow mt-1 whitespace-nowrap text-[0.58rem] text-mist">{t('Cardiologue · Rythmologue', 'Cardiologist · Rhythmologist')}</span>
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex" onMouseLeave={() => setOpen(null)}>
            {nav.map((item) =>
              item.children ? (
                <div key={item.href} className="relative" onMouseEnter={() => setOpen(item.label)}>
                  <Link to={item.href} className={`flex items-center gap-1.5 whitespace-nowrap rounded-panel px-2.5 py-2 text-sm font-medium transition-colors ${location.pathname.startsWith(item.href) ? 'text-signal' : 'text-pearl/85 hover:text-signal'}`}>
                    {item.label}
                    <svg width="11" height="11" viewBox="0 0 12 12" className={`transition-transform duration-300 ${open === item.label ? 'rotate-180' : ''}`} aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                  <AnimatePresence>
                    {open === item.label && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }} className="absolute left-0 top-full w-[300px] pt-3">
                        <div className="glass overflow-hidden rounded-panel p-2">
                          {item.children.map((c) => (
                            <NavLink key={c.href} to={c.href} className="flex items-center gap-3 rounded-[9px] px-3 py-2.5 text-sm text-pearl/85 transition-colors hover:bg-signal/10 hover:text-signal">
                              <span className="h-1.5 w-1.5 rounded-full bg-signal/60" />
                              {c.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={item.href} to={item.href} className={({ isActive }) => `whitespace-nowrap rounded-panel px-2.5 py-2 text-sm font-medium transition-colors ${isActive ? 'text-signal' : 'text-pearl/85 hover:text-signal'}`}>
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <LangToggle className="hidden sm:flex" />
            <BeamButton href={site.doctolib} size="sm" className="hidden whitespace-nowrap sm:inline-flex">
              {t('Prendre rendez-vous', 'Book an appointment')}
              <Arrow />
            </BeamButton>
            <button onClick={() => setDrawer(true)} className="flex h-11 w-11 items-center justify-center rounded-panel border border-pearl/15 text-pearl xl:hidden" aria-label={t('Ouvrir le menu', 'Open menu')}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </button>
          </div>
        </nav>
      </header>

      <MobileDrawer open={drawer} onClose={() => setDrawer(false)} nav={nav} />
    </>
  )
}
