import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, Prose } from '../components/ui/kit'
import { site } from '../data/site'

const content = {
  mentions: {
    title: 'Mentions légales',
    eyebrow: 'Informations légales',
    lede: 'Informations relatives à l’éditeur et à l’hébergement de ce site.',
    blocks: [
      ['Éditeur', `Dr Sana Amraoui, cardiologue rythmologue. ${site.sector}. Contact : ${site.email}.`],
      ['Directrice de la publication', 'Dr Sana Amraoui.'],
      ['Hébergement', 'Site de démonstration ; hébergeur à préciser lors de la mise en ligne.'],
      ['Propriété intellectuelle', 'Les contenus de ce site sont fournis à titre de démonstration. Les textes, visuels et éléments graphiques ne peuvent être reproduits sans autorisation.'],
      ['Données de santé', 'Aucune donnée de santé n’est collectée via ce site. La prise de rendez-vous s’effectue via Doctolib, soumis à sa propre politique de confidentialité.'],
    ],
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    eyebrow: 'Protection des données',
    lede: 'La façon dont vos données sont traitées lorsque vous utilisez ce site.',
    blocks: [
      ['Responsable de traitement', 'Dr Sana Amraoui. Toute question relative à vos données peut être adressée au secrétariat.'],
      ['Données collectées', 'Seules les informations que vous transmettez volontairement via le formulaire de contact (nom, e-mail, téléphone, message) sont concernées. Ce site de démonstration n’enregistre pas ces données.'],
      ['Finalité', 'Répondre à votre demande de contact ou de rendez-vous. Vos données ne sont jamais cédées à des tiers.'],
      ['Vos droits', 'Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Contactez le secrétariat pour l’exercer.'],
      ['Cookies', 'Ce site n’utilise pas de cookies de suivi publicitaire.'],
    ],
  },
}

export default function Legal({ variant = 'mentions' }) {
  const c = content[variant]
  return (
    <>
      <Seo title={c.title} description={c.lede} />
      <PageHero eyebrow={c.eyebrow} title={c.title} lede={c.lede} breadcrumb={[{ label: c.title }]} />
      <Section tone="porcelaine">
        <Container>
          <Prose>
            {c.blocks.map(([h, body]) => (
              <div key={h}>
                <h3>{h}</h3>
                <p>{body}</p>
              </div>
            ))}
          </Prose>
        </Container>
      </Section>
    </>
  )
}
