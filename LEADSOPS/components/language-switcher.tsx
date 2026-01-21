'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => setIsOpen(!isOpen)

    const handleSelect = (lang: 'es' | 'en') => {
        setLanguage(lang)
        setIsOpen(false)
    }

    return (
        <div className="fixed top-6 right-6 z-50">
            <div className="relative">
                {/* Trigger Button - Square & Lighter Gradient */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleOpen}
                    className={`
                        flex items-center justify-center w-10 h-10 rounded-xl
                        bg-gradient-to-br from-blue-400 to-cyan-400 hover:from-blue-300 hover:to-cyan-300
                        border border-white/20
                        text-white font-bold text-sm tracking-wide
                        shadow-lg shadow-blue-400/30
                        transition-all duration-300
                    `}
                >
                    {language.toUpperCase()}
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-14 right-0 w-full min-w-[140px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-1 space-y-1">
                                <button
                                    onClick={() => handleSelect('es')}
                                    className={`
                                        w-full px-4 py-2.5 text-left rounded-lg transition-colors
                                        ${language === 'es' ? 'bg-[#2563EB]/20 text-[#2563EB] font-bold' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                                    `}
                                >
                                    Español
                                </button>
                                <button
                                    onClick={() => handleSelect('en')}
                                    className={`
                                        w-full px-4 py-2.5 text-left rounded-lg transition-colors
                                        ${language === 'en' ? 'bg-[#2563EB]/20 text-[#2563EB] font-bold' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                                    `}
                                >
                                    English
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
