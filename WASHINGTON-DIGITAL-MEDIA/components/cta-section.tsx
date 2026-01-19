"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Calendar } from "lucide-react"
import { useMagneticButton } from "@/hooks/use-magnetic-button"

export function CTASection() {
  const { buttonRef, mousePosition, handleMouseMove, handleMouseLeave } = useMagneticButton(0.3)
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-24 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#1a1a1a] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E31E24] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E31E24] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#E31E24] text-sm font-semibold uppercase tracking-wider mb-4 block"
        >
          Are you ready to join us?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance"
        >
          {"We're"} reshaping the landscape of <span className="text-[#E31E24]">video production</span> companies.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
        >
          {"Let's discuss how video and digital marketing can 10x your lead generation"}
        </motion.p>

        {/* Magnetic Button */}
        <div className="relative inline-block">
          {/* Pulsing ring */}
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 rounded-lg border-2 border-[#E31E24]"
          />

          <motion.button
            ref={buttonRef}
            onMouseMove={shouldReduceMotion ? undefined : handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={shouldReduceMotion ? {} : { x: mousePosition.x, y: mousePosition.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-[#E31E24] hover:bg-[#c41920] text-white font-semibold px-10 py-5 rounded-lg text-lg inline-flex items-center gap-3 transition-colors"
          >
            <Calendar className="w-6 h-6" />
            Get Started
          </motion.button>
        </div>

        {/* Trust indicators */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-white/50 text-sm"
        >
          Free 30-minute consultation • No obligation • Response within 24 hours
        </motion.p>
      </div>
    </motion.section>
  )
}
