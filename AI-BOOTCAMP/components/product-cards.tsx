"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Sparkles, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "vibe-coding",
    name: "Vibe Coding",
    tagline: "Tu stack digital completo: landing + automatizaciones + app",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    popular: false,
    forYou: [
      "Presencia digital profesional sin depender de desarrolladores",
      "Capturar y convertir leads en automático 24/7",
      "Una aplicación custom para tu proceso de negocio",
    ],
    deliverables: [
      {
        title: "Landing page profesional (v0.dev)",
        items: ["Diseño moderno y responsive", "Copy optimizado para conversión", "Formularios con tracking", "SEO básico configurado"],
        savings: "$5,000-$10,000",
      },
      {
        title: "Sistema de automatizaciones (n8n)",
        items: ["Captura y calificación de leads", "Follow-ups automáticos (email, SMS, WhatsApp)", "CRM básico integrado", "Recordatorios de agenda"],
        savings: "$3,000-$5,000",
      },
      {
        title: "1 aplicación web funcional (Lovable)",
        items: ["Cotizador interactivo personalizado", "Sistema de intake/onboarding", "Dashboard con métricas clave", "Portal de clientes simple"],
        savings: "$15,000+",
      },
    ],
    includes: [
      "40+ templates de v0 por industria",
      "Biblioteca de 50+ workflows n8n pre-hechos",
      "Boilerplates de Lovable",
      "Revisión técnica semanal en vivo",
      "Acceso a Sprint de Innovación (3 días)",
    ],
    duration: "8-10 semanas (digital) + 3 días presencial",
    cohort: "Máximo 20 personas",
    totalValue: "$23,000-$30,000",
    savings: "$20,000+",
    roi: "400-500%",
    cta: "Quiero Vibe Coding",
    badge: "Ahorra $20K+",
  },
  {
    id: "ai-productivity",
    name: "AI Productivity Studio",
    tagline: "IA para escalar marketing y operaciones sin contratar equipo",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    popular: false,
    forYou: [
      "Producir contenido de calidad 10x más rápido",
      "Automatizar tareas repetitivas de marketing y operaciones",
      "Competir con negocios más grandes usando IA",
    ],
    deliverables: [
      {
        title: "Sistema completo de prompts productivos",
        items: ["Biblioteca de 200+ prompts por rol", "Workflows de Gemini + NotebookLM", "Templates de prompts por industria"],
        savings: "$2,000-$3,000/año",
      },
      {
        title: "Automatizaciones IA + n8n",
        items: ["Generación de contenido", "Resúmenes automáticos de llamadas", "Análisis de competencia", "Respuestas automáticas personalizadas"],
        savings: "$5,000-$8,000/año",
      },
      {
        title: "Producción de assets con IA",
        items: ["Imágenes para redes y ads", "Guiones de video y copy", "Voice-overs profesionales", "Música de fondo para videos"],
        savings: "$3,000-$5,000/año",
      },
    ],
    includes: [
      "Prompt packs por 10 verticales",
      "30+ workflows n8n + IA",
      "Rutinas semanales de productividad",
      "Casos de uso reales de tu industria",
      "Acceso a Sprint de Innovación",
    ],
    duration: "8-10 semanas (digital) + 3 días presencial",
    cohort: "Máximo 20 personas",
    totalValue: "$10,000-$15,000/año",
    savings: "$8,000-$12,000",
    roi: "300-400%",
    cta: "Quiero AI Productivity",
    badge: "Productividad 10x",
  },
  {
    id: "bundle",
    name: "Bundle Completo",
    tagline: "Stack completo + IA + Sprint de Innovación VIP = Transformación digital total",
    icon: Crown,
    color: "from-amber-500 to-orange-500",
    popular: true,
    forYou: [
      "Transformar completamente tu negocio con tech + IA",
      "Máximo ahorro vs. contratar todo por separado",
      "Soporte extendido y mentoring continuo",
    ],
    deliverables: [
      {
        title: "Vibe Coding completo",
        items: ["Landing + Automatizaciones + App"],
        savings: "$23,000-$30,000",
      },
      {
        title: "AI Productivity Studio completo",
        items: ["Prompts + IA workflows + Asset production"],
        savings: "$10,000-$15,000/año",
      },
      {
        title: "Sprint de Innovación VIP (upgrade exclusivo)",
        items: ["Acceso prioritario a sesiones", "1:1 adicional con mentores (2 horas)", "Presentación de Demo Day con invitados especiales"],
        savings: "$10,000",
      },
    ],
    includes: [
      "3 meses Community Membership gratis ($600-900 valor)",
      "Auditoría 1:1 completa de tu negocio digital",
      "Soporte extendido: 12 meses vs. 3 meses estándar",
      "Kit avanzado: 100+ workflows, 300+ prompts, 50+ templates",
      "Early access: Nuevos programas y eventos",
    ],
    duration: "10 semanas (digital) + 3 días presencial intensivo",
    cohort: "Máximo 18 personas (más exclusivo)",
    totalValue: "$35,000-$45,000",
    savings: "$30,000-$40,000",
    roi: "600-800%",
    cta: "Quiero el Bundle Completo",
    badge: "Ahorra $35K+",
  },
]

export function ProductCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="programas" className="py-20 bg-gradient-to-b from-[#0F172A] to-[#0A0E1A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elige tu <span className="text-cyan-400">programa</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tres opciones diseñadas para diferentes necesidades y presupuestos. Todos incluyen el Sprint de Innovación presencial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              className={`relative group ${product.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {product.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg animate-pulse">
                    Más popular - Máximo ahorro
                  </div>
                </motion.div>
              )}

              <div className={`relative h-full bg-gradient-to-br from-[#1a1f35]/80 to-[#0d1020]/80 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${product.popular
                ? "border-amber-500/50 shadow-lg shadow-amber-500/10"
                : "border-white/10 hover:border-white/20"
                }`}>
                {/* Header */}
                <div className={`bg-gradient-to-r ${product.color} p-6`}>
                  <div className="flex items-center justify-between mb-3">
                    <product.icon className="w-10 h-10 text-white/80" />
                    <span className="text-xs text-white/80 bg-white/20 px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  <p className="text-white/80 text-sm mt-1">{product.tagline}</p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                  {/* For You */}
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-3">Para ti si quieres:</p>
                    <ul className="space-y-2">
                      {product.forYou.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-3">Lo que {product.id === "ai-productivity" ? "implementas" : "construyes"}:</p>
                    {product.deliverables.map((deliverable, i) => (
                      <div key={i} className="mb-4 last:mb-0">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-semibold text-white">{deliverable.title}</p>
                        </div>
                        <ul className="space-y-1 mb-2">
                          {deliverable.items.map((item, j) => (
                            <li key={j} className="text-xs text-gray-400 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-green-400">Ahorro: {deliverable.savings} USD</p>
                      </div>
                    ))}
                  </div>

                  {/* Includes */}
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-3">Incluye en el bootcamp:</p>
                    <ul className="space-y-1">
                      {product.includes.map((item, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                          <Check className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-xs text-gray-500">
                    <p><span className="text-gray-400">Duración:</span> {product.duration}</p>
                    <p><span className="text-gray-400">Cohorte:</span> {product.cohort}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="bg-[#0A0E1A]/50 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Valor si contratas:</span>
                      <span className="text-lg font-bold text-white">{product.totalValue} USD</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Tu ahorro:</span>
                      <span className="text-lg font-bold text-green-400">{product.savings} USD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">ROI primer año:</span>
                      <span className="text-lg font-bold text-cyan-400">{product.roi} USD</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full bg-gradient-to-r ${product.color} hover:opacity-90 text-white font-semibold py-6 rounded-xl transition-all`}
                    >
                      {product.cta}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Garantía: Reembolso completo primeras 2 semanas
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
