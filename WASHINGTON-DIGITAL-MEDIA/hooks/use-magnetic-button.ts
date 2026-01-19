"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"

interface MousePosition {
  x: number
  y: number
}

export function useMagneticButton(strength = 0.3) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current
      if (!button) return

      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setMousePosition({ x: x * strength, y: y * strength })
    },
    [strength],
  )

  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: 0, y: 0 })
  }, [])

  return {
    buttonRef,
    mousePosition,
    handleMouseMove,
    handleMouseLeave,
  }
}
