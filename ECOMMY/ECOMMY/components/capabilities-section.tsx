"use client"

import React from "react"

import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { ThumbsUp, BarChart2, MessageSquare, Truck } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function CapabilitiesSection() {
  const {t} = useI18n()
  return (
    <section id="capacidades" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>

      {/* Círculos de fondo animados */}
      <motion.div
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blue-800/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
          <div className="text-center mb-12 sm:mb-16">
            <AnimatedText text={t("capabilities_section.title")} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2" as="h2" />
            <motion.p
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              
            >
              {t("capabilities_section.subtitle")}
            </motion.p>
          </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {[
            {
              title: t("capabilities_section.capabilities[0].title"),
              description: t("capabilities_section.capabilities[0].description"),
              icon: ThumbsUp,
              color: "from-blue-600 to-blue-400",
              delay: 0.1,
            },
            {
              title: t("capabilities_section.capabilities[1].title"),
              description: t("capabilities_section.capabilities[1].description"),
              icon: BarChart2,
              color: "from-indigo-600 to-indigo-400",
              delay: 0.2,
            },
            {
              title: t("capabilities_section.capabilities[2].title"),
              description: t("capabilities_section.capabilities[2].description"),
              icon: MessageSquare,
              color: "from-purple-600 to-purple-400",
              delay: 0.3,
            },
            {
              title: t("capabilities_section.capabilities[3].title"),
              description: t("capabilities_section.capabilities[3].description"),
              icon: Truck,
              color: "from-cyan-600 to-cyan-400",
              delay: 0.4,
            },
          ].map((capability, index) => (
        
              <CapabilityCard
                key={index}
                title={capability.title}
                description={capability.description}
                icon={<capability.icon />}
                colorClass={capability.color}
              />
        
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
       
        >
          <p className="text-gray-400 mb-6">
            {t("capabilities_section.footerText")}
          </p>
          <div className="flex justify-center gap-2">
            <motion.div
              className="h-2 w-16 bg-blue-500 rounded-full"
              animate={{ width: [16, 64, 16] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="h-2 w-8 bg-indigo-500 rounded-full"
              animate={{ width: [8, 32, 8] }}
              transition={{ duration: 2, delay: 0.3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="h-2 w-24 bg-purple-500 rounded-full"
              animate={{ width: [24, 96, 24] }}
              transition={{ duration: 2, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="h-2 w-12 bg-cyan-500 rounded-full"
              animate={{ width: [12, 48, 12] }}
              transition={{ duration: 2, delay: 0.9, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface CapabilityCardProps {
  title: string
  description: string
  icon: React.ReactNode
  colorClass: string
}

function CapabilityCard({ title, description, icon, colorClass }: CapabilityCardProps) {
  return (
    <motion.div
      className="h-full rounded-xl overflow-hidden relative group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br border border-gray-800 rounded-xl overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />
      </div>

      <div className="relative z-10 p-6 sm:p-8 bg-gray-900 border border-gray-800 rounded-xl h-full flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <motion.div
            className={`p-3 rounded-lg bg-gradient-to-br ${colorClass}`}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {React.cloneElement(icon as React.ReactElement, 
              // { className: "h-6 w-6 text-white" }
              )}
          </motion.div>

          <motion.div
            className="h-1 w-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-700"
            whileHover={{ width: 64 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.h3
          className="text-xl font-bold mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
         
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
        
        >
          <div className={`h-0.5 w-full bg-gradient-to-r ${colorClass} rounded-full`} />
        </motion.div>
      </div>
    </motion.div>
  )
}
