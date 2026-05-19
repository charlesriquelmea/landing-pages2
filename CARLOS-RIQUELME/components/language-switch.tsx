'use client'

import { useLanguage } from '@/lib/i18n'

const nextLang: Record<string, string> = { es: 'PT', pt: 'EN', en: 'ES' }
const nextLangKey: Record<string, string> = { es: 'pt', pt: 'en', en: 'es' }
const ariaLabels: Record<string, string> = {
  es: 'Mudar para Português',
  pt: 'Switch to English',
  en: 'Cambiar a Español',
}

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLangKey[language] as any)}
      className="rounded-lg border border-foreground/20 px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground"
      aria-label={ariaLabels[language]}
    >
      {nextLang[language]}
    </button>
  )
}
