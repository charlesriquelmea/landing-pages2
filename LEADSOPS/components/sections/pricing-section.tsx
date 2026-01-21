'use client'

import { motion } from 'framer-motion'
import { Check, Shield, ArrowRight, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const plans = [
  {
    name: 'Quick Start',
    price: '$299',
    period: '/mo',
    setupCost: '$797',
    description: 'Para Profesionales Solo',
    features: [
      'Capture básico + CRM',
      '50 leads/mes',
      'Email support',
      'Landing pages incluidas',
    ],
    cta: 'Empezar Trial',
    popular: false,
  },
  {
    name: 'Core Growth',
    price: '$499',
    period: '/mo',
    setupCost: '$1,470',
    addon: '+ Pay Per Lead ($30/lead)',
    description: 'Para Equipos en Crecimiento',
    features: [
      'AI Booking Assistant 24/7',
      'SMS bidireccional ilimitado',
      'Reputation Management',
      'Analytics Dashboard',
      'Integración ServiceTitan/Housecall',
    ],
    cta: 'Empezar Ahora',
    popular: true,
    guarantee: true,
  },
  {
    name: 'Dominance',
    price: '$799',
    period: '/mo',
    setupCost: '$1,997',
    addon: '+ Pay Per Appointment ($50/appt)',
    description: 'Para Operaciones Multi-Truck',
    features: [
      'Todo de Core Growth +',
      'Account Manager dedicado',
      'White-label',
      'Soporte prioritario',
      'Integraciones custom',
    ],
    cta: 'Hablar con Ventas',
    popular: false,
  },
]

const additionalCosts = [
  {
    plan: 'Core Growth',
    type: 'Pay Per Lead',
    cost: '$30',
    description: 'Solo pagas por leads calificados y verificados',
    gradient: 'from-[#06B6D4] to-[#22C55E]',
  },
  {
    plan: 'Dominance',
    type: 'Pay Per Appointment',
    cost: '$50',
    description: 'Solo pagas por citas confirmadas en tu calendario',
    gradient: 'from-[#22C55E] to-[#2563EB]',
  },
]

export default function PricingSection() {
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
            Planes que <span className="text-[#22C55E]">Escalan</span> Contigo
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto text-pretty">
            Sin contratos largos. Pausa cuando quieras.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <Card
                className={`h-full p-8 relative overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-[#2563EB]/20 via-[#06B6D4]/10 to-[#0F172A] border-[#2563EB] scale-[1.05] shadow-2xl shadow-[#2563EB]/20'
                    : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-8 bg-[#22C55E] text-[#0F172A] text-xs font-bold px-4 py-1 rounded-b-lg">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 text-xl">{plan.period}</span>
                  </div>
                  {plan.addon && (
                    <p className="text-[#06B6D4] text-sm mt-1 font-medium">{plan.addon}</p>
                  )}
                </div>

                {/* Setup Cost */}
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Setup Fee</span>
                    <span className="text-white font-bold text-lg">{plan.setupCost}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Una sola vez</p>
                </div>

                {/* Guarantee Badge */}
                {plan.guarantee && (
                  <div className="flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-lg px-3 py-2 mb-6">
                    <Shield className="w-4 h-4 text-[#22C55E]" />
                    <span className="text-[#22C55E] text-sm font-semibold">
                      🛡️ Zero Risk Guarantee
                    </span>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white shadow-lg shadow-[#2563EB]/30'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  } font-semibold py-6 rounded-xl transition-all duration-300 group`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Glow Effect for Popular */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 rounded-lg pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Costs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Costos Adicionales <span className="text-[#22C55E]">(Solo Pagas por Resultados)</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {additionalCosts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-2">
                        <h4 className="text-xl font-bold text-white">{item.type}</h4>
                        <span className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.cost}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">{item.plan}</p>
                      <p className="text-sm text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400">
            ✨ <span className="text-white font-semibold">Sin contratos largos.</span> Pausa cuando quieras.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
