'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Flame, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Instalamos un Sistema Garantizado de Leads y Citas para Ti.'

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-radial from-[#2563EB]/20 via-[#0F172A] to-[#0F172A]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      </div>

      {/* Animated Glow Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#2563EB]/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#06B6D4]/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB]/20 to-[#06B6D4]/20 border border-[#2563EB]/30 rounded-full px-4 py-2"
            >
              <Flame className="w-4 h-4 text-[#22C55E]" />
              <span className="text-sm font-medium text-slate-200">
                500+ Negocios Creciendo con LeadOps
              </span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-balance"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#06B6D4] bg-clip-text text-transparent">
                Deja de Perseguir Clientes.
              </span>
              <br />
              <span className="text-white">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-16 bg-[#2563EB] ml-2 align-middle"
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl text-pretty"
            >
              El OS de Crecimiento todo-en-uno para HVAC, Plomeros y Techadores.
              Capturamos, calificamos y agendamos citas 24/7.
              <span className="text-[#22C55E] font-semibold"> Solo pagas por resultados.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Button
                  size="lg"
                  onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300 group"
                >
                  Verificar Disponibilidad en Mi Área
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/30 bg-transparent hover:bg-white hover:text-[#0F172A] text-white font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300"
              >
                <Calculator className="mr-2 w-5 h-5" />
                Comenzar Ahora
              </Button>
            </motion.div>

            {/* Social Proof Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8 border-t border-slate-700/50"
            >
              <p className="text-sm text-slate-400 mb-4">
                Confiado por 500+ profesionales en TX, FL, CA
              </p>
              <div className="flex gap-8 items-center grayscale opacity-60">
                {/* Logo placeholders - using text for demo */}
                <div className="text-2xl font-bold text-slate-400">HVAC+</div>
                <div className="text-2xl font-bold text-slate-400">ProPlumb</div>
                <div className="text-2xl font-bold text-slate-400">RoofTech</div>
                <div className="text-2xl font-bold text-slate-400">ElitePro</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Phone Mockup */}
              <div className="relative w-[300px] h-[600px] mx-auto bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl overflow-hidden">
                {/* Screen Content */}
                <div className="absolute inset-2 bg-[#0F172A] rounded-[2.5rem] overflow-hidden">
                  {/* Notification Card */}
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 20, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="m-4 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-2xl p-4 shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl">
                        📱
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold text-sm mb-1">
                          Nueva Cita Calificada
                        </div>
                        <div className="text-white/90 text-xs space-y-1">
                          <div>🔧 HVAC Repair</div>
                          <div>📅 Mañana 2:00 PM</div>
                          <div>💰 Est. Value: $850</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Dashboard Blur Background */}
                  <div className="mt-4 p-4 space-y-3 opacity-70 blur-sm">
                    <div className="bg-slate-800/50 h-16 rounded-lg" />
                    <div className="bg-slate-800/50 h-24 rounded-lg" />
                    <div className="bg-slate-800/50 h-20 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -left-8 top-32 bg-[#22C55E] text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm"
              >
                ✓ Calificado
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute -right-8 bottom-32 bg-[#06B6D4] text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm"
              >
                +127% ROI
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
