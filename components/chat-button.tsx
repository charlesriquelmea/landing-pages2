"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

export function ChatButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-[#0a0a0a] px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
          >
            Get Instant Quote from AI Assistant
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-[#0a0a0a] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E31E24] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Chat with us</p>
                  <p className="text-xs text-white/60">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 h-64 flex flex-col">
              <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                <p className="text-center">
                  {"Hi! 👋 How can we help you today?"}
                  <br />
                  <span className="text-xs text-gray-400 mt-2 block">Ask about our video production services</span>
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent"
                />
                <button className="w-10 h-10 bg-[#E31E24] hover:bg-[#c41920] rounded-lg flex items-center justify-center transition-colors">
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button - Updated to red theme */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={shouldReduceMotion ? {} : { scale: 1.1, boxShadow: "0 20px 40px rgba(227, 30, 36, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-[#E31E24] rounded-full flex items-center justify-center shadow-lg hover:bg-[#c41920] transition-colors"
      >
        {/* Continuous pulse animation */}
        {!isOpen && (
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 bg-[#E31E24] rounded-full"
          />
        )}

        {isOpen ? (
          <X className="w-6 h-6 text-white relative z-10" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white relative z-10" />
        )}

        {/* Notification Badge */}
        {!isOpen && (
          <motion.span
            animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-white text-[#E31E24] rounded-full flex items-center justify-center text-xs font-bold"
          >
            1
          </motion.span>
        )}
      </motion.button>
    </div>
  )
}
