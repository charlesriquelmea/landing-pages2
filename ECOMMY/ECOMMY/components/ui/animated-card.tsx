"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  hover?: boolean
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  hover = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, type: "spring", stiffness: 100 }}
      viewport={{ once }}
      whileHover={
        hover
          ? {
              y: -5,
              transition: { duration: 0.2 },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
}
