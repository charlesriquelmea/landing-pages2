'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/lib/language-context'

export default function FAQSection() {
  const { t, language } = useLanguage()

  const faqs = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q2, answer: t.faq.a2 },
    { question: t.faq.q3, answer: t.faq.a3 },
    { question: t.faq.q4, answer: t.faq.a4 },
    { question: t.faq.q5, answer: t.faq.a5 },
    { question: t.faq.q6, answer: t.faq.a6 },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative" id="faq">
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
            {/* Note: User's original code had hardcoded style span, so we follow it if possible or use translation structure */}
            {/* But since translation has full title string, we might lose the color span unless we split it */}
            {/* The user's code: Preguntas <span className="text-[#2563EB]">Frecuentes</span> */}
            {/* My translation file just says "Preguntas Frecuentes" */}
            {/* To keep it exactly as user asked: */}
            {language === 'es' ? (
              <>Preguntas <span className="text-[#2563EB]">Frecuentes</span></>
            ) : (
              <>Frequently Asked <span className="text-[#2563EB]">Questions</span></>
            )}
          </h2>
          <p className="text-xl text-slate-400 text-pretty">
            {language === 'es' ? 'Todo lo que necesitas saber sobre LeadOps OS' : 'Everything you need to know about LeadOps OS'}
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
          <p className="text-xl text-white mb-2">{t.faq.cta_title}</p>
          <p className="text-slate-400">
            {t.faq.cta_description}
            <a
              href="#order-form"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-[#2563EB] hover:text-[#06B6D4] font-semibold underline"
            >
              {t.faq.cta_link}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
