"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ClipboardCheck, Play, Video, Users, Zap, Rocket } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    title: "Aplica",
    description: "Formulario de 5 minutos + llamada de 15-20 min para conocer tu negocio",
    subtitle: "Sin compromiso. Queremos asegurarnos de que es buen fit.",
    position: "left",
  },
  {
    icon: Play,
    title: "Aprende a tu ritmo",
    description: "Contenido pregrabado: lecciones, guías, templates y prompts",
    subtitle: "Acceso 24/7 a todo el material desde día 1.",
    position: "right",
  },
  {
    icon: Video,
    title: "Facilitación en vivo",
    description: "Q&A semanales, revisión de proyectos y accountability sessions",
    subtitle: "Resolvemos tus dudas en tiempo real.",
    position: "left",
  },
  {
    icon: Users,
    title: "Comunidad activa",
    description: "Discord/WhatsApp + Community Manager + office hours",
    subtitle: "Nunca estás solo en el proceso.",
    position: "right",
  },
  {
    icon: Zap,
    title: "Sprint de Innovación",
    description: "3 días presenciales intensivos (o remoto)",
    subtitle: "La experiencia transformadora del bootcamp.",
    position: "left",
  },
  {
    icon: Rocket,
    title: "Lanza tu proyecto",
    description: "Demo Day + portfolio + membership de comunidad",
    subtitle: "Sales con todo funcionando para tu negocio.",
    position: "right",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="como-funciona" className="py-20 bg-gradient-to-b from-[#0F172A] to-[#0A0E1A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo <span className="text-cyan-400">funciona</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un sistema probado que combina lo mejor del aprendizaje digital con el poder del acompañamiento humano
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ originY: 0 }}
          >
            <div className="w-full h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500" />
          </motion.div>

          {/* Steps */}
          <div className="relative space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: step.position === "left" ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                className={`flex items-center gap-4 ${
                  step.position === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-[calc(50%-40px)] ${
                    step.position === "left" ? "text-right pr-4" : "text-left pl-4"
                  }`}
                >
                  <motion.div
                    className="bg-[#1a1f35]/80 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-cyan-500/30 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">Paso {index + 1}</span>
                    <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{step.description}</p>
                    <p className="text-xs text-gray-500 italic">{step.subtitle}</p>
                  </motion.div>
                </div>

                {/* Icon in center */}
                <motion.div
                  className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Empty space for other side */}
                <div className="w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden mt-8">
          <div className="relative pl-8">
            {/* Vertical Line */}
            <motion.div
              className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ originY: 0 }}
            />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  {/* Icon */}
                  <div className="absolute -left-8 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-[#1a1f35]/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 ml-4">
                    <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">Paso {index + 1}</span>
                    <h3 className="font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-400 mb-1">{step.description}</p>
                    <p className="text-xs text-gray-500 italic">{step.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
