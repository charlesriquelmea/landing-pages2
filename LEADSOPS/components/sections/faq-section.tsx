'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: '¿Pago por leads malos?',
    answer: 'No. Tenemos un proceso de disputa garantizado. Si un lead no cumple con los criterios de calificación acordados, no pagas. Es así de simple.',
  },
  {
    question: '¿Esto reemplaza mi software de dispatch?',
    answer: 'No, nos integramos perfectamente con ServiceTitan, Housecall Pro, Jobber y otros sistemas populares. LeadOps OS complementa tu stack existente, no lo reemplaza.',
  },
  {
    question: '¿Cuánto tiempo toma configurar?',
    answer: '48 horas. Nuestro equipo incluye onboarding completo: configuración de landing pages, integración con tu calendario, entrenamiento de la IA con tu información, y capacitación de tu equipo.',
  },
  {
    question: '¿Qué pasa si no funciona?',
    answer: 'Garantía de 60 días. Reembolso total, sin preguntas. Si no estás 100% satisfecho con la calidad de leads y el rendimiento del sistema, devolvemos tu inversión completa.',
  },
  {
    question: '¿Funcionan los leads exclusivos realmente?',
    answer: 'Sí. A diferencia de marketplaces de leads compartidos, cada lead que generamos es 100% tuyo. Sin competencia, sin pujas, sin llamadas compartidas con otros 5 contratistas.',
  },
  {
    question: '¿Puedo pausar mi suscripción?',
    answer: 'Absolutamente. Sin contratos de largo plazo. Puedes pausar tu cuenta en cualquier momento si hay temporada baja o necesitas hacer ajustes a tu negocio.',
  },
]

export default function FAQSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Preguntas <span className="text-[#2563EB]">Frecuentes</span>
          </h2>
          <p className="text-xl text-slate-400 text-pretty">
            Todo lo que necesitas saber sobre LeadOps OS
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-800/30 border border-slate-700 rounded-xl px-6 data-[state=open]:border-[#2563EB] transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[#2563EB] py-6 hover:no-underline">
                  <span className="flex items-start gap-3">
                    <span className="text-2xl">❓</span>
                    <span className="text-pretty">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 leading-relaxed pb-6 pl-11">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 border border-[#2563EB]/30 rounded-2xl"
        >
          <p className="text-xl text-white mb-2">¿Más preguntas?</p>
          <p className="text-slate-400">
            Agenda una llamada con nuestro equipo →{' '}
            <a href="#" className="text-[#2563EB] hover:text-[#06B6D4] font-semibold underline">
              Hablar con un experto
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
