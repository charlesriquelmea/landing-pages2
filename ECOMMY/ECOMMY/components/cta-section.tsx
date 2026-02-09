"use client"

import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { MessageSquare, Smartphone, Laptop, ShoppingBag, ArrowRight, Star, ShoppingCart, Eye } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import React from "react"
import Link from "next/link"

export function CTASection() {
  const { t } = useI18n()

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
          <motion.div
            className="max-w-5xl mx-auto bg-gradient-to-r from-blue-950 to-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-blue-500/5"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <AnimatedText
                  text={t("cta_section.title")}
                  className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
                  as="h2"
                />
                <motion.p
                  className="text-lg text-gray-300 mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                   
                >
                  {t("cta_section.subtitle")}
                </motion.p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {(t("cta_section.platforms") as string[]).map((text, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 bg-blue-900/30 px-3 py-2 rounded-full"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                       
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                    >
                      {[Smartphone, Laptop, ShoppingBag, MessageSquare][index % 4] && (
                        <div className="h-4 w-4 text-blue-400">
                          {React.createElement([Smartphone, Laptop, ShoppingBag, MessageSquare][index % 4], {
                            size: 16,
                          })}
                        </div>
                      )}
                      <span className="text-sm font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                   
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="w-full sm:w-auto">
                    <Link href="#contacto">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 relative overflow-hidden group w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6">
                        <span className="relative z-10 flex items-center gap-2 justify-center">
                          {t("cta_section.button")}
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <motion.span
                          className="absolute inset-0 bg-blue-500"
                          initial={{ x: "100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="w-full sm:w-auto">
                    <Link href="#contacto">
                      <Button size="lg" variant="outline" className="relative overflow-hidden group w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6">
                        <span className="relative z-10 flex items-center justify-center" >{t("cta_section.demoButton")}</span>
                        <motion.span
                          className="absolute inset-0 bg-white/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-xl">
                  <div className="border-b border-gray-800 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-600 p-1.5 rounded-md">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">AI Assistant</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-700"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-700"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white text-sm rounded-lg rounded-tr-none p-3 max-w-[80%]">
                        {t("cta_section.chat_demo.user1")}
                      </div>
                    </div>

                    <div className="flex">
                      <div className="bg-gray-800 text-white text-sm rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        <p>{t("cta_section.chat_demo.ai1")}</p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white text-sm rounded-lg rounded-tr-none p-3 max-w-[80%]">
                        {t("cta_section.chat_demo.user2")}
                      </div>
                    </div>

                    <div className="flex">
                      <div className="bg-gray-800 text-white text-sm rounded-lg rounded-tl-none p-3 max-w-[80%]">
                        {t("cta_section.chat_demo.ai2")}
                      </div>
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                      {[1, 2].map((item) => (
                        <motion.div
                          key={item}
                          className="flex-shrink-0 w-40 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden"
                          whileHover={{ y: -3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="h-24 bg-gray-800 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
                              Imagen
                            </div>
                          </div>
                          <div className="p-2">
                            <h4 className="text-xs font-medium truncate">
                              {item === 1 ? t("cta_section.chat_demo.products[0].name") : t("cta_section.chat_demo.products[1].name")}
                            </h4>
                            <p className="text-blue-400 text-xs font-bold">{item === 1 ? t("cta_section.chat_demo.products[0].price") : t("cta_section.chat_demo.products[1].price")}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-gray-800 flex gap-2">
                      <input
                        type="text"
                        placeholder={t("cta_section.inputPlaceholder")}
                        className="flex-1 bg-gray-800 border-none rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-8 w-8 p-0">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Product Card Preview debajo de la conversación */}
                    <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="flex gap-3 items-center">
                        <div className="h-16 w-16 rounded-md bg-muted/40 flex items-center justify-center text-muted-foreground">IMG</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-white">{t("ChatbotPreview.productCard.name")}</h4>
                            <span className="text-sm font-bold text-blue-400">{t("ChatbotPreview.productCard.price")}</span>
                          </div>
                          <p className="text-xs text-gray-400">{t("ChatbotPreview.productCard.specs")}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span className="text-xs text-gray-400">{t("ChatbotPreview.productCard.rating")}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" className="h-8 px-3">{t("ChatbotPreview.productCard.addToCart")}</Button>
                        <Button size="sm" variant="outline" className="h-8 px-3">{t("ChatbotPreview.productCard.viewDetails")}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
        
      </div>
    </section>
  )
}
