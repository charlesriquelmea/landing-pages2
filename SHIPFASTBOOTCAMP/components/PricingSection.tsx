"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ChevronRight, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { smoothScrollTo } from "@/lib/smoothScroll"

interface PricingSectionProps {
  onOpenForm?: () => void;
}
export default function PricingSection({ onOpenForm }: PricingSectionProps) {
  const [isEarlyBird] = useState(true)

  const features = [
    "Acceso completo al sprint de 54 horas",
    "Materiales y recursos exclusivos",
    "Mentoria personalizada con especialistas",
    "Comidas durante el evento",
    "Networking con emprendedores latinos",
    "Certificado de participacion",
    "Oportunidad de ganar premios",
    "30 dias de mentoria post-evento",
    "Landing page grupal maquetada por el equipo",
    "Backend e integraciones post-evento incluidas",
    "Servidor y dominio incluidos por 6 meses",
  ]
  const scrollToForm = () => {
    smoothScrollTo('order-form', 2000)
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-orange-500/20 px-4 py-2 text-sm font-bold text-orange-400 mb-4">
            Inversion
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Asegura tu lugar ahora</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Invierte en el futuro de tu negocio con nuestro sprint intensivo de innovacion grupal.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-orange-400 mr-2" />
                  <h3 className="text-2xl font-bold text-white">Ship Fast Orlando - Experiencia Grupal</h3>
                </div>
                {isEarlyBird && (
                  <span className="inline-flex items-center rounded-full bg-orange-500/20 px-3 py-1 text-sm font-bold text-orange-400">
                    Ultimos 5 lugares
                  </span>
                )}
              </div>

              <div className="flex items-center mb-4">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-300">Orlando, Florida</span>
                <span className="ml-2 text-xl">🇺🇸</span>
              </div>

              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-white">$90</span>
                <span className="text-2xl text-gray-400 ml-2">USD</span>
                <span className="ml-4 text-lg text-gray-500 line-through">$130 USD</span>
                <span className="ml-2 text-sm text-orange-400 font-bold">30% descuento</span>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl p-4 mb-6 border border-orange-500/20">
                <h4 className="font-bold text-white mb-2">🚀 Experiencia Grupal Completa</h4>
                <p className="text-sm text-gray-300">
                  Trabajaras en equipos para crear una landing page grupal maquetada durante el evento. Nosotros nos
                  encargamos del backend, integraciones, servidor y dominio despues del evento.
                </p>
              </div>

              <p className="text-gray-300 mb-6">
                Todo lo que necesitas para transformar tu idea en una innovacion viable en una inmersion intensiva de 3
                dias.
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 mt-1 mr-3 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Lugares disponibles</span>
                  <span className="font-bold text-white">5 de 25</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold shadow-lg shadow-orange-500/25"
                size="lg"
                onClick={scrollToForm}
              >
                Asegurar mi lugar ahora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-center text-gray-500 mt-4">
                Si despues del primer dia no estas convencido del valor de la metodologia, devolvemos 100% de tu
                inversion.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
