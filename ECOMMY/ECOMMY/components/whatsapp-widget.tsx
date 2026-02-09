"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const WHATSAPP_NUMBER = "+56930835236" // Cambiar por el número real

  const openWhatsApp = (message?: string) => {
    const defaultMessage =
      "¡Hola! Me interesa conocer más sobre los agentes AI para eCommerce. ¿Podrían darme más información?"
    const finalMessage = message || defaultMessage
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      {/* Widget flotante */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
              style={{ width: "320px" }}
            >
              {/* Header */}
              <div className="bg-green-500 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">AI eCommerce</h3>
                      <p className="text-xs opacity-90">Típicamente responde en minutos</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-white/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 bg-gray-50">
                <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                  <p className="text-sm text-gray-800">
                    ¡Hola! 👋 Soy el asistente de AI eCommerce. ¿Te gustaría conocer cómo nuestros agentes AI pueden
                    transformar tu tienda online?
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => openWhatsApp("Me interesa una demo del producto")}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                  >
                    🎯 Solicitar una demo
                  </button>
                  <button
                    onClick={() => openWhatsApp("Quiero información sobre precios y planes")}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                  >
                    💰 Ver precios y planes
                  </button>
                  <button
                    onClick={() => openWhatsApp("Necesito ayuda con la integración")}
                    className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                  >
                    🔧 Ayuda con integración
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <Button
                    onClick={() => openWhatsApp()}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    size="sm"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Abrir WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón principal */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
          <Button
            onClick={() => openWhatsApp()}
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg relative overflow-hidden"
            size="icon"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="whatsapp"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </motion.div>
            </AnimatePresence>
          </Button>

          {/* Indicador de pulso */}
          <motion.div
            className="absolute inset-0 rounded-full bg-green-500 pointer-events-none"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Notificación badge */}
          <motion.div
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3, type: "spring", stiffness: 500, damping: 15 }}
          >
            1
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}
