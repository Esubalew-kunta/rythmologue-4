import { Helmet } from 'react-helmet-async'
import { useI18n } from '../i18n/i18n'
import { Container } from '../components/ui/layout'
import { Aurora, Stars } from '../components/fx/backdrop'
import { EcgOfLight } from '../components/fx/Ecg'
import { BeamButton, Arrow } from '../components/fx/cards'
import { site } from '../data/site'

export default function Stub({ titleFr, titleEn }) {
  const { t } = useI18n()
  const title = t(titleFr, titleEn || titleFr)
  return (
    <>
      <Helmet><title>{title} · Dr Sana Amraoui</title></Helmet>
      <header className="relative overflow-hidden bg-obsidian pt-[76px]">
        <Aurora />
        <Stars />
        <Container className="relative py-20 sm:py-28">
          <p className="eyebrow mb-5">{t('En préparation', 'Coming soon')}</p>
          <h1 className="max-w-3xl font-display text-4xl font-medium tracking-tightish text-pearl sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg text-mist">
            {t(
              'Cette page reprendra le contenu réel du site (déjà rédigé) dans la nouvelle direction « Nocturne ». La page d’accueil montre le style complet.',
              'This page will carry the site’s real content (already written) in the new “Nocturne” direction. The homepage shows the full style.'
            )}
          </p>
          <div className="mt-10 h-16 w-full max-w-lg opacity-70"><EcgOfLight className="h-full w-full" /></div>
          <div className="mt-8">
            <BeamButton href={site.doctolib}>{t('Prendre rendez-vous', 'Book an appointment')} <Arrow /></BeamButton>
          </div>
        </Container>
      </header>
    </>
  )
}
