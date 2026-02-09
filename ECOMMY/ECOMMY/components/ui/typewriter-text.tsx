"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  showCursor?: boolean
  onComplete?: () => void
}

export function TypewriterText({
  text,
  className,
  speed = 30,
  delay = 0,
  showCursor = true,
  onComplete,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(
        () => {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        },
        currentIndex === 0 ? delay : speed,
      )

      return () => clearTimeout(timer)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete])

  return (
    <span className={cn("relative", className)}>
      {displayText}
      {showCursor && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-blue-500 ml-1 text-white"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: isComplete ? 0 : Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
      )}
    </span>
  )
}
