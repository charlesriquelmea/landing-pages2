"use client"

import type React from "react"

import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { ShoppingBag, Package, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

export function IntegrationSection() {
  const { t } = useI18n()
  return (
    <section className="py-20 bg-black relative ">
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

      <div className="container relative z-20 overflow-clip">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
            <div>
              <AnimatedText text={t("integration_section.title")} className="text-3xl md:text-4xl font-bold mb-4" as="h2" />
              <motion.p
                className="text-xl text-gray-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                
              >
                {t("integration_section.subtitle")}
              </motion.p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <IntegrationCategory
                  title={t("integration_section.categories.ecommerce.title")}
                  icon={<ShoppingBag className="h-5 w-5 text-blue-500" />}
                  platforms={t("integration_section.categories.ecommerce.platforms")}
                  delay={0.1}
                />

                <IntegrationCategory
                  title={t("integration_section.categories.shipping.title")}
                  icon={<Package className="h-5 w-5 text-blue-500" />}
                  platforms={[
                    {
                      title: 'Blue Envios',
                      description: '',
                      icon: 'Truck',
                      color: 'blue',
                    },
                  ]}
                  delay={0.3}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                
              >
                <Button className="bg-blue-600 hover:bg-blue-700 group">
                  <span className="flex items-center gap-2">
                    {t("integration_section.cta")}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </div>
          
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-8 overflow-hidden"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>

              <h3 className="text-xl font-bold mb-6">{t("integration_section.stepsTitle")}</h3>

              {[
                {
                  step: "01",
                  title: t("integration_section.steps[0].title"),
                  description: t("integration_section.steps[0].description"),
                  delay: 0.1,
                },
                {
                  step: "02",
                  title: t("integration_section.steps[1].title"),
                  description: t("integration_section.steps[1].description"),
                  delay: 0.3,
                },
                {
                  step: "03",
                  title: t("integration_section.steps[2].title"),
                  description: t("integration_section.steps[2].description"),
                  delay: 0.5,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 mb-6 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                      <span className="text-xl font-bold text-blue-400">{item.step}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="mt-8 pt-6 border-t border-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                
              >
                <p className="text-sm text-gray-400">
                  {t("integration_section.support")}
                </p>
              </motion.div>
            </motion.div>
          
        </div>

        
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {Array.isArray(t("integration_section.highlights"))&& t("integration_section.highlights").map((name:string, index:number) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-center h-16"
                whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
               
              >
                <span className="font-medium text-gray-300">{name}</span>
              </motion.div>
            ))}
          </div>
        
      </div>
    </section>
  )
}

interface PlatformItem {
  title: string;
  description?: string;
  icon?: string;
  color?: string;
}

interface IntegrationCategoryProps {
  title: string;
  icon: React.ReactNode;
  platforms: Array<string | PlatformItem>;
  delay: number;
}

function IntegrationCategory({ title, icon, platforms, delay }: IntegrationCategoryProps) {
  // Helper function to get Lucide icon component by name
  const getIconComponent = (iconName?: string) => {
    if (!iconName) return null;
    try {
      const Icon = require(`lucide-react`)[iconName];
      return Icon ? <Icon className="h-4 w-4" /> : null;
    } catch (e) {
      return null;
    }
  };

  return (
    <motion.div
      className="bg-gray-900 border border-gray-800 rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.15)" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-600/20 p-2 rounded-lg">{icon}</div>
        <h3 className="font-bold">{title}</h3>
      </div>

      <ul className="space-y-3">
        {platforms.map((platform, index) => {
          const isObject = typeof platform === 'object' && platform !== null;
          const platformTitle = isObject ? platform.title : platform;
          const platformDescription = isObject ? platform.description : null;
          const platformIcon = isObject ? platform.icon : null;
          const platformColor = isObject ? platform.color : 'blue';
          
          return (
            <motion.li
              key={index}
              className="flex items-start gap-2 group"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.1 * index, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {platformIcon && (
                    <span className="text-gray-400">
                      {getIconComponent(platformIcon)}
                    </span>
                  )}
                  <span className={`text-sm font-medium text-${platformColor}-400`}>
                    {platformTitle}
                  </span>
                </div>
                {platformDescription && (
                  <p className="text-xs text-gray-400 mt-1">
                    {platformDescription}
                  </p>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
