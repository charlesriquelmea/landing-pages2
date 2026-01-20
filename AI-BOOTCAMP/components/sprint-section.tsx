"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Wrench, Trophy, Clock, Users, Sparkles } from "lucide-react"

const days = [
  {
    day: "Día 1",
    title: "Innovation Sprint",
    subtitle: "Emprendimiento Dinámico",
    icon: Lightbulb,
    color: "from-purple-500 to-indigo-500",
    sessions: [
      {
        time: "Mañana (9 AM - 1 PM)",
        title: "Design Thinking para tu negocio",
        items: [
          "Customer journey mapping: entiende el camino de tus clientes",
          "Identificación de pain points a resolver con tecnología",
          "Brainstorming de nuevos productos/servicios digitales",
          "Framework: Jobs to be Done aplicado a tu industria",
        ],
      },
      {
        time: "Tarde (2 PM - 6 PM)",
        title: "Lean Canvas & Business Model",
        items: [
          "Define tu propuesta de valor digital",
          "Canales de adquisición automatizados",
          "Proyección de ingresos con tus nuevas capacidades",
          "Pricing de servicios digitales",
        ],
      },
    ],
    value: "$5,000 en consultoría estratégica",
  },
  {
    day: "Día 2",
    title: "Build Sprint",
    subtitle: "Ejecución Técnica Intensiva",
    icon: Wrench,
    color: "from-blue-500 to-cyan-500",
    sessions: [
      {
        time: "Mañana (9 AM - 1 PM)",
        title: "Estaciones de trabajo por stack",
        items: [
          "Estación v0.dev: Optimización de conversión, A/B testing, SEO",
          "Estación Lovable: Features avanzadas, debugging, integraciones",
          "Estación n8n: Workflows complejos, error handling, webhooks",
        ],
      },
      {
        time: "Tarde (2 PM - 6 PM)",
        title: "Integración & Testing",
        items: [
          "Conecta todos tus sistemas (v0 → n8n → Lovable)",
          "Testing de flujos completos end-to-end",
          "Troubleshooting 1:1 con facilitadores expertos",
          "Performance optimization",
        ],
      },
    ],
    value: "$3,000 en desarrollo guiado",
  },
  {
    day: "Día 3",
    title: "Demo Day",
    subtitle: "De proyecto a negocio",
    icon: Trophy,
    color: "from-amber-500 to-orange-500",
    sessions: [
      {
        time: "Mañana (9 AM - 1 PM)",
        title: "Preparación de pitch",
        items: [
          "Cómo presentar tu nueva capacidad digital a clientes",
          "Plan de lanzamiento 30-60-90 días",
          "Preparación de tu presentación de 5 minutos",
        ],
      },
      {
        time: "Tarde (2 PM - 6 PM)",
        title: "Demo Day estilo Shark Tank",
        items: [
          "Presentación de 5 minutos por participante",
          "Feedback del grupo + mentores + invitados especiales",
          "Premios y reconocimientos",
          "Plan de accountability post-bootcamp",
          "Networking y celebración",
        ],
      },
    ],
    value: "$2,000 en mentoring + conexiones",
  },
]

export function SprintSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400">Incluido en el bootcamp</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            3 días que transforman tu forma de <span className="text-cyan-400">emprender</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Ya no solo aprendes tech. Ahora piensas como innovador digital.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              Cohorte pequeña (18-20 personas máx)
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {days.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-[#1a1f35]/80 to-[#0d1020]/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all h-full">
                {/* Header */}
                <div className={`bg-gradient-to-r ${day.color} p-6`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 font-medium">{day.day}</span>
                    <day.icon className="w-8 h-8 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{day.title}</h3>
                  <p className="text-white/80 text-sm">{day.subtitle}</p>
                </div>

                {/* Sessions */}
                <div className="p-6 space-y-6">
                  {day.sessions.map((session, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-gray-500">{session.time}</span>
                      </div>
                      <h4 className="font-semibold text-white mb-3">{session.title}</h4>
                      <ul className="space-y-2">
                        {session.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-white/10 mt-auto">
                  <p className="text-sm text-gray-400">Valor de este día:</p>
                  <p className="text-lg font-bold text-green-400">{day.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl px-8 py-4">
            <span className="text-gray-400">Total valor Sprint de Innovación:</span>
            <span className="text-2xl font-bold text-green-400">$10,000</span>
          </div>
        </motion.div>

        {/* Remote Option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-[#1a1f35]/50 border border-white/10 rounded-xl p-6 text-center">
            <h4 className="font-semibold text-white mb-2">Modalidad alternativa (100% remota)</h4>
            <p className="text-sm text-gray-400">
              Si no puedes asistir presencial, ofrecemos 3 sesiones virtuales intensivas (5 horas cada una) 
              con breakout rooms por stack tecnológico. Mismo contenido, diferente formato.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
