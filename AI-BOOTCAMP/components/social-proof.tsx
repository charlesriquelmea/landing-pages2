"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"

function CountUp({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = end / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, end])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const testimonials = [
  {
    quote: "Iba a pagar $8,000 USD por una landing. En el bootcamp la hice yo mismo y además creé 5 automatizaciones que me ahorran 15 horas/semana.",
    author: "Carlos M.",
    business: "Dueño, Mi Taquería (Houston, TX)",
    savings: "Ahorro: $12,000 USD primer año",
    avatar: "CM",
  },
  {
    quote: "Contraté un desarrollador por $15K USD para un sistema de citas. Ahora lo mantengo y actualizo yo mismo con Lovable.",
    author: "María G.",
    business: "Dueña, Bella Nails (Miami, FL)",
    savings: "Ahorro: $18,000 USD primer año",
    avatar: "MG",
  },
  {
    quote: "Mi negocio de landscaping ahora tiene cotizador automático y portal de clientes. Antes pagaba $200 USD/mes a un freelancer.",
    author: "Roberto S.",
    business: "Dueño, Verde Landscaping (LA, CA)",
    savings: "Ahorro: $8,500 USD primer año",
    avatar: "RS",
  },
]

const tools = [
  { name: "v0.dev", color: "from-blue-500 to-blue-600" },
  { name: "Lovable", color: "from-pink-500 to-rose-500" },
  { name: "n8n", color: "from-orange-500 to-red-500" },
  { name: "Gemini", color: "from-blue-400 to-cyan-400" },
  { name: "NotebookLM", color: "from-purple-500 to-indigo-500" },
  { name: "Claude", color: "from-amber-500 to-yellow-500" },
]

export function SocialProof() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-[#0A0E1A] to-[#0F172A]">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { value: 30000, prefix: "$", suffix: " USD", label: "Ahorro promedio por alumno" },
            { value: 450, suffix: "%", label: "ROI promedio primer año" },
            { value: 87, suffix: "%", label: "Lanzaron su proyecto en 10 semanas" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
              <div className="relative bg-[#1a1f35]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-500/30 transition-colors">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            Lo que dicen nuestros <span className="text-cyan-400">graduados</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-[#1a1f35]/80 to-[#0d1020]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group"
              >
                <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.business}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-green-400 font-semibold text-sm">{testimonial.savings}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative overflow-hidden"
        >
          <p className="text-center text-gray-400 mb-6">Powered by las mejores herramientas:</p>
          <div className="flex gap-8 animate-marquee">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-6 py-3 rounded-full bg-gradient-to-r ${tool.color} bg-opacity-10 border border-white/10`}
              >
                <span className="font-semibold text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
