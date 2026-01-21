'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, Users, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'

export default function WarningSection() {
  const [showModal, setShowModal] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-red-500/10 border-amber-500/30 p-8 sm:p-12 relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              </div>

              <div className="relative z-10">
                {/* Icon Header */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="flex justify-center mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
                  {t.warning.title}
                </h2>

                {/* Main Message */}
                <div className="bg-slate-900/50 border border-amber-500/20 rounded-xl p-6 mb-8">
                  <p className="text-xl sm:text-2xl text-center text-white leading-relaxed font-semibold mb-4">
                    {t.warning.main_message_title}
                  </p>
                  <p className="text-lg text-center text-slate-300 leading-relaxed">
                    {t.warning.main_message_text_1} <span className="text-[#22C55E] font-semibold">{t.warning.main_message_highlight_1}</span>
                    {t.warning.main_message_text_2} <span className="text-amber-400 font-semibold">{t.warning.main_message_highlight_2}</span> {t.warning.main_message_text_3}
                  </p>
                </div>

                {/* What You Get Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E] shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">{t.warning.what_we_do.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {t.warning.what_we_do.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">{t.warning.your_responsibility.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {t.warning.your_responsibility.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Model */}
                <div className="bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 border border-[#2563EB]/30 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center shrink-0">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {t.warning.payment_model.title}
                      </h3>
                      <div className="space-y-2 text-slate-300">
                        {t.warning.payment_model.points.map((point, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                            <span className="text-sm">
                              <span className="font-semibold text-white">{point.label}</span> {point.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Button
                    onClick={() => setShowModal(true)}
                    variant="outline"
                    className="bg-transparent border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500"
                  >
                    {t.warning.cta_details}
                    <Users className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t.warning.modal.title}
                </h3>
                <p className="text-slate-400">
                  {t.warning.modal.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Section 1 */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                  {t.warning.modal.section_1.title}
                </h4>
                <ul className="space-y-2 text-slate-300 ml-7">
                  {t.warning.modal.section_1.items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">✓ {item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 2 */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  {t.warning.modal.section_2.title}
                </h4>
                <p className="text-slate-300 leading-relaxed mb-3">
                  {t.warning.modal.section_2.text_1} <span className="font-semibold text-white">{t.warning.modal.section_2.text_highlight}</span> {t.warning.modal.section_2.text_2}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {t.warning.modal.section_2.text_3}
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#22C55E]" />
                  {t.warning.modal.section_3.title}
                </h4>
                <div className="space-y-3 text-slate-300 ml-7">
                  {t.warning.modal.section_3.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="font-semibold text-white">{item.title}</div>
                      <p className="text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white"
              >
                {t.warning.modal.cta_understood}
              </Button>
              <Button
                onClick={() => {
                  setShowModal(false)
                  document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
              >
                {t.warning.modal.cta_start}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
