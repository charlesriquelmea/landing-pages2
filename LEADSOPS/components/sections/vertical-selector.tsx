'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const verticalIcons: { [key: string]: string } = {
  hvac: '🌡️',
  plumbing: '🔧',
  electrical: '⚡',
  roofing: '🏠',
  realestate: '🏘️',
  clinics: '🏥',
}

const verticalColors: { [key: string]: string } = {
  hvac: 'from-orange-500 to-red-500',
  plumbing: 'from-blue-500 to-cyan-500',
  electrical: 'from-yellow-500 to-orange-500',
  roofing: 'from-slate-500 to-gray-600',
  realestate: 'from-purple-500 to-pink-500',
  clinics: 'from-green-500 to-teal-500',
}

export default function VerticalSelector() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('hvac')

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.vertical_selector.title} <span className="text-[#2563EB]">{t.vertical_selector.title_highlight}</span>
          </h2>
          <p className="text-xl text-slate-400 text-pretty">
            {t.vertical_selector.subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 w-full bg-slate-800/50 p-1 rounded-xl mb-8">
            {t.vertical_selector.items.map((vertical) => (
              <TabsTrigger
                key={vertical.id}
                value={vertical.id}
                className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white text-slate-400 font-semibold py-3 rounded-lg transition-all duration-300"
              >
                <span className="mr-2">{verticalIcons[vertical.id]}</span>
                <span className="hidden sm:inline">{vertical.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content */}
          <AnimatePresence mode="wait">
            {t.vertical_selector.items.map((vertical) => (
              <TabsContent key={vertical.id} value={vertical.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-800/30 border-slate-700 p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Left Content */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="text-5xl">{verticalIcons[vertical.id]}</span>
                          <h3 className="text-2xl font-bold text-white">{vertical.title}</h3>
                        </div>

                        <ul className="space-y-4 mb-6">
                          {vertical.useCases.map((useCase, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-4 h-4 text-[#22C55E]" />
                              </div>
                              <span className="text-slate-300 leading-relaxed">{useCase}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Stat */}
                        <div className={`inline-block bg-gradient-to-r ${verticalColors[vertical.id]} bg-clip-text text-transparent font-bold text-lg mb-4`}>
                          📊 {vertical.stat}
                        </div>

                        {/* Setup Info */}
                        <div className="space-y-2 pt-4 border-t border-slate-700">
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Check className="w-4 h-4 text-[#22C55E]" />
                            <span>{vertical.setup}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Check className="w-4 h-4 text-[#22C55E]" />
                            <span>{vertical.modify}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Visual - Screenshot Placeholder */}
                      <div className="relative">
                        <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600 p-6 flex items-center justify-center relative overflow-hidden">
                          {/* Mock Dashboard */}
                          <div className="w-full space-y-3">
                            <div className="h-12 bg-slate-600/50 rounded-lg animate-pulse" />
                            <div className="grid grid-cols-2 gap-3">
                              <div className="h-20 bg-slate-600/50 rounded-lg animate-pulse" />
                              <div className="h-20 bg-slate-600/50 rounded-lg animate-pulse" />
                            </div>
                            <div className="h-32 bg-slate-600/50 rounded-lg animate-pulse" />
                          </div>

                          {/* Overlay Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-8xl opacity-20">{verticalIcons[vertical.id]}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}
