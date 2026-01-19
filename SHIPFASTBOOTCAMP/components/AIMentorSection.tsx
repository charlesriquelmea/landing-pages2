"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface Message {
  id: number
  text: string
  sender: "user" | "ai"
  timestamp: string
}

export default function AIMentorSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hola! Soy el AI Mentor entrenado con todo el conocimiento de Carlos Riquelme en Lean Startup, Sprint de innovacion y MVP. En que puedo ayudarte hoy?",
      sender: "ai",
      timestamp: "14:30",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const predefinedQuestions = ["Como valido mi idea de negocio?", "Que es un MVP y como lo creo?"]

  const aiResponses: { [key: string]: string } = {
    "Como valido mi idea de negocio?":
      "Excelente pregunta! Para validar tu idea de negocio, Carlos recomienda seguir estos pasos:\n\n1. Define tu hipotesis - Que problema resuelves?\n2. Identifica tu cliente ideal - Quien tiene este problema?\n3. Crea experimentos baratos - Pruebas rapidas y economicas\n4. Mide y aprende - Analiza los resultados\n\nTe gustaria profundizar en alguno de estos pasos?",
    "Que es un MVP y como lo creo?":
      "Gran pregunta! Un MVP (Producto Minimo Viable) es la version mas simple de tu producto que te permite aprender del mercado.\n\nPara crear tu MVP:\n\n1. Identifica la funcionalidad core\n2. Elimina todo lo no esencial\n3. Construye rapido y barato\n4. Lanza y mide feedback\n\nQue tipo de MVP tienes en mente?",
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

    setTimeout(() => {
      setIsTyping(false)
      const aiResponse =
        aiResponses[textToSend] ||
        "Interesante pregunta! En el evento presencial podremos profundizar mas en este tema. Carlos tiene muchos casos practicos para compartir."

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
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-purple-500/10 px-4 py-2 text-sm font-bold text-purple-500 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Mentor AI 24/7
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tu Mentor Personal con IA
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-gray-300">
            Accede al conocimiento de Carlos Riquelme las 24 horas del dia. Nuestro AI Mentor esta entrenado con toda su
            experiencia en Lean Startup, Sprint de innovacion y MVP.
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
            <div className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image src="/professional-latino-mentor.jpg" alt="Carlos Riquelme" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Carlos Riquelme</h3>
                  <p className="text-slate-500 dark:text-gray-400">Facilitador Principal</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-gray-300 mb-4">
                Experto en Lean Startup con mas de 10 anos ayudando a emprendedores a validar y escalar sus ideas de
                negocio.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-slate-600 dark:text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                  +500 startups mentoreadas
                </div>
                <div className="flex items-center text-sm text-slate-600 dark:text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-2" />
                  Especialista en MVP y prototipado
                </div>
                <div className="flex items-center text-sm text-slate-600 dark:text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                  Metodologia Sprint de Innovacion
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-purple-500 mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Mentor</h3>
                  <p className="text-slate-500 dark:text-gray-400">Disponible 24/7</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-gray-300 mb-4">
                Entrenado con toda la base de conocimiento de Carlos en Lean Startup, metodologias agiles y desarrollo
                de MVP.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-slate-600 dark:text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                  Respuestas instantaneas
                </div>
                <div className="flex items-center text-sm text-slate-600 dark:text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-2" />
                  Casos practicos del mercado latino
                </div>
                <div className="flex items-center text-sm text-slate-600 dark:text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2" />
                  Guias paso a paso
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto w-full"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 bg-white/20 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">AI Mentor Carlos</h4>
                    <p className="text-xs opacity-75 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse" />
                      En linea
                    </p>
                  </div>
                </div>
                <Sparkles className="h-5 w-5 opacity-75" />
              </div>

              {/* Messages Area */}
              <div className="h-80 bg-slate-50 dark:bg-slate-900 p-4 overflow-y-auto">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start max-w-xs ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                      >
                        <div className={`flex-shrink-0 ${message.sender === "user" ? "ml-2" : "mr-2"}`}>
                          {message.sender === "ai" ? (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center">
                              <Bot className="h-4 w-4 text-white" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center">
                              <User className="h-4 w-4 text-slate-600 dark:text-gray-300" />
                            </div>
                          )}
                        </div>
                        <div
                          className={`px-4 py-2 rounded-2xl ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-br-sm"
                              : "bg-white dark:bg-slate-800 text-slate-800 dark:text-gray-200 rounded-bl-sm border border-slate-200 dark:border-slate-700 shadow-sm"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p
                            className={`text-xs mt-1 ${message.sender === "user" ? "text-white/70" : "text-slate-500 dark:text-gray-400"}`}
                          >
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start mb-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center mr-2">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl rounded-bl-sm border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              <div className="bg-white dark:bg-slate-800 p-3 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-gray-400 mb-2">Preguntas frecuentes:</p>
                <div className="grid grid-cols-1 gap-1">
                  {predefinedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="text-left text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-gray-300 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="bg-white dark:bg-slate-800 p-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Escribe tu pregunta..."
                    className="flex-1 text-sm border-slate-300 dark:border-slate-600 focus:border-orange-500"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-2"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
