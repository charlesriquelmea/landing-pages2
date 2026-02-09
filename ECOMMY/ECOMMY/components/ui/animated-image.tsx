"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  fill?: boolean
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  fill = false,
}: AnimatedImageProps) {
  return (
    <motion.div
      className={cn("overflow-hidden relative", className)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay, type: "spring", stiffness: 100 }}
      viewport={{ once }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={cn(fill ? "object-cover" : "", "relative z-10")}
      />
      <motion.div
        className="absolute inset-0 bg-blue-500 z-0"
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeInOut" }}
        viewport={{ once }}
      />
    </motion.div>
  )
}
