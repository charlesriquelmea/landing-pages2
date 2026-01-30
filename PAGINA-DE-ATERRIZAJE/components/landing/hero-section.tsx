"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

interface HeroSectionProps {
  onOpenContact: (source: string) => void
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const { t } = useLanguage()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const typewriterWords = ["$10,000", "$15,000", "$20,000", "$50,000"]

  useEffect(() => {
    const currentWord = typewriterWords[currentWordIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    if (!isDeleting && displayedText === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseTime)
      return
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => (isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)))
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWordIndex, typewriterWords])

  const trustPoints = [t("hero.trust1"), t("hero.trust2"), t("hero.trust3")]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0066FF] via-[#8B5CF6] to-[#00D9FF]">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* AQUÍ: Padding reducido drásticamente para consistencia (py-12 md:py-16) */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 text-center">
        {/* Main headline with typewriter */}
        {/* mb-6 reducido a mb-4 */}
        <motion.div className="mb-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("hero.title1")}
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF6B35]">
              {displayedText}
            </span>
            <motion.span
              className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-[#FFD700] ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="ml-2">{t("hero.title2").replace("$10,000 ", "")}</span>
          </motion.h1>
        </motion.div>

        {/* Subheadline */}
        {/* mb-10 reducido a mb-8 */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t("hero.subtitle")} <span className="font-bold text-[#00D9FF]">{t("hero.highlight")}</span>.{" "}
          {t("hero.subtitle2")}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-8"
        >
          <Button
            size="lg"
            onClick={() => onOpenContact("hero")}
            className="h-16 px-10 text-lg font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF4545] hover:from-[#FF7B45] hover:to-[#FF5555] text-white shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 rounded-xl"
          >
            <span>{t("hero.cta")}</span>
            <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </motion.div>

        {/* Trust points */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {trustPoints.map((text, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <span className="text-sm md:text-base">{text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating badges */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Zap className="h-6 w-6 text-yellow-400" />
            <div className="text-left text-white">
              <div className="text-2xl font-bold">0.8s</div>
              <div className="text-xs text-white/70">Load time</div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-32 right-10 hidden lg:block">
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <Shield className="h-6 w-6 text-emerald-400" />
            <div className="text-left text-white">
              <div className="text-2xl font-bold">A+</div>
              <div className="text-xs text-white/70">Security Score</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}