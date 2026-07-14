import { Callout, PullQuote } from './kit'
import { VideoPlaceholder, MediaPlaceholder } from './Placeholder'

// Renders an article body (array of typed blocks) in the Clinique Lumière voice.
export default function ArticleBody({ blocks }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i} className="pt-4 text-2xl font-bold tracking-tightish text-graphite">{b.text}</h2>
          case 'h3':
            return <h3 key={i} className="pt-2 text-xl font-bold text-graphite">{b.text}</h3>
          case 'p':
            return <p key={i} className="text-lg leading-relaxed text-ardoise">{b.text}</p>
          case 'list':
            return (
              <ul key={i} className="space-y-2.5">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3 text-lg text-ardoise">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-vert" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )
          case 'quote':
            return <PullQuote key={i} cite={b.cite}>{b.text}</PullQuote>
          case 'tip':
            return <Callout key={i} title={b.title} tone={b.tone === 'urgent' ? 'urgent' : 'info'}>{b.text}</Callout>
          case 'video':
            return (
              <figure key={i} className="my-8">
                <VideoPlaceholder title={b.caption || 'Vidéo explicative'} ratio="16/9" />
                {b.caption && <figcaption className="mt-3 text-sm text-ardoise">{b.caption}</figcaption>}
              </figure>
            )
          case 'image':
            return (
              <figure key={i} className="my-8">
                <MediaPlaceholder label={b.caption || 'Illustration'} ratio="3/2" />
              </figure>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
