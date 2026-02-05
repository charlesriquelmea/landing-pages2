"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GradientText } from "@/components/gradient-text"
import { Rocket, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useContactModal } from "@/components/contact-modal-context"

export function CtaSection() {
  const { openModal } = useContactModal()
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with gradient and noise texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-purple-500/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-transparent rounded-full blur-[150px]" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">
              Pare de <GradientText>alugar</GradientText> sua presença digital.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              Torne-se <span className="text-white">dono</span> da sua tecnologia.
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-zinc-400 mb-10">
              Vagas limitadas. Próxima turma inicia em 7 dias.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center gap-6">
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-12 py-8 text-xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]"
                  onClick={openModal}
                >
                  <Rocket className="w-6 h-6 mr-3" />
                  Começar Agora — R$ 997
                </Button>
              </motion.div>

              <div className="flex items-center gap-2 text-zinc-400">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span>Garantia de 30 dias ou seu dinheiro de volta</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
