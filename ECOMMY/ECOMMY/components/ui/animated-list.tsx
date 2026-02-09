"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedListProps {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
}

export function AnimatedList({ children, className, delay = 0, staggerDelay = 0.1, once = true }: AnimatedListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.ul
      className={cn("space-y-4", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
    >
      {children}
    </motion.ul>
  )
}

interface AnimatedListItemProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedListItem({ children, className }: AnimatedListItemProps) {
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.li className={className} variants={item}>
      {children}
    </motion.li>
  )
}
