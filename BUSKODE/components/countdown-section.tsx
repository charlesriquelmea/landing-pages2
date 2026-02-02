"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { HackerText } from "./hacker-text"

// Launch date: Set to 1,000 days from a base date (e.g., Jan 1, 2024)
const LAUNCH_DATE = new Date('2024-01-01')
const TARGET_DATE = new Date(LAUNCH_DATE.getTime() + (1000 * 24 * 60 * 60 * 1000))

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date()
  const difference = TARGET_DATE.getTime() - now.getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  }
}

function CountdownDigit({ value, label }: { value: number; label: string }) {
  const displayValue = value.toString().padStart(2, '0')
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#FF3333]/20 blur-xl rounded-lg" />
        
        {/* Digit container */}
        <div className="relative bg-[#0a0a0a] border border-[#FF3333]/30 rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
          <span 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FF3333] font-mono tracking-wider"
            style={{ 
              textShadow: '0 0 20px rgba(255, 51, 51, 0.5), 0 0 40px rgba(255, 51, 51, 0.3)'
            }}
          >
            {displayValue}
          </span>
        </div>
      </div>
      <span className="text-xs md:text-sm text-gray-500 font-mono uppercase tracking-wider mt-2">
        {label}
      </span>
    </div>
  )
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#050505] overflow-hidden">
      {/* Red/danger gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF3333]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD60A]/5 rounded-full blur-3xl" />
      </div>

      {/* Scanlines effect */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 bg-[#FF3333]/10 border border-[#FF3333]/30 rounded-full text-[#FF3333] font-mono text-sm">
            <HackerText text=">>> INICIANDO_SECUENCIA >>>" delay={200} />
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            La Última Economía{" "}
            <span className="bg-gradient-to-r from-[#FF3333] to-[#FFD60A] bg-clip-text text-transparent">
              ha comenzado.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Según <span className="text-white">Emad Mostaque</span> (The Last Economy), la ventana de oportunidad para reclamar tu lugar en la nueva era tiene{" "}
            <span className="text-[#FF3333] font-semibold">fecha de caducidad</span>.
          </p>
        </motion.div>

        {/* Countdown display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 md:gap-4 p-4 md:p-6 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-2xl border border-[#FF3333]/20">
            <span className="text-[#FF3333] font-mono text-lg md:text-2xl mr-2">[</span>
            
            <CountdownDigit value={timeLeft.days} label="días" />
            <span className="text-2xl md:text-4xl text-[#FF3333] font-mono animate-pulse">:</span>
            <CountdownDigit value={timeLeft.hours} label="hrs" />
            <span className="text-2xl md:text-4xl text-[#FF3333] font-mono animate-pulse">:</span>
            <CountdownDigit value={timeLeft.minutes} label="min" />
            <span className="text-2xl md:text-4xl text-[#FF3333] font-mono animate-pulse">:</span>
            <CountdownDigit value={timeLeft.seconds} label="seg" />
            
            <span className="text-[#FF3333] font-mono text-lg md:text-2xl ml-2">]</span>
          </div>
        </motion.div>

        {/* Urgency message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gray-400 leading-relaxed mb-8">
            El reloj no se detiene para nadie en LATAM.{" "}
            <span className="text-white font-semibold">O aprendes a construir sobre el ruido, o te conviertes en parte del ruido.</span>
          </p>

          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FF3333]/10 to-[#FFD60A]/10 rounded-lg border border-white/10">
            <p className="text-sm font-mono text-gray-300">
              <span className="text-[#FF3333]">1,000 días</span> es el tiempo que tienes para pasar de{" "}
              <span className="text-gray-500 line-through">espectador</span>{" "}
              <span className="text-[#00F0FF]">arquitecto de la IA</span>{" "}
              antes de que el sistema se cierre.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
