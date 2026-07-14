import { Fragment, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useInView, useScroll, useTransform, useSpring, animate } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// Fade + rise on scroll-in, once. `blur` adds a blur-to-focus resolve.
export function Reveal({ children, delay = 0, y = 18, blur = false, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const M = motion[as] || motion.div
  if (reduce) return <div className={className}>{children}</div>
  return (
    <M
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </M>
  )
}

// Scroll-linked parallax. Element drifts as it moves through the viewport.
export function Parallax({ children, offset = 60, className = '' }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  )
}

// Thin top progress bar tied to page scroll.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-gradient-to-r from-aurora via-signal to-signal-deep"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

// Words resolve blur → focus, staggered.
export function TextGenerate({ text, className = '', delay = 0, stagger = 0.09 }) {
  const reduce = useReducedMotion()
  const words = String(text).split(' ')
  if (reduce) return <span className={className}>{text}</span>
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <motion.span
            aria-hidden="true"
            className="inline-block"
            initial={{ opacity: 0, filter: 'blur(12px)', y: 8 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.6, delay: delay + i * stagger, ease: EASE }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </span>
  )
}

// Count-up number, triggers on scroll-in.
export function CountUp({ to, decimals = 0, prefix = '', suffix = '', className = '' }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) {
      setVal(to)
      return
    }
    const controls = animate(0, to, { duration: 1.5, ease: EASE, onUpdate: (v) => setVal(v) })
    return () => controls.stop()
  }, [inView, to, reduce])

  const fmt = (v) => (decimals ? v.toFixed(decimals).replace('.', ',') : Math.round(v).toLocaleString('fr-FR'))

  return (
    <span ref={ref} className={className}>
      {prefix}
      {fmt(val)}
      {suffix}
    </span>
  )
}

export { motion, useReducedMotion }
