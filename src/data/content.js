// Clinical + editorial content — sourced from the real site content, the audit,
// and Dr Amraoui's own clinic articles. Kept structured so pages stay thin.

// ── Authority / credentials ─────────────────────────────────────────────────
export const credentials = [
  { label: "Cheffe d'unité", org: 'Cardiologie & arythmie · Hôpital Américain de Paris' },
  { label: 'Fondatrice & CEO', org: 'Cardio Check-Up' },
  { label: 'Executive MSc, Health Economics', org: 'London School of Economics' },
  { label: 'Fellowship', org: "St Thomas' Hospital · Londres" },
  { label: 'Fellowship', org: 'Columbia · New York' },
  { label: 'Doctorat & DIU rythmologie', org: 'Université de Bordeaux' },
]

export const institutions = [
  'Hôpital Américain de Paris',
  "St Thomas' · Londres",
  'Columbia · New York',
  'London School of Economics',
  'Université de Bordeaux',
]

// Career + training timeline (for À propos)
export const parcours = [
  { year: '2020 →', title: "Cheffe d'unité, cardiologie & arythmie", org: 'Hôpital Américain de Paris', kind: 'Aujourd’hui' },
  { year: '2021', title: 'Executive MSc in Health Economics (MBA)', org: 'London School of Economics' },
  { year: '2016', title: 'Fondatrice & CEO', org: 'Cardio Check-Up · prévention cardiovasculaire' },
  { year: '2012–2016', title: 'Chef de clinique de rythmologie', org: 'Hôpital Haut-Lévêque · Pessac' },
  { year: '2012', title: 'Fellowship en rythmologie', org: "St Thomas' Hospital · Londres" },
  { year: '2011', title: 'Fellowship', org: 'Columbia Memorial Health · New York' },
  { year: '2008–2012', title: 'Doctorat & internat en cardiologie', org: 'Université Bordeaux-Segalen · félicitations du jury' },
]

// ── Conditions (home grid + Arythmie hub) ───────────────────────────────────
export const conditions = [
  {
    slug: '/arythmie/fibrillation-atriale',
    rings: 4,
    name: 'Fibrillation atriale',
    symptom: 'Cœur emballé, irrégulier',
    blurb: "L'arythmie la plus fréquente au monde, et la plus traitable aujourd'hui.",
    flag: "Risque d'AVC ×4,8",
  },
  {
    slug: '/arythmie/generalites',
    rings: 2,
    name: 'Palpitations & généralités',
    symptom: "Le cœur qui s'emballe",
    blurb: 'Plus de 50 % des arythmies sont silencieuses. Savoir, c’est déjà se protéger.',
  },
  {
    slug: '/arythmie/types',
    rings: 3,
    name: 'Tachycardies & types',
    symptom: 'Rythme trop rapide',
    blurb: "Comprendre le type exact d'arythmie pour choisir le bon traitement.",
  },
  {
    slug: '/arythmie/holter-implantable',
    rings: 1,
    name: 'Malaises & syncopes',
    symptom: 'Pertes de connaissance',
    blurb: 'Le Holter implantable détecte ce que les examens courts ne voient pas.',
  },
]

// ── Treatments (Traitements hub) ────────────────────────────────────────────
export const treatments = [
  {
    slug: '/traitements/ablation-catheter',
    rings: 4,
    name: 'Ablation par cathéter',
    lead: 'Le traitement de référence des arythmies',
    blurb: "Neutraliser précisément la zone responsable du trouble, par voie mini-invasive. Souvent proposée en première intention.",
  },
  {
    slug: '/traitements/pacemaker',
    rings: 2,
    name: 'Pacemaker',
    lead: 'Stimulateur cardiaque',
    blurb: 'Un petit dispositif qui relance le cœur quand il bat trop lentement, pour retrouver de l’énergie en toute sécurité.',
  },
  {
    slug: '/traitements/defibrillateur',
    rings: 3,
    name: 'Défibrillateur automatique (DAI)',
    lead: 'Protection contre la mort subite',
    blurb: 'Un dispositif qui surveille en continu et corrige les arythmies graves, jour et nuit.',
  },
]

// ── The 3 energies of interventional rhythmology (ablation) ─────────────────
export const energies = [
  {
    name: 'Radiofréquence',
    by: 'Par la chaleur',
    desc: 'Cartographie 3D du cœur pour localiser et neutraliser précisément les zones pathologiques. La cartographie avancée améliore l’efficacité et réduit les complications.',
  },
  {
    name: 'Cryoablation',
    by: 'Par le froid (−70 °C)',
    desc: 'Utilisée notamment pour la fibrillation atriale paroxystique. Sans cartographie électrique : moins optimale pour les arythmies complexes.',
  },
  {
    name: 'Électroporation',
    by: 'Par champs électriques',
    badge: 'Innovation',
    desc: 'Champs électriques pulsés, ciblés, qui épargnent les structures cardiaques environnantes. Efficacité démontrée par de nombreuses études.',
  },
]

// ── Citable facts (GEO) ─────────────────────────────────────────────────────
export const stats = [
  { value: '1 sur 4', label: 'adultes de plus de 40 ans concernés au cours de leur vie par la fibrillation atriale' },
  { value: '×4,8', label: "risque d'AVC en cas de fibrillation atriale non prise en charge" },
  { value: '~1 M', label: 'personnes vivent avec une fibrillation atriale en France' },
  { value: '230 000', label: 'nouveaux cas de fibrillation atriale par an en France' },
]

// The 3 forms of atrial fibrillation
export const faForms = [
  { name: 'FA Paroxystique', desc: "Épisodes intermittents qui disparaissent spontanément en moins de 7 jours." },
  { name: 'FA Persistante', desc: "Épisodes qui se prolongent au-delà de 7 jours, ou avec échec de traitement." },
  { name: 'FA Permanente', desc: 'Stade évolutif avancé, avec arythmie installée de façon permanente.' },
]

export const faOptions = [
  { name: 'Traitements médicamenteux', desc: 'Anticoagulants pour prévenir l’AVC, et anti-arythmiques pour réguler le rythme.' },
  { name: 'Cardioversion électrique', desc: 'Choc électrique externe sous anesthésie. Une solution temporaire, non curative.' },
  { name: 'Ablation de FA', desc: 'Intervention mini-invasive qui isole les zones responsables. Aujourd’hui le moyen le plus efficace, avec une possibilité de guérison.' },
]

// ── Sleep apnea ─────────────────────────────────────────────────────────────
export const apneaTypes = [
  { name: 'Apnée obstructive', tag: '95 % des cas', desc: 'Blocage mécanique des voies respiratoires : relâchement des tissus, surpoids, anatomie.' },
  { name: 'Apnée centrale', desc: 'Défaut de commande : le cerveau n’envoie plus le signal de respirer.' },
  { name: 'Apnée mixte', desc: 'Une combinaison des deux mécanismes.' },
]

export const apneaConsequences = [
  { title: 'Troubles du rythme', desc: 'Cause fréquente de fibrillation atriale et de bradycardie nocturne.' },
  { title: 'Hypertension artérielle', desc: 'Une tension élevée qui se maintient même le jour.' },
  { title: "Risque d'infarctus et d'AVC", desc: 'Le stress cardiaque répété, nuit après nuit, use le cœur et les vaisseaux.' },
]

// ── Connected watches ───────────────────────────────────────────────────────
export const montresPoints = [
  { title: 'Un ECG à une dérivation', desc: 'Certaines montres enregistrent un tracé au moment précis d’un symptôme, utile pour documenter une palpitation passagère.' },
  { title: 'Un allié, pas un diagnostic', desc: 'La montre alerte et documente ; c’est le rythmologue qui interprète, confirme et décide de la prise en charge.' },
  { title: 'Le télésuivi', desc: 'Les dispositifs implantés et connectés permettent un suivi à distance, entre deux consultations.' },
]

// ── FAQ ─────────────────────────────────────────────────────────────────────
export const faqCategories = ['Général', 'Symptômes & examens', 'Traitements', 'Technologies & suivi', 'Conseils pratiques']

export const faqItems = [
  {
    cat: 'Général',
    q: 'Quelle est la différence entre un cardiologue et un rythmologue ?',
    a: "Le rythmologue est un cardiologue sur-spécialisé. Là où le cardiologue généraliste s'occupe de la santé globale du cœur (artères, tension), le rythmologue est l'expert exclusif de l'électricité du cœur : l'électricien du cœur. Il diagnostique et traite les troubles du rythme : fibrillation atriale, bradycardies, tachycardies.",
  },
  {
    cat: 'Symptômes & examens',
    q: 'Quand dois-je consulter un spécialiste du rythme cardiaque ?',
    a: "Consultez si vous ressentez des palpitations, des essoufflements anormaux, des malaises ou des pertes de connaissance (syncope). Une consultation est aussi recommandée si votre médecin détecte une anomalie sur votre ECG, ou en cas d'antécédents familiaux de mort subite.",
  },
  {
    cat: 'Général',
    q: 'Faut-il une lettre du médecin traitant pour prendre rendez-vous ?',
    a: "Idéalement oui. Pour respecter le parcours de soins et bénéficier d'un meilleur remboursement, il est préférable d'être adressé par votre médecin généraliste ou votre cardiologue de ville. Cela nous permet aussi de recevoir vos premiers examens (ECG, échographie) avant la consultation.",
  },
  {
    cat: 'Symptômes & examens',
    q: 'Les palpitations sont-elles toujours graves ?',
    a: "Le plus souvent, non. Sentir son cœur s'emballer ou sauter un battement est fréquent et souvent bénin. Mais des palpitations peuvent parfois révéler un trouble du rythme : un simple Holter ECG permet de l'objectiver et de vous rassurer sur des bases solides.",
  },
  {
    cat: 'Traitements',
    q: "L'ablation est-elle une opération lourde ?",
    a: "Non. L'ablation par cathéter est une intervention mini-invasive, sans chirurgie à cœur ouvert : un fin cathéter est guidé jusqu'au cœur par une veine. Elle est pratiquée depuis des décennies avec un haut niveau de sécurité, et la reprise des activités est rapide.",
  },
  {
    cat: 'Technologies & suivi',
    q: "L'ECG de ma montre connectée est-il fiable ?",
    a: "Une montre peut enregistrer un ECG à une dérivation, utile pour documenter un symptôme passager. C'est un bon signal d'alerte, mais pas un diagnostic : seul le rythmologue peut interpréter le tracé, le confirmer par des examens adaptés et décider de la prise en charge.",
  },
  {
    cat: 'Conseils pratiques',
    q: 'Puis-je faire du sport avec un trouble du rythme ?',
    a: "Dans la grande majorité des cas, oui, et l'activité physique est même bénéfique pour le cœur. Les modalités dépendent du type d'arythmie : une consultation permet de définir ensemble ce qui est adapté et sûr pour vous.",
  },
]

// ── Educational videos ──────────────────────────────────────────────────────
export const treatmentVideos = [
  { title: "Comprendre l'ablation par cathéter", desc: "En quoi consiste l'intervention, comment elle se déroule.", videoId: 'VKK9bjPBDpg' },
  { title: "L'électroporation, énergie de nouvelle génération", desc: 'Le principe des champs électriques pulsés.', videoId: 'BjDfsH-kozo' },
  { title: 'Vivre avec un pacemaker ou un défibrillateur', desc: 'Le quotidien après la pose d’un dispositif implantable.', videoId: 'tzG7RqOk1IU' },
  { title: 'Montres connectées : bien suivre son rythme', desc: "Ce que l'ECG d'une montre détecte vraiment.", videoId: 'fw8CV0Hq2Lo' },
]

// ── Blog ────────────────────────────────────────────────────────────────────
export const blogCategories = [
  { key: 'examens', label: 'Examens & Diagnostic' },
  { key: 'traitements', label: 'Traitements & Interventions' },
  { key: 'prevention', label: 'Prévention & Conseils' },
]

export const categoryLabel = (key) => blogCategories.find((c) => c.key === key)?.label ?? key

export const articles = [
  {
    slug: 'qu-est-ce-qu-un-holter-ecg',
    category: 'examens',
    kind: 'Guide',
    title: "Qu'est-ce qu'un Holter ECG ?",
    excerpt:
      "Un petit boîtier qui enregistre votre cœur de 24 heures à 2 semaines. On vous explique simplement à quoi il sert, comment il se déroule et pourquoi votre cardiologue vous l'a prescrit.",
    read: '5 min',
    date: 'Juin 2026',
    author: 'Dr Sana Amraoui',
    body: [
      { type: 'p', text: "Votre cardiologue vous a prescrit un Holter ECG et ce nom un peu technique vous inquiète ? Rassurez-vous : il s'agit de l'un des examens les plus simples et les plus confortables de la cardiologie. Aucun geste douloureux, aucune préparation contraignante, et vous pouvez poursuivre votre vie quotidienne pendant toute la durée de l'enregistrement." },
      { type: 'p', text: "Le Holter ECG est un enregistreur portable de l'électrocardiogramme. C'est un petit boîtier relié à quelques électrodes collées sur votre poitrine, qui suit l'activité électrique de votre cœur en continu, de 24 heures jusqu'à 2 semaines selon la prescription." },
      { type: 'video', videoId: 'XusqaX3z1U8', caption: 'En vidéo : le déroulement d’un Holter ECG, expliqué pas à pas.' },
      { type: 'h2', text: 'À quoi sert un Holter ECG ?' },
      { type: 'p', text: "Un électrocardiogramme classique, réalisé au cabinet, ne dure que quelques secondes. Or beaucoup de troubles du rythme sont intermittents : ils vont et viennent, et ont toutes les chances d'être absents au moment de la consultation. Le Holter résout ce problème en enregistrant votre cœur sur la durée, dans vos conditions de vie réelles." },
      { type: 'list', items: ["Palpitations ou sensation de cœur qui s'emballe", 'Malaises, vertiges ou pertes de connaissance inexpliqués', 'Suspicion de trouble du rythme comme la fibrillation atriale', "Contrôle de l'efficacité d'un traitement déjà en place"] },
      { type: 'h2', text: 'Comment se déroule l’examen ?' },
      { type: 'p', text: "Au cabinet, l'assistante médicale colle quelques électrodes sur votre thorax et les relie au boîtier, en une dizaine de minutes. La pose est totalement indolore. Vous vivez ensuite normalement : travail, marche, sommeil. On vous remet un petit carnet pour noter l'heure de vos symptômes, ce qui aide à relier une sensation à un tracé précis." },
      { type: 'quote', text: "Le Holter, c'est un peu une caméra de surveillance bienveillante posée sur votre cœur : il observe sans rien changer à votre quotidien, et nous révèle ce qu'une consultation de quelques minutes ne peut pas voir.", cite: 'Dr Sana Amraoui' },
      { type: 'p', text: "Si vous avez la moindre question avant votre examen, n'hésitez pas à en parler à votre cardiologue ou à notre secrétariat : un examen bien compris est toujours mieux vécu." },
    ],
  },
  {
    slug: '5-signes-consulter-cardiologue',
    category: 'prevention',
    kind: 'Guide',
    title: '5 signes qui doivent vous inciter à consulter un cardiologue',
    excerpt:
      "Douleur dans la poitrine, essoufflement inhabituel, palpitations… Voici cinq signaux que votre cœur vous envoie et qu'il vaut mieux ne pas ignorer.",
    read: '6 min',
    date: 'Mai 2026',
    author: 'Dr Sana Amraoui',
    body: [
      { type: 'p', text: "Le cœur sait se faire discret, mais il envoie aussi des signaux. Savoir les reconnaître permet de consulter au bon moment, ni dans l'angoisse permanente, ni trop tard. Voici cinq symptômes qui méritent l'avis d'un cardiologue." },
      { type: 'h2', text: '1. Une douleur ou une oppression dans la poitrine' },
      { type: 'p', text: "Une sensation de serrement, de poids ou de brûlure derrière le sternum, surtout si elle survient à l'effort et cède au repos, doit toujours être évaluée." },
      { type: 'h2', text: '2. Un essoufflement inhabituel' },
      { type: 'p', text: "Être essoufflé après un escalier que vous montiez sans peine, ou vous réveiller la nuit en manquant d'air, mérite un bilan." },
      { type: 'h2', text: '3. Des palpitations' },
      { type: 'p', text: "Sentir son cœur s'emballer, cogner ou battre de façon irrégulière est une raison fréquente de consultation : le plus souvent sans gravité, parfois le signe d'un trouble du rythme qu'un Holter saura objectiver." },
      { type: 'h2', text: '4. Des malaises ou pertes de connaissance' },
      { type: 'p', text: "Un malaise, une sensation de tête qui tourne, ou une vraie perte de connaissance ne doivent jamais être mis sur le seul compte de la fatigue." },
      { type: 'h2', text: '5. Un gonflement des jambes ou une fatigue persistante' },
      { type: 'p', text: 'Des chevilles qui gonflent, une fatigue durable, une prise de poids rapide : associés, ces signes peuvent traduire un cœur qui peine à assurer son travail de pompe.' },
      { type: 'tip', title: "En cas d'urgence, appelez le 15", tone: 'urgent', text: "Une douleur intense dans la poitrine qui dure, avec essoufflement, sueurs, douleur au bras ou à la mâchoire, est une urgence vitale. N'attendez pas : appelez le SAMU (15) ou le 112." },
      { type: 'quote', text: "Consulter, ce n'est pas s'alarmer : c'est reprendre le contrôle. La très grande majorité de ces symptômes ont une explication simple.", cite: 'Dr Sana Amraoui' },
    ],
  },
  {
    slug: 'qu-est-ce-que-l-ablation-par-catheter',
    category: 'traitements',
    kind: 'Guide',
    title: "Qu'est-ce que l'ablation par cathéter ?",
    excerpt:
      'Une technique de référence pour traiter durablement certains troubles du rythme cardiaque, sans chirurgie à cœur ouvert. Explications en mots simples.',
    read: '7 min',
    date: 'Avril 2026',
    author: 'Dr Sana Amraoui',
    body: [
      { type: 'p', text: "Quand un trouble du rythme résiste aux médicaments ou retentit sur la qualité de vie, la rythmologie interventionnelle propose une solution souvent décisive : l'ablation par cathéter. Derrière ce nom impressionnant se cache une technique éprouvée, mini-invasive, qui vise à corriger l'anomalie à sa source." },
      { type: 'h2', text: "Le principe de l'ablation" },
      { type: 'p', text: "Certaines arythmies naissent d'un petit foyer de cellules qui émet des impulsions anarchiques, ou d'un circuit électrique anormal. L'ablation neutralise très précisément cette zone, à l'aide d'un cathéter introduit jusqu'au cœur par une veine, le plus souvent au pli de l'aine. On l'inactive par la chaleur (radiofréquence) ou par le froid (cryoablation)." },
      { type: 'h2', text: 'Quels troubles peut-on traiter ?' },
      { type: 'list', items: ['La fibrillation atriale, le trouble du rythme le plus fréquent', 'Le flutter atrial', 'Les tachycardies jonctionnelles (Bouveret)', 'Certaines extrasystoles et tachycardies ventriculaires'] },
      { type: 'h2', text: "Comment se déroule l'intervention ?" },
      { type: 'p', text: "Vous êtes installé confortablement, sous anesthésie locale et sédation (parfois anesthésie générale). Le rythmologue guide les cathéters jusqu'au cœur sous imagerie, cartographie l'activité électrique, puis réalise l'ablation. L'intervention dure généralement une à trois heures, suivie de quelques heures à une nuit de surveillance." },
      { type: 'quote', text: "Traiter l'arythmie à sa source, plutôt que d'en masquer les symptômes au long cours : c'est tout le sens de la rythmologie interventionnelle. Pour de nombreux patients, c'est un vrai retour à une vie normale.", cite: 'Dr Sana Amraoui' },
    ],
  },
]

// ── Authority signals (authority-led, not review-led) ───────────────────────
export const authoritySignals = [
  { kind: 'Presse', title: 'Le Cardiologue · « Portrait du mois »', desc: 'Un portrait dans la presse médicale française.' },
  { kind: 'Publications', title: 'Radcliffe Cardiology', desc: 'Autrice et contributrice dans la presse cardiologique internationale.' },
  { kind: 'Congrès', title: 'EHRA 2026', desc: 'Présente au congrès européen de référence en rythmologie.' },
  { kind: 'Innovation', title: 'PariSanté Campus', desc: "Table ronde sur l'intelligence artificielle en cardiologie." },
]
