"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Wrench, Trophy, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Calendar,
    title: "Office hours mensuales (2 sesiones/mes)",
    description: "Casos reales, troubleshooting avanzado, nuevas features de v0, Lovable, n8n",
    value: "$200 USD/mes",
  },
  {
    icon: Wrench,
    title: "Toolkits y actualizaciones continuas",
    description: "Nuevas plantillas y workflows (10+ cada mes), prompts actualizados con últimos modelos de IA",
    value: "$100 USD/mes",
  },
  {
    icon: Trophy,
    title: "Retos mensuales (gamificación + accountability)",
    description: '"30 días de leads automatizados", "Lanza una micro-app en 7 días", premios y reconocimientos',
    value: "$150 USD/mes",
  },
  {
    icon: Users,
    title: "Networking y colaboraciones",
    description: "Comunidad privada (Discord), colaboraciones entre miembros, eventos trimestrales presenciales",
    value: "$100 USD/mes",
  },
  {
    icon: Rocket,
    title: "Early access a todo",
    description: "Nuevos programas y especializaciones, beta testing de herramientas, descuentos en próximos bootcamps",
    value: "$50 USD/mes",
  },
]

export function CommunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-[#0A0E1A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            No te sueltes después del bootcamp
          </h2>
          <p className="text-xl text-cyan-400 mb-4">Conviértelo en hábito y sistema</p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            La mayoría de bootcamps te abandonan al terminar. Nosotros te acompañamos en tu crecimiento continuo.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-[#1a1f35]/80 to-[#0d1020]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Community Membership</h3>
                <p className="text-gray-400">Membresía mensual opcional post-bootcamp</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 line-through">$600USD/mes valor total</p>
                <p className="text-2xl font-bold text-cyan-400">Precio especial alumni</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <span className="text-sm text-green-400">{feature.value}</span>
                    </div>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-green-400">Dato clave:</span> El 78% de nuestros alumni activos
                  en Community Membership reportan ingresos adicionales de <span className="text-white font-semibold">$2,000-$5,000 USD/mes</span> dentro
                  de los primeros 6 meses post-bootcamp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">Cancelación: Puedes cancelar cuando quieras, sin preguntas ni penalidades.</p>
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                >
                  Disponible post-bootcamp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
