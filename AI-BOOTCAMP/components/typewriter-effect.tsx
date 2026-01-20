"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TypewriterEffect({
  text,
  className = "",
  speed = 30,
  delay = 500,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(startTyping)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      // Stop cursor blinking after typing is done
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false)
      }, 2000)
      return () => clearTimeout(cursorTimeout)
    }
  }, [displayedText, isTyping, text, speed])

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return

    const blinkInterval = setInterval(() => {
      // The cursor visibility is handled by CSS animation
    }, 500)

    return () => clearInterval(blinkInterval)
  }, [showCursor])

  // Split text to highlight important parts
  const renderText = () => {
    const dollarMatch = displayedText.match(/\$30,000/)
    if (dollarMatch) {
      const parts = displayedText.split("$30,000")
      return (
        <>
          {parts[0]}
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            $30,000
          </span>
          {parts[1]}
        </>
      )
    }
    return displayedText
  }

  return (
    <h1 className={className}>
      <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
        {renderText()}
      </span>
      {showCursor && (
        <motion.span
          className="inline-block w-1 h-[1em] bg-cyan-400 ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      )}
    </h1>
  )
}
