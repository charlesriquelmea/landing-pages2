"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

interface HackerTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/"

export function HackerText({ text, className = "", delay = 0, duration = 50 }: HackerTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView || hasAnimated || prefersReducedMotion) return

    let iteration = 0
    const totalIterations = text.length * 3

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " "
              if (index < iteration / 3) {
                return text[index]
              }
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join("")
        )

        iteration++

        if (iteration >= totalIterations) {
          clearInterval(interval)
          setDisplayText(text)
          setHasAnimated(true)
        }
      }, duration)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isInView, text, delay, duration, hasAnimated, prefersReducedMotion])

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <motion.span
      ref={ref}
      className={`font-mono ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  )
}
