import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: ReactNode
  className?: string
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={cn("bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent", className)}>
      {children}
    </span>
  )
}
