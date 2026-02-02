"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Zap, Rocket, Youtube, Code, Brain, Target, Cpu, Flame } from "lucide-react"

export function DualBrandSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [pathLength, setPathLength] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setPathLength(1), 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-white">Dos Motores.</span>{" "}
            <span className="text-[#00F0FF]">Un Solo Objetivo:</span>{" "}
            <span className="text-[#FFD60A]">Soberanía.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Para sobrevivir a la transición de 2026-2028, necesitas más que habilidades; necesitas una{" "}
            <span className="text-white font-semibold">arquitectura mental y técnica completa</span>.
          </p>
        </motion.div>

        {/* Cards container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative grid md:grid-cols-2 gap-8 md:gap-12 mt-16"
        >
          {/* Connecting line SVG - only on md+ */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-200px)] h-2 hidden md:block pointer-events-none"
            viewBox="0 0 200 10"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 5 Q 50 0, 100 5 T 200 5"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFD60A" />
                <stop offset="100%" stopColor="#00F0FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Buskero Card - La Chispa */}
          <motion.div
            variants={cardVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD60A]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-[#0a0a0a] border border-[#FFD60A]/30 rounded-2xl p-8 h-full hover:border-[#FFD60A]/60 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#FFD60A]/10 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-[#FFD60A]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#FFD60A]/70 tracking-wider">1. LA CHISPA</span>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    BUSKERO
                  </h3>
                </div>
              </div>
              
              <p className="text-sm text-[#FFD60A] font-mono mb-4">Mindset Multi-Perceptivo & Incubación de Negocios</p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Saber programar no te salvará si no sabes capturar valor. En la economía de la abundancia, el problema no es crear,{" "}
                <span className="text-white font-semibold">es vender y gestionar</span>.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#FFD60A] shrink-0 mt-0.5" />
                  <span className="text-gray-400"><span className="text-white font-medium">Incubación Ágil:</span> De la idea a la facturación sin quemar capital.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-[#FFD60A] shrink-0 mt-0.5" />
                  <span className="text-gray-400"><span className="text-white font-medium">Gestión Post-Laboral:</span> Cómo operar un negocio donde la IA es tu fuerza laboral principal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-[#FFD60A] shrink-0 mt-0.5" />
                  <span className="text-gray-400"><span className="text-white font-medium">Mindset Fundador:</span> Hackeamos tu cerebro para dejar de pensar como &quot;recurso humano&quot;.</span>
                </li>
              </ul>

              <div className="bg-[#FFD60A]/5 border border-[#FFD60A]/20 rounded-lg p-4 mb-6">
                <p className="text-[#FFD60A] text-sm font-medium italic">
                  &quot;El antídoto contra la mentalidad de empleado.&quot;
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#FFD60A] font-mono text-sm">
                <Youtube className="w-4 h-4" />
                <span className="inline-block w-2 h-2 bg-[#FFD60A] rounded-full animate-pulse" />
                YouTube Channel & Business Academy
              </div>
            </div>
          </motion.div>

          {/* Buskode Card - El Fuego */}
          <motion.div
            variants={cardVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-[#0a0a0a] border border-[#00F0FF]/30 rounded-2xl p-8 h-full hover:border-[#00F0FF]/60 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#00F0FF]/10 flex items-center justify-center">
                  <Flame className="w-7 h-7 text-[#00F0FF]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00F0FF]/70 tracking-wider">2. EL FUEGO</span>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    BUSKODE
                  </h3>
                </div>
              </div>
              
              <p className="text-sm text-[#00F0FF] font-mono mb-4">Infraestructura Vibe Coding</p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Aquí la supervivencia se convierte en dominio. La IA democratizó la sintaxis; ahora{" "}
                <span className="text-white font-semibold">cualquiera puede construir imperios digitales</span> si sabe cómo hablarle a la máquina.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                  <span className="text-gray-400"><span className="text-white font-medium">Vibe Coding:</span> El arte de orquestar flujos de trabajo, no de picar piedra.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                  <span className="text-gray-400"><span className="text-white font-medium">Stack de Libertad:</span> Next.js + n8n + AI Agents (Cursor/Windsurf).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                  <span className="text-gray-400"><span className="text-white font-medium">Poder de Fuego:</span> Construye en una tarde lo que a una agencia le tomaba un mes.</span>
                </li>
              </ul>

              <div className="bg-[#00F0FF]/5 border border-[#00F0FF]/20 rounded-lg p-4 mb-6">
                <p className="text-[#00F0FF] text-sm font-medium italic">
                  &quot;La herramienta para materializar tu visión.&quot;
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#00F0FF] font-mono text-sm">
                <Code className="w-4 h-4" />
                <span className="inline-block w-2 h-2 bg-[#00F0FF] rounded-full animate-pulse" />
                Plataforma Técnica de Ejecución
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
