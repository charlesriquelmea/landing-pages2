"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  Loader2, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Briefcase, 
  MessageSquare, 
  Check, 
  Sparkles,
  Edit2,
  CheckCircle2
} from "lucide-react"

import { Input } from "@/components/ui/input" 
import { Button } from "@/components/ui/button"

// --- CONFIGURACIÓN ---
const WHATSAPP_NUMBER = '+'

// --- TEXTOS EN ESPAÑOL ---
const t = {
  intro: {
    title: "Comienza tu Transformación",
    title_highlight: "LeadOps OS",
    subtitle: "Completa este formulario rápido para configurar tu sistema. Te tomará menos de 2 minutos.",
    cta_button: "Comenzar Ahora"
  },
  verticals: [
    { id: 'hvac', name: 'HVAC', icon: '🌡️', value: 'hvac' },
    { id: 'plumbing', name: 'Plomería', icon: '🔧', value: 'plumbing' },
    { id: 'roofing', name: 'Techado', icon: '🏠', value: 'roofing' },
    { id: 'electrical', name: 'Eléctrica', icon: '⚡', value: 'electrical' },
    { id: 'realestate', name: 'Bienes Raíces', icon: '🏘️', value: 'realestate' },
    { id: 'clinics', name: 'Clínicas', icon: '🏥', value: 'clinics' },
    { id: 'other', name: 'Otro', icon: '🚀', value: 'other' },
  ],
  questions: [
    {
      id: 'q1',
      text: '¿Cuál es tu nombre?',
      description: 'Así te llamaremos durante todo el proceso',
      placeholder: 'Juan Pérez',
    },
    {
      id: 'q2',
      text: '¿Cuál es tu email?',
      description: 'Para enviarte la confirmación y acceso',
      placeholder: 'juan@empresa.com',
      error: "Por favor ingresa un email válido."
    },
    {
      id: 'q3',
      text: '¿Tu número de WhatsApp?',
      description: 'Para coordinar el setup rápidamente',
      placeholder: '+54 9 11...',
    },
    {
      id: 'q4',
      text: '¿Cómo se llama tu empresa?',
      description: 'Lo usaremos para personalizar tu sistema',
      placeholder: 'HVAC Pro Services',
    },
    {
      id: 'q5',
      text: '¿Cuál es tu rubro?',
      description: 'Optimizaremos el sistema para tu industria',
    },
    {
      id: 'q6',
      text: '¿Algún comentario o duda?',
      description: 'Cuéntanos un poco más sobre tus objetivos (opcional)',
      placeholder: 'Me gustaría saber si...',
      helper: "Presiona Siguiente para continuar"
    }
  ],
  summary: {
    title: "Confirma tus datos",
    client_label: "Contacto",
    business_label: "Empresa",
    rubro_label: "Rubro",
    submit_button_default: "Enviar por WhatsApp"
  },
  success: {
    title: "¡Mensaje Enviado!",
    subtitle: "Se ha abierto WhatsApp con tu pedido. Nos pondremos en contacto contigo a la brevedad.",
    button: "Volver al Inicio"
  },
  buttons: {
    back: "Atrás",
    next: "Siguiente"
  },
  whatsapp_message: {
    title: "NUEVO CONTACTO LEADOPS",
    client: "Cliente",
    email: "Email",
    phone: "WhatsApp",
    business: "Empresa",
    vertical: "Rubro",
    note: "Comentarios"
  },
  errors: {
    required: "Este campo es requerido",
    email: "Email inválido"
  }
}

// Datos iniciales para poder resetear fácil
const INITIAL_DATA = {
  name: '',
  email: '',
  phone: '',
  business: '',
  vertical: '',
  comments: '',
}

export default function OrderFormSection() {
  const [step, setStep] = useState(-1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false) // Nuevo estado de éxito
  const [currentError, setCurrentError] = useState("")
  
  const [formData, setFormData] = useState(INITIAL_DATA)

  const questionsConfig = [
    { field: 'name', icon: User, type: 'input' },
    { field: 'email', icon: Mail, type: 'input', inputType: 'email' },
    { field: 'phone', icon: Phone, type: 'input', inputType: 'tel' },
    { field: 'business', icon: Building2, type: 'input' },
    { field: 'vertical', icon: Briefcase, type: 'select', options: t.verticals },
    { field: 'comments', icon: MessageSquare, type: 'textarea', optional: true },
  ]

  const questions = t.questions.map((q: any, i: number) => ({
    ...q,
    ...questionsConfig[i]
  }))

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    if (step >= 0 && step < questions.length && !isSuccess) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
    setCurrentError("")
  }, [step, isSuccess])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (currentError) setCurrentError("")
  }

  const handleSelectOption = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    setTimeout(() => nextStep(), 300)
  }

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateCurrentStep = () => {
    if (step === -1 || step === questions.length) return true
    
    const currentQ = questions[step]
    if (currentQ.optional) return true

    const value = formData[currentQ.field as keyof typeof formData]

    if (!value || value.toString().trim() === '') {
      setCurrentError(t.errors.required)
      return false
    }

    if (currentQ.field === 'email' && !isValidEmail(value as string)) {
      setCurrentError(t.questions[1].error || t.errors.email)
      return false
    }

    return true
  }

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (step < questions.length) setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > -1) setStep(step - 1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && questions[step]?.type !== 'textarea') {
      e.preventDefault()
      nextStep()
    }
  }

  // --- NUEVA LÓGICA DE RESET ---
  const handleReset = () => {
    setFormData(INITIAL_DATA)
    setIsSuccess(false)
    setStep(-1) // Vuelve a la intro
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    const selectedVertical = t.verticals.find((v: any) => v.value === formData.vertical)

    const message = `
🚀 *${t.whatsapp_message.title}*

👤 *${t.whatsapp_message.client}:* ${formData.name}
📧 *${t.whatsapp_message.email}:* ${formData.email}
📱 *${t.whatsapp_message.phone}:* ${formData.phone}

🏢 *${t.whatsapp_message.business}:* ${formData.business}
🔧 *${t.whatsapp_message.vertical}:* ${selectedVertical?.name || formData.vertical}

💬 *${t.whatsapp_message.note}:* ${formData.comments || '-'}
    `.trim()

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    // Simulamos un pequeño delay y luego mostramos el éxito
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsSubmitting(false)
      setIsSuccess(true) // Activamos la pantalla de éxito
    }, 1500)
  }

  const isIntro = step === -1
  const isSummary = step === questions.length
  const currentQ = questions[step]
  
  const isCurrentValid = !isIntro && !isSummary && !isSuccess && (
    (currentQ.optional && !formData[currentQ.field as keyof typeof formData]) || 
    (formData[currentQ.field as keyof typeof formData]?.toString().length > 0 && !currentError)
  )

  return (
    <section id="order-form" className="flex flex-col items-center justify-center min-h-[800px] px-6 bg-slate-900 border-t border-slate-800 text-white py-20 overflow-hidden relative">
      
      {/* Fondo decorativo */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <AnimatePresence mode="wait">
        
        {/* --- ESTADO: INTRO --- */}
        {isIntro && !isSuccess && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex flex-col items-center text-center max-w-2xl relative z-10"
          >
            <div className="mb-8 p-4 bg-orange-500/10 rounded-full border border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
              <Sparkles className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t.intro.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                {t.intro.title_highlight}
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto">
              {t.intro.subtitle}
            </p>
            <Button 
              onClick={() => setStep(0)}
              className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-10 py-7 text-lg rounded-full shadow-lg shadow-orange-500/20 transition-all hover:scale-105 border-0"
            >
              {t.intro.cta_button} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        )}

        {/* --- ESTADO: PREGUNTAS --- */}
        {!isIntro && !isSummary && !isSuccess && (
          <motion.div
            key={`step-${step}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg flex flex-col items-center relative z-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-semibold mb-2 text-center leading-tight text-white"
            >
              {currentQ.text}
            </motion.h2>
            <p className="text-gray-400 text-center mb-8">{currentQ.description}</p>

            <motion.div 
              className="w-full relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              
              {/* Inputs */}
              {currentQ.type === 'input' && (
                <div className="relative group">
                  <currentQ.icon className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${isCurrentValid ? "text-green-400" : "text-gray-500 group-focus-within:text-orange-400"}`} />
                  <Input
                    ref={inputRef as any}
                    type={currentQ.inputType || 'text'}
                    name={currentQ.field}
                    placeholder={currentQ.placeholder}
                    value={formData[currentQ.field as keyof typeof formData]}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className={`pl-12 pr-12 py-7 text-lg bg-slate-800/50 border-slate-700 focus:border-orange-500 focus:ring-orange-500/20 text-white placeholder:text-gray-600 transition-all ${currentError ? "border-red-500 focus:border-red-500" : ""}`}
                  />
                </div>
              )}

              {/* Textarea */}
              {currentQ.type === 'textarea' && (
                <div className="relative group">
                  <currentQ.icon className={`absolute left-4 top-6 w-5 h-5 transition-colors ${isCurrentValid ? "text-green-400" : "text-gray-500 group-focus-within:text-orange-400"}`} />
                  <textarea
                    ref={inputRef as any}
                    name={currentQ.field}
                    placeholder={currentQ.placeholder}
                    value={formData[currentQ.field as keyof typeof formData]}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-12 py-5 min-h-[150px] rounded-lg text-lg bg-slate-800/50 border border-slate-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 text-white placeholder:text-gray-600 outline-none resize-none transition-all ${currentError ? "border-red-500" : ""}`}
                  />
                </div>
              )}

              {/* Selects */}
              {currentQ.type === 'select' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQ.options?.map((option: any) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelectOption(currentQ.field, option.value)}
                      className={`group flex items-center gap-3 p-4 rounded-xl border transition-all hover:scale-[1.02] active:scale-[0.98] ${
                        formData[currentQ.field as keyof typeof formData] === option.value
                          ? "bg-orange-500/10 border-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.15)]"
                          : "bg-slate-800/40 border-slate-700 hover:bg-slate-800 hover:border-slate-600 text-gray-300"
                      }`}
                    >
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-medium">{option.name}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Check de Validación */}
              {(currentQ.type === 'input' || currentQ.type === 'textarea') && isCurrentValid && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`absolute right-4 ${currentQ.type === 'textarea' ? 'top-6' : 'top-1/2 -translate-y-1/2'}`}
                >
                  <Check className="w-5 h-5 text-green-500" />
                </motion.div>
              )}

              {/* Mensaje de Error */}
              {currentError && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mt-3 text-sm text-red-400 ml-1 font-medium"
                >
                  {currentError}
                </motion.p>
              )}
            </motion.div>

            <div className="flex items-center gap-4 mt-10 w-full">
               <Button 
                variant="ghost" 
                onClick={prevStep}
                className="text-gray-500 hover:text-white hover:bg-white/5"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
              
              {currentQ.type !== 'select' && (
                <Button 
                  onClick={nextStep}
                  className="flex-1 bg-white text-slate-900 hover:bg-gray-200 py-7 text-lg rounded-xl font-bold"
                >
                  {t.buttons.next}
                </Button>
              )}
            </div>
          </motion.div>
        )}

        {/* --- ESTADO: SUMMARY --- */}
        {isSummary && !isSuccess && (
           <motion.div
            key="summary"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-lg bg-slate-800/60 border border-slate-700 rounded-2xl p-8 backdrop-blur-md shadow-2xl relative z-10"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">{t.summary.title}</h2>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <p className="text-gray-500 text-xs uppercase font-bold mb-2 tracking-wider">{t.summary.client_label}</p>
                <div className="flex items-center gap-3 mb-2">
                    <User className="w-4 h-4 text-orange-400"/>
                    <p className="text-lg font-medium text-white">{formData.name}</p>
                </div>
                <div className="flex items-center gap-3 mb-1">
                    <Mail className="w-4 h-4 text-orange-400"/>
                    <p className="text-gray-400 text-sm">{formData.email}</p>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-orange-400"/>
                    <p className="text-gray-400 text-sm">{formData.phone}</p>
                </div>
              </div>
              
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-bold mb-1 tracking-wider">{t.summary.business_label}</p>
                    <p className="font-bold text-lg text-white mb-2">{formData.business}</p>
                    
                    <p className="text-gray-500 text-xs uppercase font-bold mb-1 tracking-wider">{t.summary.rubro_label}</p>
                    <p className="text-sm text-pink-400 font-semibold flex items-center gap-2">
                      {t.verticals.find((v: any) => v.value === formData.vertical)?.icon}
                      {t.verticals.find((v: any) => v.value === formData.vertical)?.name}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setStep(3)} className="text-gray-500 hover:text-white hover:bg-white/5">
                    <Edit2 className="w-4 h-4" />
                  </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" onClick={prevStep} className="text-gray-500 hover:text-white hover:bg-white/5">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button 
                onClick={handleSubmit} 
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-7 rounded-xl shadow-lg shadow-orange-500/20 border-0 transition-all hover:scale-[1.02]"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <><Send className="mr-2 w-4 h-4" /> {t.summary.submit_button_default}</>}
              </Button>
            </div>
          </motion.div>
        )}

        {/* --- ESTADO: SUCCESS MESSAGE --- */}
        {isSuccess && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full max-w-md bg-slate-800/80 border border-slate-700 rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative z-10 text-center"
          >
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30"
            >
              <CheckCircle2 className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-3xl font-bold text-white mb-4">{t.success.title}</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {t.success.subtitle}
            </p>
            
            <Button 
              onClick={handleReset}
              className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-6 rounded-xl border border-slate-600 transition-all hover:scale-[1.02]"
            >
              {t.success.button}
            </Button>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  )
}