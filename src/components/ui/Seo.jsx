import { Helmet } from 'react-helmet-async'
import { site } from '../../data/site'

// Per-page SEO + optional JSON-LD. Physician entity is the strongest GEO asset.
export default function Seo({ title, description, jsonLd }) {
  const fullTitle = title ? `${title} · Dr Sana Amraoui` : 'Dr Sana Amraoui · Cardiologue rythmologue · Paris'
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}

export const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr Sana Amraoui',
  medicalSpecialty: 'Cardiology',
  description:
    "Cardiologue rythmologue, cheffe d'unité de cardiologie et d'arythmie à l'Hôpital Américain de Paris, spécialisée dans les troubles du rythme cardiaque.",
  telephone: site.phones[0],
  email: site.email,
  sameAs: [site.social.linkedin, site.social.youtube, site.social.instagram],
  alumniOf: ['London School of Economics', 'Université de Bordeaux', "St Thomas' Hospital", 'Columbia University'],
  worksFor: { '@type': 'Hospital', name: 'Hôpital Américain de Paris' },
}
