"use client"

import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/gradient-text"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { Building2, Briefcase, ShoppingBag, Stethoscope, Scale, Utensils, MessageCircle } from "lucide-react"

const projects = [
  {
    title: "Landing Imobiliária High-Ticket",
    tag: "Framer Motion",
    metric: "Leads +120%",
    icon: Building2,
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Site de Vendas Corporativo",
    tag: "Next.js + Conversão",
    metric: "Vendas +85%",
    icon: ShoppingBag,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Landing Page Clínica Médica",
    tag: "Performance",
    metric: "Agendamentos +200%",
    icon: Stethoscope,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Site Institucional Escritório Advocacia",
    tag: "Credibilidade",
    metric: "Consultas +150%",
    icon: Scale,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Landing Restaurante Premium",
    tag: "Framer Motion",
    metric: "Reservas +90%",
    icon: Utensils,
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Site Institucional Corporativo",
    tag: "Core Web Vitals 100",
    metric: "Credibilidade Enterprise",
    icon: Briefcase,
    gradient: "from-pink-500/20 to-purple-500/20",
  },
]

export function PortfolioSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              O que construímos (e o que <GradientText>você</GradientText> vai construir)
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Não é teoria. É o mesmo stack tecnológico que usamos para clientes corporativos.
              Você vai criar <span className="text-white font-medium">Landing Pages e Sites Institucionais</span> de alta conversão.
              Todos os formulários redirecionam para <span className="text-cyan-400 font-medium inline-flex items-center gap-1"><MessageCircle className="w-4 h-4" />WhatsApp</span> automaticamente.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.div
                className="group relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" 
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Project visual */}
                <div className={`relative aspect-video bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center`}>
                  <project.icon className="w-16 h-16 text-white/80" />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Tag */}
                  <Badge className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    {project.tag}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 font-medium">
                    {project.metric}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
