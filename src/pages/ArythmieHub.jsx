import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Section, Container, SectionHead, Prose, Callout, FinalCta, Arrow } from '../components/ui/kit'
import { SourceGlyph, CornerMark } from '../components/brand/Champ'
import { Reveal } from '../components/ui/primitives'
import { conditions } from '../data/content'

export default function ArythmieHub() {
  return (
    <>
      <Seo title="Arythmie" description="Comprendre les troubles du rythme cardiaque : palpitations, fibrillation atriale, tachycardies, malaises. Le Dr Sana Amraoui vous oriente selon vos symptômes." />
      <PageHero
        eyebrow="01 · Arythmie"
        title="Quand le cœur perd sa cadence"
        lede="Une arythmie, c’est une perturbation du système électrique du cœur : il bat trop vite, trop lentement, ou de façon irrégulière. La bonne nouvelle : la plupart se diagnostiquent simplement et se traitent efficacement."
        breadcrumb={[{ label: 'Arythmie' }]}
      />

      <Section tone="porcelaine">
        <Container>
          <SectionHead title="Par où commencer ?" lede="Choisissez ce qui ressemble le plus à ce que vous ressentez. Chaque page explique, en mots simples, ce qu’il se passe et ce que l’on peut faire." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {conditions.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link to={c.slug} className="panel group relative flex h-full items-start gap-5 overflow-hidden p-7 transition-all duration-300 ease-calm hover:-translate-y-1 hover:shadow-lift">
                  <CornerMark corner="tr" className="absolute right-3 top-3 opacity-50" />
                  <SourceGlyph rings={c.rings} size={48} className="shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-graphite">{c.name}</h3>
                    <p className="mt-1 text-sm font-medium text-vert">{c.symptom}</p>
                    <p className="mt-3 text-sm text-ardoise">{c.blurb}</p>
                    {c.flag && <span className="mt-4 inline-flex rounded-md bg-eucalyptus px-2.5 py-1 text-xs font-semibold text-vert-deep">{c.flag}</span>}
                    <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-graphite transition-colors group-hover:text-vert">
                      En savoir plus <Arrow className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="blanc">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead index="Le saviez-vous" title="Plus de la moitié des arythmies sont silencieuses" />
              <Prose className="mt-6">
                <p>
                  Beaucoup de troubles du rythme n’entraînent aucun symptôme : c’est pourquoi le dépistage est important,
                  surtout en présence de facteurs favorisants (âge, hypertension, antécédents familiaux). Détectée tôt,
                  une arythmie se prend en charge avant ses complications.
                </p>
              </Prose>
            </div>
            <div className="flex flex-col justify-center">
              <Callout title="Quand consulter un rythmologue ?">
                Palpitations, essoufflement anormal, malaises ou pertes de connaissance, ou une anomalie détectée sur un ECG :
                ce sont de bonnes raisons de consulter. En cas d’antécédents familiaux de mort subite, un avis est également recommandé.
              </Callout>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta title="Un doute sur votre rythme ? Parlons-en." />
    </>
  )
}
