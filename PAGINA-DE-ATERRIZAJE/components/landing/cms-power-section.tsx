"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Target,
  ShoppingCart,
  MessageCircle,
  Smartphone,
  Edit3,
  ImageIcon,
  Database,
  Globe,
  Clock,
  Sparkles,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CMSPowerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const features = [
    {
      icon: Target,
      title: "Para Servicios",
      description: "Cambia precios en 90 segundos desde tu celular",
    },
    {
      icon: ShoppingCart,
      title: "Para Productos",
      description: "Sube 20 productos con fotos desde tu teléfono",
    },
    {
      icon: MessageCircle,
      title: "Para Contenido",
      description: "Publica blogs y actualizaciones al instante",
    },
  ]

  const cmsBenefits = [
    {
      icon: Database,
      title: t("cms.benefit1.title"),
      description: t("cms.benefit1.desc"),
    },
    {
      icon: Clock,
      title: t("cms.benefit2.title"),
      description: t("cms.benefit2.desc"),
    },
    {
      icon: Globe,
      title: t("cms.benefit3.title"),
      description: t("cms.benefit3.desc"),
    },
    {
      icon: Smartphone,
      title: t("cms.benefit4.title"),
      description: t("cms.benefit4.desc"),
    },
  ]

  return (
    // CAMBIO: py-16 md:py-24 (Medida estándar acordada)
    <section ref={ref} className="py-16 md:py-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Restaurado a mb-20 (Original) para recuperar la separación interna */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight">
              {t("cms.title")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0066FF]">
                {t("cms.title2")}
              </span>
            </h2>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00D9FF]">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <MessageCircle className="h-6 w-6 text-emerald-400" />
              <span className="font-semibold text-emerald-300">Si sabes usar WhatsApp, dominas nuestro sistema</span>
            </motion.div>
          </motion.div>

          {/* Right visual - Dashboard mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/10 shadow-2xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div className="flex-1 bg-slate-700 rounded-full h-6 ml-4 flex items-center px-3">
                  <span className="text-xs text-slate-400">dashboard.tusitio.com</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="space-y-4">
                {/* Price editor */}
                <motion.div
                  className="bg-slate-700/50 rounded-lg p-4"
                  animate={{
                    boxShadow: isInView
                      ? ["0 0 0 rgba(0,217,255,0)", "0 0 20px rgba(0,217,255,0.3)", "0 0 0 rgba(0,217,255,0)"]
                      : "none",
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Servicio Premium</span>
                    <Edit3 className="h-4 w-4 text-[#00D9FF]" />
                  </div>
                  <motion.div
                    className="text-2xl font-bold text-white"
                    animate={isInView ? { opacity: [1, 0.5, 1] } : {}}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                  >
                    $<span className="text-[#00D9FF]">299 UDS</span>/mes
                  </motion.div>
                </motion.div>

                {/* Image uploader */}
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#0066FF]/20 rounded-lg">
                      <ImageIcon className="h-5 w-5 text-[#0066FF]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white mb-1">Subir imagen</div>
                      <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#0066FF] to-[#00D9FF]"
                          initial={{ width: "0%" }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile indicator */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  <Smartphone className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400">Gestiona textos e imágenes desde tu celular</span>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0066FF]/20 via-[#8B5CF6]/20 to-[#00D9FF]/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* CMS Explanation Section */}
        {/* Restaurado a mt-16 pt-16 (Original) para que la separación interna sea correcta */}
        <motion.div
          className="mt-16 pt-16 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Restaurado a mb-12 (Original) */}
          <div className="text-center mb-12">
            <motion.div
              // Restaurado a mb-6 (Original)
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0066FF]/20 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Sparkles className="h-4 w-4 text-[#00D9FF]" />
              <span className="text-sm font-medium text-[#00D9FF]">{t("cms.subtitle")}</span>
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              El Poder de Actualizar Tu Sitio Sin Código
            </h3>
            <p className="text-white/60 max-w-3xl mx-auto leading-relaxed">{t("cms.desc1")}</p>
            <p className="text-white/60 max-w-3xl mx-auto mt-4 leading-relaxed">{t("cms.desc2")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {cmsBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#0066FF]/20 to-[#00D9FF]/20 border border-[#00D9FF]/30">
                    <benefit.icon className="h-6 w-6 text-[#00D9FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-2">{benefit.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}