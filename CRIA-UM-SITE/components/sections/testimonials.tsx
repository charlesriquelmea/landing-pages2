"use client"

import { GradientText } from "@/components/gradient-text"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlassCard } from "@/components/glass-card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marina Oliveira",
    role: "Consultoria Estratégica",
    avatar: "MO",
    content: "Economizei os R$ 20 mil que a agência cobraria. Em um fim de semana, lancei meu site com sistema de agendamento integrado.",
  },
  {
    name: "Rafael Costa",
    role: "Founder @ TechStart",
    avatar: "RC",
    content: "A qualidade é outro nível. Next.js faz meu site voar, e com Vibe Coding não precisei tocar em código complexo.",
  },
  {
    name: "Juliana Mendes",
    role: "CEO @ PixelLab",
    avatar: "JM",
    content: "Meu time agora usa esse método para entregar projetos 10x mais rápido. Virou nosso diferencial competitivo.",
  },
  {
    name: "Bruno Almeida",
    role: "Loja Online Premium",
    avatar: "BA",
    content: "Migrei do Shopify. Agora tenho controle total, performance absurda e zero mensalidade presa.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#121212]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Empreendedores que <GradientText>tomaram controle</GradientText> da sua tecnologia
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zinc-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
