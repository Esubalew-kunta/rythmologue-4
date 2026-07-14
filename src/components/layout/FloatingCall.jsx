import { site } from '../../data/site'
import { useI18n } from '../../i18n/i18n'

// Floating "call the office" button — booking by phone is always one tap away.
// Sits above the mobile StickyBookingBar (bottom-24 on mobile, bottom-6 from sm+).
export default function FloatingCall() {
  const { t } = useI18n()
  const label = t('Appeler le secrétariat', 'Call the office')
  const tel = site.phones[0].replace(/\s/g, '')
  return (
    <a
      href={`tel:${tel}`}
      aria-label={label}
      title={`${label} · ${site.phones[0]}`}
      className="group fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-signal text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-signal-deep sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-signal/40 motion-safe:animate-ping" aria-hidden />
      <svg viewBox="0 0 24 24" fill="none" className="relative h-6 w-6 sm:h-7 sm:w-7" aria-hidden>
        <path d="M6.6 10.8a13 13 0 0 0 5.6 5.6l1.9-1.9a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.4.57a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1c0 1.2.2 2.3.57 3.4a1 1 0 0 1-.24 1l-1.93 1.9Z" fill="currentColor" />
      </svg>
    </a>
  )
}
