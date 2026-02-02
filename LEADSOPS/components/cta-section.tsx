"use client"

import React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { HackerText } from "./hacker-text"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section 
      ref={ref} 
      id="waitlist"
      className="relative py-24 md:py-32 px-4 bg-[#050505] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD60A]/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-full text-[#00F0FF] font-mono text-sm mb-8">
            <HackerText text=">>> UNIRSE_A_LA_REVOLUCIÓN >>>" delay={300} />
          </span>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-white">O construyes,</span>{" "}
            <span className="bg-gradient-to-r from-[#00F0FF] to-[#FFD60A] bg-clip-text text-transparent">
              o eres construido.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Tienes las herramientas para construir (<span className="text-[#00F0FF]">Buskode</span>) y el mapa para dirigir (<span className="text-[#FFD60A]">Buskero</span>).{" "}
            La secuencia ha comenzado.{" "}
            <span className="text-white font-semibold">¿Qué te falta? Dar el paso.</span>
          </p>
        </motion.div>

        {/* Email form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00F0FF] to-[#FFD60A] rounded-full opacity-30 group-hover:opacity-50 blur transition-opacity duration-300" />
                <div className="relative flex items-center bg-[#0a0a0a] rounded-full border border-white/10 p-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none font-mono"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-[#00F0FF] text-[#050505] font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <span>Unirme a la Revolución</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-2xl p-8 max-w-md mx-auto"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#00F0FF] mb-2">¡Estás dentro!</h3>
              <p className="text-gray-400">
                Te avisaremos cuando lancemos. Prepárate para despegar.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00F0FF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sin spam, prometido
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00F0FF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Acceso anticipado
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00F0FF]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Contenido exclusivo
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#FFD60A]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Antes que el contador llegue a cero
          </span>
        </motion.div>
      </div>
    </section>
  )
}
