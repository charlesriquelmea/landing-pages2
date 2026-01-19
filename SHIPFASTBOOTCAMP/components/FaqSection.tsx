"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FaqSection() {
  const faqs = [
    {
      question: "Necesito experiencia previa en innovacion?",
      answer:
        "No es necesario. El Ship Fast Orlando esta disenado para todos los niveles de experiencia. Nuestra metodologia te guiara paso a paso en el proceso de innovacion, independientemente de tu conocimiento previo.",
    },
    {
      question: "Funciona para cualquier tamano de negocio?",
      answer:
        "Si! Tenemos participantes desde emprendedores individuales hasta representantes de empresas. La metodologia es adaptable y funciona para negocios de todos los tamanos.",
    },
    {
      question: "Las comidas estan incluidas?",
      answer:
        "Si, la entrada incluye todas las comidas durante el evento (cenas de viernes y sabado, desayunos y almuerzos de sabado y domingo).",
    },
    {
      question: "Existe seguimiento posterior?",
      answer:
        "Si, ofrecemos 30 dias de mentoria post-evento para los participantes, ademas de acceso a nuestra comunidad exclusiva de innovadores latinos.",
    },
    {
      question: "Como protegemos mis ideas durante el sprint?",
      answer:
        "Todos los participantes firman un acuerdo de confidencialidad al inicio del evento. Ademas, fomentamos la colaboracion abierta, pero tu decides cuanto quieres compartir.",
    },
    {
      question: "Como funciona el soporte de IA durante el proceso?",
      answer:
        "Disponibilizamos herramientas de IA que ayudan en la investigacion de mercado, generacion de ideas y validacion de conceptos. Nuestros facilitadores te ayudaran a utilizar estas herramientas de forma eficaz.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
      ))}
    </div>
  )
}

interface FaqItemProps {
  question: string
  answer: string
  index: number
}

function FaqItem({ question, answer, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("mb-4 rounded-xl overflow-hidden", "bg-slate-800/50 border border-slate-700")}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center justify-center w-6 h-6 rounded-full ${
            isOpen ? "bg-orange-500/20 text-orange-400" : "bg-slate-700 text-gray-400"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 text-gray-300">{answer}</div>
      </motion.div>
    </motion.div>
  )
}
