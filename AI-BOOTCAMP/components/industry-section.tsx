"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  UtensilsCrossed, 
  Sparkles, 
  Home, 
  Scissors, 
  TreeDeciduous, 
  Briefcase,
  HardHat,
  Car,
  Check
} from "lucide-react"

const industries = [
  {
    icon: UtensilsCrossed,
    name: "Restaurantes & Food Trucks",
    description: "Con v0.dev + n8n + Lovable construyes:",
    examples: [
      "Landing con menú digital y ordenamiento online",
      "Sistema de reservas con confirmación automática (SMS/WhatsApp)",
      "Programa de lealtad con puntos y rewards",
      "Dashboard de métricas (ventas, platos top, horarios pico)",
    ],
    value: "$18,000–$25,000",
  },
  {
    icon: Sparkles,
    name: "Servicios de Limpieza",
    description: "Con v0.dev + n8n + Lovable construyes:",
    examples: [
      "Landing con cotizador automático por tipo de espacio",
      "Sistema de agendamiento con Google Calendar",
      "Recordatorios automáticos pre y post servicio",
      "Solicitud de reseñas automatizada",
    ],
    value: "$12,000–$18,000",
  },
  {
    icon: Home,
    name: "Real Estate / Bienes Raíces",
    description: "Con v0.dev + n8n + Lovable construyes:",
    examples: [
      "Landing con galería de propiedades y filtros",
      "Lead magnet con entrega automática (PDF guías)",
      "CRM básico en Google Sheets con alertas",
      "Seguimiento automatizado de leads",
    ],
    value: "$15,000–$25,000",
  },
  {
    icon: Scissors,
    name: "Salón de Belleza / Barbería",
    description: "Con v0.dev + n8n + Lovable construyes:",
    examples: [
      "Página con servicios y agenda online (Calendly embed)",
      "Recordatorios 24h antes de cita (SMS/WhatsApp)",
      "Sistema de referidos con código único",
      "Galería con Instagram feed integrado",
    ],
    value: "$10,000–$18,000",
  },
  {
    icon: TreeDeciduous,
    name: "Landscape & Jardinería",
    description: "Con v0.dev + n8n + Lovable construyes:",
    examples: [
      "Landing con formulario de cotización inteligente",
      "Respuesta automática con rangos de precio",
      "Historial de clientes en Airtable",
      "Facturación con Stripe integrado",
    ],
    value: "$12,000–$20,000",
  },
  {
    icon: Briefcase,
    name: "Consultoría & Servicios Profesionales",
    description: "Con v0.dev + n8n + Lovable construyes:",
    examples: [
      "Web profesional con calendario (Cal.com embed)",
      "Onboarding: formulario → contrato → pago automático",
      "Área de cliente con documentos compartidos",
      "Newsletter automatizado mensual",
    ],
    value: "$15,000–$25,000",
  },
  {
    icon: HardHat,
    name: "Construcción & Remodelación",
    description: "Con v0.dev + n8n + Lovable construyes:",
    examples: [
      "Portfolio de proyectos con formulario de cotización",
      "Estimador de presupuesto por tipo y m²",
      "Seguimiento de proyectos para clientes (Notion embed)",
      "Solicitud de materiales a proveedores",
    ],
    value: "$18,000–$30,000",
  },
  {
    icon: Car,
    name: "Automotriz (Talleres, Detailing, Lotes)",
    description: "Con v0.dev + n8n + Lovable construyes:",
    examples: [
      "Web con servicios y agenda de citas online",
      "Cotizador por tipo de vehículo + servicio",
      "Recordatorio de mantenimiento a 3,000 millas",
      "Inventario de vehículos con filtros (lotes)",
    ],
    value: "$15,000–$25,000",
  },
]

export function IndustrySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndustry, setActiveIndustry] = useState(0)

  return (
    <section ref={ref} id="industrias" className="py-20 bg-gradient-to-b from-[#0A0E1A] to-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu industria, <span className="text-cyan-400">automatizada</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ejemplos reales de lo que puedes construir con el bootcamp
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeIndustry === index
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-[#1a1f35]/60 text-gray-400 hover:bg-[#1a1f35] hover:text-white border border-white/10"
              }`}
            >
              <industry.icon className="w-4 h-4" />
              {industry.name}
            </button>
          ))}
        </motion.div>

        {/* Active Industry Card */}
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#0d1020] border border-white/10 rounded-2xl p-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                {(() => {
                  const IconComponent = industries[activeIndustry].icon
                  return <IconComponent className="w-7 h-7 text-cyan-400" />
                })()}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {industries[activeIndustry].name}
                </h3>
                <p className="text-sm text-gray-400">
                  {industries[activeIndustry].description}
                </p>
              </div>
            </div>

            {/* Examples with checkmarks */}
            <ul className="space-y-4 mb-8">
              {industries[activeIndustry].examples.map((example, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{example}</span>
                </li>
              ))}
            </ul>

            {/* Value */}
            <div className="flex items-center gap-2 pt-6 border-t border-white/10">
              <span className="text-xl">💰</span>
              <span className="text-gray-400">Valor de este sistema:</span>
              <span className="text-xl font-bold text-white">
                {industries[activeIndustry].value}
              </span>
              <span className="text-gray-500 ml-2">→ Tú lo construyes en el bootcamp</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-gray-400 mt-12"
        >
          ¿Tu industria no está aquí? El stack funciona para{" "}
          <span className="text-cyan-400 font-semibold">cualquier negocio</span>.
        </motion.p>
      </div>
    </section>
  )
}
