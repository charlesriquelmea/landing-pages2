"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Users, Lightbulb, Presentation, Award } from "lucide-react"

export default function Timeline() {
  const timelineEvents = [
    {
      day: "Viernes",
      date: "Dia 1",
      color: "orange",
      events: [
        { time: "18:30", title: "Registro y Networking", icon: <Users className="h-5 w-5" /> },
        { time: "19:00", title: "Presentacion del Evento", icon: <Presentation className="h-5 w-5" /> },
        { time: "19:30", title: "Inmersion en el problema", icon: <Lightbulb className="h-5 w-5" />, highlight: true },
        { time: "21:00", title: "Definicion del desafio", icon: <Lightbulb className="h-5 w-5" />, highlight: true },
        { time: "22:30", title: "Cierre del dia", icon: <Clock className="h-5 w-5" /> },
      ],
    },
    {
      day: "Sabado",
      date: "Dia 2",
      color: "pink",
      events: [
        { time: "09:00", title: "Desayuno y Planificacion", icon: <Calendar className="h-5 w-5" /> },
        { time: "10:00", title: "Definicion precisa del problema", icon: <Lightbulb className="h-5 w-5" /> },
        { time: "13:00", title: "Almuerzo", icon: <Clock className="h-5 w-5" /> },
        {
          time: "14:00",
          title: "Ideacion y seleccion de soluciones",
          icon: <Lightbulb className="h-5 w-5" />,
          highlight: true,
        },
        { time: "16:00", title: "Inicio del prototipado", icon: <Presentation className="h-5 w-5" />, highlight: true },
        { time: "18:00", title: "Mentoria con especialistas", icon: <Users className="h-5 w-5" /> },
        { time: "20:00", title: "Cena y Networking", icon: <Users className="h-5 w-5" /> },
      ],
    },
    {
      day: "Domingo",
      date: "Dia 3",
      color: "purple",
      events: [
        { time: "09:00", title: "Desayuno Final", icon: <Calendar className="h-5 w-5" /> },
        { time: "10:00", title: "Finalizacion del prototipo", icon: <Presentation className="h-5 w-5" /> },
        { time: "11:00", title: "Validacion con usuarios", icon: <Users className="h-5 w-5" />, highlight: true },
        { time: "13:00", title: "Almuerzo", icon: <Clock className="h-5 w-5" /> },
        { time: "14:00", title: "Pitch Final", icon: <Presentation className="h-5 w-5" />, highlight: true },
        { time: "16:00", title: "Premiacion", icon: <Award className="h-5 w-5" />, highlight: true },
        { time: "17:00", title: "Cierre del Evento", icon: <Users className="h-5 w-5" /> },
      ],
    },
  ]

  return (
    <section id="agenda" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-500 mb-4">
            Agenda
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">54 Horas de Innovacion</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-gray-300">
            Un fin de semana intensivo para transformar ideas en proyectos reales con impacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {timelineEvents.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <div
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-bold mb-4 ${
                  day.color === "orange"
                    ? "bg-orange-500/10 text-orange-500"
                    : day.color === "pink"
                      ? "bg-pink-500/10 text-pink-500"
                      : "bg-purple-500/10 text-purple-500"
                }`}
              >
                {day.day}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{day.date}</h3>

              <ul className="space-y-4 relative">
                <div
                  className={`absolute left-[18px] top-0 bottom-0 w-0.5 ${
                    day.color === "orange"
                      ? "bg-orange-500/30"
                      : day.color === "pink"
                        ? "bg-pink-500/30"
                        : "bg-purple-500/30"
                  }`}
                />

                {day.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="flex items-start">
                    <div
                      className={`relative flex items-center justify-center w-9 h-9 rounded-full mr-4 ${
                        event.highlight
                          ? day.color === "orange"
                            ? "bg-orange-500 text-white"
                            : day.color === "pink"
                              ? "bg-pink-500 text-white"
                              : "bg-purple-500 text-white"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-gray-300"
                      }`}
                    >
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h4
                          className={`font-medium ${
                            event.highlight
                              ? day.color === "orange"
                                ? "text-orange-500"
                                : day.color === "pink"
                                  ? "text-pink-500"
                                  : "text-purple-500"
                              : "text-slate-900 dark:text-white"
                          }`}
                        >
                          {event.title}
                        </h4>
                        <span className="text-sm text-slate-500 dark:text-gray-400">{event.time}</span>
                      </div>
                      {event.highlight && (
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                            day.color === "orange"
                              ? "bg-orange-500/10 text-orange-500"
                              : day.color === "pink"
                                ? "bg-pink-500/10 text-pink-500"
                                : "bg-purple-500/10 text-purple-500"
                          }`}
                        >
                          Momento clave
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
