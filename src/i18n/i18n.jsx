import { createContext, useContext, useEffect, useState } from 'react'

// Lightweight bilingual layer. Every string is authored inline as t(fr, en) so
// there is no separate dictionary to drift out of sync. FR is the default.
const I18nCtx = createContext({ lang: 'fr', setLang: () => {}, t: (fr) => fr })

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'fr'
    } catch {
      return 'fr'
    }
  })

  const setLang = (l) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {}
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = (fr, en) => (lang === 'en' && en != null ? en : fr)

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>
}

export const useI18n = () => useContext(I18nCtx)
