"use client"

import { motion } from "framer-motion"
import { Clock, Users, Calendar, Award, MapPin } from "lucide-react"

export default function CourseOverview() {
  const overviewItems = [
    {
      icon: <Calendar className="h-6 w-6 text-orange-500" />,
      title: "Fecha",
      description: "15-17 Diciembre, 2024",
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "Duracion",
      description: "54 horas intensivas",
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Participantes",
      description: "25 cupos limitados",
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: "Incluye",
      description: "Certificado, materiales y comidas",
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-500 mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            Orlando, Florida 🇺🇸
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Resumen del Sprint</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-gray-300">
            Un fin de semana intensivo para emprendedores latinos que quieren crear soluciones innovadoras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl p-6 text-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-orange-500/10">{item.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Descripcion del sprint</h3>
            <span className="text-2xl">🇺🇸</span>
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-gray-300 text-lg mb-4">
              El <strong className="text-orange-500">"Ship Fast - Edicion Latina Orlando"</strong> es un sprint
              intensivo de 54 horas, disenado especificamente para emprendedores latinos que buscan innovar en la
              experiencia del consumidor. Durante un fin de semana completo, tendras la oportunidad de colaborar con
              mentores expertos y un equipo multidisciplinario para lograr los siguientes objetivos:
            </p>
            <ul className="text-slate-700 dark:text-gray-300 space-y-3 text-base">
              <li>
                <strong className="text-slate-900 dark:text-white">Identificacion de Puntos de Friccion:</strong>{" "}
                Analizar y mapear la jornada del consumidor para identificar areas de mejora.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Desarrollo de Soluciones Innovadoras:</strong>{" "}
                Generar ideas y desarrollar soluciones creativas que aborden los problemas identificados.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Creacion de Prototipos:</strong> Disenar y construir
                prototipos de productos o servicios centrados en el usuario.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Validacion de Ideas:</strong> Probar y validar tus
                ideas con consumidores reales, obteniendo retroalimentacion valiosa.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Elaboracion de un Plan de Implementacion:</strong>{" "}
                Preparar un plan de implementacion viable que detalle los pasos necesarios.
              </li>
            </ul>
            <p className="text-slate-700 dark:text-gray-300 text-lg mt-4">
              Al finalizar el sprint, contaras con una solucion validada y lista para mejorar la experiencia del
              consumidor. Los proyectos mas destacados recibiran mentoria continua y oportunidades de financiamiento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
