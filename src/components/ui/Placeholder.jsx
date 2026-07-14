import { SignalField } from '../brand/Champ'

// Clearly-labeled placeholder media (final assets not ready).
// On-brand: faint Champ field + filet border + a small caption chip.

const ratios = {
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  '16/9': 'aspect-video',
  '5/4': 'aspect-[5/4]',
  '2/1': 'aspect-[2/1]',
}

export function MediaPlaceholder({ label, ratio = '4/5', className = '', tone = 'light', warmBloom = false, labelPos = 'bottom' }) {
  const dark = tone === 'dark'
  return (
    <div
      className={`group relative overflow-hidden rounded-xl2 border ${
        dark ? 'border-white/12 bg-graphite-soft' : 'border-filet bg-white'
      } ${ratios[ratio] || 'aspect-[4/5]'} ${className}`}
    >
      <SignalField
        count={9}
        cx={430}
        cy={300}
        warmBloom={warmBloom}
        animate={false}
        className="absolute inset-0 h-full w-full opacity-[0.5]"
        color={dark ? '#3E7E6C' : '#1F6B54'}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className={dark ? 'text-porcelaine/40' : 'text-ardoise/40'} aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="8.5" cy="9.5" r="1.7" stroke="currentColor" strokeWidth="1.3" />
          <path d="m4 17 5-4 4 3 3-2 4 3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      </div>
      <div className={`absolute inset-x-3 ${labelPos === 'top' ? 'top-3' : 'bottom-3'}`}>
        <span className={`label inline-block rounded-md px-2.5 py-1.5 text-[0.62rem] ${dark ? 'bg-graphite/70 text-porcelaine/80' : 'bg-porcelaine/85 text-ardoise'}`}>
          PLACEHOLDER · {label} · {ratio}
        </span>
      </div>
    </div>
  )
}

export function VideoPlaceholder({ label = 'Vidéo', title, className = '', ratio = '16/9' }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl2 border border-filet bg-graphite ${ratios[ratio]} ${className}`}>
      <SignalField count={8} cx={300} cy={170} animate={false} className="absolute inset-0 h-full w-full opacity-30" color="#3E7E6C" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-vert shadow-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6 4.5v11l9-5.5-9-5.5Z" /></svg>
        </span>
        {title && <p className="max-w-xs text-sm font-medium text-porcelaine/90">{title}</p>}
      </div>
      <div className="absolute inset-x-3 bottom-3">
        <span className="label inline-block rounded-md bg-graphite/70 px-2.5 py-1.5 text-[0.62rem] text-porcelaine/80">
          PLACEHOLDER · {label} · {ratio}
        </span>
      </div>
    </div>
  )
}
