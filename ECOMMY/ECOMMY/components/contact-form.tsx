"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, MessageSquare, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/lib/i18n/context"

export function ContactForm() {
  const { t } = useI18n()

  // Estado del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    plan: "",
  })
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  // Número de WhatsApp (puedes cambiarlo por el número real)
  const WHATSAPP_NUMBER = "+56930835236" // Formato: código de país + número sin +

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlanChange = (value: string) => {
    setFormData((prev) => ({ ...prev, plan: value }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  // Función para generar el mensaje de WhatsApp
  const generateWhatsAppMessage = () => {
    const planNames = {
      setup: t("contact.form.step2.setup.title"),
      feeMensual: t("contact.form.step2.feeMensual.title"),
      widgetChat: t("contact.form.step2.widgetChat.title"),
      trial: t("contact.form.step2.trial.title"),
    }

    const planPrices = {
      setup: t("contact.form.step2.setup.price"),
      feeMensual: t("contact.form.step2.feeMensual.price"),
      widgetChat: t("contact.form.step2.widgetChat.price"),
      trial: t("contact.form.step2.trial.price"),
    }

    const message = `
🤖 *Solicitud de Información - AI eCommerce*

👤 *Información Personal:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Empresa: ${formData.company}

📋 *Plan de Interés:*
• Plan: ${planNames[formData.plan as keyof typeof planNames] || formData.plan}
• Precio: ${planPrices[formData.plan as keyof typeof planPrices] || "Consultar"}

💬 *Mensaje:*
Hola, estoy interesado en implementar agentes AI para mi eCommerce. Me gustaría recibir más información sobre el plan seleccionado y conocer los siguientes pasos para comenzar.

¿Podrían contactarme para agendar una demostración?

Gracias por su tiempo.
    `.trim()

    return encodeURIComponent(message)
  }

  // Función para redireccionar a WhatsApp
  const redirectToWhatsApp = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

    // Abrir WhatsApp en una nueva ventana/pestaña
    window.open(whatsappUrl, "_blank")

    // Marcar como enviado y mostrar mensaje de confirmación
    setSubmitted(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Si estamos en el paso 2 y se ha seleccionado un plan, redireccionar a WhatsApp
    if (step === 2 && formData.plan) {
      redirectToWhatsApp()
    }
  }

  return (
    <section id="contacto" className="py-20 bg-gray-950 relative ">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>

      {/* Círculos de fondo animados */}
      <motion.div
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
          <div className="text-center mb-12">
            <AnimatedText text={t("contact.title")} className="text-3xl md:text-4xl font-bold mb-4" as="h2" />
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
               
            >
              {t("contact.subtitle")}
            </motion.p>
          </div>
        
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            className="bg-gray-900 border border-gray-800 rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
             
          >
            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="mx-auto mb-6 bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                    >
                      <Check className="h-10 w-10 text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">¡Solicitud enviada a WhatsApp!</h3>
                    <p className="text-gray-400 mb-6">
                      Tu información ha sido enviada a nuestro WhatsApp. Si no se abrió automáticamente, puedes
                      contactarnos directamente.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={() => {
                          const message = generateWhatsAppMessage()
                          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
                          window.open(whatsappUrl, "_blank")
                        }}
                        className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Abrir WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto"
                        onClick={() => {
                          setSubmitted(false)
                          setStep(1)
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            plan: "",
                          })
                        }}
                      >
                        Enviar otra solicitud
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-lg">
                          <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-bold text-xl">{t("contact.form.title")}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        {[1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className={`h-2 w-2 rounded-full ${
                              i === step ? "bg-blue-500" : "bg-gray-700"
                            } transition-colors`}
                            animate={{
                              scale: i === step ? [1, 1.2, 1] : 1,
                            }}
                            transition={{
                              duration: 1,
                              repeat: i === step ? Number.POSITIVE_INFINITY : 0,
                              repeatType: "reverse",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4 className="text-xl font-medium mb-6">{t("contact.form.step1.title")}</h4>
                          <div className="space-y-6">
                            <div>
                              <Label htmlFor="name" className="text-gray-400 mb-2 block">
                                {t("contact.form.step1.name")}
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t("contact.form.step1.name")}
                                className="bg-gray-800 border-gray-700 focus:border-blue-500"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="email" className="text-gray-400 mb-2 block">
                                {t("contact.form.step1.email")}
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="tu@email.com"
                                className="bg-gray-800 border-gray-700 focus:border-blue-500"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="company" className="text-gray-400 mb-2 block">
                                {t("contact.form.step1.company")}
                              </Label>
                              <Input
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder={t("contact.form.step1.company")}
                                className="bg-gray-800 border-gray-700 focus:border-blue-500"
                                required
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4 className="text-xl font-medium mb-6">{t("contact.form.step2.title")}</h4>
                          <RadioGroup
                            value={formData.plan}
                            onValueChange={handlePlanChange}
                            className="space-y-4"
                            required
                          >
                            {[
                              {
                                value: "setup",
                                title: t("contact.form.step2.setup.title"),
                                description: t("contact.form.step2.setup.description"),
                                price: t("contact.form.step2.setup.price"),
                              },
                              {
                                value: "feeMensual",
                                title: t("contact.form.step2.feeMensual.title"),
                                description: t("contact.form.step2.feeMensual.description"),
                                price: t("contact.form.step2.feeMensual.price"),
                              },
                              {
                                value: "widgetChat",
                                title: t("contact.form.step2.widgetChat.title"),
                                description: t("contact.form.step2.widgetChat.description"),
                                price: t("contact.form.step2.widgetChat.price"),
                              },
                              {
                                value: "trial",
                                title: t("contact.form.step2.trial.title"),
                                description: t("contact.form.step2.trial.description"),
                                price: t("contact.form.step2.trial.price"),
                              },
                            ].map((plan) => (
                              <motion.div
                                key={plan.value}
                                className={`p-6 rounded-lg border ${
                                  formData.plan === plan.value
                                    ? "border-blue-500 bg-blue-500/10"
                                    : "border-gray-700 bg-gray-800"
                                } transition-colors`}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="flex items-start space-x-4">
                                  <RadioGroupItem value={plan.value} id={plan.value} className="mt-1 flex-shrink-0" />
                                  <div className="flex-1 space-y-3">
                                    <div>
                                      <Label htmlFor={plan.value} className="text-lg font-semibold text-white block">
                                        {plan.title}
                                      </Label>
                                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                        {plan.description}
                                      </p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-700">
                                      <div className="text-blue-400 font-medium whitespace-pre-line leading-relaxed">
                                        {plan.price}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </RadioGroup>

                          {formData.plan && (
                            <motion.div
                              className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <h5 className="font-medium mb-2 flex items-center gap-2">
                                <MessageSquare className="h-4 w-4 text-blue-500" />
                                Siguiente paso: WhatsApp
                              </h5>
                              <p className="text-sm text-gray-300 mb-3">
                                Al continuar, se abrirá WhatsApp con tu información pre-cargada para que puedas
                                contactar directamente con nuestro equipo.
                              </p>
                              <div className="text-xs text-gray-400">
                                <strong>Se enviará:</strong> Nombre, email, empresa y plan seleccionado
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      )}

                      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        {step > 1 ? (
                          <Button type="button" variant="outline" onClick={prevStep} className="w-full sm:w-auto">
                            {t("contact.form.buttons.previous")}
                          </Button>
                        ) : (
                          <div></div>
                        )}

                        {step < 2 ? (
                          <Button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                            onClick={nextStep}
                            disabled={!formData.name || !formData.email || !formData.company}
                          >
                            <span className="flex items-center gap-1 justify-center">
                              {t("contact.form.buttons.next")}
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </Button>
                        ) : (
                          <Button type="submit" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto" disabled={!formData.plan}>
                            <span className="flex items-center gap-2 justify-center">
                              <MessageSquare className="h-4 w-4" />
                              Enviar a WhatsApp
                            </span>
                          </Button>
                        )}
                      </div>
                    </form>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
