"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Palette, 
  Code2, 
  Bot, 
  ShoppingCart, 
  Layers, 
  CreditCard, 
  MapPin, 
  Store, 
  Users,
  Zap
} from "lucide-react"

const incubations = [
  {
    name: "Pixelbile",
    description: "Diseño en HTML5 desde cero por cada dispositivo",
    icon: Palette,
    tag: "Design",
    color: "#00F0FF"
  },
  {
    name: "Developbile",
    description: "Infraestructura y desarrollo de alto nivel",
    icon: Code2,
    tag: "Dev",
    color: "#00F0FF"
  },
  {
    name: "Perceivo AI Agency",
    description: "Orquestación de agentes y automatización inteligente",
    icon: Bot,
    tag: "AI-Powered",
    color: "#FFD60A"
  },
  {
    name: "Autonoma AI",
    description: "Automatización inteligente de procesos",
    icon: Zap,
    tag: "AI-Powered",
    color: "#FFD60A"
  },
  {
    name: "eCommy AI",
    description: "El futuro del Personal Shopper",
    icon: ShoppingCart,
    tag: "AI-Powered",
    color: "#FFD60A"
  },
  {
    name: "Protolylab",
    description: "La evolución de Pixelbile con Developbile",
    icon: Layers,
    tag: "Live",
    color: "#00F0FF"
  },
  {
    name: "OnePageCard",
    description: "Presencia digital en una sola página",
    icon: CreditCard,
    tag: "Bootstrapped",
    color: "#00F0FF"
  },
  {
    name: "Tus Fondas App",
    description: "El primer directorio de Fondas en Chile",
    icon: MapPin,
    tag: "Live",
    color: "#FFD60A"
  },
  {
    name: "Kulko App",
    description: "Micro ecommerce que redirecciona ventas por WhatsApp",
    icon: Store,
    tag: "Live",
    color: "#00F0FF"
  },
  {
    name: "Empowered Night",
    description: "El punto de encuentro de la resistencia creativa",
    icon: Users,
    tag: "Community",
    color: "#FFD60A"
  }
]

export function EcosystemSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFD60A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#FFD60A] font-mono text-sm tracking-wider mb-4 px-4 py-2 bg-[#FFD60A]/10 rounded-full border border-[#FFD60A]/20">
            LA CANCHA
          </span>
          <h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            No enseñamos desde un aula.{" "}
            <span className="bg-gradient-to-r from-[#00F0FF] to-[#FFD60A] bg-clip-text text-transparent">
              Construimos en la trinchera.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mi propio <span className="text-white font-semibold">Máster en Emprendimiento Dinámico</span> no tiene títulos, tiene nodos de valor.{" "}
            <span className="text-[#00F0FF]">+9 incubaciones reales</span> creadas con{" "}
            <span className="text-[#FFD60A]">Bootstrapping Puro</span>: sin capital externo, solo recursividad, colaboración de Devs y código.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {incubations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative group cursor-pointer
                ${index === 0 || index === 4 ? 'md:col-span-2' : ''}
              `}
            >
              <div 
                className="relative h-full min-h-[160px] bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 
                         hover:border-opacity-50 transition-all duration-300 overflow-hidden"
                style={{ 
                  borderColor: hoveredIndex === index ? item.color : 'rgba(255,255,255,0.1)'
                }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${item.color}15, transparent 70%)`
                  }}
                />

                {/* Tag */}
                <span 
                  className="absolute top-3 right-3 text-[10px] font-mono tracking-wider px-2 py-1 rounded"
                  style={{ 
                    backgroundColor: `${item.color}20`,
                    color: item.color
                  }}
                >
                  {item.tag}
                </span>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  
                  <h3 
                    className="text-lg font-bold text-white mb-1 group-hover:text-opacity-100"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div 
                  className="absolute -bottom-1 -right-1 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${item.color}30 50%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xl md:text-2xl text-white font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
            Esto no es un curso.{" "}
            <span className="bg-gradient-to-r from-[#00F0FF] to-[#FFD60A] bg-clip-text text-transparent">
              Es el blueprint de un constructor que ya lo hizo.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
