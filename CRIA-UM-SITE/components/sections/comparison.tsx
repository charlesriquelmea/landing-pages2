"use client"

import { GradientText } from "@/components/gradient-text"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Check, X, Snail, Zap, Lock, Rocket, Package, Palette, DollarSign, Search } from "lucide-react"

const comparisonData = [
  {
    feature: "Velocidade",
    traditional: { text: "Lento (3-5s)", icon: Snail, bad: true },
    vibeCoding: { text: "Instantâneo (<1s)", icon: Zap, good: true },
  },
  {
    feature: "Propriedade do Código",
    traditional: { text: "Zero", icon: X, bad: true },
    vibeCoding: { text: "100% Seu", icon: Check, good: true },
  },
  {
    feature: "Escalabilidade",
    traditional: { text: "Limitada", icon: Lock, bad: true },
    vibeCoding: { text: "Infinita", icon: Rocket, good: true },
  },
  {
    feature: "Customização",
    traditional: { text: "Templates", icon: Package, bad: true },
    vibeCoding: { text: "Design Único", icon: Palette, good: true },
  },
  {
    feature: "Custo Mensal",
    traditional: { text: "R$ 200-500/mês", icon: X, bad: true },
    vibeCoding: { text: "R$ 0 (só hosting)", icon: DollarSign, good: true },
  },
  {
    feature: "SEO",
    traditional: { text: "Básico", icon: X, bad: true },
    vibeCoding: { text: "Otimizado (Core Web Vitals)", icon: Search, good: true },
  },
]

export function ComparisonSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              Por que construtores tradicionais <GradientText>não entregam</GradientText> resultados Enterprise
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
                <div className="p-4 lg:p-6">
                  <span className="text-zinc-400 font-medium">Recurso</span>
                </div>
                <div className="p-4 lg:p-6 text-center border-x border-white/10">
                  <span className="text-zinc-400 font-medium">Wix/WordPress</span>
                </div>
                <div className="p-4 lg:p-6 text-center">
                  <span className="text-cyan-400 font-semibold">Vibe Coding</span>
                </div>
              </div>

              {/* Rows */}
              {comparisonData.map((row, index) => (
                <div 
                  key={row.feature} 
                  className={`grid grid-cols-3 ${index !== comparisonData.length - 1 ? 'border-b border-white/10' : ''}`}
                >
                  <div className="p-4 lg:p-6 flex items-center">
                    <span className="text-white font-medium">{row.feature}</span>
                  </div>
                  <div className="p-4 lg:p-6 flex items-center justify-center gap-2 border-x border-white/10 bg-red-500/5">
                    <row.traditional.icon className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 text-sm lg:text-base">{row.traditional.text}</span>
                  </div>
                  <div className="p-4 lg:p-6 flex items-center justify-center gap-2 bg-cyan-500/5">
                    <row.vibeCoding.icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 text-sm lg:text-base">{row.vibeCoding.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
