import { Link } from 'react-router-dom'
import { site, secondaryLinks } from '../../data/site'
import { useI18n } from '../../i18n/i18n'
import { getNav } from './Navbar'
import { BeamButton, Arrow } from '../fx/cards'
import { EcgOfLight } from '../fx/Ecg'
import { Aurora } from '../fx/backdrop'

export default function Footer() {
  const { t } = useI18n()
  const nav = getNav(t)
  return (
    <footer className="relative overflow-hidden border-t border-pearl/10 bg-obsidian-deep">
      <Aurora intensity={0.5} />
      <div className="container-edge relative py-16 sm:py-20">
        <div className="flex flex-col gap-8 border-b border-pearl/10 pb-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-2xl font-medium text-pearl">Dr Sana Amraoui</p>
            <p className="eyebrow mt-2 text-mist">{t('Rythmologue interventionnelle · Paris', 'Interventional electrophysiologist · Paris')}</p>
            <div className="mt-4 h-8 w-56 opacity-70"><EcgOfLight className="h-full w-full" /></div>
          </div>
          <BeamButton href={site.doctolib}>
            {t('Prendre rendez-vous', 'Book an appointment')}
            <Arrow />
          </BeamButton>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow mb-4 text-mist">{t('Navigation', 'Navigation')}</p>
            <ul className="space-y-2.5">
              {nav.slice(0, 5).map((i) => (
                <li key={i.href}><Link to={i.href} className="text-sm text-pearl/75 transition-colors hover:text-signal">{i.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4 text-mist">{t('En savoir plus', 'More')}</p>
            <ul className="space-y-2.5">
              {nav.slice(5).map((i) => (
                <li key={i.href}><Link to={i.href} className="text-sm text-pearl/75 transition-colors hover:text-signal">{i.label}</Link></li>
              ))}
              <li><Link to={secondaryLinks.about.href} className="text-sm text-pearl/75 transition-colors hover:text-signal">{t('À propos', 'About')}</Link></li>
              <li><Link to={secondaryLinks.checkup.href} className="text-sm text-pearl/75 transition-colors hover:text-signal">Cardio Check-Up</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4 text-mist">{t('Contact', 'Contact')}</p>
            <ul className="space-y-2.5 text-sm text-pearl/75">
              {site.phones.map((p) => <li key={p}><a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-signal">{p}</a></li>)}
              <li><a href={`mailto:${site.email}`} className="break-all hover:text-signal">{site.email}</a></li>
              <li className="pt-1 text-mist">{t('Cardiologue secteur 2 · honoraires libres', 'Sector 2 · private fees')}</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4 text-mist">{t('Consultations', 'Locations')}</p>
            <ul className="space-y-3 text-sm text-pearl/75">
              {site.locations.map((l) => (
                <li key={l.name}>
                  <span className="block font-medium text-pearl">{l.name}</span>
                  <span className="block text-mist">{l.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-pearl/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist">© 2026 Dr Sana Amraoui · {t('Maquette de démonstration. Contenu et visuels provisoires.', 'Demo mockup. Placeholder content and media.')}</p>
          <div className="flex flex-wrap items-center gap-4">
            {secondaryLinks.legal.map((l) => <Link key={l.href} to={l.href} className="text-xs text-mist hover:text-signal">{l.label}</Link>)}
            {[['LinkedIn', site.social.linkedin], ['YouTube', site.social.youtube], ['Instagram', site.social.instagram]].map(([n, u]) => (
              <a key={n} href={u} target="_blank" rel="noopener noreferrer" className="text-xs text-mist hover:text-signal">{n}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
