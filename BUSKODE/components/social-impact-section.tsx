"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Globe, Code, TrendingUp } from "lucide-react"

function AnimatedCounter({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, target, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

function LatamMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const cities = [
    { name: "CDMX", x: 25, y: 35 },
    { name: "São Paulo", x: 70, y: 70 },
    { name: "Buenos Aires", x: 55, y: 85 },
    { name: "Bogotá", x: 45, y: 45 },
    { name: "Lima", x: 35, y: 58 },
    { name: "Santiago", x: 45, y: 82 },
    { name: "Asunción", x: 58, y: 75 },
    { name: "Montevideo", x: 60, y: 83 },
  ]

  return (
    <div ref={ref} className="relative w-full aspect-[4/5] max-w-md mx-auto">
      {/* Simplified LATAM outline */}
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
        <path
          d="M25 15 L35 12 L45 15 L50 20 L48 30 L45 35 L50 40 L48 50 L45 55 L50 60 L55 65 L60 70 L65 72 L70 70 L72 75 L68 80 L60 85 L55 88 L50 92 L45 90 L42 85 L40 80 L35 75 L30 70 L28 65 L25 60 L22 55 L25 50 L28 45 L25 40 L22 35 L25 30 L28 25 L25 20 Z"
          fill="none"
          stroke="#00F0FF"
          strokeWidth="0.5"
        />
      </svg>

      {/* Animated city dots */}
      {cities.map((city, index) => (
        <motion.div
          key={city.name}
          className="absolute"
          style={{ left: `${city.x}%`, top: `${city.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-[#00F0FF] rounded-full" />
            <div className="absolute inset-0 w-3 h-3 bg-[#00F0FF] rounded-full animate-ping opacity-30" />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-gray-400 whitespace-nowrap hidden md:block">
              {city.name}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        {cities.slice(0, -1).map((city, index) => {
          const nextCity = cities[index + 1]
          return (
            <motion.line
              key={city.name}
              x1={city.x}
              y1={city.y}
              x2={nextCity.x}
              y2={nextCity.y}
              stroke="#00F0FF"
              strokeWidth="0.2"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
              transition={{ delay: index * 0.15 + 1, duration: 0.8 }}
            />
          )
        })}
      </svg>
    </div>
  )
}

const stats = [
  { icon: Users, value: 12847, suffix: "+", label: "Estudiantes Activos" },
  { icon: Globe, value: 18, suffix: "", label: "Países en LATAM" },
  { icon: Code, value: 500000, suffix: "", label: "Meta 2035" },
  { icon: TrendingUp, value: 340, suffix: "%", label: "Crecimiento Anual" },
]

export function SocialImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-[#050505] via-[#0a0808] to-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-white">Misión 2035:</span>{" "}
            <span className="text-[#00F0FF]">El Ecosistema de 500,000 Nodos</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            No te unes a un curso.{" "}
            <span className="text-white font-semibold">Te unes a una resistencia económica.</span>{" "}
            El talento en LATAM está distribuido uniformemente, pero estamos bloqueados por barreras que ya no existen.
          </p>
          <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed mt-4">
            Queremos impactar a <span className="text-[#00F0FF]">500,000 familias</span> para evitar el &quot;Feudalismo Digital&quot; 
            y crear una <span className="text-[#FFD60A]">Simbiosis Humana</span> real.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <LatamMap />
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative group"
              >
                {/* Glassmorphism card */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#00F0FF]/30 transition-all duration-300 overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <stat.icon className="w-6 h-6 text-[#00F0FF] mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
