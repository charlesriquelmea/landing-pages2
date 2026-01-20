"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Necesito saber programar?",
    answer: "No. v0.dev, Lovable y n8n están diseñados para no-programadores. Si sabes usar WhatsApp y Google, puedes usar estas herramientas. El bootcamp asume cero conocimiento técnico.",
  },
  {
    question: "¿Realmente puedo ahorrar $20K-$30K?",
    answer: "Sí. Los precios de mercado para landing pages ($5K-$10K), automatizaciones ($3K-$5K) y apps custom ($15K+) están documentados. Al aprender a hacerlo tú mismo, no solo ahorras esa inversión inicial, sino también los costos de mantenimiento y actualizaciones ($2K-$5K/año).",
  },
  {
    question: "¿Qué pasa si no puedo asistir al Sprint de Innovación presencial?",
    answer: "Ofrecemos modalidad 100% remota con el mismo contenido en sesiones virtuales intensivas. Aunque recomendamos la experiencia presencial por el networking, la versión remota es igualmente efectiva.",
  },
  {
    question: "¿Cuánto tiempo debo dedicar semanalmente?",
    answer: "Mínimo: 8-10 horas/semana (contenido pregrabado + sesiones live). Recomendado: 12-15 horas/semana (incluye práctica adicional). Sprint de Innovación: 3 días completos (9 AM - 6 PM). El bootcamp está diseñado para dueños de negocio con tiempo limitado. Todo el contenido pregrabado es accesible 24/7.",
  },
  {
    question: "¿Las herramientas (v0, Lovable, n8n) tienen costo adicional?",
    answer: "v0.dev: Tiene plan gratuito generoso. Plan pro: $20/mes (opcional). Lovable: $20/mes (primer mes gratis con bootcamp). n8n: Self-hosted gratis ilimitado. Cloud: desde $20/mes (opcional). Total herramientas: $0-$60/mes dependiendo de tu escala. Te enseñamos a maximizar los planes gratuitos.",
  },
  {
    question: "¿En qué idioma es el bootcamp?",
    answer: "Contenido y facilitación 100% en español neutro latino. Las herramientas (v0, Lovable, n8n) están en inglés, pero te enseñamos a usarlas desde cero. Además, usamos IA para traducir interfaces cuando es necesario.",
  },
  {
    question: "¿Ofrecen planes de pago?",
    answer: "Sí: Pago completo con 5% descuento adicional, 3 pagos mensuales sin interés, o 6 pagos mensuales con interés mínimo. También aceptamos tarjeta de crédito, transferencia bancaria, Zelle, Venmo.",
  },
  {
    question: "¿Qué pasa si empiezo y no puedo continuar?",
    answer: "Primeras 2 semanas: Reembolso completo, sin preguntas. Después de 2 semanas: Puedes pausar y retomar en la siguiente cohorte (hasta 6 meses). Emergencias: Evaluamos caso por caso. Tu éxito es nuestro éxito. Somos flexibles.",
  },
  {
    question: "¿Puedo aplicar si mi negocio no es de las industrias mencionadas?",
    answer: "¡Absolutamente! Los casos de uso (restaurantes, limpieza, real estate, etc.) son ejemplos. El stack (v0 + Lovable + n8n) funciona para cualquier industria. Durante la aplicación, te ayudamos a diseñar tu roadmap específico.",
  },
  {
    question: "¿Cómo es el proceso de aplicación?",
    answer: "1. Llenas formulario corto (5 minutos). 2. Llamada de 15-20 min con nuestro equipo (conocer tu negocio y objetivos). 3. Si es buen fit, recibes oferta de admisión. 4. Reservas tu cupo con depósito. No es competitivo. Si tienes un negocio real y ganas de aprender, probablemente calificas.",
  },
  {
    question: "¿Dónde se realiza el Sprint de Innovación presencial?",
    answer: "Rotamos entre ciudades con alta concentración de negocios latinos: Los Angeles, CA | Houston, TX | Miami, FL | Chicago, IL | New York, NY. Eliges la ciudad más conveniente al momento de tu cohorte. Anunciamos ubicaciones con 4 semanas de anticipación.",
  },
  {
    question: "¿Puedo traer a mi equipo (socio, gerente, etc.)?",
    answer: "Sí. Ofrecemos descuento de equipo: 2 personas del mismo negocio: 15% descuento c/u. 3+ personas: 20% descuento c/u. Esto acelera la implementación al tener múltiples personas capacitadas.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} id="faq" className="py-20 bg-gradient-to-b from-[#0A0E1A] to-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas <span className="text-cyan-400">frecuentes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de aplicar
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-xl transition-all ${
                  openIndex === index
                    ? "bg-gradient-to-br from-[#1a1f35] to-[#0d1020] border border-cyan-500/30"
                    : "bg-[#1a1f35]/50 border border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-white text-lg">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-cyan-400" : "text-gray-500"}`} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
