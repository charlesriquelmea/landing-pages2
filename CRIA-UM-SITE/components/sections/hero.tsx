"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/gradient-text"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Rocket, Play, Code, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useContactModal } from "@/components/contact-modal-context"

export function HeroSection() {
  const { openModal } = useContactModal()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <ScrollReveal>
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-2 text-sm">
                <Rocket className="w-4 h-4 mr-2" />
                Método usado por nossa Software Factory
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-balance">
                Aprenda a Criar Landing Pages de Alta Conversão{" "}
                <GradientText>como Nike, TikTok e Netflix</GradientText>.{" "}
                <span className="text-white">Sem Programar, em Menos de 1 Hora.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                Domine Next.js + Framer Motion com IA. A Stack das Empresas Fortune 500, Agora Acessível para Criadores, Freelancers, Profissionais Independentes, Empreendedores e Pequenos Negócios.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                  onClick={openModal}
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Começar Agora — R$ 97
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
                  asChild
                >
                  <a href="#projetos">
                    <Play className="w-5 h-5 mr-2" />
                    Ver Projetos Reais
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual - 40% */}
          <ScrollReveal delay={0.4} className="lg:col-span-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Mock editor */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-zinc-400">v0.dev — prompt.tsx</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 text-zinc-500 mb-2">
                    <Code className="w-4 h-4" />
                    <span>// Prompt para v0</span>
                  </div>
                  <div className="space-y-1">
                    <p><span className="text-purple-400">const</span> <span className="text-cyan-400">prompt</span> = {"`"}</p>
                    <p className="pl-4 text-green-400">{"Crie uma landing page"}</p>
                    <p className="pl-4 text-green-400">{"moderna com hero section,"}</p>
                    <p className="pl-4 text-green-400">{"animações suaves e"}</p>
                    <p className="pl-4 text-green-400">{"design glassmorphism..."}</p>
                    <p>{"`"};</p>
                  </div>
                </div>

                {/* Preview indicator */}
                <div className="border-t border-white/10 px-6 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="text-sm text-zinc-300">Gerando interface Enterprise...</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 backdrop-blur-xl bg-cyan-500/20 border border-cyan-500/30 rounded-xl px-4 py-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-cyan-400 text-sm font-medium">Next.js 14</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 backdrop-blur-xl bg-purple-500/20 border border-purple-500/30 rounded-xl px-4 py-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-purple-400 text-sm font-medium">Framer Motion</span>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
