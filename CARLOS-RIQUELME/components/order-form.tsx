'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft, Send, Terminal, Loader2, Code2, CheckCircle2, Rocket, Briefcase, Building2, UserCircle2, GraduationCap } from 'lucide-react'
import { sendOrderEmail } from '@/app/actions'

export default function OrderForm() {
    const [step, setStep] = useState(-1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        comments: '',
    })

    // Roles ajustados al lenguaje solicitado por el usuario, usando iconos de Lucide para mejor compatibilidad
    const rolesOptions = [
        { value: "dueno-negocio", display: "Dueño de Negocio", icon: <Building2 className="w-6 h-6" /> },
        { value: "emprendedor", display: "Emprendedor", icon: <Rocket className="w-6 h-6" /> },
        { value: "profesional", display: "Profesional", icon: <UserCircle2 className="w-6 h-6" /> },
        { value: "empleado", display: "Empleado", icon: <Briefcase className="w-6 h-6" /> },
        { value: "estudiante", display: "Estudiante / Maker", icon: <GraduationCap className="w-6 h-6" /> },
    ]

    // Preguntas en Español Neutro (Tú)
    const questions = [
        {
            text: "¿Cuál es tu nombre?",
            description: "Para saber a quién nos dirigimos.",
            type: 'input',
            field: 'name',
            placeholder: "Nombre completo"
        },
        {
            text: "Tu correo electrónico",
            description: "Donde te enviaremos la información.",
            type: 'input',
            inputType: 'email',
            field: 'email',
            placeholder: "tu@email.com"
        },
        {
            text: "WhatsApp (Opcional)",
            description: "Si prefieres una comunicación más ágil.",
            type: 'input',
            inputType: 'tel',
            field: 'phone',
            placeholder: "+56 9 ..."
        },
        {
            text: "¿Cuál es tu perfil?",
            description: "Selecciona la opción que mejor describe tu rol actual.",
            type: 'select',
            field: 'role',
            options: rolesOptions
        },
        {
            text: "¿Qué estás construyendo?",
            description: "Cuéntanos sobre tu proyecto, idea o el desafío técnico que tienes.",
            type: 'textarea',
            field: 'comments',
            optional: true,
            placeholder: "Estoy desarrollando una plataforma para... / Necesito automatizar..."
        },
    ]

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
        if (step === questions.length) return true

        const currentQ = questions[step]
        if (!currentQ) return false
        if (currentQ.optional) return true

        const value = formData[currentQ.field as keyof typeof formData] || ''

        if (currentQ.field === 'email') return isValidEmail(value)
        return value.toString().trim() !== ''
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)
        const result = await sendOrderEmail(formData)

        if (result.success) {
            setIsSuccess(true)
        } else {
            alert("Hubo un error al enviar. Por favor, intenta de nuevo.")
        }
        setIsSubmitting(false)
    }

    const isIntro = step === -1
    const isSummary = step === questions.length
    const currentQuestion = questions[step]
    const progress = ((step + 1) / questions.length) * 100

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center bg-background overflow-hidden" id="contact-form">

            {/* Fondo Decorativo Tech/Dark */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-amber/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-3xl relative z-10">
                <AnimatePresence mode="wait">
                    {isSuccess ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20 text-foreground"
                        >
                            <div className="inline-flex items-center justify-center p-4 bg-cyan/10 rounded-full mb-6 ring-1 ring-cyan/20">
                                <CheckCircle2 className="w-12 h-12 text-cyan" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 tracking-tight">Solicitud enviada.</h2>
                            <p className="text-foreground/70 text-lg max-w-md mx-auto">
                                Hemos recibido tu información. Analizaremos tu caso y nos pondremos en contacto contigo a la brevedad.
                            </p>
                            <Button
                                onClick={() => window.location.reload()}
                                variant="ghost"
                                className="mt-8 text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                            >
                                Volver al inicio
                            </Button>
                        </motion.div>
                    ) : isIntro ? (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-center py-10"
                        >
                            <div className="inline-flex items-center justify-center p-3 bg-foreground/[0.02] rounded-xl mb-6 ring-1 ring-foreground/10 backdrop-blur-sm">
                                <Terminal className="w-6 h-6 text-cyan" />
                            </div>
                            {/* Título alineado con la propuesta de valor del sitio */}
                            <h1 className="text-balance text-4xl sm:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                                Construyamos <br />
                                <span className="text-cyan">
                                    algo real.
                                </span>
                            </h1>
                            <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Si quieres validar una idea, escalar tu producto o implementar automatización inteligente, comienza por aquí.
                            </p>
                            <Button
                                onClick={startForm}
                                size="lg"
                                className="bg-cyan text-background hover:opacity-90 text-lg px-8 py-6 rounded-lg font-bold transition-all hover:scale-105"
                            >
                                Empezar ahora <Code2 className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full"
                        >
                            {/* Barra de Progreso Minimalista */}
                            <div className="mb-12">
                                <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-cyan"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${Math.min(progress, 100)}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className="mt-3 flex justify-between text-xs text-foreground/50 font-medium uppercase tracking-wider">
                                    <span>{isSummary ? "Revisión Final" : `Fase ${step + 1} / ${questions.length}`}</span>
                                    <span>{Math.round(Math.min(progress, 100))}%</span>
                                </div>
                            </div>

                            <div className="min-h-[400px]">
                                <AnimatePresence mode="wait">
                                    {!isSummary ? (
                                        <motion.div
                                            key={step}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
                                                {currentQuestion.text}
                                            </h2>
                                            <p className="text-lg text-foreground/60 mb-8">
                                                {currentQuestion.description}
                                            </p>

                                            <div className="space-y-6">
                                                {currentQuestion.type === 'input' && (
                                                    <input
                                                        type={currentQuestion.inputType || 'text'}
                                                        name={currentQuestion.field}
                                                        value={formData[currentQuestion.field as keyof typeof formData]}
                                                        onChange={handleInputChange}
                                                        onKeyDown={(e) => e.key === 'Enter' && canProceed() && nextStep()}
                                                        className="w-full bg-transparent border-b border-foreground/10 focus:border-cyan text-foreground text-2xl py-4 outline-none transition-colors placeholder:text-foreground/30 font-light"
                                                        placeholder={currentQuestion.placeholder}
                                                        autoFocus
                                                    />
                                                )}

                                                {currentQuestion.type === 'textarea' && (
                                                    <textarea
                                                        name={currentQuestion.field}
                                                        value={formData[currentQuestion.field as keyof typeof formData] || ''}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-foreground/[0.02] rounded-lg border border-foreground/10 focus:border-cyan/50 text-foreground text-lg p-6 outline-none min-h-[150px] resize-none focus:ring-1 focus:ring-cyan/20 transition-all placeholder:text-foreground/40"
                                                        placeholder={currentQuestion.placeholder}
                                                        autoFocus
                                                    />
                                                )}

                                                {currentQuestion.type === 'select' && (
                                                    <div className="grid sm:grid-cols-2 gap-3">
                                                        {currentQuestion.options?.map((option: any) => (
                                                            <button
                                                                key={option.value}
                                                                onClick={() => handleSelectOption(currentQuestion.field, option.value)}
                                                                className={`p-5 rounded-lg border text-left transition-all ${formData[currentQuestion.field as keyof typeof formData] === option.value
                                                                    ? 'bg-cyan/10 border-cyan ring-1 ring-cyan/20'
                                                                    : 'bg-foreground/[0.02] border-foreground/10 hover:border-cyan/30 hover:bg-cyan/5'
                                                                    }`}
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    {option.icon && <span className="text-xl opacity-80">{option.icon}</span>}
                                                                    <span className="text-foreground font-medium text-lg">{option.display}</span>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                {currentQuestion.field === 'email' && formData.email && !isValidEmail(formData.email) && (
                                                    <p className="text-amber text-sm mt-2 font-medium">⚠️ El formato del correo no es válido.</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="summary"
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="rounded-lg border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm p-8"
                                        >
                                            <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-foreground/10 pb-4">Confirma los datos</h2>
                                            <div className="space-y-6 text-foreground">
                                                <div className="grid sm:grid-cols-2 gap-8">
                                                    <div>
                                                        <p className="text-foreground/50 text-xs uppercase font-medium tracking-wider mb-1">Nombre</p>
                                                        <p className="text-lg font-medium">{formData.name}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-foreground/50 text-xs uppercase font-medium tracking-wider mb-1">Contacto</p>
                                                        <p className="text-foreground/80 text-sm">{formData.email}</p>
                                                        <p className="text-foreground/80 text-sm">{formData.phone}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-foreground/50 text-xs uppercase font-medium tracking-wider mb-1">Perfil</p>
                                                        <p className="text-lg font-medium">
                                                            {rolesOptions.find(r => r.value === formData.role)?.display || formData.role}
                                                        </p>
                                                    </div>
                                                </div>
                                                {formData.comments && (
                                                    <div className="pt-4 border-t border-foreground/10">
                                                        <p className="text-foreground/50 text-xs uppercase font-medium tracking-wider mb-2">Proyecto / Comentarios</p>
                                                        <p className="text-foreground/80 text-base leading-relaxed">"{formData.comments}"</p>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <Button
                                    onClick={prevStep}
                                    variant="ghost"
                                    size="lg"
                                    className="text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                                >
                                    <ArrowLeft className="mr-2 w-4 h-4" /> Atrás
                                </Button>

                                {!isSummary ? (
                                    <Button
                                        onClick={nextStep}
                                        disabled={!canProceed()}
                                        size="lg"
                                        className="flex-1 bg-cyan text-background hover:opacity-90 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Siguiente <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleSubmit}
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="flex-1 bg-cyan text-background hover:opacity-90 font-bold"
                                    >
                                        {isSubmitting ? (
                                            <><Loader2 className="mr-2 w-4 h-4 animate-spin" /> Enviando...</>
                                        ) : (
                                            <>Enviar Solicitud <Send className="ml-2 w-4 h-4" /></>
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