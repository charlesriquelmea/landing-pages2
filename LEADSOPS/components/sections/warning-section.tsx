'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, Users, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function WarningSection() {
  const [showModal, setShowModal] = useState(false)

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
                  ⚠️ Advertencia Importante
                </h2>

                {/* Main Message */}
                <div className="bg-slate-900/50 border border-amber-500/20 rounded-xl p-6 mb-8">
                  <p className="text-xl sm:text-2xl text-center text-white leading-relaxed font-semibold mb-4">
                    Tú eres responsable de llevar tráfico a LeadOps
                  </p>
                  <p className="text-lg text-center text-slate-300 leading-relaxed">
                    Nosotros <span className="text-[#22C55E] font-semibold">capturamos, calificamos y agendamos citas 24/7</span>,
                    pero <span className="text-amber-400 font-semibold">TÚ debes generar el tráfico</span> orgánico o pagado.
                  </p>
                </div>

                {/* What You Get Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E] shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">Lo que SÍ hacemos</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Capturamos cada lead 24/7, calificamos con IA, agendamos citas automáticamente, y solo cobras por resultados
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">Tu responsabilidad</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Generar tráfico con Google Ads, SEO, redes sociales, o cualquier método de marketing para atraer visitantes
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
                        Modelo de Pago Justo y Transparente
                      </h3>
                      <div className="space-y-2 text-slate-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                          <span className="text-sm">
                            <span className="font-semibold text-white">Solo pagas por resultados:</span> Leads calificados o citas confirmadas
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                          <span className="text-sm">
                            <span className="font-semibold text-white">Costo de infraestructura mensual:</span> Mantener el sistema 24/7 funcionando
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                          <span className="text-sm">
                            <span className="font-semibold text-white">Sin sorpresas:</span> Precios claros desde el día 1
                          </span>
                        </div>
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
                    Ver Detalles Completos
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
                  Detalles del Modelo LeadOps
                </h3>
                <p className="text-slate-400">
                  Entendiendo tu inversión y responsabilidades
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Section 1 */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                  Lo que LeadOps hace por ti
                </h4>
                <ul className="space-y-2 text-slate-300 ml-7">
                  <li className="leading-relaxed">✓ Landing pages optimizadas con Next.js (ultra rápidas, SEO nativo)</li>
                  <li className="leading-relaxed">✓ IA Receptionist 24/7 que califica y responde leads al instante</li>
                  <li className="leading-relaxed">✓ Agendamiento automático sincronizado con tu calendario</li>
                  <li className="leading-relaxed">✓ CRM integrado con ServiceTitan/Housecall Pro</li>
                  <li className="leading-relaxed">✓ SMS bidireccional y seguimiento automatizado</li>
                  <li className="leading-relaxed">✓ Dashboard de analytics en tiempo real</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  Tu responsabilidad
                </h4>
                <p className="text-slate-300 leading-relaxed mb-3">
                  LeadOps convierte visitantes en citas, pero <span className="font-semibold text-white">tú debes traer esos visitantes</span> a tu landing page.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Métodos recomendados: Google Ads (LSA, Search), Facebook Ads, SEO local, referidos, yard signs con QR codes, etc.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#22C55E]" />
                  Estructura de costos
                </h4>
                <div className="space-y-3 text-slate-300 ml-7">
                  <div>
                    <div className="font-semibold text-white">Setup inicial ($797 - $1,997)</div>
                    <p className="text-sm leading-relaxed">Configuración completa en 48 horas del sistema, landing pages, integraciones, y IA</p>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Mensualidad ($299 - $799)</div>
                    <p className="text-sm leading-relaxed">Mantener infraestructura 24/7: servidores, IA, CRM, soporte, actualizaciones</p>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Pay per result ($30/lead o $50/cita)</div>
                    <p className="text-sm leading-relaxed">Solo pagas cuando entregamos un lead calificado o cita confirmada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white"
              >
                Entendido
              </Button>
              <Button
                onClick={() => {
                  setShowModal(false)
                  document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
              >
                Comenzar Setup
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
