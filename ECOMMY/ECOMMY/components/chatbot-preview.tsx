"use client"

import { useI18n } from "@/lib/i18n/context"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, ArrowUp, Check, Package, Percent, Search, User, Star, ShoppingCart, Truck, CreditCard, Heart } from "lucide-react"
import { useState } from "react"

type ContentType = 'default' | 'search' | 'status' | 'agent' | 'deals'

export function ChatbotPreview() {
  const { t, language } = useI18n()
  const [activeContent, setActiveContent] = useState<ContentType>('default')

  const suggestions = [
    {
      icon: <Search className="h-5 w-5 text-blue-400" />,
      title: t("ChatbotPreview.suggestions.search.title"),
      description: t("ChatbotPreview.suggestions.search.description"),
      type: 'search' as ContentType,
    },
    {
      icon: <Package className="h-5 w-5 text-purple-400" />,
      title: t("ChatbotPreview.suggestions.status.title"),
      description: t("ChatbotPreview.suggestions.status.description"),
      type: 'status' as ContentType,
    },
    {
      icon: <User className="h-5 w-5 text-green-400" />,
      title: t("ChatbotPreview.suggestions.agent.title"),
      description: t("ChatbotPreview.suggestions.agent.description"),
      type: 'agent' as ContentType,
    },
    {
      icon: <Percent className="h-5 w-5 text-orange-400" />,
      title: t("ChatbotPreview.suggestions.deals.title"),
      description: t("ChatbotPreview.suggestions.deals.description"),
      type: 'deals' as ContentType,
    },
  ]

  const benefits = t("ChatbotPreview.benefits.items") as string[]

  const handleSuggestionClick = (type: ContentType) => {
    setActiveContent(type)
  }

  const renderBackgroundContent = () => {
    const baseClasses = "absolute inset-0 h-full w-full overflow-y-auto bg-gradient-to-br from-black via-gray-900 to-black p-4 text-white sm:p-8"
    
    switch (activeContent) {
      case 'search':
        return (
          <motion.div
            key="search"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={baseClasses}
          >
            <div className="mx-auto max-w-md">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t("ChatbotPreview.content.search.title")}
              </h1>
              <p className="mt-4 text-md sm:text-lg text-gray-300">
                {t("ChatbotPreview.content.search.description")}
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Search className="h-5 w-5 text-blue-400" />
                    <span className="text-blue-400 font-medium">{t("ChatbotPreview.content.search.popular")}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{t("ChatbotPreview.content.demo.products.headphones")}</span>
                      <span className="text-blue-400 text-sm">{t("ChatbotPreview.content.demo.results.result1")}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{t("ChatbotPreview.content.demo.products.laptop")}</span>
                      <span className="text-blue-400 text-sm">{t("ChatbotPreview.content.demo.results.result2")}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{t("ChatbotPreview.content.demo.products.smartwatch")}</span>
                      <span className="text-blue-400 text-sm">{t("ChatbotPreview.content.demo.results.result3")}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                    <Star className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                    <span className="text-sm text-gray-300">{t("ChatbotPreview.content.search.topRated")}</span>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                    <Heart className="h-6 w-6 text-red-400 mx-auto mb-2" />
                    <span className="text-sm text-gray-300">{t("ChatbotPreview.content.search.wishlist")}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 'status':
        return (
          <motion.div
            key="status"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={baseClasses}
          >
            <div className="mx-auto max-w-md">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                {t("ChatbotPreview.content.status.title")}
              </h1>
              <p className="mt-4 text-md sm:text-lg text-gray-300">
                {t("ChatbotPreview.content.status.description")}
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Package className="h-5 w-5 text-purple-400" />
                    <span className="text-purple-400 font-medium">{t("ChatbotPreview.content.status.recent")}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{t("ChatbotPreview.content.demo.orders.order1")}</p>
                        <p className="text-gray-400 text-sm">{t("ChatbotPreview.content.demo.products.headphones")}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-green-400" />
                        <span className="text-green-400 text-sm">{t("ChatbotPreview.content.status.shipped")}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{t("ChatbotPreview.content.demo.orders.order2")}</p>
                        <p className="text-gray-400 text-sm">{t("ChatbotPreview.content.demo.products.mouse")}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-400 text-sm">{t("ChatbotPreview.content.status.processing")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 'agent':
        return (
          <motion.div
            key="agent"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={baseClasses}
          >
            <div className="mx-auto max-w-md">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t("ChatbotPreview.content.agent.title")}
              </h1>
              <p className="mt-4 text-md sm:text-lg text-gray-300">
                {t("ChatbotPreview.content.agent.description")}
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="h-5 w-5 text-green-400" />
                    <span className="text-green-400 font-medium">{t("ChatbotPreview.content.agent.capabilities")}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/20 p-1 rounded-full mt-1">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{t("ChatbotPreview.content.agent.cap1")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/20 p-1 rounded-full mt-1">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{t("ChatbotPreview.content.agent.cap2")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/20 p-1 rounded-full mt-1">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{t("ChatbotPreview.content.agent.cap3")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/20 p-1 rounded-full mt-1">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{t("ChatbotPreview.content.agent.cap4")}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20">
                  <p className="text-green-400 text-sm font-medium mb-2">{t("ChatbotPreview.content.agent.statusOnline")}</p>
                  <p className="text-gray-300 text-sm">{t("ChatbotPreview.content.agent.ready")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 'deals':
        return (
          <motion.div
            key="deals"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={baseClasses}
          >
            <div className="mx-auto max-w-md">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                {t("ChatbotPreview.content.deals.title")}
              </h1>
              <p className="mt-4 text-md sm:text-lg text-gray-300">
                {t("ChatbotPreview.content.deals.description")}
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Percent className="h-5 w-5 text-orange-400" />
                    <span className="text-orange-400 font-medium">{t("ChatbotPreview.content.deals.today")}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Gaming Headset</span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">50% OFF</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through">$199.99</span>
                        <span className="text-orange-400 font-bold">$99.99</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">Smart Watch</span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">30% OFF</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through">$299.99</span>
                        <span className="text-orange-400 font-bold">$209.99</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                    <CreditCard className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <span className="text-sm text-gray-300">{t("ChatbotPreview.content.deals.freeShipping")}</span>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                    <ShoppingCart className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <span className="text-sm text-gray-300">{t("ChatbotPreview.content.deals.bundle")}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )

      default:
        return (
          <motion.div
            key="default"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={baseClasses}
          >
            <div className="mx-auto max-w-md">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {t("ChatbotPreview.previewTitle")}
              </h1>
              <p className="mt-4 text-md sm:text-lg text-gray-300" suppressHydrationWarning>
                {t("hero_section.subtitle")}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  {t("hero_section.demoButton")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-blue-500/50 text-white">
                  {t("hero_section.featuresButton")}
                </Button>
              </div>
            </div>

            {/* Mock Benefits Section */}
            <div className="mt-12 sm:mt-16 mx-auto max-w-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">
                {t("ChatbotPreview.benefits.title")}
              </h2>
              <div className="mt-6 space-y-4">
                {Array.isArray(benefits) && benefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="bg-blue-500/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-500" />
                      </div>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )
    }
  }

  return (
    <section key={language} className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("ChatbotPreview.title")}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t("ChatbotPreview.description")}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-5xl rounded-xl border bg-card p-2 shadow-2xl shadow-primary/10"
          >
            {/* Browser mockup header */}
            <div className="flex items-center gap-2 border-b border-border/50 p-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 rounded-md bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
                <button
                  type="button"
                  onClick={() => setActiveContent('default')}
                  className="w-full text-left rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 hover:bg-muted/70 transition-colors cursor-pointer"
                  aria-label="Go to homepage preview"
                  title="Go to homepage preview"
                >
                  https://tutienda.com
                </button>
              </div>
            </div>

            {/* Website content with chatbot */}
            <div className="relative h-[600px] overflow-hidden rounded-b-lg">
              {/* Mock Website Background with AnimatePresence for smooth transitions */}
              <AnimatePresence mode="wait">
                {renderBackgroundContent()}
              </AnimatePresence>

              {/* Chatbot Widget with Glow */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 w-[calc(100%-2rem)] max-w-sm sm:w-[26rem]">
                <motion.div
                  className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur-xl"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative overflow-hidden rounded-xl border border-border/30 bg-background/80 shadow-2xl backdrop-blur-md"
                >
                  <div className="p-4">
                    <div className="mb-4">
                      <h3 className="text-md font-semibold text-foreground">{t("ChatbotPreview.widget.title")}</h3>
                      <p className="text-sm text-muted-foreground">{t("ChatbotPreview.widget.subtitle")}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {suggestions.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                          onClick={() => handleSuggestionClick(item.type)}
                          className={`cursor-pointer rounded-lg border p-3 text-left transition-all hover:shadow-md ${
                            activeContent === item.type 
                              ? 'border-primary/50 bg-primary/10 shadow-md' 
                              : 'border-border/50 bg-card/50 hover:bg-card/80'
                          }`}
                        >
                          <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-muted">
                            {item.icon}
                          </div>
                          <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border/50 p-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={t("ChatbotPreview.inputPlaceholder")}
                        className="w-full rounded-full border border-border/60 bg-card/60 py-2 pl-4 pr-10 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                      />
                      <Button
                        size="icon"
                        className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full"
                      >
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Product Card Preview removed as requested */}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
