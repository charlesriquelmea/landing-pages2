"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Users, Code, BarChart3, Truck } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import Link from "next/link"


export function SecondaryHeroSection() {
  const {t} = useI18n()
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative ">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-green-500/10 blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t("secondary_hero_section.title")}
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent block mt-1 sm:mt-2">
                {t("secondary_hero_section.now")}
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              {t("secondary_hero_section.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
           
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 px-2"
          >
            {[
              { icon: Zap, text: t("secondary_hero_section.highlights[0]") },
              { icon: ShieldCheck, text:  t("secondary_hero_section.highlights[1]") },
              { icon: MessageSquare, text:  t("secondary_hero_section.highlights[2]") },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 sm:gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-3 sm:px-4 py-2 sm:py-3"
              >
                <div className="bg-blue-500/20 p-1 sm:p-1.5 rounded-full">
                  <item.icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                </div>
                <span className="text-xs sm:text-sm text-gray-200">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <Link href="#contacto" >
                 <Button
                // onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="truncate">{ t("secondary_hero_section.ctaPrimary.text")}</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                </Button>
             </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contacto" >
                <Button
                // onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 text-white hover:bg-gray-800/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto"
              >
                <span className="truncate">{ t("secondary_hero_section.ctaSecondary.text")}</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* API Features highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
           
            className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 mx-2 sm:mx-0"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center justify-center gap-2">
              <Code className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
             <span className="text-center">{ t("secondary_hero_section.apiFeaturesTitle")}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 sm:gap-3 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 sm:p-4"
              >
                <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-semibold text-white text-sm sm:text-base">{ t("secondary_hero_section.apiFeatures[0].title")}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">{ t("secondary_hero_section.apiFeatures[0].description")}</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 sm:gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-3 sm:p-4"
              >
                <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-semibold text-white text-sm sm:text-base">{ t("secondary_hero_section.apiFeatures[1].title")}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">{ t("secondary_hero_section.apiFeatures[1].description")}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
             
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-0"
          >
            {[
              { value: "98%", label: t("secondary_hero_section.stats[0].label") },
              { value: "35%", label:  t("secondary_hero_section.stats[1].label")  },
              { value: t("secondary_hero_section.stats[2].value"), label:  t("secondary_hero_section.stats[2].label")  },
              { value: t("secondary_hero_section.stats[3].value") , label:  t("secondary_hero_section.stats[3].label")  },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                 
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-3 sm:p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
