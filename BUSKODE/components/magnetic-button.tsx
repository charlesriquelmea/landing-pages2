"use client"

import React from "react"

import { useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"

interface MagneticButtonProps {
  children: React.ReactNode
  href: string
  variant?: "primary" | "secondary"
  className?: string
}

export function MagneticButton({ children, href, variant = "primary", className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const prefersReducedMotion = useReducedMotion()

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.15
    const y = (clientY - top - height / 2) * 0.15
    setPosition({ x, y })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 overflow-hidden group"
  
  const variants = {
    primary: "bg-[#00F0FF] text-[#050505] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]",
    secondary: "bg-transparent border-2 border-[#FFD60A] text-[#FFD60A] hover:bg-[#FFD60A]/10 hover:shadow-[0_0_40px_rgba(255,214,10,0.3)]"
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.a>
  )
}
