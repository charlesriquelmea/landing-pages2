"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Zap, Workflow, Brain } from "lucide-react"

const tools = [
  {
    icon: Globe,
    name: "v0.dev by Vercel",
    description: "Genera landing pages profesionales con prompts.",
    features: ["Diseño moderno en segundos", "Código production-ready", "Iteraciones ilimitadas sin costo"],
    value: "$5,000-$10,000 por landing",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    name: "Lovable (GPT Engineer)",
    description: "Construye aplicaciones web completas con lenguaje natural.",
    features: ["CRMs, dashboards, portales de clientes", "Deploy automático + base de datos", "Sin límites de complejidad"],
    value: "$15,000+ por app custom",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Workflow,
    name: "n8n",
    description: "Automatiza marketing, ventas y operaciones visualmente.",
    features: ["400+ integraciones listas", "Workflows sin programar", "Self-hosted (control total)"],
    value: "$3,000-$5,000 por sistema",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    name: "Suite IA",
    description: "Gemini, NotebookLM, Claude, Midjourney para contenido y análisis.",
    features: ["Generación de contenido", "Análisis de documentos", "Imágenes, video, voice-overs"],
    value: "$10,000-$15,000/año en subscripciones + freelancers",
    color: "from-purple-500 to-indigo-500",
  },
]

export function StackSection() {
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
            Las herramientas que <span className="text-cyan-400">dominarás</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            (y que te ahorrarán miles)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`} />
              
              <div className="relative bg-gradient-to-br from-[#1a1f35]/80 to-[#0d1020]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all h-full">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <tool.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                    <p className="text-sm text-gray-400">{tool.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold text-white">Valor si contratas:</span>
                  </p>
                  <p className="text-lg font-bold text-green-400">{tool.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
