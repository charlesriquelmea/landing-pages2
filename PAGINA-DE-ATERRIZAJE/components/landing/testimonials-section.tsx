"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    name: "Inkstinct by Blue",
    role: "Estudio de Tatuajes",
    quote:
      "Desde que lanzamos el nuevo sitio, nuestras reservas aumentaron un 140%. La velocidad de carga con Next.js es instantánea, lo que atrapa al cliente de inmediato. Además, ya no perdemos tiempo administrativo: Resend maneja las notificaciones al segundo y el CRM en Budibase nos da un control total de cada lead. Es como tener un departamento de ventas y administración trabajando en piloto automático.",
    rating: 5,
    metric: "+340%",
    metricLabel: "Reservas",
    siteUrl: "https://inkstinctnyc.com/",
  },
  {
    name: "Victor Mane Tattoo",
    role: "Artista del Tatuaje",
    quote:
      "Antes perdía 2 horas diarias respondiendo las mismas preguntas. Ahora el chatbot maneja todo y yo me enfoco en tatuar. Mi calendario está lleno 3 semanas por adelantado.",
    rating: 5,
    metric: "3 sem",
    metricLabel: "Lista de espera",
    siteUrl: "https://victormanetattoo.protolylat.com/",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLanguage()

  return (
    // ÚNICO CAMBIO: py-24 md:py-32  --->  py-16 md:py-24
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t("testimonials.title").split(" ").slice(0, 4).join(" ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#8B5CF6]">
              {t("testimonials.title").split(" ").slice(4).join(" ")}
            </span>
          </h2>
          <p className="text-lg text-slate-600">{t("testimonials.subtitle")}</p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#0066FF]/30 transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-[#0066FF]/10" />

              {/* Profile - CENTRADO */}
              <div className="flex flex-col items-center text-center mb-6">
                <h4 className="font-bold text-slate-900 text-xl">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
                {/* Stars Centered */}
                <div className="flex gap-1 mt-2 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Quote - JUSTIFICADO */}
              <blockquote className="text-slate-700 leading-relaxed mb-6 text-justify">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Metric and Site Link */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-black text-[#0066FF]">{testimonial.metric}</div>
                  <div className="text-sm text-slate-500">{testimonial.metricLabel}</div>
                </div>

                {testimonial.siteUrl && (
                  <motion.a
                    href={testimonial.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-[#0066FF] text-slate-600 hover:text-white rounded-full text-sm font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t("testimonials.viewSite")}</span>
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}