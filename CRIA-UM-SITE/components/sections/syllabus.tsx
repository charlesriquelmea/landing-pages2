"use client"

import { GradientText } from "@/components/gradient-text"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlassCard } from "@/components/glass-card"
import { Palette, Cog, Rocket, Check, Users, RefreshCw, FileCode } from "lucide-react"

const phases = [
  {
    number: "01",
    icon: Palette,
    title: "Design com Prompts",
    color: "cyan",
    items: [
      "Masterizando v0.dev para gerar interfaces perfeitas",
      "UX/UI sem Figma: prompts que criam layouts profissionais",
      "Biblioteca de componentes shadcn/ui",
    ],
  },
  {
    number: "02",
    icon: Cog,
    title: "Lógica & Integração",
    color: "purple",
    items: [
      "Conectando Agentes de IA (OpenAI, Anthropic)",
      "Forms, APIs, Banco de Dados (Supabase)",
      "Animações com Framer Motion",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy Enterprise",
    color: "emerald",
    items: [
      "Hosting em Vercel (Edge Network global)",
      "Domínio customizado + SSL automático",
      "Analytics e Performance Monitoring",
    ],
  },
]

const extras = [
  { icon: FileCode, text: "Templates prontos (starter kits)" },
  { icon: Users, text: "Comunidade privada no Discord" },
  { icon: RefreshCw, text: "Atualizações vitalícias" },
]

export function SyllabusSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#121212]">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              O Sistema em <GradientText>3 Fases</GradientText>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 hidden md:block" />

            {phases.map((phase, index) => (
              <ScrollReveal key={phase.number} delay={index * 0.15}>
                <div className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Number indicator */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#121212] border-2 border-white/20 items-center justify-center z-10">
                    <span className="text-xl font-bold gradient-text">{phase.number}</span>
                  </div>

                  {/* Content card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <GlassCard className="p-8" hover={false}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          phase.color === 'cyan' ? 'bg-cyan-500/20' :
                          phase.color === 'purple' ? 'bg-purple-500/20' :
                          'bg-emerald-500/20'
                        }`}>
                          <phase.icon className={`w-6 h-6 ${
                            phase.color === 'cyan' ? 'text-cyan-400' :
                            phase.color === 'purple' ? 'text-purple-400' :
                            'text-emerald-400'
                          }`} />
                        </div>
                        <div>
                          <span className="text-zinc-500 text-sm font-medium">Fase {phase.number}</span>
                          <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {phase.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                              phase.color === 'cyan' ? 'text-cyan-400' :
                              phase.color === 'purple' ? 'text-purple-400' :
                              'text-emerald-400'
                            }`} />
                            <span className="text-zinc-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Extras */}
          <ScrollReveal delay={0.5}>
            <GlassCard className="p-8 mt-8" hover={false}>
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Extras inclusos:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {extras.map((extra) => (
                  <div key={extra.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <extra.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-zinc-300">{extra.text}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
