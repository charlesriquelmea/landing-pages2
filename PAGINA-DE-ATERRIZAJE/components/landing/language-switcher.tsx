"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// 1. Definimos los componentes de las banderas para que se vean en cualquier PC
const FlagES = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className="w-5 h-3.5 rounded-[2px] shadow-sm object-cover">
    <rect width="750" height="500" fill="#c60b1e"/>
    <rect width="750" height="250" y="125" fill="#ffc400"/>
  </svg>
)

const FlagUS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1235 650" className="w-5 h-3.5 rounded-[2px] shadow-sm object-cover">
    <rect width="1235" height="650" fill="#b22234"/>
    <path d="M0,50H1235M0,150H1235M0,250H1235M0,350H1235M0,450H1235M0,550H1235" stroke="#fff" strokeWidth="50"/>
    <rect width="494" height="350" fill="#3c3b6e"/>
  </svg>
)

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Cerrar al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // 2. Usamos los componentes SVG en lugar de emojis de texto
  const languages = [
    { code: "es" as const, label: "Español", flag: <FlagES /> },
    { code: "en" as const, label: "English", flag: <FlagUS /> },
  ]

  return (
    <div className="absolute top-6 right-6 z-50" ref={ref}>
      {/* Botón Principal (Estilo Pastilla) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-full 
          backdrop-blur-xl border transition-all duration-300 shadow-lg
          ${isOpen 
            ? "bg-white text-[#0066FF] border-white scale-105" 
            : "bg-white/10 text-white border-white/20 hover:bg-white/20"
          }
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-bold tracking-wide">
          {language === "es" ? "ES" : "EN"}
        </span>
      </motion.button>

      {/* Desplegable con Banderas SVG */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 mt-2 min-w-[160px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`
                    w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm
                    ${language === lang.code
                      ? "bg-white/20 text-white font-bold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    {/* Renderizamos el componente SVG aquí */}
                    <span className="flex items-center justify-center">{lang.flag}</span>
                    <span className="font-medium">{lang.label}</span>
                  </div>
                  
                  {language === lang.code && <Check className="h-4 w-4 text-emerald-400" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}