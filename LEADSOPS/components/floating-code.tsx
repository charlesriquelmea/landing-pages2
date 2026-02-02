"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"

const codeSnippets = [
  "const future = await build()",
  "import { freedom } from 'latam'",
  "export default Revolution",
  "npm install ambition",
  "git commit -m 'cambié mi vida'",
  "function createWealth() {}",
  "const dreams = new Promise()",
  "while(true) { learn() }",
  "class Entrepreneur extends You",
  "return success",
  "const ai = new OpenAI()",
  "await deployToProduction()",
  "if(canDream) { canCode() }",
  "const barrio = 'global'",
  "export * from './futuro'",
]

interface Particle {
  id: number
  x: number
  y: number
  text: string
  duration: number
  delay: number
  opacity: number
}

export function FloatingCode() {
  const prefersReducedMotion = useReducedMotion()
  const [particles, setParticles] = useState<Particle[]>([])

  const generateParticle = useCallback((id: number): Particle => {
    return {
      id,
      x: Math.random() * 100,
      y: 100 + Math.random() * 20,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      opacity: 0.1 + Math.random() * 0.2,
    }
  }, [])

  const initialParticles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => generateParticle(i))
  }, [generateParticle])

  useEffect(() => {
    if (prefersReducedMotion) return
    setParticles(initialParticles)
  }, [prefersReducedMotion, initialParticles])

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {initialParticles.slice(0, 5).map((particle) => (
          <span
            key={particle.id}
            className="absolute font-mono text-xs text-[#00F0FF]/10"
            style={{
              left: `${particle.x}%`,
              top: `${50 + particle.id * 10}%`,
            }}
          >
            {particle.text}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute font-mono text-xs md:text-sm whitespace-nowrap text-[#00F0FF]"
          style={{
            left: `${particle.x}%`,
            opacity: particle.opacity,
          }}
          initial={{ y: "100vh" }}
          animate={{ y: "-100vh" }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {particle.text}
        </motion.span>
      ))}
    </div>
  )
}
