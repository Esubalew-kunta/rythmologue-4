// Single source of truth for identity, contact + navigation.
// Nav LABELS are fixed by spec (kept identical for consistency + SEO).

export const DOCTOLIB_URL =
  'https://www.doctolib.fr/cardiologue/neuilly-sur-seine/sana-amraoui' // placeholder booking link

export const site = {
  name: 'Dr Sana Amraoui',
  role: 'Cardiologue · Rythmologue',
  roleLong: 'Cardiologue rythmologue · électrophysiologie interventionnelle',
  tagline: 'Comprendre votre rythme, retrouver votre sérénité.',
  phones: ['07 55 50 52 58', '07 61 83 99 92'],
  email: 'secretariatdramraoui@myeva.ovh',
  doctolib: DOCTOLIB_URL,
  sector: 'Cardiologue conventionnée secteur 2 · honoraires libres',
  social: {
    linkedin: 'https://www.linkedin.com/in/dr-sana-amraoui-md-ms-msc-rythmologue/',
    youtube: 'https://www.youtube.com/@drsanaamraoui',
    instagram: 'https://www.instagram.com/dr_rythmo',
    google: 'https://g.co/kgs/7PsUYf',
  },
  locations: [
    {
      name: 'Hôpital Américain de Paris',
      detail: "Centre d'expertise en rythmologie",
      address: '55 Bd du Château, 92200 Neuilly-sur-Seine',
      map: 'https://g.co/kgs/7PsUYf',
      booking: DOCTOLIB_URL,
    },
    {
      name: 'Cabinet de consultation',
      detail: 'Consultations privées · Paris',
      address: 'Paris (adresse à confirmer)',
      map: 'https://g.co/kgs/7PsUYf',
      booking: DOCTOLIB_URL,
    },
    {
      name: 'Cardio Check-Up',
      detail: 'Centre de prévention cardiovasculaire',
      address: 'Paris',
      map: 'https://g.co/kgs/7PsUYf',
      booking: DOCTOLIB_URL,
    },
  ],
}

// ── Fixed navbar (labels must not change) ────────────────────────────────────
export const nav = [
  {
    label: 'Arythmie',
    href: '/arythmie',
    children: [
      { label: 'Généralités', href: '/arythmie/generalites', hint: 'Comprendre les troubles du rythme' },
      { label: 'Types', href: '/arythmie/types', hint: 'Tachycardies, extrasystoles, flutter…' },
      { label: 'Fibrillation atriale', href: '/arythmie/fibrillation-atriale', hint: "L'arythmie la plus fréquente" },
      { label: 'Holter Implantable', href: '/arythmie/holter-implantable', hint: 'Détecter ce que les examens courts manquent' },
    ],
  },
  {
    label: 'Traitements',
    href: '/traitements',
    children: [
      { label: 'Ablation par cathéter', href: '/traitements/ablation-catheter', hint: 'Traiter le trouble à sa source' },
      { label: 'Pacemaker', href: '/traitements/pacemaker', hint: 'Stimulateur cardiaque' },
      { label: 'Défibrillateur automatique', href: '/traitements/defibrillateur', hint: 'Protection contre la mort subite' },
    ],
  },
  { label: 'Montres connectées', href: '/montres-connectees' },
  { label: 'Apnée du Sommeil', href: '/apnee-du-sommeil' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contacts', href: '/contact' },
]

// Secondary links (footer / off-nav pages)
export const secondaryLinks = {
  about: { label: 'À propos', href: '/dr-sana-amraoui' },
  checkup: { label: 'Cardio Check-Up', href: '/cardio-check-up' },
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
  ],
}
