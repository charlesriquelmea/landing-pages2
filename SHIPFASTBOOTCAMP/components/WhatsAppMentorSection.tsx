"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Send, Phone, Video, MoreVertical, ArrowLeft, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  text: string
  sender: "user" | "ai"
  timestamp: string
  isTyping?: boolean
}

export default function WhatsAppMentorSection() {
  const { theme } = useTheme()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy el AI Mentor entrenado con todo el conocimiento de Carlos Riquelme en Lean Startup, Sprint de innovación y MVP. ¿En qué puedo ayudarte hoy? 🚀",
      sender: "ai",
      timestamp: "14:30",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const predefinedQuestions = [
    "¿Cómo valido mi idea de negocio?",
    "¿Qué es un MVP y cómo lo creo?",
    "¿Cuáles son las etapas de un sprint de innovación?",
    "¿Cómo aplico Lean Startup al café?",
  ]

  const aiResponses: { [key: string]: string } = {
    "¿Cómo valido mi idea de negocio?":
      "Excelente pregunta! Para validar tu idea de negocio, Carlos recomienda seguir estos pasos:\n\n1. **Define tu hipótesis** - ¿Qué problema resuelves?\n2. **Identifica tu cliente ideal** - ¿Quién tiene este problema?\n3. **Crea experimentos baratos** - Pruebas rápidas y económicas\n4. **Mide y aprende** - Analiza los resultados\n\n¿Te gustaría profundizar en alguno de estos pasos? 📊",
    "¿Qué es un MVP y cómo lo creo?":
      "¡Gran pregunta! Un MVP (Producto Mínimo Viable) es la versión más simple de tu producto que te permite aprender del mercado.\n\nPara crear tu MVP:\n\n✅ **Identifica la funcionalidad core**\n✅ **Elimina todo lo no esencial**\n✅ **Construye rápido y barato**\n✅ **Lanza y mide feedback**\n\nEn el sector café, podría ser desde una degustación hasta una app simple. ¿Qué tipo de MVP tienes en mente? ☕",
    "¿Cuáles son las etapas de un sprint de innovación?":
      "Carlos estructura los sprints en 4 etapas clave:\n\n🎯 **DÍA 1: Definir**\n- Mapear el problema\n- Establecer objetivos\n\n💡 **DÍA 2: Idear & Decidir**\n- Brainstorming\n- Selección de soluciones\n\n🛠️ **DÍA 3: Prototipar**\n- Crear MVP\n- Preparar tests\n\n📊 **DÍA 4: Validar**\n- Testear con usuarios\n- Analizar resultados\n\n¿En qué etapa necesitas más ayuda?",
    "¿Cómo aplico Lean Startup al café?":
      "¡Perfecto para nuestro sector! Lean Startup en café significa:\n\n☕ **Hipótesis sobre consumidores**\n- ¿Qué experiencia buscan?\n- ¿Cuándo y cómo consumen?\n\n🔬 **Experimentos rápidos**\n- Degustaciones\n- Encuestas en cafeterías\n- Prototipos de servicio\n\n📈 **Métricas que importan**\n- Satisfacción del cliente\n- Frecuencia de compra\n- Recomendación\n\n¿Tienes alguna hipótesis específica sobre tu consumidor de café? 🇧🇷",
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim()
    if (!textToSend) return

    const newMessage: Message = {
      id: messages.length + 1,
      text: textToSend,
      sender: "user",
      timestamp: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false)
      const aiResponse =
        aiResponses[textToSend] ||
        "Interesante pregunta! En el evento presencial podremos profundizar más en este tema. Carlos tiene muchos casos prácticos para compartir. ¿Te gustaría que exploremos algún aspecto específico de Lean Startup o MVP? 🤔"

      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 1500)
  }

  return (
    <section className="py-20 bg-white dark:bg-coffee-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-coffee-100 dark:bg-coffee-900/30 px-3 py-1 text-sm font-medium text-coffee-800 dark:text-coffee-300 mb-4">
            Mentor AI 24/7
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-100 mb-4">
            Tu Mentor Personal en WhatsApp
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-coffee-600 dark:text-coffee-400">
            Accede al conocimiento de Carlos Riquelme las 24 horas del día. Nuestro AI Mentor está entrenado con toda su
            experiencia en Lean Startup, Sprint de innovación y MVP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Facilitator Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div
              className={cn(
                "rounded-xl p-6",
                theme === "dark" ? "bg-coffee-900 border border-coffee-700" : "bg-coffee-50 border border-coffee-200",
              )}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Carlos Riquelme"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-100">Carlos Riquelme</h3>
                  <p className="text-coffee-600 dark:text-coffee-400">Facilitador Principal</p>
                </div>
              </div>
              <p className="text-coffee-700 dark:text-coffee-300 mb-4">
                Experto en Lean Startup con más de 10 años ayudando a emprendedores a validar y escalar sus ideas de
                negocio.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-green mr-2"></div>
                  +500 startups mentoreadas
                </div>
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-yellow mr-2"></div>
                  Especialista en MVP y prototipado
                </div>
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-green mr-2"></div>
                  Metodología Sprint de Innovación
                </div>
              </div>
            </div>

            <div
              className={cn(
                "rounded-xl p-6",
                theme === "dark" ? "bg-coffee-900 border border-coffee-700" : "bg-coffee-50 border border-coffee-200",
              )}
            >
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-brazil-green mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-coffee-900 dark:text-coffee-100">AI Mentor</h3>
                  <p className="text-coffee-600 dark:text-coffee-400">Disponible 24/7 en WhatsApp</p>
                </div>
              </div>
              <p className="text-coffee-700 dark:text-coffee-300 mb-4">
                Entrenado con toda la base de conocimiento de Carlos en Lean Startup, metodologías ágiles y desarrollo
                de MVP.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-green mr-2"></div>
                  Respuestas instantáneas
                </div>
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-yellow mr-2"></div>
                  Casos prácticos del sector café
                </div>
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-green mr-2"></div>
                  Guías paso a paso
                </div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-sm mx-auto"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800 dark:border-gray-700">
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <ArrowLeft className="h-5 w-5 mr-3" />
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <div className="w-full h-full bg-brazil-green flex items-center justify-center">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">AI Mentor Carlos</h4>
                    <p className="text-xs opacity-75">en línea</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Video className="h-5 w-5" />
                  <Phone className="h-5 w-5" />
                  <MoreVertical className="h-5 w-5" />
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-96 bg-[#ECE5DD] dark:bg-gray-800 p-4 overflow-y-auto">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs px-3 py-2 rounded-lg ${
                          message.sender === "user"
                            ? "bg-[#DCF8C6] text-gray-800"
                            : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                        }`}
                      >
                        {message.sender === "ai" && (
                          <div className="flex items-center mb-1">
                            <Bot className="h-3 w-3 text-brazil-green mr-1" />
                            <span className="text-xs text-brazil-green font-semibold">AI Mentor</span>
                          </div>
                        )}
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className="text-xs text-gray-500 mt-1 text-right">{message.timestamp}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start mb-3">
                    <div className="bg-white dark:bg-gray-700 px-3 py-2 rounded-lg">
                      <div className="flex items-center">
                        <Bot className="h-3 w-3 text-brazil-green mr-1" />
                        <span className="text-xs text-brazil-green font-semibold mr-2">AI Mentor</span>
                      </div>
                      <div className="flex space-x-1 mt-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              <div className="bg-white dark:bg-gray-900 p-3 border-t">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Preguntas frecuentes:</p>
                <div className="grid grid-cols-1 gap-1">
                  {predefinedQuestions.slice(0, 2).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="text-left text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="bg-[#F0F0F0] dark:bg-gray-800 p-3 flex items-center space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 text-sm border-none bg-white dark:bg-gray-700"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  size="sm"
                  className="bg-[#075E54] hover:bg-[#064e45] text-white p-2"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button className="bg-[#25D366] hover:bg-[#20b358] text-white">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Chatear con AI Mentor
              </Button>
              <p className="text-xs text-coffee-500 dark:text-coffee-400 mt-2">
                Disponible para participantes registrados
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
