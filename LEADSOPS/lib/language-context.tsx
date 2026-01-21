'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, Language, TranslationState } from './translations'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: TranslationState
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('es')

    useEffect(() => {
        document.documentElement.lang = language
        document.title = translations[language].meta.title
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', translations[language].meta.description)
        }
    }, [language])

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
