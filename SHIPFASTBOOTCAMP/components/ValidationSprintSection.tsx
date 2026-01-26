"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Check, Play, Terminal, Code2, Zap, ArrowRight, Rocket, Sun, Palmtree } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
// Importamos dinámicamente para evitar errores de hidratación
import dynamic from 'next/dynamic'

import { smoothScrollTo } from "@/lib/smoothScroll"

// Importación dinámica con SSR desactivado para las partículas
const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false
})

interface ValidationSprintSectionProps {
  onOpenForm?: () => void;
}

export default function ValidationSprintSection({ onOpenForm }: ValidationSprintSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const benefits = ["Prototipado Funcional en horas", "Testeo de MVP en tiempo real", "Iteración técnica inmediata"]

  const codeLines = [
    { text: "import { MVP } from '@shipfast/core'", color: "text-orange-400" },
    { text: "import { validate } from '@lean/startup'", color: "text-orange-400" },
    { text: "", color: "" },
    { text: "const sprint = new MVP({", color: "text-cyan-300" },
    { text: "  idea: 'Tu idea de negocio',", color: "text-emerald-400" },
    { text: "  location: 'Orlando, FL',", color: "text-emerald-400" },
    { text: "  timeline: '54 horas',", color: "text-emerald-400" },
    { text: "  team: 'Latino Power'", color: "text-emerald-400" },
    { text: "})", color: "text-cyan-300" },
    { text: "", color: "" },
    { text: "await sprint.build()", color: "text-pink-400" },
    { text: "await sprint.launch() // Vamos!", color: "text-pink-400" },
  ]

  const scrollToForm = () => {
    smoothScrollTo('order-form', 2000)
  }

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Dynamic Florida-inspired gradient background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40" />
      </motion.div>

      {/* Animated sun rays */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-30">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-48 bg-gradient-to-t from-yellow-400/0 to-yellow-400/60 origin-bottom"
              style={{ transform: `rotate(${i * 30}deg) translateX(-50%)` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating palm trees */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -left-20 bottom-20 text-white/10"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Palmtree size={200} />
        </motion.div>
        <motion.div
          className="absolute -right-10 top-40 text-white/10"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Palmtree size={150} />
        </motion.div>
      </div>

      {/* --- AQUÍ CARGAMOS LAS PARTÍCULAS DE FORMA SEGURA --- */}
      <ParticlesBackground />
      {/* ---------------------------------------------------- */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <Sun className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">Orlando, Florida</span>
            <span className="text-white/60">|</span>
            <span className="text-orange-300 font-medium">Edicion Latina</span>
            <img src="/usa-flag-emoji.jpg" alt="USA" className="w-6 h-4 rounded" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500/30 to-pink-500/30 backdrop-blur-sm border border-orange-400/40 rounded-full"
            >
              <Code2 className="w-5 h-5 text-orange-300" />
              <span className="text-orange-100 text-sm font-semibold tracking-wide">Developer In-House</span>
              <Rocket className="w-4 h-4 text-pink-300" />
            </motion.div>

            {/* Headline */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                No solo ideamos,{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400">
                    construimos
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </span>
                : Sprint de Validacion con Developer in-house
              </h2>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                Olvidate de los post-its. Tu equipo tendra un{" "}
                <span className="text-yellow-300 font-semibold">Senior Developer</span> asignado para hacer{" "}
                <span className="px-2 py-1 bg-white/10 rounded-lg text-orange-300 font-mono font-bold">
                  'Live Coding'
                </span>{" "}
                y tangibilizar tu MVP mientras validas la idea.
              </p>
            </div>

            {/* Benefits List */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-5"
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-shadow"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </motion.div>
                  <span className="text-white text-xl font-semibold">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-4"
            >
              <Button
                size="lg"
                onClick={scrollToForm}
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 hover:from-yellow-400 hover:via-orange-400 hover:to-pink-400 text-white font-bold px-10 py-7 text-xl rounded-2xl shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 border-2 border-white/20"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <Zap className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Reservar mi Sprint Tecnico</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform relative z-10" />
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>5 cupos disponibles</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>Comunidad Latina</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>100% en Espanol</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative perspective-1000"
          >
            {/* Glowing backdrop */}
            <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/30 via-pink-500/30 to-purple-500/30 rounded-[40px] blur-2xl" />
            <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-3xl blur-xl" />

            {/* Code Editor */}
            <motion.div
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Editor Header */}
              <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-slate-800/90 to-slate-900/90 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full bg-red-500 cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full bg-yellow-500 cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full bg-green-500 cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <div className="flex items-center gap-2 ml-3 px-3 py-1.5 bg-slate-800 rounded-lg">
                    <Code2 className="w-4 h-4 text-orange-400" />
                    <span className="text-white/80 text-sm font-mono">orlando-sprint.ts</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <motion.div
                    className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg text-green-400 text-xs font-bold flex items-center gap-2 border border-green-500/30"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    LIVE
                  </motion.div>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm md:text-base">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.06 }}
                    className="flex items-center gap-4 py-1 hover:bg-white/5 rounded px-2 -mx-2 transition-colors"
                  >
                    <span className="text-slate-600 w-8 text-right select-none font-light">{index + 1}</span>
                    <span className={`${line.color || "text-white"}`}>{line.text || "\u00A0"}</span>
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.div
                  className="flex items-center gap-4 py-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-slate-600 w-8 text-right select-none font-light">13</span>
                  <motion.span
                    className="w-2.5 h-5 bg-orange-400"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Live Preview Card - Florida themed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-10 -right-6 md:-right-12 w-72 md:w-80"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-orange-200"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                {/* Preview Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-50 to-pink-50 border-b border-orange-100">
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-green-500" />
                    <span className="text-slate-700 text-sm font-bold">Live Preview</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-white px-2 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    localhost:3000
                  </div>
                </div>

                {/* Preview Content */}
                <div className="p-5 bg-gradient-to-br from-orange-50 via-white to-pink-50">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Sun className="w-5 h-5 text-orange-500" />
                      <div className="h-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full w-32" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 bg-slate-200 rounded-full w-full" />
                      <div className="h-2.5 bg-slate-200 rounded-full w-4/5" />
                      <div className="h-2.5 bg-slate-200 rounded-full w-3/5" />
                    </div>
                    <div className="flex gap-3 mt-5">
                      <div className="h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex-1 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">Start Sprint</span>
                      </div>
                      <div className="h-10 bg-slate-100 rounded-xl w-24 flex items-center justify-center">
                        <span className="text-slate-500 text-xs font-medium">Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Terminal Badge - Success */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -top-6 -left-6 md:-left-10"
            >
              <motion.div
                className="bg-gradient-to-r from-slate-900 to-slate-800 border-2 border-green-500/50 rounded-xl px-5 py-3 shadow-2xl shadow-green-500/20"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-mono text-sm font-bold">Build Succeeded</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Check className="w-5 h-5 text-green-400" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Florida Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="absolute top-1/2 -right-4 md:-right-8"
            >
              <motion.div
                className="bg-gradient-to-br from-orange-500 to-pink-500 p-3 rounded-full shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sun className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}