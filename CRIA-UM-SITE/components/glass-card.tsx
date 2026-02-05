"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  if (hover) {
    return (
      <motion.div
        className={cn(
          "backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl",
          className
        )}
        whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" 
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl",
        className
      )}
    >
      {children}
    </div>
  )
}
