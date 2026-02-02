"use client"

import { motion } from "framer-motion"
import { FloatingCode } from "./floating-code"
import { MagneticButton } from "./magnetic-button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505] to-[#0a0f0f]" />
      
      {/* Floating code background */}
      <FloatingCode />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-[#00F0FF] font-mono text-sm md:text-base tracking-[0.3em] uppercase">
            {'<'} Buskode {'/>'} + {'<'} Buskero {'/>'} 
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className="text-white">El Empleo Murió.</span>
          <br />
          <span className="bg-gradient-to-r from-[#00F0FF] to-[#FFD60A] bg-clip-text text-transparent">
            Larga Vida al Creador.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          El sistema te dijo que un título y 5 años de experiencia te asegurarían el futuro.{" "}
          <span className="text-[#FFD60A] font-semibold">Te mintieron.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Estamos entrando en la <span className="text-[#00F0FF] font-semibold">Economía Post-Laboral</span>, donde vender tu tiempo por dinero es un modelo de negocio en bancarrota.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white font-semibold mb-4"
        >
          Nosotros te entregamos las llaves de la nueva economía <span className="text-[#00F0FF]">hoy</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-white font-semibold mb-8"
        >
          De empleado prescindible a <span className="text-[#FFD60A]">Dueño del Sistema</span> en 6 meses. Sin permiso.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <MagneticButton href="#waitlist">
            Iniciar Secuencia de Despegue
            <span className="text-xl" role="img" aria-label="rocket">🚀</span>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[#00F0FF]/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-[#00F0FF] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
