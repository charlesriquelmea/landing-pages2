'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { DollarSign, TrendingUp, Clock, Target } from 'lucide-react'

export default function ROICalculator() {
  const [jobValue, setJobValue] = useState(800)
  const [monthlyLeads, setMonthlyLeads] = useState(50)
  const [projectedRevenue, setProjectedRevenue] = useState(0)
  const [improvement, setImprovement] = useState(0)

  useEffect(() => {
    // Cálculo: (jobValue * monthlyLeads * 0.4 conversion rate)
    const newRevenue = jobValue * monthlyLeads * 0.4
    const currentRevenue = jobValue * monthlyLeads * 0.15 // Old 15% conversion
    const percentImprovement = ((newRevenue - currentRevenue) / currentRevenue) * 100

    setProjectedRevenue(Math.round(newRevenue))
    setImprovement(Math.round(percentImprovement))
  }, [jobValue, monthlyLeads])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Calcula Tu <span className="text-[#22C55E]">ROI</span> con LeadOps
          </h2>
          <p className="text-xl text-slate-400 text-pretty">
            Descubre cuánto puedes ganar en los próximos 30 días
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 p-8 sm:p-12">
            <div className="space-y-8">
              {/* Input: Job Value */}
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-3">
                  <DollarSign className="w-5 h-5 text-[#22C55E]" />
                  Valor Promedio de Trabajo
                </label>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="50"
                  value={jobValue}
                  onChange={(e) => setJobValue(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-slate-400 text-sm">$200</span>
                  <span className="text-[#2563EB] font-bold text-xl">${jobValue.toLocaleString()}</span>
                  <span className="text-slate-400 text-sm">$5,000</span>
                </div>
              </div>

              {/* Input: Monthly Leads */}
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-3">
                  <Target className="w-5 h-5 text-[#06B6D4]" />
                  Leads Mensuales Actuales
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#06B6D4]"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-slate-400 text-sm">10</span>
                  <span className="text-[#06B6D4] font-bold text-xl">{monthlyLeads} leads</span>
                  <span className="text-slate-400 text-sm">200</span>
                </div>
              </div>

              {/* Output Card */}
              <motion.div
                key={projectedRevenue}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#22C55E] to-[#16a34a] rounded-2xl p-8 text-center relative overflow-hidden"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#22C55E]/50 to-[#16a34a]/50"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-6 h-6 text-white" />
                    <span className="text-white/90 font-semibold text-lg">
                      Revenue Mensual Proyectado Extra
                    </span>
                  </div>

                  <motion.div
                    key={projectedRevenue}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-bold text-white mb-2"
                  >
                    ${projectedRevenue.toLocaleString()}
                  </motion.div>

                  <div className="text-white/90 text-lg font-semibold">
                    ↑ +{improvement}% vs tu situación actual
                  </div>
                </div>
              </motion.div>

              {/* Secondary Stats */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-[#06B6D4]" />
                    <span className="text-slate-300 font-medium">Tiempo Ahorrado</span>
                  </div>
                  <div className="text-3xl font-bold text-white">18hrs/semana</div>
                  <div className="text-slate-400 text-sm mt-1">En seguimiento manual</div>
                </div>

                <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-[#22C55E]" />
                    <span className="text-slate-300 font-medium">Costo por Lead</span>
                  </div>
                  <div className="text-3xl font-bold text-white">-42%</div>
                  <div className="text-slate-400 text-sm mt-1">Reducción promedio</div>
                </div>
              </div>

              {/* Note */}
              <p className="text-center text-slate-400 text-sm">
                * Basado en conversión promedio de 40% con LeadOps vs 15% método tradicional
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
