'use client'

import { motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export default function ComparisonSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.comparison.title.split(t.comparison.title_highlight)[0]}
            <span className="text-[#22C55E]">{t.comparison.title_highlight}</span>
            {t.comparison.title.split(t.comparison.title_highlight)[1]}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto text-pretty">
            {t.comparison.subtitle}
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Old Way Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-red-950/20 to-red-900/10 border-red-900/30 p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.comparison.old_way_title}</h3>
              </div>
              <p className="text-red-300 mb-6 font-semibold">{t.comparison.old_way_subtitle}</p>
              <ul className="space-y-4">
                {t.comparison.old_features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* New Way Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-[#2563EB]/20 via-[#06B6D4]/10 to-[#22C55E]/10 border-[#2563EB]/30 p-8 relative overflow-hidden hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#2563EB]/20 transition-all duration-300">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 to-[#22C55E]/10 opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t.comparison.new_way_title}</h3>
                  <div className="ml-auto">
                    <span className="bg-[#22C55E] text-[#0F172A] text-xs font-bold px-3 py-1 rounded-full">
                      {t.comparison.new_way_badge}
                    </span>
                  </div>
                </div>
                <p className="text-[#06B6D4] mb-6 font-semibold">{t.comparison.new_way_subtitle}</p>
                <ul className="space-y-4">
                  {t.comparison.new_features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                      <span className="text-white leading-relaxed font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Pulse Glow Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#22C55E]/20 rounded-lg"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </Card>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#22C55E] hover:bg-[#16a34a] text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-[#22C55E]/30 transition-all duration-300 group"
          >
            {t.comparison.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
