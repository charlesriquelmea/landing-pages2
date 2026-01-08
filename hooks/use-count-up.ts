"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface UseCountUpOptions {
  end: number
  duration?: number
  startOnView?: boolean
}

export function useCountUp({ end, duration = 2.5, startOnView = true }: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (startOnView && !isInView) return
    if (hasStarted.current) return

    hasStarted.current = true
    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCount)
  }, [end, duration, isInView, startOnView])

  return { count, ref, isInView }
}
