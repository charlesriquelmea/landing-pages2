"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"

const forYou = [
  "Dueño de small business en USA que quiere digitalizarse",
  "Emprendedor latino que invierte $3K-$10K/año en marketing y no ve ROI",
  "Persona con idea de negocio pero sin capital para desarrolladores",
  "Gerente/operador que pierde horas en tareas repetitivas",
  "Alguien que ya intentó Canva, Wix, pero necesita más poder",
]

const notForYou = [
  "Buscas hacerte rico rápido sin esfuerzo",
  "No tienes 8-12 horas/semana para dedicar",
  "Solo quieres consumir contenido, no implementar",
  "Esperas que te hagan todo el trabajo",
  "Tu negocio no tiene clientes o producto definido",
]

export function ForWhoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Es para <span className="text-cyan-400">ti</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Queremos que tomes la mejor decisión. Revisa si este programa es lo que necesitas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              Sí es para ti si...
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Check className="w-4 h-4 text-green-400" />
                  </motion.div>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-red-500/10 to-rose-500/5 border border-red-500/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              No es para ti si...
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <X className="w-4 h-4 text-red-400" />
                  </motion.div>
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
