import { EcgMini } from '../fx/Ecg'

// Frameless placeholder media (no border). Final assets not ready.
const ratios = {
  '4/5': 'aspect-[4/5]', '3/4': 'aspect-[3/4]', '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]', '16/9': 'aspect-video', '5/4': 'aspect-[5/4]', '2/1': 'aspect-[2/1]',
}

export function MediaPlaceholder({ label, ratio = '4/5', className = '', glow = false }) {
  return (
    <div className={`relative overflow-hidden rounded-xl2 ${ratios[ratio] || 'aspect-[4/5]'} ${className}`}
      style={{ background: 'linear-gradient(160deg, #EAF6F1, #F6FBF9)' }}>
      {glow && <div className="pointer-events-none absolute -inset-8 bg-signal/12 blur-3xl" aria-hidden="true" />}
      <div className="absolute inset-0 bg-monitor opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-signal/50" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="8.5" cy="9.5" r="1.7" stroke="currentColor" strokeWidth="1.3" />
          <path d="m4 17 5-4 4 3 3-2 4 3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
        <EcgMini className="h-4 w-16 opacity-60" />
      </div>
      <div className="absolute inset-x-3 top-3">
        <span className="eyebrow inline-block rounded-md bg-white/70 px-2.5 py-1.5 text-[0.58rem] text-mist">PLACEHOLDER · {label} · {ratio}</span>
      </div>
    </div>
  )
}

export function VideoPlaceholder({ title, label = 'Vidéo', ratio = '16/9', className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-xl2 ${ratios[ratio]} ${className}`}
      style={{ background: 'linear-gradient(160deg, #E4F3ED, #F1F9F5)' }}>
      <div className="absolute inset-0 bg-monitor opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-signal text-white shadow-glow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6 4.5v11l9-5.5-9-5.5Z" /></svg>
        </span>
        {title && <p className="max-w-xs text-sm font-medium text-pearl/80">{title}</p>}
      </div>
      <div className="absolute inset-x-3 top-3">
        <span className="eyebrow inline-block rounded-md bg-white/70 px-2.5 py-1.5 text-[0.58rem] text-mist">PLACEHOLDER · {label} · {ratio}</span>
      </div>
    </div>
  )
}
