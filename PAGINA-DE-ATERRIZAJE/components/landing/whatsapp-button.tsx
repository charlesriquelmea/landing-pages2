"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/56930835236?text=Hola%20me%20interesa%20una%20consultoria%20para%20mi%20sitio%20web"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 bg-emerald-500 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      <MessageCircle className="h-7 w-7 text-white relative z-10" />
    </motion.a>
  )
}
