"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, ArrowLeft, MessageCircle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"

interface TypeformContactProps {
  isOpen: boolean
  onClose: () => void
  source?: string
}

export function TypeformContact({ isOpen, onClose, source = "general" }: TypeformContactProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const { language } = useLanguage()

  const questionsES = [
    {
      id: "name",
      question: "Para comenzar, ¿cómo te llamas?",
      placeholder: "Tu nombre completo",
      type: "text",
    },
    {
      id: "business",
      question: "Cuéntanos sobre tu negocio",
      placeholder: "Ej: Estudio de tatuajes, Restaurante, Consultoría...",
      type: "text",
    },
    {
      id: "website",
      question: "¿Tienes sitio web actualmente?",
      placeholder: "www.tusitio.com (o escribe 'no tengo')",
      type: "text",
    },
    {
      id: "goals",
      question: "¿Qué te gustaría lograr con tu nuevo sitio?",
      placeholder: "Más ventas, mejor imagen, automatizar consultas...",
      type: "textarea",
    },
    {
      id: "budget",
      question: "¿Qué paquete te interesa?",
      options: ["Paquete Core (1,000 €)", "Core + IA Add-on (1,997 €)", "Solo quiero información"],
      type: "options",
    },
  ]

  const questionsEN = [
    {
      id: "name",
      question: "To start, what's your name?",
      placeholder: "Your full name",
      type: "text",
    },
    {
      id: "business",
      question: "Tell us about your business",
      placeholder: "E.g.: Tattoo studio, Restaurant, Consulting...",
      type: "text",
    },
    {
      id: "website",
      question: "Do you currently have a website?",
      placeholder: "www.yoursite.com (or type 'I don't have one')",
      type: "text",
    },
    {
      id: "goals",
      question: "What would you like to achieve with your new site?",
      placeholder: "More sales, better image, automate inquiries...",
      type: "textarea",
    },
    {
      id: "budget",
      question: "Which package interests you?",
      options: ["Core Package ($1,000)", "Core + AI Add-on ($1,997)", "I just want information"],
      type: "options",
    },
  ]

  const questions = language === "es" ? questionsES : questionsEN
  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Build WhatsApp message
    const messageES = `Hola! Me interesa una consultoría para mi sitio web.

*Información de contacto:*
- Nombre: ${answers.name || "No especificado"}
- Negocio: ${answers.business || "No especificado"}
- Sitio actual: ${answers.website || "No especificado"}
- Objetivos: ${answers.goals || "No especificado"}
- Paquete de interés: ${answers.budget || "No especificado"}
- Origen: ${source}`

    const messageEN = `Hi! I'm interested in a consultation for my website.

*Contact Information:*
- Name: ${answers.name || "Not specified"}
- Business: ${answers.business || "Not specified"}
- Current site: ${answers.website || "Not specified"}
- Goals: ${answers.goals || "Not specified"}
- Package of interest: ${answers.budget || "Not specified"}
- Source: ${source}`

    const message = language === "es" ? messageES : messageEN
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/56930835236?text=${encodedMessage}`

    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
      window.open(whatsappUrl, "_blank")
    }, 1000)
  }

  const handleClose = () => {
    setCurrentStep(0)
    setAnswers({})
    setIsComplete(false)
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && answers[currentQuestion?.id]) {
      e.preventDefault()
      handleNext()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-2xl mx-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          {/* Progress bar */}
          <div className="h-1 bg-slate-700">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0066FF] to-[#00D9FF]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              {isComplete ? (
                <motion.div
                  key="complete"
                  className="flex-1 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <Check className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {language === "es" ? "Te estamos redirigiendo a WhatsApp" : "Redirecting you to WhatsApp"}
                  </h3>
                  <p className="text-white/70 mb-6">
                    {language === "es"
                      ? "Un asesor te contactará en las próximas horas"
                      : "An advisor will contact you within the next few hours"}
                  </p>
                  <Button
                    onClick={handleClose}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    {language === "es" ? "Cerrar" : "Close"}
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={currentStep}
                  className="flex-1 flex flex-col"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Question number */}
                  <div className="text-[#00D9FF] text-sm font-medium mb-2">
                    {currentStep + 1} → {questions.length}
                  </div>

                  {/* Question */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{currentQuestion.question}</h2>

                  {/* Input */}
                  <div className="flex-1">
                    {currentQuestion.type === "text" && (
                      <Input
                        type="text"
                        placeholder={currentQuestion.placeholder}
                        value={answers[currentQuestion.id] || ""}
                        onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                        onKeyDown={handleKeyDown}
                        className="w-full h-14 bg-white/5 border-white/10 text-white text-lg placeholder:text-white/30 focus:border-[#00D9FF] focus:ring-[#00D9FF]"
                        autoFocus
                      />
                    )}

                    {currentQuestion.type === "textarea" && (
                      <Textarea
                        placeholder={currentQuestion.placeholder}
                        value={answers[currentQuestion.id] || ""}
                        onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                        className="w-full min-h-[120px] bg-white/5 border-white/10 text-white text-lg placeholder:text-white/30 focus:border-[#00D9FF] focus:ring-[#00D9FF] resize-none"
                        autoFocus
                      />
                    )}

                    {currentQuestion.type === "options" && (
                      <div className="space-y-3">
                        {currentQuestion.options?.map((option, index) => (
                          <motion.button
                            key={index}
                            onClick={() => {
                              setAnswers({ ...answers, [currentQuestion.id]: option })
                            }}
                            className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${answers[currentQuestion.id] === option
                              ? "border-[#00D9FF] bg-[#00D9FF]/10 text-white"
                              : "border-white/10 bg-white/5 text-white/80 hover:border-white/30"
                              }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-lg bg-white/10 text-sm font-medium">
                              {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-30"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      {language === "es" ? "Atrás" : "Back"}
                    </Button>

                    <Button
                      onClick={handleNext}
                      disabled={!answers[currentQuestion.id] || isSubmitting}
                      className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] hover:from-[#0055DD] hover:to-[#00C9EF] text-white px-6"
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                      ) : currentStep === questions.length - 1 ? (
                        <>
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {language === "es" ? "Enviar por WhatsApp" : "Send via WhatsApp"}
                        </>
                      ) : (
                        <>
                          {language === "es" ? "Continuar" : "Continue"}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Keyboard hint */}
                  {currentQuestion.type !== "options" && (
                    <p className="text-center text-white/30 text-sm mt-4">
                      {language === "es" ? "Presiona" : "Press"}{" "}
                      <span className="text-white/50 font-medium">Enter ↵</span>{" "}
                      {language === "es" ? "para continuar" : "to continue"}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
