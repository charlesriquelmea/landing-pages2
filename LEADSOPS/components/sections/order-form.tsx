'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft, Send, Edit2, Loader2, Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

// --- CONFIGURACIÓN ---
const WHATSAPP_NUMBER = '+56930835236' 

// --- DATOS ---
export default function OrderForm() {
  const { t } = useLanguage()
  const [step, setStep] = useState(-1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    vertical: '',
    plan: '',
    comments: '',
  })

  // Mapeamos las preguntas desde la traducción y le añadimos la configuración técnica
  const questionsConfig = [
    { type: 'input', field: 'name' }, // q1
    { type: 'input', inputType: 'email', field: 'email' }, // q2
    { type: 'input', inputType: 'tel', field: 'phone' }, // q3
    { type: 'input', field: 'business' }, // q4
    { type: 'select', field: 'vertical', options: t.order_form.verticals }, // q5
    { type: 'select', field: 'plan', options: t.order_form.plans }, // q6
    { type: 'textarea', field: 'comments', optional: true }, // q7
  ]

  const questions = t.order_form.questions.map((q: any, i: number) => ({
    ...q,
    ...questionsConfig[i]
  }))

  // --- LOGICA ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectOption = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    setTimeout(() => nextStep(), 400)
  }

  const nextStep = () => {
    if (step < questions.length) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > -1) setStep(step - 1)
  }

  const startForm = () => setStep(0)

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

  const canProceed = () => {
    if (step === -1) return true
    if (step === questions.length) return true // Resumen

    const currentQ = questions[step]
    if (!currentQ) return false
    if (currentQ.optional) return true

    const value = formData[currentQ.field as keyof typeof formData] || ''

    if (currentQ.field === 'email') return isValidEmail(value)
    return value.toString().trim() !== ''
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    const selectedPlan = t.order_form.plans.find((p: any) => p.value === formData.plan)
    const selectedVertical = t.order_form.verticals.find((v: any) => v.value === formData.vertical)

    const message = `
🚀 *${t.order_form.whatsapp_message.title}*

👤 *${t.order_form.whatsapp_message.client}:* ${formData.name}
📧 *${t.order_form.whatsapp_message.email}:* ${formData.email}
📱 *${t.order_form.whatsapp_message.phone}:* ${formData.phone}

🏢 *${t.order_form.whatsapp_message.business}:* ${formData.business}
🔧 *${t.order_form.whatsapp_message.vertical}:* ${selectedVertical?.name || formData.vertical}

📦 *${t.order_form.whatsapp_message.plan}:* ${selectedPlan?.display}
💬 *${t.order_form.whatsapp_message.note}:* ${formData.comments || '-'}
    `.trim()

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsSubmitting(false)
    }, 1500)
  }

  // Variables de estado
  const isIntro = step === -1
  const isSummary = step === questions.length
  const currentQuestion = questions[step]
  const progress = ((step + 1) / questions.length) * 100

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center bg-gradient-to-b from-[#0F172A] to-[#1E293B] overflow-hidden" id="order-form">

      {/* Fondo Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">

        {/* --- PANTALLA DE BIENVENIDA (Step -1) --- */}
        <AnimatePresence mode="wait">
          {isIntro && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-10"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-6">
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                {t.order_form.intro.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  {t.order_form.intro.title_highlight}
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                {t.order_form.intro.subtitle}
              </p>
              <Button
                onClick={startForm}
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
              >
                {t.order_form.intro.cta_button} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* --- FORMULARIO Y PREGUNTAS (Steps 0+) --- */}
          {!isIntro && (
            <motion.div
              key="form-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full"
            >
              {/* Barra de Progreso */}
              <div className="mb-12">
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#2563EB] to-[#22C55E]"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="mt-3 flex justify-between text-sm text-slate-400 font-medium">
                  <span>{isSummary ? t.order_form.steps_status.summary : `${t.order_form.steps_status.step_prefix} ${step + 1} ${t.order_form.steps_status.step_of} ${questions.length}`}</span>
                  <span>{Math.round(Math.min(progress, 100))}%</span>
                </div>
              </div>

              {/* Contenido Dinámico */}
              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  {!isSummary ? (
                    // PREGUNTAS
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        {currentQuestion.text}
                      </h2>
                      <p className="text-lg text-slate-400 mb-8">
                        {currentQuestion.description}
                      </p>

                      {/* INPUTS */}
                      <div className="space-y-6">
                        {currentQuestion.type === 'input' && (
                          <input
                            type={currentQuestion.inputType || 'text'}
                            name={currentQuestion.field}
                            value={formData[currentQuestion.field as keyof typeof formData]}
                            onChange={handleInputChange}
                            onKeyDown={(e) => e.key === 'Enter' && canProceed() && nextStep()}
                            className="w-full bg-transparent border-b-2 border-slate-700 focus:border-blue-500 text-white text-3xl py-4 outline-none transition-colors placeholder:text-slate-700"
                            placeholder={currentQuestion.placeholder}
                            autoFocus
                          />
                        )}

                        {currentQuestion.type === 'textarea' && (
                          <div className="relative z-20">
                            <textarea
                              name={currentQuestion.field}
                              value={formData[currentQuestion.field as keyof typeof formData] || ''}
                              onChange={handleInputChange}
                              className="w-full bg-slate-800/50 rounded-xl border border-slate-700 focus:border-blue-500 text-white text-xl p-6 outline-none min-h-[150px] resize-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                              placeholder={currentQuestion.placeholder}
                              autoFocus
                            />
                            <p className="mt-3 text-sm text-slate-500 text-right">
                              {currentQuestion.helper}
                            </p>
                          </div>
                        )}

                        {currentQuestion.type === 'select' && (
                          <div className="grid sm:grid-cols-2 gap-4">
                            {currentQuestion.options?.map((option: any) => (
                              <button
                                key={option.id}
                                onClick={() => handleSelectOption(currentQuestion.field, option.value)}
                                className={`p-6 rounded-xl border-2 text-left transition-all ${formData[currentQuestion.field as keyof typeof formData] === option.value
                                  ? 'bg-blue-600/20 border-blue-500'
                                  : 'bg-slate-800/40 border-slate-700 hover:bg-slate-800'
                                  }`}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  {option.icon && <span className="text-2xl">{option.icon}</span>}
                                  <span className="text-white font-bold text-lg">{option.display || option.name}</span>
                                </div>
                                {option.price && <div className="text-sm text-green-400 font-medium">{option.price}</div>}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Error de Email */}
                        {currentQuestion.field === 'email' && formData.email && !isValidEmail(formData.email) && currentQuestion.error && (
                          <p className="text-red-400 text-sm">{currentQuestion.error}</p>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    // RESUMEN
                    <motion.div
                      key="summary"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8"
                    >
                      <h2 className="text-3xl font-bold text-white mb-6">{t.order_form.summary.title}</h2>
                      <div className="space-y-6 text-white">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <p className="text-slate-500 text-xs uppercase font-bold">{t.order_form.summary.client_label}</p>
                            <p className="text-lg font-medium">{formData.name}</p>
                            <p className="text-slate-400 text-sm">{formData.email}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 text-xs uppercase font-bold">{t.order_form.summary.business_label}</p>
                            <p className="text-lg font-medium">{formData.business}</p>
                            <p className="text-slate-400 text-sm flex items-center gap-2">
                              {t.order_form.verticals.find((v: any) => v.value === formData.vertical)?.icon}
                              {t.order_form.verticals.find((v: any) => v.value === formData.vertical)?.name}
                            </p>
                          </div>
                        </div>
                        <div className="pt-6 border-t border-slate-700">
                          <p className="text-slate-500 text-xs uppercase font-bold mb-2">{t.order_form.summary.plan_label}</p>
                          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg flex justify-between items-center">
                            <div>
                              <p className="text-blue-400 font-bold">{t.order_form.plans.find((p: any) => p.value === formData.plan)?.name}</p>
                              <p className="text-xs text-slate-300">{t.order_form.plans.find((p: any) => p.value === formData.plan)?.price}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => setStep(5)} className="text-blue-400 hover:text-blue-300">
                              <Edit2 className="w-4 h-4" /> {t.order_form.summary.edit}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Botones de Navegación */}
              <div className="mt-8 flex gap-4">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-slate-600 text-white hover:bg-slate-800"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" /> {t.order_form.buttons.back}
                </Button>

                {!isSummary ? (
                  <Button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    size="lg"
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"
                  >
                    {t.order_form.buttons.next} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    size="lg"
                    disabled={isSubmitting}
                    className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold shadow-lg shadow-green-500/20"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 w-4 h-4 animate-spin" /> {t.order_form.summary.submit_button_processing}</>
                    ) : (
                      <>{t.order_form.summary.submit_button_default} <Send className="ml-2 w-4 h-4" /></>
                    )}
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}