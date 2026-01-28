"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { X, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const comparisonData = [
  {
    feature: "Landing page profesional",
    contratar: "$5,000 - $10,000 USD",
    bootcamp: "Lo haces tú (v0.dev)",
    ahorro: "$7,500 USD",
  },
  {
    feature: "Sistema de automatizaciones",
    contratar: "$3,000 - $5,000 USD",
    bootcamp: "Lo haces tú (n8n)",
    ahorro: "$4,000 USD",
  },
  {
    feature: "App web custom",
    contratar: "$15,000+ USD",
    bootcamp: "Lo haces tú (Lovable)",
    ahorro: "$15,000+ USD",
  },
  {
    feature: "Mantenimiento anual",
    contratar: "$2,000 - $5,000 USD/año",
    bootcamp: "$0 (tú lo manejas)",
    ahorro: "$3,500 USD/año",
  },
  {
    feature: "Cambios y actualizaciones",
    contratar: "$100 - $200 USD/hora",
    bootcamp: "$0 (conocimiento tuyo)",
    ahorro: "∞",
  },
  {
    feature: "Tiempo de entrega",
    contratar: "4-8 semanas por proyecto",
    bootcamp: "8 semanas todo",
    ahorro: "Meses",
  },
  {
    feature: "Dependencia",
    contratar: "Alta (siempre necesitas al proveedor)",
    bootcamp: "Ninguna (tú tienes el poder)",
    ahorro: "Libertad",
  },
]

export function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0A0E1A] to-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Contratar o aprender?{" "}
            <span className="text-cyan-400">Los números hablan solos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compara el costo de contratar todo vs. hacerlo tú mismo con nuestro bootcamp
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-[#0d1020] border border-white/10 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-white/10 bg-[#0A0E1A]/50">
              <div className="text-sm font-semibold text-gray-300">Qué necesitas</div>
              <div className="text-sm font-semibold text-red-400 flex items-center gap-2">
                <X className="w-4 h-4" />
                Contratar
              </div>
              <div className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                <Check className="w-4 h-4" />
                Con el Bootcamp
              </div>
              <div className="text-sm font-semibold text-green-400 text-right">Tu ahorro</div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                className={`grid grid-cols-4 gap-4 p-6 ${index !== comparisonData.length - 1 ? "border-b border-white/5" : ""
                  } hover:bg-white/5 transition-colors`}
              >
                <div className="text-sm font-medium text-white">{row.feature}</div>
                <div className="text-sm text-gray-400">{row.contratar}</div>
                <div className="text-sm text-cyan-300">{row.bootcamp}</div>
                <div className="text-sm font-semibold text-green-400 text-right">{row.ahorro}</div>
              </motion.div>
            ))}

            {/* Total Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="p-6 bg-gradient-to-r from-[#0d1020] to-[#111827] border-t border-white/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total estimado de ahorro primer año:</p>
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    $25,000 – $35,000 USD
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group"
                  >
                    Prefiero ahorrar $25,000 USD y tener el conocimiento para siempre
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Comparison Cards */}
        <div className="md:hidden mt-8 space-y-4">
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
              className="bg-[#0d1020] border border-white/10 rounded-xl p-4"
            >
              <h4 className="font-semibold text-white mb-3">{row.feature}</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-red-400 flex items-center gap-1">
                    <X className="w-3 h-3" /> Contratar
                  </span>
                  <span className="text-gray-400">{row.contratar}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Bootcamp
                  </span>
                  <span className="text-cyan-300">{row.bootcamp}</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-white/10">
                  <span className="text-gray-400">Tu ahorro</span>
                  <span className="font-bold text-green-400">{row.ahorro}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
