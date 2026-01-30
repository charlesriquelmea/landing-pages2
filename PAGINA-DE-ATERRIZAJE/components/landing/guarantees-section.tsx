"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, CheckCircle, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function GuaranteesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const guarantees = [
    {
      icon: Shield,
      title: t("guarantees.g1.title"),
      description: t("guarantees.g1.desc"),
    },
    {
      icon: CheckCircle,
      title: t("guarantees.g2.title"),
      description: t("guarantees.g2.desc"),
    },
    {
      icon: Zap,
      title: t("guarantees.g3.title"),
      description: t("guarantees.g3.desc"),
    },
  ]

  return (
    // AJUSTE EXACTO: py-16 md:py-24
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="container mx-auto px-4">
        {/* Header - Ajustado proporcionalmente a mb-12 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t("guarantees.title").split(" ").slice(0, 4).join(" ")}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 tracking-tight">
            {t("guarantees.title").split(" ").slice(4).join(" ")}
          </h2>
        </motion.div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="p-4 bg-emerald-100 rounded-xl w-fit mb-6">
                <guarantee.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{guarantee.title}</h3>
              <p className="text-slate-600 leading-relaxed">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}