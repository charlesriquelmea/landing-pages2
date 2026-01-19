"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function WhatYouWillLearn() {
  const learningPoints = [
    "Design Thinking Aplicado: metodologia especificamente en la experiencia del consumidor",
    "Mapeo del Viaje del Cliente: identificando puntos de dolor y oportunidades de mejora",
    "Tecnicas de Prototipado Rapido: crear y probar soluciones de manera eficiente",
    "Metodos de Investigacion con Usuarios: validar ideas y obtener retroalimentacion valiosa",
    "Estrategias de Fidelizacion y Engagement: fomentar relaciones duraderas con tu marca",
    "Creacion de Experiencias Memorables: disenar experiencias que dejen impresion duradera",
    "Implementacion de Tecnologia: integrar tecnologias que mejoren la experiencia del consumidor",
    "Metricas para Evaluar la Satisfaccion del Cliente: medir el impacto de tus soluciones",
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-500 mb-4">
              Contenido del sprint
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Lo que aprenderas</h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
              Durante las 54 horas del sprint, adquiriras conocimientos practicos y herramientas esenciales para
              transformar la experiencia del consumidor.
            </p>

            <div className="space-y-4">
              {learningPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 mt-1 mr-4 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-gray-300 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Metodologia del sprint</h3>
                <span className="text-2xl">🇺🇸</span>
              </div>

              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: "Empatia y Descubrimiento",
                    desc: "Te enfocaras en comprender profundamente las necesidades, deseos y frustraciones de los consumidores.",
                    color: "orange",
                  },
                  {
                    num: 2,
                    title: "Ideacion y Prototipado",
                    desc: "Fomentaras la creatividad y colaboracion para desarrollar soluciones innovadoras.",
                    color: "pink",
                  },
                  {
                    num: 3,
                    title: "Prueba y Validacion",
                    desc: "Validaras tus ideas con consumidores reales. Realizaras pruebas de usabilidad y recogeras feedback.",
                    color: "purple",
                  },
                  {
                    num: 4,
                    title: "Implementacion",
                    desc: "Desarrollaras un plan de accion detallado para implementar tu solucion en el mundo real.",
                    color: "blue",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        step.color === "orange"
                          ? "bg-orange-500/20 text-orange-500"
                          : step.color === "pink"
                            ? "bg-pink-500/20 text-pink-500"
                            : step.color === "purple"
                              ? "bg-purple-500/20 text-purple-500"
                              : "bg-blue-500/20 text-blue-500"
                      }`}
                    >
                      <span className="font-bold text-lg">{step.num}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{step.title}</h4>
                      <p className="text-slate-600 dark:text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
