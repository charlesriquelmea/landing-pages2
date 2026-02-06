"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  const comparisons = [
    {
      feature: t("solution.compare.speed"),
      us: t("solution.compare.speed.us"),
      them: t("solution.compare.speed.them"),
    },
    {
      feature: t("solution.compare.security"),
      us: t("solution.compare.security.us"),
      them: t("solution.compare.security.them"),
    },
    { feature: t("solution.compare.seo"), us: t("solution.compare.seo.us"), them: t("solution.compare.seo.them") },
    {
      feature: t("solution.compare.scale"),
      us: t("solution.compare.scale.us"),
      them: t("solution.compare.scale.them"),
    },
    {
      feature: t("solution.compare.control"),
      us: t("solution.compare.control.us"),
      them: t("solution.compare.control.them"),
    },
    { feature: "Precio Setup", us: "500 € todo incluido", them: "5,000-15,000+ €" },
  ]

  // Real company logos using Next.js
  const trustedLogos = [
    { name: "Netflix", logo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg" },
    { name: "TikTok", logo: "https://cdn.worldvectorlogo.com/logos/tiktok-icon-2.svg" },
    { name: "Twitch", logo: "https://cdn.worldvectorlogo.com/logos/twitch-logo-2019.svg" },
    // { name: "Hulu", logo: "https://cdn.worldvectorlogo.com/logos/hulu-2.svg" },
    { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
    { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
  ]

  return (
    // ÚNICO CAMBIO: py-24 md:py-32  --->  py-16 md:py-24
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t("solution.title")}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0066FF] tracking-tight">
            {t("solution.title2")}
          </h2>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-left font-bold">{t("solution.compare.feature")}</th>
                  <th className="px-6 py-4 text-center font-bold bg-gradient-to-r from-[#0066FF] to-[#00D9FF]">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-5 w-5" />
                      {t("solution.compare.us")}
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-slate-400">
                    <div className="flex items-center justify-center gap-2">
                      <X className="h-5 w-5" />
                      {t("solution.compare.them")}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <td className="px-6 py-4 font-semibold text-slate-700">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-[#0066FF]/5 font-medium text-slate-900">
                      <span className="inline-flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-500" />
                        {row.us}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-slate-500 bg-slate-50/50">
                      <span className="inline-flex items-center gap-2">
                        <X className="h-4 w-4 text-red-400" />
                        {row.them}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Company logos section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-slate-500 mb-8 uppercase tracking-wider font-medium">{t("solution.subtitle")}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {trustedLogos.map((company, index) => (
              <motion.div
                key={index}
                className="relative h-8 md:h-10 w-24 md:w-32 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 0.6, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} usa Next.js`}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-6">
            Estas marcas globales confían en Next.js para sus plataformas de alto rendimiento
          </p>
        </motion.div>
      </div>
    </section>
  )
}