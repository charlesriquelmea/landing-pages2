"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  as?: React.ElementType
}

// Versión simplificada sin animaciones que puedan causar problemas de scroll
export function AnimatedText({ text, className, as: Component = "h2" }: AnimatedTextProps) {
  return (
    <div className="overflow-hidden">
      <Component className={cn("inline-block", className)}>{text}</Component>
    </div>
  )
}
