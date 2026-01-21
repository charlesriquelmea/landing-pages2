'use client'

import { motion } from 'framer-motion'
import { Smartphone, Bot, TrendingUp, Zap, Clock, BarChartBig as ChartBar, MessageSquare, CheckCircle2, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

const steps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'CAPTURE',
    subtitle: 'Landing Pages Ultra-Rápidas con Next.js',
    description: 'Capturamos leads con landing pages construidas en Next.js - ultra-rápidas, SEO-optimizadas desde el día 1.',
    features: [
      'Velocidad de carga <1 segundo',
      'SEO orgánico nativo incluido',
      'Mobile-first design',
      'Optimización de conversión A/B testing'
    ],
    benefits: [
      { icon: Zap, text: 'Next.js 15 App Router', color: 'text-[#2563EB]' },
      { icon: ChartBar, text: '+127% más rápido que WordPress', color: 'text-[#22C55E]' },
      { icon: CheckCircle2, text: 'Score perfecto Google Lighthouse', color: 'text-[#06B6D4]' }
    ],
    gradient: 'from-[#2563EB] to-[#06B6D4]',
    mockupType: 'landing',
  },
  {
    number: '02',
    icon: Bot,
    title: 'QUALIFY',
    subtitle: 'AI Receptionist 24/7 Sin Descanso',
    description: 'Nuestro AI Receptionist califica cada lead en tiempo real, 24/7/365. Nunca pierdas otra llamada.',
    features: [
      'Respuestas en <3 segundos',
      'Calificación inteligente de leads',
      'Multi-idioma (EN/ES)',
      'Integrado con tu CRM'
    ],
    benefits: [
      { icon: Clock, text: 'Disponible 24/7/365', color: 'text-[#06B6D4]' },
      { icon: MessageSquare, text: '94% de respuesta instantánea', color: 'text-[#22C55E]' },
      { icon: Bot, text: 'Powered by Vercel AI SDK', color: 'text-[#2563EB]' }
    ],
    gradient: 'from-[#06B6D4] to-[#22C55E]',
    mockupType: 'chat',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'CLOSE',
    subtitle: 'Automatización de Lead Gen Total',
    description: 'Cierre automático con SMS/Email sequences que convierten leads en citas confirmadas en tu calendario.',
    features: [
      'Email drip campaigns personalizadas',
      'SMS bidireccional automatizado',
      'Sincronización de calendario en tiempo real',
      'Follow-up inteligente basado en comportamiento'
    ],
    benefits: [
      { icon: Mail, text: 'Integración con CRMs principales', color: 'text-[#22C55E]' },
      { icon: TrendingUp, text: '40%+ tasa de conversión', color: 'text-[#2563EB]' },
      { icon: CheckCircle2, text: 'Citas confirmadas automáticamente', color: 'text-[#06B6D4]' }
    ],
    gradient: 'from-[#22C55E] to-[#2563EB]',
    mockupType: 'automation',
  },
]

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [typedText, setTypedText] = useState('')

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Cómo <span className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">Funciona</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto text-pretty">
            Tres pasos simples. Resultados garantizados.
          </p>
        </motion.div>

        {/* Expanded Steps */}
        <div className="max-w-7xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <Card className="bg-slate-800/30 border-slate-700/50 p-8 hover:border-slate-600 transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left: Content */}
                  <div className="space-y-6">
                    {/* Number & Icon */}
                    <div className="flex items-center gap-4">
                      <div className="text-6xl font-bold text-slate-700">{step.number}</div>
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Benefits Pills */}
                    <div className="flex flex-wrap gap-3">
                      {step.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-slate-700/50 border border-slate-600 rounded-full px-4 py-2"
                        >
                          <benefit.icon className={`w-4 h-4 ${benefit.color}`} />
                          <span className="text-sm text-slate-200">{benefit.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      onClick={() => setActiveStep(activeStep === index ? null : index)}
                      className={`bg-gradient-to-r ${step.gradient} hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300`}
                    >
                      {activeStep === index ? 'Cerrar Vista' : 'Ver Detalles Técnicos'}
                    </Button>
                  </div>

                  {/* Right: Mockup/Visual */}
                  <div className="relative">
                    {step.mockupType === 'landing' && (
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-slate-700 p-6 shadow-2xl"
                      >
                        <div className="bg-[#0F172A] rounded-xl p-4 space-y-3">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <div className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] h-24 rounded-lg flex items-center justify-center">
                            <Zap className="w-12 h-12 text-white" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-4 bg-slate-700 rounded w-3/4" />
                            <div className="h-4 bg-slate-700 rounded w-1/2" />
                          </div>
                          <div className="bg-[#22C55E] h-12 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">Obtén una Cotización</span>
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-[#22C55E] text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
                          ⚡ Next.js 15
                        </div>
                      </motion.div>
                    )}

                    {step.mockupType === 'chat' && (
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-slate-700 p-6 shadow-2xl"
                      >
                        <div className="bg-[#0F172A] rounded-xl p-4 space-y-3">
                          {/* Chat Header */}
                          <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#22C55E] flex items-center justify-center">
                              <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-white font-semibold text-sm">AI Assistant</div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                                <span className="text-xs text-slate-400">Online</span>
                              </div>
                            </div>
                          </div>
                          {/* Messages */}
                          <div className="space-y-3">
                            <div className="bg-slate-700/50 rounded-lg p-3">
                              <p className="text-white text-sm">Hola! Necesito ayuda con mi HVAC</p>
                            </div>
                            <div className="bg-gradient-to-r from-[#06B6D4] to-[#22C55E] rounded-lg p-3">
                              <p className="text-white text-sm">¡Claro! ¿Cuándo podría visitarte? 📅</p>
                            </div>
                          </div>
                          {/* Input */}
                          <div className="flex gap-2">
                            <div className="flex-1 bg-slate-700/50 rounded-lg px-3 py-2">
                              <span className="text-slate-400 text-sm">Escribe un mensaje...</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-[#06B6D4] text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
                          🤖 AI Powered
                        </div>
                      </motion.div>
                    )}

                    {step.mockupType === 'automation' && (
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 border-slate-700 p-6 shadow-2xl"
                      >
                        <div className="bg-[#0F172A] rounded-xl p-4 space-y-4">
                          {/* Automation Flow */}
                          <div className="space-y-3">
                            {[
                              { icon: Mail, text: 'Email enviado', color: 'from-[#22C55E] to-[#2563EB]', status: 'Completado' },
                              { icon: MessageSquare, text: 'SMS follow-up', color: 'from-[#2563EB] to-[#06B6D4]', status: 'En progreso' },
                              { icon: CheckCircle2, text: 'Cita agendada', color: 'from-[#06B6D4] to-[#22C55E]', status: 'Pendiente' },
                            ].map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="flex items-center gap-3 bg-slate-700/50 rounded-lg p-3"
                              >
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                                  <item.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-medium text-sm">{item.text}</div>
                                  <div className="text-xs text-slate-400">{item.status}</div>
                                </div>
                                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-[#22C55E] text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
                          🎯 40% CVR
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Expanded Technical Details */}
                {activeStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 pt-8 border-t border-slate-700"
                  >
                    <div className="bg-slate-900/50 rounded-xl p-6 space-y-4">
                      <h4 className="text-xl font-bold text-white">Detalles Técnicos</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                        <div>
                          <strong className="text-white">Stack:</strong> Next.js 15, TypeScript, Vercel AI SDK
                        </div>
                        <div>
                          <strong className="text-white">Tiempo de implementación:</strong> 48 horas
                        </div>
                        <div>
                          <strong className="text-white">Integraciones:</strong> CRM, Calendar, SMS APIs
                        </div>
                        <div>
                          <strong className="text-white">Soporte:</strong> 24/7 con respuesta garantizada
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-lg">
            Configuración completa en <span className="text-[#22C55E] font-bold">48 horas</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
