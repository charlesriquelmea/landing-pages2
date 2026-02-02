"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { HackerText } from "./hacker-text"
import { AlertTriangle, TrendingDown, Bot, Users } from "lucide-react"

export function WhySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 bg-[#050505] overflow-hidden">
      {/* Accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FFD60A] to-transparent opacity-50" />
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[#FFD60A]/10 border border-[#FFD60A]/30 rounded-full text-[#FFD60A] font-mono text-sm mb-6">
            LA MATEMÁTICA ES BRUTAL
          </span>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-white">Adáptate o </span>
            <span className="text-[#FFD60A]">
              <HackerText text="Extínguete" delay={500} />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            No es pesimismo, es <span className="text-[#00F0FF] font-semibold">LaborZero</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="bg-gradient-to-r from-[#FFD60A]/5 to-transparent border-l-4 border-[#FFD60A] p-6 rounded-r-lg">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              La Inteligencia Artificial ha provocado una{" "}
              <span className="text-[#FFD60A] font-bold">&quot;Inversión de la Inteligencia&quot;</span>: el conocimiento técnico y cognitivo, que antes era escaso y caro, ahora es un commodity que cuesta centavos.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            La realidad que nadie te cuenta:
          </h3>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-[#FFD60A]/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FFD60A]/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-[#FFD60A]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Obsolescencia Inmediata</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Si tu trabajo consiste en procesar información frente a una pantalla, la IA ya es{" "}
                    <span className="text-[#00F0FF]">Mejor, Más Rápida, Más Barata</span> y{" "}
                    <span className="text-[#00F0FF]">Más Segura</span> que tú.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-[#FFD60A]/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FFD60A]/10 flex items-center justify-center shrink-0">
                  <TrendingDown className="w-6 h-6 text-[#FFD60A]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">El Desacople</h4>
                  <p className="text-gray-400 leading-relaxed">
                    La productividad de las empresas se ha disparado, pero los salarios se estancan o desaparecen. El valor ya no fluye hacia quien hace el trabajo, sino hacia{" "}
                    <span className="text-[#FFD60A]">quien posee y orquesta los sistemas</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Two roles section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-xl md:text-2xl text-white font-semibold mb-6 text-center">
              En este nuevo mundo, solo quedan dos roles:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900/50 to-transparent border border-white/5 rounded-xl p-6 text-center">
                <Bot className="w-10 h-10 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">
                  El que es <span className="text-gray-300 font-semibold">automatizado</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">(Clase trabajadora tradicional)</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#00F0FF]/10 to-[#FFD60A]/5 border border-[#00F0FF]/30 rounded-xl p-6 text-center">
                <Users className="w-10 h-10 text-[#00F0FF] mx-auto mb-4" />
                <p className="text-white text-lg font-semibold">
                  El que <span className="text-[#00F0FF]">controla</span> la automatización
                </p>
                <p className="text-sm text-[#FFD60A] mt-2">(El nuevo fundador)</p>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-center text-gray-300 mt-8"
          >
            La clase media técnica está en peligro de extinción.{" "}
            <span className="text-[#00F0FF] font-bold">Buskode</span> y{" "}
            <span className="text-[#FFD60A] font-bold">Buskero</span>{" "}
            son tu balsa salvavidas y tu cañón de abordaje.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
