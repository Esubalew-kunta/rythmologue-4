import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { site, secondaryLinks } from '../../data/site'
import { useI18n } from '../../i18n/i18n'
import { LangToggle } from './Navbar'
import { BeamButton, Arrow } from '../fx/cards'

export default function MobileDrawer({ open, onClose, nav }) {
  const { t } = useI18n()
  const [expanded, setExpanded] = useState(null)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-[60] bg-pearl/30 backdrop-blur-sm xl:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.aside
            className="fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-sm flex-col border-l border-pearl/10 bg-abyss shadow-lift xl:hidden"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label={t('Menu de navigation', 'Navigation menu')}
          >
            <div className="flex items-center justify-between border-b border-pearl/10 px-5 py-4">
              <span className="font-display text-lg font-medium text-pearl">Dr Sana Amraoui</span>
              <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-panel text-mist" aria-label={t('Fermer', 'Close')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {nav.map((item) =>
                item.children ? (
                  <div key={item.href} className="border-b border-pearl/8">
                    <button onClick={() => setExpanded(expanded === item.label ? null : item.label)} className="flex w-full items-center justify-between px-2 py-3.5 text-left text-[1.05rem] font-medium text-pearl">
                      {item.label}
                      <svg width="14" height="14" viewBox="0 0 12 12" className={`transition-transform duration-300 ${expanded === item.label ? 'rotate-180' : ''}`} aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded === item.label && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                          {item.children.map((c) => (
                            <NavLink key={c.href} to={c.href} className="block px-3 py-2.5 text-[0.95rem] text-mist hover:text-signal">{c.label}</NavLink>
                          ))}
                          <div className="h-2" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink key={item.href} to={item.href} className="block border-b border-pearl/8 px-2 py-3.5 text-[1.05rem] font-medium text-pearl">{item.label}</NavLink>
                )
              )}
              <div className="mt-4 flex items-center justify-between px-2">
                <Link to={secondaryLinks.about.href} className="py-2 text-sm text-mist">{t('À propos', 'About')}</Link>
                <LangToggle />
              </div>
            </nav>

            <div className="border-t border-pearl/10 px-5 py-4">
              <BeamButton href={site.doctolib} className="w-full">
                {t('Prendre rendez-vous', 'Book an appointment')}
                <Arrow />
              </BeamButton>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
