import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Button, Arrow } from '../components/ui/kit'

export default function NotFound() {
  return (
    <>
      <Seo title="Page introuvable" />
      <PageHero eyebrow="Erreur 404" title="Cette page n’existe pas" lede="Le lien est peut-être ancien ou incorrect. Revenons sur la bonne voie." />
      <Container className="pb-24">
        <div className="flex flex-wrap gap-4">
          <Button to="/">Retour à l’accueil <Arrow /></Button>
          <Button to="/contact" variant="ghost">Prendre rendez-vous <Arrow /></Button>
        </div>
      </Container>
    </>
  )
}
