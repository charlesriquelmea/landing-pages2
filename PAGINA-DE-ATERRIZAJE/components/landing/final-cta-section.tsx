"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, Check, Shield, Headphones, Code2, FileText, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

interface FinalCTASectionProps {
  onOpenContact: (source: string) => void
}

export function FinalCTASection({ onOpenContact }: FinalCTASectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const badges = [
    { icon: Shield, text: t("cta.trust1") },
    { icon: Headphones, text: t("cta.trust2") },
    { icon: Code2, text: "Next.js + OpenAI" },
    { icon: FileText, text: t("cta.trust3") },
    { icon: Gift, text: "100% Tuyo" },
  ]

  return (
    <section
      ref={ref}
      // AJUSTE FINAL: py-16 md:py-24 (La medida aprobada)
      className="relative py-16 md:py-24 bg-gradient-to-br from-[#0A0A0A] via-[#1a0a2e] to-[#0d1b3e] text-white overflow-hidden"
    >
      {/* Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main content */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 tracking-tight leading-tight"
            animate={
              isInView
                ? {
                    textShadow: [
                      "0 0 20px rgba(0,217,255,0.3)",
                      "0 0 40px rgba(0,217,255,0.5)",
                      "0 0 20px rgba(0,217,255,0.3)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            {t("cta.title")}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("cta.subtitle")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <Button
              size="lg"
              onClick={() => onOpenContact("final-cta")}
              className="h-20 px-12 text-xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF4545] hover:from-[#FF7B45] hover:to-[#FF5555] text-white shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 rounded-2xl animate-pulse hover:animate-none"
            >
              <Rocket className="mr-3 h-6 w-6" />
              {t("cta.button")}
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-white/80">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}