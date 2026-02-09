"use client"

import type React from "react"
import { Brain, Search, Sparkles, Filter } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"


export function TechnologySection() {
  const { t } = useI18n()
  return (
    <section id="tecnologia" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="container relative z-20">
        
          <div className="text-center mb-16">
            <AnimatedText text={t("technology_section.title")} className="text-3xl md:text-4xl font-bold mb-4" as="h2" />
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              
            >
              {t("technology_section.subtitle")}
            </motion.p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TechCard
                icon={<Brain className="h-10 w-10 text-blue-500" />}
                title={t("technology_section.items[0].title")}
                description={t("technology_section.items[0].description")}
              />
        
              <TechCard
                icon={<Search className="h-10 w-10 text-blue-500" />}
                title={t("technology_section.items[1].title")}
                description={t("technology_section.items[1].description")}
              />
        
              <TechCard
                icon={<Sparkles className="h-10 w-10 text-blue-500" />}
                title={t("technology_section.items[2].title")}
                description={t("technology_section.items[2].description")}
              />
        
              <TechCard
                icon={<Filter className="h-10 w-10 text-blue-500" />}
                title={t("technology_section.items[3].title")}
                description={t("technology_section.items[3].description")}
              />
        </div>
      </div>
    </section>
  )
}

interface TechCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function TechCard({ icon, title, description }: TechCardProps) {
  return (
    <motion.div
      className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all h-full"
      whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="mt-1"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <div>
          <motion.h3
            className="text-lg font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
