import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../../data/site'
import { useI18n } from '../../i18n/i18n'

export default function StickyBookingBar() {
  const { t } = useI18n()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90 }} animate={{ y: 0 }} exit={{ y: 90 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-pearl/10 bg-abyss/95 p-3 backdrop-blur-md shadow-panel sm:hidden"
        >
          <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-panel border border-signal/30 text-signal" aria-label={t('Appeler', 'Call')}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3.5c0 5 4.5 9.5 9.5 9.5l.5-2.5-3-1-1 1.5c-1.8-.8-3.2-2.2-4-4L6 5.5l-1-3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
          </a>
          <a href={site.doctolib} target="_blank" rel="noopener noreferrer" className="flex h-12 flex-1 items-center justify-center gap-2 rounded-panel bg-signal font-sans font-semibold text-white shadow-glow">
            {t('Prendre rendez-vous', 'Book an appointment')}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
