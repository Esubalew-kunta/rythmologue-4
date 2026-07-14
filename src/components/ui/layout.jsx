export function Container({ className = '', children }) {
  return <div className={`container-edge ${className}`}>{children}</div>
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  )
}

export function Label({ children, className = '', as: As = 'p' }) {
  return <As className={`eyebrow ${className}`}>{children}</As>
}

// Section index rule: "01 · Arythmie" style over an aqua hairline.
export function SectionHead({ index, title, lede, align = 'left', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {index && (
        <div className={`mb-5 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="eyebrow">{index}</span>
        </div>
      )}
      <h2 className="text-3xl font-medium tracking-tightish text-pearl sm:text-4xl">{title}</h2>
      {lede && <p className={`mt-5 text-lg text-mist ${align === 'center' ? 'mx-auto max-w-reading' : 'max-w-reading'}`}>{lede}</p>}
    </div>
  )
}
