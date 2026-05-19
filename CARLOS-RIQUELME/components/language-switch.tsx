'use client'

import { useLanguage } from '@/lib/i18n'

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="rounded-lg border border-foreground/20 px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground"
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
