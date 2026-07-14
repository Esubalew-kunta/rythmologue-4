import { useState } from 'react'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Callout, Button, Arrow } from '../components/ui/kit'
import { MediaPlaceholder } from '../components/ui/Placeholder'
import { SourceGlyph } from '../components/brand/Champ'
import { site } from '../data/site'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <Seo title="Contacts" description="Prendre rendez-vous avec le Dr Sana Amraoui, cardiologue rythmologue à Paris et Neuilly (Hôpital Américain de Paris). Coordonnées, lieux de consultation, secteur 2 et prise de rendez-vous Doctolib." />
      <PageHero
        eyebrow="Contacts"
        title="Prendre rendez-vous"
        lede="Le moyen le plus simple est Doctolib. Vous pouvez aussi joindre le secrétariat par téléphone, ou nous écrire ci-dessous."
        breadcrumb={[{ label: 'Contacts' }]}
      >
        <Button href={site.doctolib} size="lg">Prendre rendez-vous sur Doctolib <Arrow /></Button>
      </PageHero>

      {/* Locations */}
      <Section tone="porcelaine">
        <Container>
          <SectionHead index="Où consulter" title="Lieux de consultation" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {site.locations.map((loc, i) => (
              <div key={loc.name} className="panel flex h-full flex-col p-6">
                <SourceGlyph rings={i + 1} size={38} />
                <h3 className="mt-5 text-lg font-bold text-graphite">{loc.name}</h3>
                <p className="mt-1 text-sm font-medium text-vert">{loc.detail}</p>
                <p className="mt-3 flex-1 text-sm text-ardoise">{loc.address}</p>
                <a href={loc.map} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-graphite hover:text-vert">
                  Voir sur la carte <Arrow />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6"><MediaPlaceholder label="Carte · lieux de consultation" ratio="2/1" /></div>
        </Container>
      </Section>

      {/* Coordinates + form */}
      <Section tone="blanc">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Coordinates */}
            <div>
              <SectionHead index="Nous joindre" title="Coordonnées" />
              <div className="mt-8 space-y-6">
                <div>
                  <p className="label text-vert">Téléphone</p>
                  {site.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="mt-1 block font-display text-xl font-bold text-graphite hover:text-vert">{p}</a>
                  ))}
                </div>
                <div>
                  <p className="label text-vert">E-mail</p>
                  <a href={`mailto:${site.email}`} className="mt-1 block break-all text-lg text-graphite hover:text-vert">{site.email}</a>
                </div>
                <Callout title="Honoraires · secteur 2">
                  Le Dr Amraoui est cardiologue conventionnée secteur 2 (honoraires libres). Pour un meilleur remboursement,
                  privilégiez le parcours de soins : une lettre de votre médecin traitant ou cardiologue est recommandée.
                </Callout>
              </div>
            </div>

            {/* Form */}
            <div>
              <SectionHead index="Écrire" title="Nous envoyer un message" />
              {sent ? (
                <div className="mt-8 rounded-xl2 border border-vert/30 bg-eucalyptus p-8 text-center">
                  <SourceGlyph rings={3} size={44} className="mx-auto" />
                  <p className="mt-4 font-display text-xl font-bold text-graphite">Merci, votre message est prêt à être envoyé.</p>
                  <p className="mt-2 text-sm text-ardoise">Ceci est une maquette de démonstration : le formulaire n’envoie pas encore de message. Pour une demande réelle, utilisez Doctolib ou le téléphone.</p>
                </div>
              ) : (
                <form
                  className="mt-8 space-y-4"
                  onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Prénom" name="prenom" required />
                    <Field label="Nom" name="nom" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="E-mail" name="email" type="email" required />
                    <Field label="Téléphone" name="tel" type="tel" />
                  </div>
                  <div>
                    <label className="label text-ardoise" htmlFor="motif">Motif</label>
                    <select id="motif" name="motif" className="mt-2 w-full rounded-panel border border-filet bg-blanc px-4 py-3 text-graphite focus:border-vert focus:outline-none">
                      <option>Prise de rendez-vous</option>
                      <option>Avis / second avis</option>
                      <option>Question sur un examen</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="label text-ardoise" htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-2 w-full rounded-panel border border-filet bg-blanc px-4 py-3 text-graphite focus:border-vert focus:outline-none" />
                  </div>
                  <label className="flex items-start gap-3 text-sm text-ardoise">
                    <input type="checkbox" required className="mt-1 h-4 w-4 accent-[#1F6B54]" />
                    <span>J’accepte que mes informations soient utilisées pour être recontacté(e). Elles ne seront jamais transmises à des tiers.</span>
                  </label>
                  <Button type="submit" className="w-full sm:w-auto">Envoyer le message <Arrow /></Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

function Field({ label, name, type = 'text', required }) {
  return (
    <div>
      <label className="label text-ardoise" htmlFor={name}>{label}{required && <span className="text-vert"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full rounded-panel border border-filet bg-blanc px-4 py-3 text-graphite focus:border-vert focus:outline-none" />
    </div>
  )
}
