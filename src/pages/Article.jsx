import { useParams, Link } from 'react-router-dom'
import Seo from '../components/ui/Seo'
import PageHero from '../components/ui/PageHero'
import { Container, Section, Button, Arrow, FinalCta } from '../components/ui/kit'
import ArticleBody from '../components/ui/ArticleBody'
import { MediaPlaceholder } from '../components/ui/Placeholder'
import { articles, categoryLabel } from '../data/content'

export default function Article() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <>
        <Seo title="Article introuvable" />
        <PageHero eyebrow="Blog" title="Article introuvable" lede="Cet article n’existe pas ou a été déplacé." breadcrumb={[{ label: 'Blog', href: '/blog' }, { label: 'Introuvable' }]} />
        <Container className="py-16"><Button to="/blog" variant="ghost">Retour au blog <Arrow /></Button></Container>
      </>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: { '@type': 'Person', name: article.author },
    datePublished: article.date,
  }

  return (
    <>
      <Seo title={article.title} description={article.excerpt} jsonLd={jsonLd} />
      <PageHero
        eyebrow={`${categoryLabel(article.category)} · ${article.read}`}
        title={article.title}
        lede={article.excerpt}
        breadcrumb={[{ label: 'Blog', href: '/blog' }, { label: article.title }]}
      >
        <div className="flex items-center gap-3 text-sm text-ardoise">
          <span className="rounded bg-eucalyptus px-2 py-0.5 text-2xs font-semibold uppercase tracking-wide text-vert-deep">{article.kind}</span>
          <span>Par <span className="font-semibold text-graphite">{article.author}</span></span>
          <span className="text-filet">·</span>
          <span>{article.date}</span>
        </div>
      </PageHero>

      <Section tone="porcelaine">
        <Container>
          <div className="mx-auto max-w-reading">
            <MediaPlaceholder label={`Illustration · ${article.title}`} ratio="2/1" className="mb-12" />
            <ArticleBody blocks={article.body} />

            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-filet pt-8">
              <Link to="/blog" className="link-underline font-display font-semibold text-vert">← Tous les articles</Link>
              <Button to="/contact" variant="ghost">Prendre rendez-vous <Arrow /></Button>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta title="Une question après cette lecture ?" />
    </>
  )
}
